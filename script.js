//===================================
//======= Mobile Menu Image =========
//===================================
const menu = document.getElementsByClassName("menu");
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("mouseover", function () {
    this.children[0].children[0].src = "./images/icon-arrow-up.svg";
  });
  menu[i].addEventListener("mouseout", function () {
    this.children[0].children[0].src = "./images/icon-arrow-down.svg";
  });
}

//===================================
//======== Menu Image State =========
//===================================
document.getElementById("menu-img").addEventListener("click", function () {
  let src = this.src;
  if (src.includes("close")) {
    this.src = "./images/icon-menu.svg";
    document.querySelector("header #container").style.display = "none";
    document.getElementById("transparent").style.display = "none";
  } else {
    this.src = "./images/icon-close-menu.svg";
    document.getElementById("transparent").style.display = "block";
    document.querySelector("header #container").style.display = "contents";
  }
});

//===================================
//========= Responsiveness ==========
//===================================
window.addEventListener("resize", function () {
  if (window.innerWidth < 800) {
    document.getElementById("menu-img").src = "./images/icon-menu.svg";
    document.querySelector("header #container").style.display = "none";
    document.getElementById("transparent").style.display = "none";
  } else {
    document.querySelector("header #container").style.display = "contents";
  }
});
