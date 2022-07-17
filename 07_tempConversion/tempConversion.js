const ftoc = function(inputFahrenheit) {
  let tempCelsius = (inputFahrenheit - 32) / 1.8;
  return (Math.round(tempCelsius * 10))/10;
};

const ctof = function(inputCelsius) {
  let tempFahrenheit = (inputCelsius * 1.8) + 32;
  return (Math.round(tempFahrenheit*10))/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
