const reset = document.getElementById("reset");
const clear = document.getElementById("clear");
const black = document.getElementById("black");
const create = document.getElementById("create");
const number = document.getElementById("number");
const rainbow = document.getElementById("blue");
const colorPicker = document.getElementById("color");
let main = document.getElementById("main");


////////////////////////////////////////////////////////////////////////////////////
//                           Functions                                           //
//////////////////////////////////////////////////////////////////////////////////

function resetGrid() {
  const grid = Array.from(main.childNodes);
  grid.forEach((node) => {
    main.removeChild(node);
  });
}
function resetAll() {
  resetGrid();
  for (let i = 1; i <= 16 * 16; i++) {
    const div = document.createElement("div");
    div.classList.add("border-white");
    main.style.gridTemplateColumns = `repeat(16, 1fr)`;
    main.style.gridTemplateRows = `repeat(16, 1fr)`;
    main.insertAdjacentElement("beforeend", div);
  }
}
function randomHsl() {
  return "hsla(" + Math.random() * 360 + ", 100%, 50%, 1)";
}

function setColorBlack(div) {
  div.target.style.background = "black";
  div.target.style.borderColor = "white";
}

function setColorRainbow(div) {
  div.target.style.backgroundColor = randomHsl;
}

function clearColor() {
  let x = number.value * number.value;
  for (let i = 1; i < x; i++) {
    grid[i].style.background = "white";
    grid[i].style.cssText = "border: 1px solid rgb(110, 108, 108);";
  }
}

function createGrid() {
  resetGrid();
  let x = number.value * number.value;
  for (let i = 1; i <= x; i++) {
    const div = document.createElement("div");
    div.classList.add("border-white");
    main.style.gridTemplateColumns = `repeat(${number.value}, 1fr)`;
    main.style.gridTemplateRows = `repeat(${number.value}, 1fr)`;
    main.insertAdjacentElement("beforeend", div);
  }
}
// /////////////////////////////////////////
create.addEventListener("click", createGrid);
reset.addEventListener("click", resetAll);

resetAll();
const grid = Array.from(main.childNodes);
clear.onclick = clearColor;


rainbow.onclick = grid.forEach((node) => {
  node.onmouseover = setColorRainbow;
});

black.onclick = grid.forEach((node) => {
  node.onmouseover = setColorBlack;
});