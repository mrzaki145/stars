(function () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#intro",
        start: "top center",
      },
    })
    .from("#intro .img", {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
    .from(
      " #intro .text > *",
      {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      },
      "-=50%",
    );
})();

(function () {
  const teamTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#team",
      start: "top center",
    },
  });

  teamTl
    .from("#team .team-header > *", {
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 1.5,
    })
    .from(
      "#team .swiper-slide",
      {
        scale: 0,
        stagger: 0.15,
        duarton: 1,
      },
      "-=75%",
    );
})();

(function () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#service-overview",
        start: "top center",
      },
    })
    .from("#service-overview .wrapper > *", {
      y: 50,
      opacity: 0,
      stagger: 0.25,
      duration: 1.5,
      ease: "power3.out",
    });
})();

// service-3
(function () {
  const services = document.querySelectorAll(".service-3");

  services.forEach((service) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: service,
          start: "top 25%",
        },
      })
      .from(service.querySelectorAll(".title, .text"), {
        y: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
      })
      .fromTo(
        service.querySelector(".service-img-overlay"),
        { scaleY: 1 },
        { scaleY: 0, duration: 1, ease: "expo.out" },
        "-=50%",
      );
  });
})();
