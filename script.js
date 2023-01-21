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
  let F = C * 1.8 + 32;
  return F;
}

function fToK(temp) {
  let F = (F + 459.67) * (5 / 9);
  return F;
}

function cToK(temp) {
  let K = temp + 273.15;
  return K;
}

function kToF(temp) {
  let F = K * (9 / 5) - 459.67;
  return F;
}

function kToC(temp) {
  let C = temp - 273.15;
  return C;
}
