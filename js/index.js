const $ = document.querySelector.bind(document);
const navBarContainer = $(".navigation-bar-container");
const phoneNumContainer = $(".phone-number-bar-container");
const navContainer = $(".nav-container-mobile");
const header = $(".header");

window.addEventListener("scroll", function (event) {
  var scroll = this.scrollY;
  if (scroll > 25) {
    header.style.position = "fixed";
    header.style.width = "100%";
    header.style.zIndex = "1";
    navBarContainer.style.margin = "0";
    phoneNumContainer.style.display = "none";
  } else {
    phoneNumContainer.style.display = "inline-block";
    header.style.position = "static";
  }
});

function displayNavBar() {
  getWidth = navContainer.offsetWidth;
  headerWidth = header.offsetWidth;
  console.log(headerWidth);
  console.log(getWidth);
  if (getWidth == 0) {
    navContainer.style.width = "200px";
    navContainer.style.opacity = "1";
  } else {
    navContainer.style.width = "0px";
    navContainer.style.opacity = "0";
  }
}
