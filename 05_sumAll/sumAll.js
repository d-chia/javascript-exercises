// take input of two integers
// add first integer to sum
// add first integer+1 to sum
// continue until second integer
// return total sum

let totalSum = null;

const sumAll = function(firstInt, secondInt) {
    for (let i = firstInt; i <= secondInt; i++) {
        totalSum += i;
    }
    return totalSum;
};


// Do not edit below this line
module.exports = sumAll;
