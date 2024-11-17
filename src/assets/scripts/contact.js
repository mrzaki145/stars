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

// map
// service-overview
(function () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#map",
        start: "top center",
      },
    })
    .fromTo(
      "#map .map-overlay",
      { scaleY: 1 },
      { scaleY: 0, duration: 2, ease: "expo.out" },
    );
})();
