document.addEventListener("scroll", () => {
  const header = document.querySelector(".main-header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".service-item").forEach((service) => {
  const img = service.querySelector("img");
  const contentElements = service.querySelectorAll(
    ".service-content h3, .service-content p, .service-content button"
  );

  gsap.fromTo(
    service,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: service,
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    img,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: service,
        start: "top 80%",
      },
    }
  );

  gsap.fromTo(
    contentElements,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.2,
      delay: 0.4,
      scrollTrigger: {
        trigger: service,
        start: "top 80%",
      },
    }
  );
});
