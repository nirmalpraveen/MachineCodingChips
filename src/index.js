import "./styles.css";

const root = document.getElementById("app");
const div = document.createElement("div");
div.setAttribute("style", "background-color:yellow;height:200px;width:50%");
let chipArray = [];

const chip = (text) => {
  // console.log(text);
  const item = document.createElement("div");
  item.setAttribute(
    "style",
    "font-size: 12px;text-align:center;background-color: grey;height:1rem;width:120px;border-radius:5%"
  );
  item.textContent = text;
  return item;
};

const appendChips = (arr) => {
  // console.log(arr);
  div.innerHTML = "";
  arr.forEach((element) => {
    div.appendChild(chip(element));
  });
};

const input = document.createElement("input");
input.setAttribute("style", "width:300px;height:30px");
input.addEventListener("keydown", (event) => {
  console.log(event.which);
  if (event.which === 188) {
    let data = event.target.value;
    appendChips(data.split(","));
  }
});

root.appendChild(input);
root.appendChild(div);
