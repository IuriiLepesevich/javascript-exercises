const convertToCelsius = function(fahrenheit) {
  return Math.round(10 * (fahrenheit - 32.0) * (5/9)) / 10;
};

const convertToFahrenheit = function(celsius) {
  return Math.round((celsius * (9/5) + 32.0) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
