// window.requestAnimFrame = (function () {
//     return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
//       window.setTimeout(callback, 1000 / 60);
//     };
//   })();
  
//   function Scene() {
//     this.animation = undefined;
//     this.canvas = undefined;
//     this.height = 0;
//     this.width = 0;
//     this.context = undefined;
//     this.paused = false;
//     this.stats = undefined;
//     this.istats = undefined;
//   }
//   Scene.prototype = {
//     constructor: Scene,
//     setup: function (canvas, animation, width, height, stats) {
//       this.canvas = canvas;
//       this.animation = animation;
//       this.height = this.canvas.height = height;
//       this.width = this.canvas.width = width;
//       this.context = this.canvas.getContext('2d');
//       this.stats = stats && window.Stats;
//       if (this.stats) {
//         this.istats = new Stats();
//         this.istats.setMode(0);
//         this.istats.domElement.style.position = 'absolute';
//         this.istats.domElement.style.left = '0px';
//         this.istats.domElement.style.top = '0px';
//         this.istats.domElement.style.zIndex = '99999';
//         document.body.appendChild(this.istats.domElement);
//       }
//     },
//     animate: function () {
//       if (!this.paused) {
//         requestAnimFrame(this.animate.bind(this));
//       }
//       this.stats && (this.istats.begin());
//       this.animation(this); 
//       this.stats && (this.istats.end());
//     }
//   };
  
//   var scene = new Scene(),
//     particles = [],
//     len = 40000,
//     height = 400,
//     width = 2000;
  
//   function Particle() {
//     this.x = 0;
//     this.y = 0;
//     this.size = 0;
//     this.depth = 0;
//     this.vy = 0;
//   }
//   Particle.prototype = {
//     constructor: Particle,
//     update: function (width, height) {
//       if (this.y > height) {
//         this.y = 1 - this.size;
//       }
//       this.y += this.vy;
//     }
//   };
//   for (var i = 0; i < len; i++) {
//     var particle = new Particle();
//     particle.x = Math.random() * width;
//     particle.y = Math.random() * height;
//     particle.depth = Math.random() * 10 | 0;
//     particle.size = (particle.depth + 1) / 8;
//     particle.vy = (particle.depth * .25) + 1 / Math.random();
//     particles.push(particle);
//   }
  
//   function falling_particles() {
//     var idata = this.context.createImageData(this.width, this.height);
//     for (var i = 0, l = particles.length; i < l; i++) {
//       // thanks Loktar ;)
//       var particle = particles[i];
//       for (var w = 0; w < particle.size; w++) {
//         for (var h = 0; h < particle.size; h++) {
//           var pData = (~~(particle.x + w) + (~~(particle.y + h) * this.width)) * 4;
//           idata.data[pData] = 255;
//           idata.data[pData + 1] = 255;
//           idata.data[pData + 2] = 255;
//           idata.data[pData + 3] = 255;
//         }
//       }
//       particle.update(this.width, this.height);
//     }
//     this.context.putImageData(idata, 0, 0);
//   }
//   scene.setup(document.getElementById('canvas'), falling_particles, width, height, !0);
//   scene.animate();
//   window.onresize = function () {
//     height = scene.height = scene.canvas.height = document.body.offsetHeight;
//     width = scene.width = scene.canvas.width = document.body.offsetWidth;
//   };
  

// particlesJS("particles-js", {
//     "particles": {
//       "number": {
//         "value": 80,
//         "density": {
//           "enable": true,
//           "value_area": 800
//         }
//       },
//       "color": {
//         "value": "#ffffff"
//       },
//       "shape": {
//         "type": "circle",
//         "stroke": {
//           "width": 0,
//           "color": "#000000"
//         },
//         "polygon": {
//           "nb_sides": 5
//         }
//       },
//       "opacity": {
//         "value": 0.9,
//         "random": false,
//         "anim": {
//           "enable": false,
//           "speed": 1,
//           "opacity_min": 0.1,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 8,
//         "random": true,
//         "anim": {
//           "enable": false,
//           "speed": 40,
//           "size_min": 0.1,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": true,
//         "distance": 100,
//         "color": "#ffffff",
//         "opacity": 0.9,
//         "width": 3
//       },
//       "move": {
//         "enable": true,
//         "speed": 6,
//         "direction": "none",
//         "random": true,
//         "straight": false,
//         "out_mode": "out",
//         "bounce": false,
//         "attract": {
//           "enable": false,
//           "rotateX": 600,
//           "rotateY": 1200
//         }
//       }
//     },
//     "interactivity": {
//       "detect_on": "canvas",
//       "events": {
//         "onhover": {
//           "enable": true,
//           "mode": "grab"
//         },
//         "onclick": {
//           "enable": true,
//           "mode": "push"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 140,
//           "line_linked": {
//             "opacity": 1
//           }
//         },
//         "bubble": {
//           "distance": 400,
//           "size": 40,
//           "duration": 2,
//           "opacity": 8,
//           "speed": 3
//         },
//         "repulse": {
//           "distance": 200,
//           "duration": 0.4
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true
//   });