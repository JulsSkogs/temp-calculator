const calculatedTemp = document.getElementById("output");
const inF = document.getElementById("inF");
const inC = document.getElementById("inC");
const inK = document.getElementById("inK");
const outF = document.getElementById("outF");
const outC = document.getElementById("outC");
const outK = document.getElementById("outK");
const calcBtn = document.getElementById("calc-btn");
let temp = document.getElementById("input");
let inputUnit;
let outputUnit;

// F to C: ((F - 32) * .5556) = C
// C to F: ((C * 1.8) + 32) = F
// F to K: ((F + 459.67) * (5/9) = K
// C to K: C + 273.15 = K
// K to F: (K * (9/5) - 459.67) = F
// K to C: K - 273.15 = C

// Eventually, add Rankine and cricket chirps as a unit option
// https://en.wikipedia.org/wiki/Rankine_scale
// https://www.almanac.com/predict-temperature-cricket-chirps

function fToC(temp) {
  let C = (temp - 32) * 0.5556;
  return C;
}

function cToF(temp) {
  let F = temp * 1.8 + 32;
  return F;
}

function fToK(temp) {
  let K = (temp + 459.67) * (5 / 9);
  return K;
}

function cToK(temp) {
  let K = temp + 273.15;
  return K;
}

function kToF(temp) {
  let F = temp * (9 / 5) - 459.67;
  return F;
}

function kToC(temp) {
  let C = temp - 273.15;
  return C;
}

// Event Listeners
