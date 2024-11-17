(function () {
  const faqHeaderTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#faq",
      start: "top center",
    },
  });

  faqHeaderTl
    .from("#faq .faq-text > *", {
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
    })
    .from(
      "#faq .faq-img",
      {
        x: -50,
        opacity: 0,
        duration: 1.5,
      },
      "-=80%",
    );
})();

(function () {
  const faqQTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#faq-qs",
      start: "top center",
    },
  });

  faqQTl.from("#faq-qs .hs-accordion-group > *", {
    delay: 0.5,
    y: 50,
    opacity: 0,
    stagger: 0.25,
    duration: 1.5,
  });
})();
