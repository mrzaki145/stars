(function () {
  const introTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#intro",
      start: "top center",
    },
  });

  introTl
    .from("#intro .img1, #intro .img2", {
      scale: 0,
      duration: 1,
      stagger: 0.15,
    })
    .from(
      "#intro .text > *",
      {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duraton: 1.5,
      },
      "-=50%",
    );
})();

(function () {
  const customers = document.querySelectorAll("#customers .client");

  customers.forEach((client) => {
    const clientTl = gsap.timeline({
      scrollTrigger: {
        start: "top 25%",
        trigger: client,
      },
    });

    clientTl.from(client.querySelector(".client__img"), {
      scale: 0,
      rotate: 25,
      opacity: 0,
      duraton: 1,
    });
    // .from(
    //   client.querySelector(".client__text"),
    //   {
    //     opacity: 0,
    //     duraton: 1,
    //   },

    //   "-=85%",
    // );
  });
})();
