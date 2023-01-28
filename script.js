const calculatedTemp = document.getElementById("output");
calculatedTemp.textContent = "";
const inF = document.getElementById("inF");
const inC = document.getElementById("inC");
const inK = document.getElementById("inK");
const outF = document.getElementById("outF");
const outC = document.getElementById("outC");
const outK = document.getElementById("outK");
const calcBtn = document.getElementById("calc-btn");
let temp = document.getElementById("input");

// let inUnit;
// let outUnit;

// F to C: ((F - 32) * .5556) = C
// F to K: ((F + 459.67) * (5/9) = K
// C to F: ((C * 1.8) + 32) = F
// C to K: C + 273.15 = K
// K to F: (K * (9/5) - 459.67) = F
// K to C: K - 273.15 = C

// Eventually, add Rankine and cricket chirps as a unit option
// https://en.wikipedia.org/wiki/Rankine_scale
// https://www.almanac.com/predict-temperature-cricket-chirps

// Conversion function
function convert(temp, inUnit, outUnit) {
  if (inUnit === "F" && outUnit === "C") {
    conTemp = (temp - 32) * 0.5556;
    return conTemp;
  } else if (inUnit === "F" && outUnit === "K") {
    conTemp = (temp + 459.67) * (5 / 9);
    return conTemp;
  } else if (inUnit === "C" && outUnit === "F") {
    conTemp = temp * 1.8 + 32;
    return conTemp;
  } else if (inUnit === "C" && outUnit === "K") {
    conTemp = temp + 273.15;
    return conTemp;
  } else if (inUnit === "K" && outUnit === "F") {
    conTemp = temp * (9 / 5) - 459.67;
    return conTemp;
  } else if (inUnit === "K" && outUnit === "F") {
    conTemp = temp - 273.15;
    return conTemp;
  }
  calculatedTemp.textContent = `${conTemp}`;
}
// console.log(convert(0, 'C', 'F'));

// Event Listeners
inF.addEventListener("click", function () {
  inC.disabled;
  inK.disabled;
  inUnit = "F";
});

inC.addEventListener("click", function () {
  inF.disabled;
  inK.disabled;
  inUnit = "C";
  console.log(inUnit);
});

inK.addEventListener("click", function () {
  inF.disabled;
  inC.disabled;
  inUnit = "K";
});

outF.addEventListener("click", function () {
  outC.disabled;
  outK.disabled;
  outUnit = "F";
});

outC.addEventListener("click", function () {
  outF.disabled;
  outK.disabled;
  outUnit = "C";
});

outK.addEventListener("click", function () {
  outF.classList.add("hidden");
  outF.disabled;
  outC.disabled;
  outUnit = "K";
});

calcBtn.addEventListener("click", convert(temp));
