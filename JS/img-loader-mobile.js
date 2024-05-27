// Import GSAP and its plugins
gsap.registerPlugin(ScrollTrigger);

// Define the throttle function to limit the rate of function calls
function throttle(func, limit) {
    let inThrottle = false;
    return function (...args) {
        if (!inThrottle) {
            inThrottle = true;
            func(...args);
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Define the image sequence function to handle animation
function imageSequence(config) {
    let playhead = { frame: config.playhead || 0 },
        canvas = gsap.utils.toArray(config.canvas)[0] || console.warn("canvas not defined"),
        ctx = canvas.getContext("2d"),
        curFrame = -1,
        onUpdate = config.onUpdate,
        images,
        updateImage = throttle(function () {
            let frame = Math.round(playhead.frame);
            if (frame !== curFrame) { // only draw if necessary
                config.clear && ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(images[Math.round(playhead.frame)], 0, 0, canvas.width, canvas.height);
                curFrame = frame;
                onUpdate && onUpdate.call(this, frame, images[frame]);
            }
        }, 16); // Update at most 60 times per second

    canvas.setAttribute('width', 1920); // or the desired width
    canvas.setAttribute('height', 1080);

    images = config.urls.map((url, i) => {
        let img = new Image();
        img.src = url;
        if (i === 0) img.onload = updateImage; // Preload the first image, rest will be loaded on demand
        return img;
    });

    return gsap.to(playhead, {
        frame: images.length - 1,
        ease: "none",
        onUpdate: updateImage,
        duration: images.length / (config.fps || 24),
        paused: !!config.paused,
        scrollTrigger: config.scrollTrigger,
    });
}

let frameCount2 = 1300;
let urls2 = new Array(frameCount2).fill().map((_, i) => `../img/o3-2/${(i + 1).toString().padStart(4, '0')}.jpg`);

// Function to check the existence of an element and run the code
let interval;
function checkAndRun() {
    let d = document.querySelector('.three-renderer');
    if (d === null) {
        interval = setTimeout(checkAndRun, 100); // retry every 100ms
    } else {
        clearInterval(interval);
        if (d === null) return;
        let t = gsap.timeline({
            scrollTrigger: {
                trigger: '.container-video-mobile',
                start: () => `${document.querySelector('.container-video-mobile').offsetHeight - 1300} bottom`,
                end: `bottom bottom`,
                scrub: true,
                update: true,
                refresh: true,
                // markers: true,
            },
        });
        t.to(d, {
            opacity: 0,
            duration: 2.5
        }).to(d, {
            position: 'absolute',
            bottom: 0,
        });
    }
}

// Function to show content after all images are loaded
function showContent() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("container").style.visibility = "visible";
    console.log(document.querySelector(".three-renderer"))
    // document.querySelector(".three-renderer").style.overflow = "auto";
    document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", function () {
    pinScroll(`.main-video-content-mobile`);
    pinScroll(`.main-video-content2-mobile`);
    pinScroll(`.main-video-content3-mobile`);
    checkAndRun();

    // Load all images and track the loading progress using Promises
    let imagePromises = urls2.map((url) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
        window.scrollTo(0, 0);

            document.body.style.overflow = "hidden";
            img.src = url;
            img.onload = resolve;
            img.onerror = reject;
        });
    });

    Promise.all(imagePromises).then(() => {
        showContent(); // Show content after all images are loaded
        document.body.style.overflow = "hidden";
        setTimeout(() => {
            document.body.style.overflow = "auto";
        }, 9000);

        imageSequence({
            urls: urls2.slice(0, 200),
            canvas: "#image-sequence-mobile",
            paused: false,
            playhead: 0,
        });

        imageSequence({
            urls: urls2,
            canvas: "#image-sequence-mobile",
            paused: false,
            playhead: 200,
            scrollTrigger: {
                start: 0,
                end: document.querySelector('.container-video-mobile').offsetHeight,
                scrub: true,
            }
        });
    }).catch((error) => {
        console.error('Error loading images:', error);
    });
});

function pinScroll(element) {
    gsap.to(element, {
        scrollTrigger: {
            trigger: element,
            start: "top 25%",
            end: "+=400 25%",
            pin: element,
            pinSpacing: false,
            scrub: 1,
        },
    });
}