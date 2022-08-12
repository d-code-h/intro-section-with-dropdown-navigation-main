const menu = document.getElementsByClassName("menu");
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("mouseover", function () {
    this.children[0].children[0].src = "./images/icon-arrow-up.svg";
  });
  menu[i].addEventListener("mouseout", function () {
    this.children[0].children[0].src = "./images/icon-arrow-down.svg";
  });
}
