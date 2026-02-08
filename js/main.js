// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav__toggle");
  var navList = document.querySelector(".nav__list");

  if (toggle && navList) {
    toggle.addEventListener("click", function () {
      toggle.classList.toggle("active");
      navList.classList.toggle("active");
    });

    // Close menu when a link is clicked
    navList.querySelectorAll(".nav__link").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.classList.remove("active");
        navList.classList.remove("active");
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
