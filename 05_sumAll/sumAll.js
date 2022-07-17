// take input of two integers
// add first integer to sum
// add first integer+1 to sum
// continue until second integer
// return total sum


const sumAll = function(firstInt, secondInt) {
    let totalSum = null;
    if (firstInt < 0 || secondInt < 0) {
        return "ERROR";
    }
    if (!Number.isInteger(firstInt) ||!Number.isInteger(secondInt)) {
        return "ERROR";
    }
    if (firstInt < secondInt) {
        for (let i = firstInt; i <= secondInt; i++) {
            totalSum += i;
        }
    } else if (firstInt > secondInt) {
        for (let i = secondInt; i <= firstInt; i++) {
            totalSum += i;
        }
    }
    return totalSum;
};


// Do not edit below this line
module.exports = sumAll;
