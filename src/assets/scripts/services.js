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
      " #intro .text",
      {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=50%",
    );
})();

// service 1
(function () {
  const service1 = document.querySelectorAll(".service-1");

  service1.forEach((service) => {
    const serviceTl = gsap.timeline({
      scrollTrigger: {
        trigger: service,
        start: "top center",
      },
    });

    serviceTl
      .from(service.querySelectorAll(".title, .text > *"), {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
      })
      .from(
        service.querySelectorAll(".img1, .img2"),
        {
          opacity: 1,
          stager: 0.15,
          duration: 1,
        },
        "-=50%",
      );

    gsap.to(service.querySelector(".img1"), {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: service,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(service.querySelector(".img2"), {
      y: 50,
      ease: "none",
      scrollTrigger: {
        trigger: service,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
})();

// service 2
(function () {
  const services = document.querySelectorAll(".service-2");
  console.log(services);

  services.forEach((service) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: service,
          start: "top +25%",
        },
      })
      .from(service, {
        // scale: 0,
        opacity: 0,
        duration: 1,
      })
      .from(service.querySelectorAll(".title, .text > *"), {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
      });
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
