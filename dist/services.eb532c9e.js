$(document).ready(function() {
    var $slider = $(".slider");
    var $progressBars = $(".carousel-progress .progress");
    var $textItems = $(".carousel-text p");
    var slickOptions = {
        centerMode: true,
        centerPadding: "10%",
        slidesToShow: 1,
        arrows: false,
        focusOnSelect: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: "50px"
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: "30px"
                }
            }
        ]
    };
    $slider.on("init reInit afterChange", function(event, slick, currentSlide, nextSlide) {
        $progressBars.removeClass("active");
        $progressBars.eq(currentSlide).addClass("active");
        $textItems.removeClass("active-text");
        $textItems.eq(currentSlide).addClass("active-text");
    });
    $slider.slick(slickOptions);
    // Trigger afterChange event immediately after slider initialization
    $slider.slick("slickGoTo", 0);
    // Pinned the first page
    const tlpin = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-section",
            start: "0%",
            end: "100%",
            pin: true,
            pinSpacing: false
        }
    });
    const tlpin2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-section-mb",
            start: "0%",
            end: "100%",
            pin: true,
            pinSpacing: false
        }
    });
    var $carousel = $(".carousel");
    var $progressUpdate = $(".carousel-progres .progres");
    $carousel.on("afterChange", function(event, slick, currentSlide) {
        $progressUpdate.removeClass("active");
        $progressUpdate.eq(currentSlide).addClass("active");
    });
    $carousel.slick({
        centerMode: true,
        centerPadding: "16px",
        slidesToShow: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "16px",
                    slidesToShow: 1
                }
            }
        ]
    });
    // Pop Up container
    const plusIcon1 = document.getElementById("plusIcon1");
    const plusIcon2 = document.getElementById("plusIcon2");
    const plusIcon3 = document.getElementById("plusIcon3");
    const popupContainer1 = document.getElementById("popupContainer1");
    const popupContainer2 = document.getElementById("popupContainer2");
    const popupContainer3 = document.getElementById("popupContainer3");
    const closePopup1 = document.getElementById("closePopup1");
    const closePopup2 = document.getElementById("closePopup2");
    const closePopup3 = document.getElementById("closePopup3");
    plusIcon1.addEventListener("click", function() {
        popupContainer1.style.display = "block";
    });
    plusIcon2.addEventListener("click", function() {
        popupContainer2.style.display = "block";
    });
    plusIcon3.addEventListener("click", function() {
        popupContainer3.style.display = "block";
    });
    closePopup1.addEventListener("click", function() {
        popupContainer1.style.display = "none";
    });
    closePopup2.addEventListener("click", function() {
        popupContainer2.style.display = "none";
    });
    closePopup3.addEventListener("click", function() {
        popupContainer3.style.display = "none";
    });
});
// Services Accordion Section
const accordionItems = document.querySelectorAll(".accordion-item");
accordionItems.forEach((item)=>{
    const question = item.querySelector(".accordion-question");
    const answer = item.querySelector(".accordion-answer");
    const plusIcon = question.querySelector(".plus-icon");
    const minusIcon = question.querySelector(".minus-icon");
    question.addEventListener("click", function() {
        const isOpen = answer.classList.contains("show");
        // Close all answers
        closeAllAnswers();
        // Open this answer if it wasn't already open
        if (!isOpen) {
            answer.classList.add("show");
            plusIcon.classList.add("hidden");
            minusIcon.classList.remove("hidden");
        }
    });
    // Initially, only show the plus icon
    plusIcon.classList.remove("hidden");
});
function closeAllAnswers() {
    const allAnswers = document.querySelectorAll(".accordion-answer");
    const allPlusIcons = document.querySelectorAll(".plus-icon");
    const allMinusIcons = document.querySelectorAll(".minus-icon");
    allAnswers.forEach((answer)=>{
        answer.classList.remove("show");
    });
    allPlusIcons.forEach((plusIcon)=>{
        plusIcon.classList.remove("hidden");
    });
    allMinusIcons.forEach((minusIcon)=>{
        minusIcon.classList.add("hidden");
    });
}
// Smooth Scroll Bar
// let Scrollbar = window.Scrollbar;
// Scrollbar.init(document.querySelector(".smooth-scroll-bar"));
// Bank Content Section Animation UBL Case Study
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) entry.target.classList.add("bank-show");
    // else {
    //   entry.target.classList.remove("bank-show");
    // }
    });
}, {
    threshold: 0.4
});
const hiddenElements = document.querySelectorAll(".bank-hidden");
hiddenElements.forEach((el)=>observer.observe(el));
// Image Scale on scroll
const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const imgWrapper = entry.target;
            const animateImg = imgWrapper.querySelector(".animate-img-wrapper");
            const leftPart = imgWrapper.querySelector(".img-anime-left-part");
            const rightPart = imgWrapper.querySelector(".img-anime-right-part");
            // Smoothly transition width and opacity
            leftPart.style.transition = "width 1s ease";
            rightPart.style.transition = "width 1s ease";
            animateImg.style.transition = "opacity 1s ease";
            // Animate width and opacity
            leftPart.style.width = "0";
            rightPart.style.width = "0";
            animateImg.style.opacity = "1";
        }
    });
}, {
    threshold: 0.5
});
const imgObserver = document.querySelectorAll(".img-anime-wrapper");
imgObserver.forEach((el)=>observer2.observe(el));
// Image Scroll Bottom Animation
const observer4 = new IntersectionObserver((entries)=>{
    let delay = 0;
    entries.forEach((entry)=>{
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            setTimeout(()=>{
                entry.target.classList.add("scroll-bottom-anime-active");
            }, delay);
            delay += 200;
        }
    // else {
    //   entry.target.classList.remove("scroll-bottom-anime-active");
    // }
    });
}, {
    threshold: 0.4
});
const imgObserver2 = document.querySelectorAll(".scroll-bottom-anime");
imgObserver2.forEach((el)=>observer4.observe(el));
// Video Play on Scroll
const observer3 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) entry.target.play(); // Play the video when it intersects with the viewport
        else entry.target.pause(); // Pause the video when it's not visible
    });
}, {
    threshold: 0.6
});
const videoElement = document.querySelector(".video-play");
// observer3.observe(videoElement);
// Text Display Animation
const heroSection2 = document.querySelector(".hero-section2");
const tl = gsap.timeline({
    defaults: {
        duration: 0.75,
        ease: "power4.out"
    },
    scrollTrigger: {
        trigger: heroSection2,
        start: "top 65%",
        end: "bottom 50%",
        scrub: false
    }
});
tl.fromTo(".cta1", {
    y: "100%",
    opacity: 0.5
}, {
    y: 0,
    opacity: 1
}, "<20%");
tl.fromTo(".cta2", {
    y: "100%",
    opacity: 0.5
}, {
    y: 0,
    opacity: 1
}, "<20%");
tl.fromTo(".cta3", {
    y: "100%",
    opacity: 0.5
}, {
    y: 0,
    opacity: 1
}, "<20%");
tl.fromTo(".cta4", {
    y: "100%",
    opacity: 0.5
}, {
    y: 0,
    opacity: 1
}, "<20%");
tl.fromTo(".cta5", {
    y: "100%",
    opacity: 0.5
}, {
    y: 0,
    opacity: 1
}, "<20%");
tl.fromTo(".cta6", {
    y: "100%",
    opacity: 0.5
}, {
    y: 0,
    opacity: 1
}, "<20%");
tl.fromTo(".cta-btn", {
    y: 20,
    opacity: 0
}, {
    y: 0,
    opacity: 1
}, "<");

//# sourceMappingURL=services.eb532c9e.js.map
