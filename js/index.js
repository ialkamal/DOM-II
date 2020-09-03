// Your code goes here
let logo = document.querySelector(".logo-heading");
logo.addEventListener("mouseover", (event) => {
  event.stopPropagation();
  logo.style.color === "red"
    ? (logo.style.color = "black")
    : (logo.style.color = "red");
});

let navItems = document.querySelectorAll(".nav-link");
navItems.forEach((el) => {
  el.addEventListener("focus", (event) => {
    event.stopPropagation();
    el.style.textTransform === "uppercase"
      ? (el.style.textTransform = "capitalize")
      : (el.style.textTransform = "uppercase");
  });
});

let introImg = document.querySelector(".intro img");
window.addEventListener("scroll", (event) => {
  event.stopPropagation();
  introImg.style.borderRadius = `${window.scrollY}px`;
});

let imgContent = document.querySelectorAll(".img-content");
imgContent.forEach((img) => {
  window.addEventListener("load", (event) => {
    event.stopPropagation();
    img.style.transform = "rotate(360deg)";
    img.style.transition = "transform 2s";
  });
});

let textH2 = document.querySelectorAll(".text-content h2");
textH2.forEach((el) => {
  window.addEventListener("resize", (event) => {
    event.stopPropagation();
    el.style.fontFamily = "serif";
  });
});

let textContent = document.querySelectorAll(".text-content p");
textContent.forEach((el) => {
  window.addEventListener("keypress", (event) => {
    event.stopPropagation();
    el.style.fontSize = "2rem";
  });
});

let mainNav = document.querySelector(".main-navigation");
window.addEventListener("wheel", (event) => {
  event.stopPropagation();
  mainNav.style.backgroundColor = "lightgray";
});

let footer = document.querySelector(".footer");
let btn1 = document.querySelector(".btn");
btn1.addEventListener("mousemove", (event) => {
  event.stopPropagation();
  footer.style.backgroundColor = "lightblue";
});

let btn = document.querySelectorAll(".btn");
btn.forEach((el) => {
  el.addEventListener("dblclick", (event) => {
    event.stopPropagation();
    el.style.backgroundColor === "green"
      ? (el.style.backgroundColor = "#17A2B8")
      : (el.style.backgroundColor = "green");
  });
});
