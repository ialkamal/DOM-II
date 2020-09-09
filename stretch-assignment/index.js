let minOrder = 0;
const blocks = document.querySelectorAll(".block");

blocks.forEach((element, i) => {
  element.style.order = `${i}`;
  element.addEventListener("click", (event) => {
    element.style.transition = "all 2s";
    event.target.style.order = `${--minOrder}`;
  });
});

let margin = [];
let timer = 0;
let currentElement = 0;

blocks.forEach((element) => {
  margin.push(10);

  element.addEventListener("mousedown", () => {
    clearInterval(timer);

    currentElement = element;
    currentElement.style.transition = "";

    timer = setInterval(() => {
      element.style.marginLeft = `${++margin[
        Array.from(blocks).indexOf(currentElement)
      ]}px`;
      if (margin[Array.from(blocks).indexOf(currentElement)] > 500)
        clearInterval(timer);
    }, 10);
  });
});

window.addEventListener("mouseup", () => {
  clearInterval(timer);

  timer = setInterval(() => {
    currentElement.style.marginLeft = `${--margin[
      Array.from(blocks).indexOf(currentElement)
    ]}px`;
    if (margin[Array.from(blocks).indexOf(currentElement)] <= 10) {
      clearInterval(timer);
    }
  }, 10);
});
