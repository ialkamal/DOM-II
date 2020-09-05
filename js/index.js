// Your code goes here
let logo = document.querySelector(".logo-heading");
logo.addEventListener("mouseover", () => {
  logo.style.color === "red"
    ? (logo.style.color = "black")
    : (logo.style.color = "red");
});

let navItems = document.querySelectorAll(".nav-link");
navItems.forEach((el) => {
  el.addEventListener("focus", () => {
    el.style.textTransform === "uppercase"
      ? (el.style.textTransform = "capitalize")
      : (el.style.textTransform = "uppercase");
  });
});

let introImg = document.querySelector(".intro img");
window.addEventListener("scroll", () => {
  introImg.style.borderRadius = `${window.scrollY}px`;
});

let imgContent = document.querySelectorAll(".img-content");
imgContent.forEach((img) => {
  window.addEventListener("load", () => {
    img.style.transform = "rotate(360deg)";
    img.style.transition = "transform 2s";
  });
});

let textH2 = document.querySelectorAll(".text-content h2");
textH2.forEach((el) => {
  window.addEventListener("resize", () => {
    el.style.fontFamily = "serif";
  });
});

let textContent = document.querySelectorAll(".text-content p");
textContent.forEach((el) => {
  window.addEventListener("keypress", () => {
    el.style.fontSize = "2rem";
  });
});

let mainNav = document.querySelector(".main-navigation");
window.addEventListener("wheel", () => {
  mainNav.style.backgroundColor = "lightgray";
});

let footer = document.querySelector(".footer");
let btn1 = document.querySelector(".btn");
btn1.addEventListener("mousemove", () => {
  footer.style.backgroundColor = "lightblue";
});

let btn = document.querySelectorAll(".btn");
btn.forEach((el) => {
  el.addEventListener("dblclick", () => {
    el.style.backgroundColor === "green"
      ? (el.style.backgroundColor = "#17A2B8")
      : (el.style.backgroundColor = "green");
  });
});

//Drag and Drop Events
let dragImg = document.querySelector("#draggable");
dragImg.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text", event.target.id);
});

function dragOverFunction(event) {
  event.preventDefault();
}

function dropFunction(event) {
  event.preventDefault();
  const id = event.dataTransfer.getData("text");
  const draggableElement = document.getElementById(id);
  event.target.appendChild(draggableElement);
  event.dataTransfer.clearData();
}

let dropzone1 = document.querySelector("#dropzone1");
dropzone1.addEventListener("dragover", dragOverFunction);
dropzone1.addEventListener("drop", dropFunction);

let dropzone2 = document.querySelector("#dropzone2");
dropzone2.addEventListener("dragover", dragOverFunction);
dropzone2.addEventListener("drop", dropFunction);

//Nested Events
let destinationP = document.querySelectorAll(".destination p");
destinationP.forEach((el) => {
  el.addEventListener("click", () => {
    el.style.backgroundColor = "hotpink";
  });
});

let destination = document.querySelectorAll(".destination");
destination.forEach((el) => {
  el.addEventListener("click", (event) => {
    event.stopPropagation();
    el.style.backgroundColor = "purple";
  });
});

let contentPick = document.querySelector(".content-pick");
contentPick.addEventListener("click", () => {
  contentPick.style.backgroundColor = "yellow";
});

//Navlink - Prevent Default
let navLink = document.querySelectorAll(".nav-link");
navLink.forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
