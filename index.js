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
  b.classList.toggle("text-sky-500");
});

i.addEventListener("click", function () {
  textArea.classList.toggle("italic");
  i.classList.toggle("text-sky-500");
});

u.addEventListener("click", function () {
  textArea.classList.toggle("underline");
  u.classList.toggle("text-sky-500");
});

textLeft.addEventListener("click", function () {
  textArea.classList.toggle("text-left");
  textLeft.classList.toggle("text-sky-500");
});

textRight.addEventListener("click", function () {
  textArea.classList.toggle("text-right");
  textRight.classList.toggle("text-sky-500");
});

textCenter.addEventListener("click", function () {
  textArea.classList.toggle("text-center");
  textCenter.classList.toggle("text-sky-500");
});

textJustify.addEventListener("click", function () {
  textArea.classList.toggle("text-justify");
  textJustify.classList.toggle("text-sky-500");
});

number.addEventListener("change", function () {
  let fontSize = number.value;
  textArea.style.fontSize = fontSize + "px";
});

aA.addEventListener("click", function () {
  textArea.classList.toggle("uppercase");
  aA.classList.toggle("text-sky-500");
});

color.addEventListener("change", function () {
  let colorValue = color.value;
  textArea.style.color = colorValue;
});
