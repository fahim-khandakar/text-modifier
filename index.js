let b = document.querySelector("#b");
let i = document.querySelector("#i");
let u = document.querySelector("#u");
let textLeft = document.querySelector("#text-left");
let textCenter = document.querySelector("#text-center");
let textRight = document.querySelector("#text-right");
let textJustify = document.querySelector("#text-justify");
let number = document.querySelector("#number");
let color = document.querySelector("#color");
let aA = document.querySelector("#aA");
let textArea = document.querySelector("#text-area");

b.addEventListener("click", function () {
  textArea.classList.toggle("font-bold");
});

i.addEventListener("click", function () {
  textArea.classList.toggle("italic");
});

u.addEventListener("click", function () {
  textArea.classList.toggle("underline");
});

textLeft.addEventListener("click", function () {
  textArea.classList.toggle("text-left");
});

textRight.addEventListener("click", function () {
  textArea.classList.toggle("text-right");
});

textCenter.addEventListener("click", function () {
  textArea.classList.toggle("text-center");
});

textJustify.addEventListener("click", function () {
  textArea.classList.toggle("text-justify");
});

number.addEventListener("click", function () {
  let fontSize = number.value;
  textArea.style.fontSize = fontSize + "px";
});

aA.addEventListener("click", function () {
  textArea.classList.toggle("uppercase");
});

color.addEventListener("change", function () {
  let colorValue = color.value;
  textArea.style.color = colorValue;
});
