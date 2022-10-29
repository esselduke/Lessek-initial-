document.querySelector(".toTheTop").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
}),
  window.addEventListener("scroll", function () {
    (document.querySelector(".toTheTop").style.opacity = "0.5"),
      setTimeout(() => {
        document.querySelector(".toTheTop").style.opacity = "1";
      }, 200),
      this.scrollY > 100
        ? document.querySelector(".toTheTop").classList.add("displayNone")
        : document.querySelector(".toTheTop").classList.remove("displayNone");
  }),
  document.querySelector(".hamburger").addEventListener("click", function (e) {
    document.querySelector(".sideMenu").classList.toggle("sideMenuSlide");
  }),
  document.querySelector(".faHamburger").addEventListener("click", function () {
    document.querySelector(".sideMenu").classList.toggle("sideMenuSlide");
  });
var li = document.querySelectorAll(".navItemsMenuSlide").length;
for (i = 0; i < li; i++)
  document
    .querySelectorAll(".navItemsMenuSlide")
    [i].addEventListener("click", function () {
      document.querySelector(".sideMenu").classList.remove("sideMenuSlide");
    });
document.querySelector(".buttonDiv button").addEventListener("click", (e) => {
  window.location.href = "about.html";
});
