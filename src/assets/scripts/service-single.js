// service-article
(function () {
  const serviceTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#service-article",
      start: "top 50%",
      // markers: true,
    },
  });

  serviceTl.fromTo(
    "#service-article .service-img-overlay",
    { scaleY: 1 },
    { scaleY: 0, duration: 2, ease: "expo.out" },
  );
  serviceTl.fromTo(
    "#service-article .service-title",
    {
      y: -20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "expo.out",
    },
    "-=1",
  );
  serviceTl.fromTo(
    "#service-article .service-text p",
    {
      // y: -20,
      opacity: 0,
    },
    {
      // y: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.25,
      ease: "expo.out",
    },
    "-=1",
  );
})();

// service-overview
(function () {
  const serviceOverviewTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#service-overview",
      start: "top 50%",
      // markers: true,
    },
  });

  serviceOverviewTl.fromTo(
    "#service-overview .service-text",
    {
      // y: -20,
      opacity: 0,
    },
    {
      // y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "expo.out",
    },
  );
  serviceOverviewTl.fromTo(
    "#service-overview .service-img-overlay",
    { scaleY: 1 },
    { scaleY: 0, duration: 2, ease: "expo.out" },
    "-=15%",
  );
})();
