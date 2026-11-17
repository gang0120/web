document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.to('.box_to', {
    x: 200,
    duration: 3,
    delay: 0.5,
    ease: "elastic.out(1,0.3)",
  });

  gsap.from('.box_from', {
    y: 100,
    duration: 5,
    delay: 1,
    ease: "elastic.out(1,0.3)",
    opacity: 0,
  });

  document.getElementById('btn_run').addEventListener('click', () => {
    gsap.to('.dot', {
      x: 400,
      duration: 3,
      delay: 0.2,
      repeat: 1,
      yoyo: true,
      ease: "bounce.out",
    })
  })

  gsap.from('.chips li', {
    y: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: '.chips',
      start: 'top 50%',
      markers: true,
      toggleActions: 'play none none reverse',
    }
  });
});
