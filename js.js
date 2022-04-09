const conv = document.querySelector("#converter");
const text = document.querySelector(".result");
const spanOne = document.querySelector(".one");
const spanTwo = document.querySelector(".two");
const btnConv = document.querySelector(".convert");
const btnReset = document.querySelector(".reset");
const btnChange = document.querySelector(".change");

let fahrenheit;
let celcius;

const swap = () => {
  if (spanOne.textContent === "°C") {
    spanOne.textContent = " °F";
    spanTwo.textContent = "°C";
    text.textContent = "";
  } else {
    spanOne.textContent = "°C";
    spanTwo.textContent = "°F";
    text.textContent = "";
  }
};

const fartoCel = () => {
  fahrenheit = conv.value * 1.8 + 32;
  text.textContent = `${conv.value}°C to ${fahrenheit.toFixed(1)}°F`;
  conv.value = "";
};

const celtoFar = () => {
  celcius = (conv.value - 32) / 1.8;
  text.textContent = `${conv.value}°F to ${celcius.toFixed(1)}°C `;
  conv.value = "";
};

const changer = () => {
  if (conv.value !== "") {
    if (spanOne.textContent === "°C") {
      fartoCel();
    } else {
      celtoFar();
    }
  } else {
    text.textContent = "You have enter value";
  }
};

const reset = () => {
  text.textContent = "";
  conv.value = "";
};

btnChange.addEventListener("click", swap);
btnConv.addEventListener("click", changer);
btnReset.addEventListener("click", reset);
