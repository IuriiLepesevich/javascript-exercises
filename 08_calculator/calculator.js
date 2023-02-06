const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, elem) => total + (elem), 0);
};

const multiply = function(arr) {
  return (arr.length) ? arr.reduce((total, elem) => total * (elem), 1)
  : 0;
};

const power = function(base, power) {
  return base ** power;
};

const factorial = function(num) {
  if(!num) return 1;
  total = 1;
  for(let i = num; i > 0; i--){
    total *= i;
  }
  return total;
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
