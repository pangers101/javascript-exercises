const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	return nums.length > 0 ? nums.reduce((accum, curr) => accum + curr): 0;
};

const multiply = function(nums) {
  return nums.reduce((accum, curr) => accum * curr);
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(num) {
	let total = num;
  for(let i = num - 1; i > 0; i--){
    total *= i;
    //console.log("Total:" + total + " I:" + i);
  }
  total === 0 ? total = 1 : total = total;
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
