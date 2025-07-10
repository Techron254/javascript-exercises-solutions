const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
  return numbers.reduce((a,b)=> a+b, 0);
};

const multiply = function(num) {
    return num.reduce((a,b) => a* b);
};

const power = function(a,b) {
  return Math.pow(a, b);
};

const factorial = function(num) {
    let result = 1;
  for (i = 1; i <= num ; i++){

    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
