// hero
let heroTl;
(function () {
  let mm = gsap.matchMedia();

  mm.add("(min-width: 800px)", () => {
    heroTl = gsap.timeline({
      // delay: 0.25,
      paused: true,
      // scrollTrigger: {
      // trigger: "#hero",
      // start: "top 5%",
      // end: "bottom +50%",
      // scrub: 1,
      // pin: true,
      // },
    });

    heroTl.from(".hero-img-1", {
      duration: 1.25,
      ease: "power3.inOut",
      x: 300,
    });
    heroTl.from(
      ".hero-text",
      { duration: 1.25, ease: "power3.inOut", opacity: 0 },
      "<",
    );
    heroTl.from(
      ".hero-img-2",
      { duration: 1.25, ease: "power3.inOut", x: -300 },
      "<",
    );
  });

  // mm.add("(max-width: 799px)", () => {
  //   const heroTl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#hero",
  //       start: "top top",
  //       end: "bottom +50%",
  //       delay: 8,
  //     },
  //   });

  //   heroTl.from(".hero-text ");
  // });
})();

// clients
(function () {
  const clients = gsap.timeline({
    scrollTrigger: {
      trigger: "#clients",
      start: "top 50%",
    },
  });

  clients.fromTo(
    "#clients .title",
    { y: -50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.5, ease: "expo.out" },
  );
  clients.fromTo(
    "#clients img",
    {
      y: -20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      ease: "expo.out",
    },
    "-=1",
  );
})();

// about
(function () {
  const aboutTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "top 35%",
    },
  });

  aboutTl.fromTo(
    "#about .about-img",
    {
      // x: 100,
      opacity: 0,
      scale: 0.8,
      rotate: 15,
    },
    {
      // x: 0,
      rotate: 0,
      scale: 1,
      opacity: 1,
      duration: 1,
    },
  );

  aboutTl.fromTo(
    "#about .about-title, #about .about-desc",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.25,
      ease: "expo.out",
    },
    "-=0.5",
  );

  aboutTl.fromTo(
    "#about .about-feature",
    {
      // y: 50,
      opacity: 0,
    },
    {
      // y: 0,
      opacity: 1,
      duration: 0.75,
      stagger: 0.15,
    },
    "-=0.1",
  );
})();

// services
(function () {
  const servicesTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#services",
      start: "top 25%",
    },
  });

  servicesTl.fromTo(
    "#services .services-title",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "expo.out",
    },
  );

  servicesTl.fromTo(
    "#services .services-swiper .swiper-slide",
    {
      x: 50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "expo.out",
    },
    "-=0.5",
  );

  servicesTl.fromTo(
    "#services .services-swiper",
    {
      yPercent: 50,
      opacity: 0,
    },
    {
      yPercent: 0,
      opacity: 1,
      duration: 1,
      ease: "expo.out",
    },
    "-=0.5",
  );
})();

// features
(function () {
  const featuresTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#features",
      start: "top 35%",
    },
  });

  featuresTl.fromTo(
    "#features",
    {
      // x: 100,
      opacity: 0,
      scaleX: 0,
    },
    {
      scaleX: 1,
      opacity: 1,
      duration: 1,
      ease: "expo.out",
    },
  );

  featuresTl.fromTo(
    "#features .features-title, #features .features-desc",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.25,
      ease: "expo.out",
    },
    "-=0.5",
  );

  featuresTl.fromTo(
    "#features .features-item",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.75,
      stagger: 0.15,
      ease: "expo.out",
    },
    "-=0.1",
  );
})();

// contact
(function () {
  const contactTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact",
      start: "top center",
    },
  });

  contactTl
    .from("#contact .title", {
      y: 50,
      opacity: 0,
      duration: 1,
    })
    .from("#contact .contact-info", {
      scaleY: 0,
      opacity: 0,
      duration: 0.75,
    })
    .addLabel("info")
    // .from("#contact .contact-info .content", {
    //   opacity: 0,
    //   duration: 0.5,
    // })
    .from("#contact .contact-info .content > *", {
      y: 20,
      stagger: 0.15,
      opacity: 0,
      duration: 0.5,
    })
    .from(
      "#contact .contact-form",
      {
        scaleY: 0,
        opacity: 0,
        duration: 0.75,
      },
      "info",
    )
    // .from("#contact .contact-form .content", {
    //   opacity: 0,
    //   duration: 0.5,
    // })
    .from("#contact .contact-form .content > *", {
      y: 20,
      stagger: 0.15,
      opacity: 0,
      duration: 0.5,
    });
})();
