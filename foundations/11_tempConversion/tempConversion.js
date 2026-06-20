const convertToCelsius = function(temp) {
  let celcius = 5/9 * (temp - 32);
  return Number.parseFloat(celcius.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let farenheit = (9/5 * temp) + 32;
  return Number.parseFloat(farehheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
