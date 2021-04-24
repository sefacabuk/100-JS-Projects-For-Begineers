let body = document.querySelector("body");


function changeColor() {
  let colors = ["red", "green", "blue", "pink", "violet", "white"];
  let num = Math.floor((Math.random() * colors.length) + 1);
  body.style.backgroundColor = colors[num];
}
