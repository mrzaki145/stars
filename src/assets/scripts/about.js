(function () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#intro",
        start: "top center",
      },
    })
    .from("#intro .title, #intro .subtitle", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.25,
      ease: "power3.out",
    });
})();

// mission
(function () {
  const missionTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#mission",
      start: "top center",
    },
  });

  missionTl
    .from("#mission .content > *", {
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 1.5,
      ease: "power2.out",
    })
    .from(
      "#mission .img",
      {
        y: -100,
        opacity: 0,
        ease: "power2.out",
        duration: 1,
      },
      "-=75%",
    )
    .from(
      "#mission .mission-box",
      {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=75%",
    );
})();

// vision
(function () {
  const visionTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#vision",
      start: "top center",
    },
  });

  visionTl
    .from("#vision .content > *", {
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 1.5,
      ease: "power2.out",
    })
    .from(
      "#vision .img",
      {
        y: -100,
        opacity: 0,
        ease: "power2.out",
        duration: 1,
      },
      "-=75%",
    )
    .from(
      "#vision .vision-box",
      {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=75%",
    );
})();

// story
(function () {
  const storyTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#story",
      start: "top center",
    },
  });

  storyTl
    .from("#story .title", {
      y: 20,
      opacity: 0,
      duration: 1,
    })
    .from(
      "#story .tabs-content",
      {
        y: 50,
        opacity: 0,
        duration: 1,
      },
      "-=75%",
    )
    .from(
      "#story .tabs > *",
      {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
      },
      "<",
    )
    .from(
      "#story .img",
      {
        x: 100,
        opacity: 0,
        duration: 1,
      },
      "<",
    );
})();

(function () {
  const expertsTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#experts",
      start: "top center",
    },
  });

  expertsTl
    .from("#experts header .title, #experts header p", {
      opacity: 0,
      y: 50,
      stagger: 0.25,
      duration: 1,
    })
    .from(
      "#experts .swiper-wrapper",
      {
        opacity: 0,
        // y: 50,
        duration: 1,
      },
      "-=0.5",
    );
})();

(function () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#statistics",
        start: "top center",
      },
    })
    .from("#statistics .statistics-img", {
      x: "-50%",
      opacity: 0,
      duration: 1,
    })
    .from(
      "#statistics .title",
      {
        x: "50%",
        opacity: 0,
        duration: 1,
      },
      "<",
    );
  gsap.utils.toArray(".statistics-wrapper").forEach((section) => {
    gsap.fromTo(
      section,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "100px bottom",
          end: "+=100",
          // scrub: true,
        },
      },
    );
  });

  gsap.from(".statistics-number", {
    textContent: "0",
    duration: 1,
    ease: "power1.inOut",
    modifiers: {
      textContent: (value) => formatNumber(value, 0),
    },
    scrollTrigger: {
      trigger: ".statistics-wrapper",
      start: "100px 80%",
      end: "+=100",
      // toggleActions: "play none none reverse",
    },
  });

  function formatNumber(value, decimals) {
    let s = (+value).toLocaleString("en-US").split(".");
    return decimals
      ? s[0] + "." + ((s[1] || "") + "00000000").substr(0, decimals)
      : s[0];
  }
})();
