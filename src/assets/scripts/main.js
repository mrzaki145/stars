gsap.registerPlugin(ScrollTrigger);

// lenis
const lenis = new Lenis({
  lerp: 0.01,
  smoothWheel: false,
});
window.lenis = lenis;

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }
// requestAnimationFrame(raf);

lenis.on("scroll", ScrollTrigger.update);

// preloader
(function () {
  const preloader = document.querySelector("#preloader");
  const preloaderTl = gsap.timeline({
    paused: true,
    onStart: function () {
      lenis.stop();
    },
    onComplete: function () {
      lenis.start();
      gsap.set("#navBarBtnSparkle", { opacity: 1, delay: 0.2 });
      gsap.to("#preloader", { opacity: 0, duration: 1 });
      preloader.classList.add("pointer-events-none");

      singleHeaderTl.play();
    },
  });

  window.onload = function () {
    preloaderTl.play();
  };

  preloaderTl.to("#preloader .bg-overlay", { scale: 3, duration: 2 });
  preloaderTl.to(
    "#preloader img",
    { scale: 1, rotate: 180, opacity: 1, duration: 1, stagger: 0.1 },
    "<",
  );
  preloaderTl.fromTo(
    "#preloader img",
    {
      rotate: 90,
    },
    { rotate: 360, duration: 2, stagger: 0.1 },
    "-=0.95",
  );
  preloaderTl.add(function () {
    preloader.classList.add("bg-opacity-0");
  });
  preloaderTl.to("#preloader .bg-overlay", { scale: 0, duration: 1 });
  preloaderTl.to(
    "#preloader .star-outline",
    { scale: 0, duration: 1, stagger: 0.1 },
    "-=0.8",
  );
  preloaderTl.add(function () {
    try {
      heroTl.play();
    } catch (e) {}
  }, "-=0.5");
  preloaderTl.to(
    "#preloader .star-solid",
    { width: 20, height: 20, duration: 1, stagger: 0.1 },
    "-=0.8",
  );
  preloaderTl.add(function () {
    var rect = document.querySelector("#navBarBtn").getBoundingClientRect();

    gsap.to("#preloader .star-solid", {
      top: rect.top - 8,
      left:
        rect.left -
        8 +
        (document.documentElement.dir == "ltr" ? 0 : rect.width),
      duration: 0.65,
    });
  }, "-=0.4");
})();

// meun
(function () {
  var menu = document.querySelector("#menu");
  var menuNavbar = menu.querySelector(".navbar");
  var links = menu.querySelectorAll("nav li");
  var menuTl = gsap.timeline({ paused: true });

  menuTl.from(menu, {
    duration: 1,
    y: "-100%",
    ease: "expo.inOut",
  });
  menuTl.from(
    menuNavbar,
    {
      duration: 0.5,
      opacity: 0,
      y: "-100%",
      ease: "expo.inOut",
    },
    "-=0.4",
  );
  menuTl.from(
    links,
    {
      duration: 0.6,
      opacity: 0,
      y: 25,
      stagger: 0.1,
    },
    "-=0.2",
  );

  menuTl.reverse();

  function playMenuTL() {
    menuTl.reversed(!menuTl.reversed());
  }

  window.openMenu = function openMenu() {
    lenis.stop();
    menu.classList.add("overflow-y-auto");
    document.body.classList.add("menu-open", "overflow-hidden");

    playMenuTL();
  };

  window.closeMenu = function closeMenu() {
    lenis.start();
    menu.classList.remove("overflow-y-auto");
    document.body.classList.remove("menu-open", "overflow-hidden");

    playMenuTL();
  };
})();

// single header
(function () {
  const singleHeaderTl = gsap.timeline({
    paused: true,
  });

  // singleHeaderTl.from(".navbar", {
  //   y: "-100%",
  //   duration: 1,
  //   ease: "power3.out",
  // });

  singleHeaderTl
    .from([".header__subtitle", ".header__title"], {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.25,
      ease: "power3.out",
    })
    .from(
      ".header__img",
      {
        // y: "25%",
        xPercent: 50,
        // scale: 0,
        // scaleX: 0,
        opacity: 0,
        duration: 1,
      },
      "-=0.75",
    );

  window.singleHeaderTl = singleHeaderTl;
})();

// Images parallax
gsap.utils.toArray(".parallax-wrapper").forEach((container) => {
  const img = container.querySelector(".parallax-img");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      scrub: true,
      pin: false,
    },
  });

  tl.fromTo(
    img,
    {
      yPercent: -20,
      ease: "none",
    },
    {
      yPercent: 20,
      ease: "none",
    },
  );
});

// cta
(function () {
  const cta = gsap.timeline({
    scrollTrigger: {
      trigger: "#cta",
      start: "top 45%",
      // markers: true,
    },
  });

  cta.from("#cta .cta-wrapper", {
    xPercent: -100,
    duration: 2,
    opacity: 0,
  });

  // cta.fromTo(
  //   "#cta .cta-img",
  //   { x: -500, opacity: 0 },
  //   { x: 0, opacity: 1, ease: "expo.out", duration: 2.5 },
  // );
  // cta.fromTo(
  //   "#cta .cta-title",
  //   { opacity: 0, y: 100 },
  //   { opacity: 1, y: 0, ease: "expo.out", duration: 1 },
  //   "-=1.5",
  // );
  // cta.fromTo(
  //   "#cta .cta-feature",
  //   { opacity: 0, y: 20 },
  //   { opacity: 1, y: 0, ease: "expo.out", duration: 1, stagger: 0.15 },
  //   "-=1",
  // );
  // cta.fromTo(
  //   "#cta .cta-link",
  //   { opacity: 0, y: 30 },
  //   { opacity: 1, y: 0, ease: "expo.out", duration: 0.5 },
  //   "-=0.25",
  // );
})();
