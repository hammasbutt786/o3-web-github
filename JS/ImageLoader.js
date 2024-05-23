// import imagess from "./image-import";
gsap.registerPlugin(ScrollTrigger);
// urls = new Array(frameCount).fill().map((_, i) => `src/jj/render 1_0${(i+1).toString().padStart(4, '0')}.png`);
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
    canvas.setAttribute('height', 1080)
    images = config.urls.map((url, i) => {
        let img = new Image();
        img.src = url;

        // Preload the first image, rest will be loaded on demand
        i === 0 && (img.onload = updateImage);
        return img;
    });

    return gsap.to(playhead, {
        frame: images.length - 1,
        ease: "none",
        onUpdate: updateImage,
        // duration: (images.length / (config.fps || 30)) * 2, // Double the duration to slow down
        duration: images.length / (config.fps || 24),
        paused: !!config.paused,
        scrollTrigger: config.scrollTrigger,
    });


}

let g = true
let frameCount = 200
let frameCount2 = 1300
// const imageFiles = Object.keys(Images);
// let urls = imageFiles.map((file, index) => {
//     return `${Images}/${file}`;
//   });
// let urls2 = [...imagess]
// let urls2 = new Array(frameCount2).fill().map((_, i) => `${Images[`Images${i}`]}`);
// let urls= new Array(frameCount2).fill().map((_, i) => `${Images[`Images${i}`]}`);
// let urls2 = new Array(frameCount2).fill().map((_, i) => `${Images[`Images${i}`]}`);
// let urls= new Array(frameCount2).fill().map((_, i) => `${Images[`Images${i}`]}`);
let urls2 = new Array(frameCount2).fill().map((_, i) => `../img/o3-2/${(i + 1).toString().padStart(4, '0')}.jpg`);

let urls2value = urls2.slice(180)
console.log({ urls2 })

let interval;
function checkAndRun() {
    let d = document.querySelector('.three-renderer');
    // console.log({ d })
    if (d === null) {
        interval = setTimeout(checkAndRun, 100); // retry every 100ms
    } else {
        clearInterval(interval);
        // if (d === null) return
        // window.scrollTo(0, 0);
        // let t = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: '.container-video',
        //         start: () => `${document.querySelector('.container-video').offsetHeight - 1300} bottom`,
        //         end: `bottom bottom`,
        //         scrub: true,
        //         update: true,
        //         refresh: true,
        //         // markers: true,
        //     },
        // })
        // t.to(d, {

        //     opacity: 0,
        //     duration: 2.5
        // }).to(d, {
        //     position: 'absolute',
        //     bottom: 0,
        // })

        // gsap.to('.main-video-content', {
        //     // x: 2000,
        //     scrollTrigger: {
        //         trigger: '.main-video-content',
        //         start: "top 25%",
        //         end: "+=400 25%",
        //         pin: '.main-video-content',
        //         pinSpacing: false,
        //         scrub: 1,
        //     },
        // })
        // gsap.to('.main-video-content2', {
        //     // x: 2000,
        //     scrollTrigger: {
        //         trigger: '.main-video-content2',
        //         start: "top 25%",
        //         end: "+=400 25%",
        //         pin: '.main-video-content2',
        //         pinSpacing: false,
        //         scrub: 1,
        //     },
        // })
        // gsap.to('.main-video-content3', {
        //     // x: 2000,
        //     scrollTrigger: {
        //         trigger: '.main-video-content3',
        //         start: "top 25%",
        //         end: "+=400 25%",
        //         pin: '.main-video-content3',
        //         pinSpacing: false,
        //         scrub: 1,
        //     },
        // })


        // scrollTotrig('.main-video-content', {
        //     start: "clamp(20px 90%)",
        //     end: "20px 60%",
        // }, {
        //     start: "400px 60%",
        //     end: "400px 30%",
        // })
        // scrollTotrig('.main-video-content2', {
        //     start: "1200px 90%",
        //     end: "1200px 60%",
        // }, {
        //     start: "1800px 60%",
        //     end: "1800px 30%",
        // },
        // )
        // scrollTotrig('.main-video-content3', {
        //     start: "2500px 90%",
        //     end: "2500px 60%",
        // }, {
        //     start: "3200px 60%",
        //     end: "3200px 30%",
        // },
        // )
        // your code here
    }
}
document.addEventListener("DOMContentLoaded", function () {

    pinScroll(`.main-video-content`,)
    pinScroll(`.main-video-content2`,)
    pinScroll(`.main-video-content3`,)
    checkAndRun();
})

function pinScroll(element) {
    gsap.to(element, {
        // x: 2000,
        scrollTrigger: {
            trigger: element,
            start: "top 25%",
            end: "+=400 25%",
            pin: element,
            pinSpacing: false,
            scrub: 1,
        },
    })
}

// function scrollTotrig(element, option1, option2) {
//     let h = gsap.timeline({
//         scrollTrigger: {
//             trigger: element,
//             ...option1,
//             scrub: true,
//             // markers: {
//             //     startColor: "blue", // add a green marker at the start position
//             //     endColor: "orange", // add a red marker at the end position
//             //     fontSize: "14px" // adjust the font size to your liking
//             // }, // for debugging, can be removed
//             onEnter: () => {
//                 gsap.to(element, { paused: true });
//             },
//         },
//     });
//     h.fromTo(element, {
//         y: 1500, // Example of the animation you want
//         duration: 10 // Example duration of the animation
//     },
//         {
//             y: 0, // Example of the animation you want
//             duration: 10 // Example duration of the animation
//         })
//     let h2 = gsap.timeline({
//         scrollTrigger: {
//             trigger: element,
//             ...option2,
//             scrub: true,
//             // markers: true, // for debugging, can be removed
//             onEnter: () => {
//                 gsap.to(element, { paused: false });
//             },
//         },
//     });
//     h2.to(element, {
//         y: -1500, // Example of the animation you want
//         duration: 10 // Example duration of the animation
//     });
// }

const firstImage = new Image();
// firstImage.src = urls2[0];
let loadedImages = 0;
let totalImages = urls2.length;

firstImage.src = urls2[0];
urls2.forEach(function (image) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', image, true);
    xhr.onload = function () {
        loadedImages++;
        if (loadedImages === totalImages) {
            // Hide the loader
            // console.log('object')
            setTimeout(() => {
                document.getElementById("loader").style.display = "none";
            }, 200)
            window.scrollTo(0, 0);
            // const images = document.querySelectorAll('img');

            // Loop through images and check their network requests

            document.body.style.overflow = "hidden";
            setTimeout(() => {
                document.body.style.overflow = "auto";
            }, 9000);
            // Start the animation after preloading the first image
            if (g) {
                imageSequence({
                    urls: urls2.slice(0, 200),
                    canvas: "#image-sequence",
                    paused: false,
                    playhead: 0,
                });
            }

            imageSequence({
                urls: urls2,
                canvas: "#image-sequence",
                paused: false,
                playhead: 200,

                //clear: true, // Enable if your images have transparency
                scrollTrigger: {
                    start: 0,   // start at the very top
                    end: document.querySelector('.container-video').offsetHeight, // entire page
                    scrub: true, // important!
                }
            });
        }
    };
    xhr.send();
});

// firstImage.onload = () => {
//     window.scrollTo(0, 0);
//     // const images = document.querySelectorAll('img');

//     // Loop through images and check their network requests

//     document.body.style.overflow = "hidden";
//     setTimeout(() => {
//         document.body.style.overflow = "auto";
//     }, 9000);
//     // Start the animation after preloading the first image
//     if (g) {
//         imageSequence({
//             urls: urls2.slice(0, 200),
//             canvas: "#image-sequence",
//             paused: false,
//             playhead: 0,
//         });
//     }

//     imageSequence({
//         urls: urls2,
//         canvas: "#image-sequence",
//         paused: false,
//         playhead: 200,

//         //clear: true, // Enable if your images have transparency
//         scrollTrigger: {
//             start: 0,   // start at the very top
//             end: document.querySelector('.container-video').offsetHeight, // entire page
//             scrub: true, // important!
//         }
//     });
//     // imageSequence({
//     //     urls: urls2,
//     //     canvas: "#image-sequence",
//     //     paused: false,
//     //     playhead: 0,

//     //     //clear: true, // Enable if your images have transparency
//     //     scrollTrigger: {
//     //         start: 0,   // start at the very top
//     //         end: document.querySelector('.container-video').offsetHeight, // entire page
//     //         scrub: true, // important!
//     //     }
//     // });

// };

