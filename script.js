function page1animation() {

  gsap.to('.castle1', {
    x: -150,
    scrollTrigger: {
      trigger: "#main1",
      start: "top 50",
      end: "+=" + window.innerHeight * 2,
      scrub: 1.2,
    }
  });
}


gsap.to('#logo2', {
opacity:1,
scale:1,
duration: 1.5,
  scrollTrigger: {
    trigger: "#main",
    start: "top top",
    end: "+=" + window.innerHeight * 1,
    scrub: 1,
  }
});
gsap.to('#logo1', {
opacity:0,
scale:0,
duration: 1,
  scrollTrigger: {
    trigger: "#main",
    start: "top top",
    end: "+=" + window.innerHeight * 1,
    scrub: 1,
  }
});

gsap.to('#nav', {
  backgroundColor: 'rgb(49,23,114)',
  color: 'white',
  duration: 0.5,
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
  opacity: 1,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#page1",
    start: "top top",
    end: "+=" + window.innerHeight * .2,
    scrub: .0000001,
  }
});



gsap.to('.castle2', {
  x: 150,
  scrollTrigger: {
    trigger: "#page1",
    start: "top 50",
    end: "+=" + window.innerHeight * 2,
    scrub: 1.2,
  }
});
gsap.to('.castle2', {
  x: 150,
  scrollTrigger: {
    trigger: "#page1",
    start: "top 50",
    end: "+=" + window.innerHeight * 2,
    scrub: 1.2,
  }
});
gsap.to('#mountains', {
  scale: 2.5,
  y: -30,
  scrollTrigger: {
    trigger: "#page1",
    start: "top 50",
    end: "+=" + window.innerHeight * 2,
    scrub: 1.2,
  }
});
gsap.to('#page1', {
  y: -1200,
  scrollTrigger: {
    trigger: "#page1",
    start: "top top   ",
    end: "+=" + window.innerHeight * 2, // D
    scrub: 1,
    marker: true
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".element1 button");

  // Apply GSAP animation to each button
  gsap.from(buttons, {
    x: -200,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#page2",
      start: "top top   ",
      end: "+=" + window.innerHeight * 2,
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".element2 button");

  gsap.from(buttons, {
    x: 200,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#page2",
      start: "top top   ",
      end: "+=" + window.innerHeight * 2,
    }
  });
});



page1animation()