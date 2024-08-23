$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(this).next(".navbar-nav").slideToggle();
  });

  $(".counter").each(function () {
    const $this = $(this);
    const target = $this.data("target");
    $this.prop("Counter", 0).animate(
      {
        Counter: target,
      },
      {
        duration: 2000,
        easing: "swing",
        step: function (now) {
          $this.text(Math.ceil(now));
        },
      }
    );
  });
  $("#testimonialCarousel").carousel({
    interval: 2000, // Slide every 2000ms (2 seconds)
  });

  // Optional: Pause on hover
  $("#testimonialCarousel").hover(
    function () {
      $(this).carousel("pause");
    },
    function () {
      $(this).carousel("cycle");
    }
  );
});
