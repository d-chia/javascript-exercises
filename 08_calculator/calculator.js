const add = function(...input) {
  const sum = input.reduce((a, b) => +a + +b, 0);
  return sum; 
};

const subtract = function(...input) {
  const remainder = input.reduce((a, b) => +a - +b);
	return remainder;
};

const sum = function([...input]) {
  const sum = input.reduce((a, b) => +a + +b, 0);
  return sum; 
};

const multiply = function([...input]) {
  const product = input.reduce((a, b) => +a * +b);
  return product;
};

const power = function(...input) {
  const result = input.reduce((a, b) => a**b);
  return result;
	
};

const factorial = function(n) {
  let fact = 1;
  for (i = n; i >= 1; i--) {
    fact *= i;
  }
  return fact;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
