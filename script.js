const calculatedTemp = document.getElementById("output");
calculatedTemp.textContent = "";
const inF = document.getElementById("inF");
const inC = document.getElementById("inC");
const inK = document.getElementById("inK");
const outF = document.getElementById("outF");
const outC = document.getElementById("outC");
const outK = document.getElementById("outK");
const calcBtn = document.getElementById("calc-btn");
const resetBtn = document.getElementById("reset-btn");
let temp = document.getElementById("input");
let conTemp;
let inUnit;
let outUnit;

// F to C: ((F - 32) * .5556) = C
// F to K: ((F + 459.67) * (5/9) = K
// C to F: ((C * 1.8) + 32) = F
// C to K: C + 273.15 = K
// K to F: (K * (9/5) - 459.67) = F
// K to C: K - 273.15 = C

// Eventually, add Rankine and cricket chirps as a unit option because why not
// https://en.wikipedia.org/wiki/Rankine_scale
// https://www.almanac.com/predict-temperature-cricket-chirps

// Conversion function
function convert(temp, inUnit, outUnit) {
  if (inUnit === "F" && outUnit === "C") {
    conTemp = Math.floor((temp - 32) * 0.5556);
  } else if (inUnit === "F" && outUnit === "K") {
    conTemp = Math.floor((temp + 459.67) * (5 / 9));
  } else if (inUnit === "C" && outUnit === "F") {
    conTemp = Math.floor(temp * 1.8 + 32);
  } else if (inUnit === "C" && outUnit === "K") {
    conTemp = Math.floor(temp + 273.15);
  } else if (inUnit === "K" && outUnit === "F") {
    conTemp = Math.floor(temp * (9 / 5) - 459.67);
  } else if (inUnit === "K" && outUnit === "F") {
    conTemp = Math.floor(temp - 273.15);
  }
  return conTemp;
}

// Event Listeners
inF.addEventListener("click", function () {
  inC.disabled = true;
  inK.disabled = true;
  inUnit = "F";
});

inC.addEventListener("click", function () {
  inF.disabled = true;
  inK.disabled = true;
  inUnit = "C";
});

inK.addEventListener("click", function () {
  inF.disabled = true;
  inC.disabled = true;
  inUnit = "K";
});

outF.addEventListener("click", function () {
  outC.disabled = true;
  outK.disabled = true;
  outUnit = "F";
});

outC.addEventListener("click", function () {
  outF.disabled = true;
  outK.disabled = true;
  outUnit = "C";
});

outK.addEventListener("click", function () {
  outF.disabled = true;
  outC.disabled = true;
  outUnit = "K";
});

input.addEventListener("input", function (event) {
  temp = Number(event.target.value);
  console.log(outUnit);
});

calcBtn.addEventListener("click", () => {
  calculatedTemp.textContent = `${convert(temp, inUnit, outUnit)}${outUnit}`;
});

resetBtn.addEventListener("click", () => {
  calculatedTemp.textContent = "";
  temp = "";
  inF.disabled = false;
  inC.disabled = false;
  inK.disabled = false;
  outF.disabled = false;
  outC.disabled = false;
  outK.disabled = false;
});
