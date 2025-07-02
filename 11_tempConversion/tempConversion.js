const convertToCelsius = function(F) {
  result = Math.round(((F-32) * 5/9)*10)/10;
  return result;
};

const convertToFahrenheit = function(C) {
  result = Math.round(((C * 9/5) + 32)*10)/10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
