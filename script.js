// function loco() {
//           gsap.registerPlugin(ScrollTrigger);
      
      
//           const locoScroll = new LocomotiveScroll({
//               el: document.querySelector("#main"),
//               smooth: true
//           });
//           locoScroll.on("scroll", ScrollTrigger.update);
      
//           ScrollTrigger.scrollerProxy("#main", {
//               scrollTop(value) {
//                   return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//               }, 
//               getBoundingClientRect() {
//                   return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//               },
//               pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
//           });
      
//           ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      
//           ScrollTrigger.refresh();
      
//       }
      
//       loco()

gsap.registerPlugin(ScrollTrigger);

function page1animation(){


gsap.to('.castle1', {
          x: -150, // Animation property
          scrollTrigger: {
            trigger: "#page1",
            start: "top 50",
            end: "+=" + window.innerHeight * 2, // Dynamically adjust the end point
            scrub: 1.2, // Smooth scrubbing
          }
        });
}        
gsap.to('#nav', {
          backgroundColor: 'rgb(49,23,114)',
          color: 'white',
          duration: 0.5,  // Adjust duration to make it faster
          scrollTrigger: {
            trigger: "#page1",
            start: "top top",
            end: "+=" + window.innerHeight * .2,
            scrub: .0000001,
          }
        });
        
gsap.to('#nav button', {
          backgroundColor: 'rgb(49,23,114)',
          color: 'white',
          opacity:1,
          duration: 0.5,  // Adjust duration to make it faster
          scrollTrigger: {
            trigger: "#page1",
            start: "top top",
            end: "+=" + window.innerHeight * .2,
            scrub: .0000001,
          }
        });
        
        
        
gsap.to('.castle2', {
          x: 150, // Animation property
          scrollTrigger: {
            trigger: "#page1",
            start: "top 50",
            end: "+=" + window.innerHeight * 2, // Dynamically adjust the end point
          //   markers: true, // Enable debug markers
            scrub: 1.2, // Smooth scrubbing
          }
        });  
gsap.to('.castle2', {
          x: 150, // Animation property
          scrollTrigger: {
            trigger: "#page1",
            start: "top 50",
            end: "+=" + window.innerHeight * 2, // Dynamically adjust the end point
          //   markers: true, // Enable debug markers
            scrub: 1.2, // Smooth scrubbing
          }
        });  
gsap.to('#mountains', {
          scale: 2.5, // Animation property
          y:-30,
          scrollTrigger: {
            trigger: "#page1",
            start: "top 50",
            end: "+=" + window.innerHeight * 2, // Dynamically adjust the end point
          //   markers: true, // Enable debug markers
            scrub: 1.2, // Smooth scrubbing
          }
        });  
gsap.to('#page1', {
          y:-1200,
          scrollTrigger: {
            trigger: "#page1",
            start: "top top   ",
            end: "+=" + window.innerHeight * 2, // Dynamically adjust the end point
            scrub: 1, // Smooth scrubbing
            marker:true
          }
        });  
        
document.addEventListener("DOMContentLoaded", () => {
  // Select all buttons within the element1 div
  const buttons = document.querySelectorAll(".element1 button");

  // Apply GSAP animation to each button
  gsap.from(buttons, {
    x: -200, // Starting position from the left
    opacity: 0, // Starting with invisible
    stagger: 0.2, // Time delay between animations of each button
    duration: 1, // Animation duration for each button
    ease: "power2.out", // Easing function for a smooth effect
    scrollTrigger: {
      trigger: "#page2",
      start: "top top   ",
      end: "+=" + window.innerHeight * 2, // Dynamically adjust the end point
      // marker:true
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".element2 button");

  gsap.from(buttons, {
    x: 200, 
    opacity: 0, // Starting with invisible
    stagger: 0.2, // Time delay between animations of each button
    duration: 1, // Animation duration for each button
    ease: "power2.out", // Easing function for a smooth effect
    scrollTrigger: {
      trigger: "#page2",
      start: "top top   ",
      end: "+=" + window.innerHeight * 2, // Dynamically adjust the end point
      // marker:true
    }
  });
});



page1animation()