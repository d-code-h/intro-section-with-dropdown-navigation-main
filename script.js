if (window.innerWidth < 700) {
  document.querySelector("#content aside img").src =
    "./images/image-hero-mobile.png";
} else {
  document.querySelector("#content aside img").src =
    "./images/image-hero-desktop.png";
}
const menu = document.getElementsByClassName("menu");
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("mouseover", function () {
    this.children[0].children[0].src = "./images/icon-arrow-up.svg";
  });
  menu[i].addEventListener("mouseout", function () {
    this.children[0].children[0].src = "./images/icon-arrow-down.svg";
  });
}

document.getElementById("menu-img").addEventListener("click", function () {
  let src = this.src;
  if (src.includes("close")) {
    this.src = "./images/icon-menu.svg";
  } else {
    this.src = "./images/icon-close-menu.svg";
  }
});
