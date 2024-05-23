/* Make sure the video is 'activated' on iOS */

/* ---------------------------------- */
/* Scroll Control! */
// document.addEventListener("DOMContentLoaded", function () {

//   const video = document.querySelector(".video-background");
//   const container = document.querySelector(".container-video");
//   let src = video.currentSrc || video.src;
//   gsap.registerPlugin(ScrollTrigger);
//   once(container, "touchstart", function (e) {
//     video.play();
//     video.pause();
//   });

//   function once(el, event, fn, opts) {
//     var onceFn = function (e) {
//       el.removeEventListener(event, onceFn);
//       fn.apply(this, arguments);
//     };

//     el.addEventListener(event, onceFn, opts);
//     return onceFn;
//   }
//   let tl = gsap.timeline({
//     // defaults: { duration: 40 },
//     scrollTrigger: {
//       trigger: "#container",
//       start: "top top",
//       end: "bottom top",
//       scrub: true,
//       // pin: true,
//       // pinSpacing: false,
//       // markers: true,
//     },
//   });
//   let main = document.getElementById("main-video-content");
//   let main2 = document.getElementById("main-video-content2");
//   let main3 = document.getElementById("main-video-content3");
//   let tl2 = gsap.timeline({
//     // defaults: { duration: 20 },
//     scrollTrigger: {
//       trigger: main,
//       start: "1000px 10%",
//       end: "1000px top",
//       // delay: 10,
//       scrub: 1,

//     },
//   });
//   let tl3 = gsap.timeline({
//     // defaults: { duration: 10 },
//     scrollTrigger: {
//       trigger: main2,
//       start: "1100px 10%",
//       end: "1100px top",
//       // delay: 10,
//       scrub: 0.3,

//     },
//   });
//   let tl4 = gsap.timeline({
//     // defaults: { duration: 20 },
//     scrollTrigger: {
//       trigger: main,
//       start: "2000px 10%",
//       end: "2000px top",
//       // delay: 10,
//       scrub: 1,

//     },
//   });
//   let tl5 = gsap.timeline({
//     // defaults: { duration: 10 },
//     scrollTrigger: {
//       trigger: main2,
//       start: "2200px 10%",
//       end: "2200px top",
//       // delay: 10,
//       scrub: 0.3,


//     },
//   });
//   let tl6 = gsap.timeline({
//     // defaults: { duration: 20 },
//     scrollTrigger: {
//       trigger: main3,
//       start: "3200px 10%",
//       end: "3300px top",
//       // delay: 10,
//       scrub: 1,
//     },
//   });
//   let tl7 = gsap.timeline({
//     // defaults: { duration: 10 },
//     scrollTrigger: {
//       trigger: main3,
//       start: "3800px 10%",
//       end: "3800px top",
//       // delay: 10,
//       scrub: 0.3,
//     },
//   });

//   once(video, "loadeddata", () => {
//     // let setHeight = document.getElementById("container");
//     // setHeight.style.height = Math.floor(video.duration) * 200 + "px";

//     tl.fromTo(
//       video,
//       {
//         currentTime: 0,
//       },
//       {
//         currentTime: video.duration || 1,
//       }
//     );

//     tl2.fromTo(
//       ".section-1-o3",
//       {
//         y: 810,
//         duration: 2,
//         ease: "power2.inOut",
//         autoAlpha: 1,

//       },
//       {
//         y: 0,
//       }
//     );
//     tl3.to(".section-1-o3", {
//       y: -810,
//       duration: 1,
//       ease: "power2.inOut",
//       autoAlpha: 0,

//     })
//     tl4.fromTo(
//       ".section-2-o3",
//       {
//         y: 380,
//         duration: 2,
//         ease: "power2.inOut",
//         autoAlpha: 1,
//       },
//       {
//         y: 0,
//       }
//     );
//     tl5.to(".section-2-o3", {
//       y: -380,
//       duration: 1,

//       ease: "power2.inOut",
//       autoAlpha: 0,

//     })
//     tl6.fromTo(
//       ".section-3-o3",
//       {
//         y: 820,
//         duration: 2,
//         ease: "power2.inOut",
//         autoAlpha: 1,

//       },
//       {
//         y: 0,
//       }
//     );
//     tl7.to(".section-3-o3", {
//       y: -820,
//       duration: 1,


//       ease: "power2.inOut",
//       autoAlpha: 0,

//     })

  //   /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
  //   setTimeout(function () {

  //     if (window["fetch"]) {
  //       fetch(src)
  //         .then((response) => response.blob())
  //         .then((response) => {
  //           var blobURL = URL.createObjectURL(response);

  //           var t = video.currentTime;
  //           // once(container, "touchstart", function (e) {
  //           //   video.play();
  //           //   video.pause();
  //           // });

  //           // video.setAttribute("src", blobURL);
  //           // video.currentTime = t + 0.01;
  //         });
  //     }
  //   }, 1000);
  // });

// });


function once(el, event, fn, opts) {
  var onceFn = function (e) {
    el.removeEventListener(event, onceFn);
    fn.apply(this, arguments);
  };

  el.addEventListener(event, onceFn, opts);
  return onceFn;
}
document.addEventListener("DOMContentLoaded", function () {

  const video = document.querySelector(".video-background");
  const container = document.querySelector(".container-video-scroll");
  let src = video.currentSrc || video.src;
  gsap.registerPlugin(ScrollTrigger);
  once(container, "touchstart", function (e) {
    video.play();
    video.pause();
  });

  
  let tl = gsap.timeline({
    // defaults: { duration: 40 },
    scrollTrigger: {
      trigger: "#container",
      start: "top top",
      end: "bottom top",
      scrub: true,
      // pin: true,
      // pinSpacing: false,
      // markers: true,
    },
  });
  let main = document.getElementById("main-video-content");
  let tl2 = gsap.timeline({
    // defaults: { duration: 20 },
    scrollTrigger: {
      trigger: '#container',
      start: "1000px 10%",
      end: "1000px top",
      // delay: 10,
      scrub: 1,


    },
  });
  let tl3 = gsap.timeline({
    // defaults: { duration: 10 },
    scrollTrigger: {
      trigger: '#container',
      start: "1600px 10%",
      end: "top top",
      // delay: 10,
      scrub: 1,

      // markers: {
      //   color: "#000",
      //   width: 2,
      //   height: 2,
      //   duration: 1,
      // }

    },
  });
  let tl4 = gsap.timeline({
    // defaults: { duration: 20 },
    scrollTrigger: {
      trigger: "#container",
      start: "2000px 10%",
      end: "2000px top",
      // delay: 10,
      scrub: 1,

    },
  });
  let tl5 = gsap.timeline({
    // defaults: { duration: 10 },
    scrollTrigger: {
      trigger: "#container",
      start: "3000px 10%",
      end: "top top",
      // delay: 10,
      scrub: 1,


    },
  });
  let tl6 = gsap.timeline({
    // defaults: { duration: 20 },
    scrollTrigger: {
      trigger: '#container',
      start: "3600px 10%",
      end: "3700px top",
      // delay: 10,
      scrub: 1.5,

      // markers: {
      //   color: "#000",
      //   width: 2,
      //   height: 2,
      //   duration: 1,
      // }
    },
  });
  let tl7 = gsap.timeline({
    // defaults: { duration: 10 },
    scrollTrigger: {
      trigger: '#container',
      start: "4400px 10%",
      end: "top top",
      // delay: 10,
      scrub: 1,
      // markers: {
      //   color: "#000",
      //   width: 2,
      //   height: 2,
      //   duration: 1,
      // }
    },
  });

  once(video, "loadeddata", () => {
    // let setHeight = document.getElementById("container");
    // setHeight.style.height = Math.floor(video.duration) * 200 + "px";

    tl.fromTo(
      video,
      {
        currentTime: 0,
      },
      {
        currentTime: video.duration || 1,
      }
    );

    tl2.fromTo(
      ".section-1-o3",
      {
        y: 810,
        ease: "power2.inOut",
        display: "flex",
      },
      {
        y: 0,
      }
    );
    tl3.to(
      ".section-1-o3",
      {
        y: -810,
        ease: "power2.inOut",
        display: "none",
      },
    );

    tl4.fromTo(
      ".section-2-o3",
      {
        y: 380,
        ease: "power2.inOut",
        display: "block",
      },
      {
        y: 0,
      }
    );
    tl5.to(".section-2-o3", {
      y: -380,
      ease: "power2.inOut",
      display: "none",


    })
    tl6.fromTo(
      ".section-3-o3",
      {
        y: 820,
        ease: "power2.inOut",
        display: "block",
      },
      {
        y: 0,
      }
    );
    tl7.to(".section-3-o3", {
      y: -820,
      ease: "power2.inOut",
      display: "none",

    })

    /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */

  });
  window.scrollTo(0, 0);
});
 