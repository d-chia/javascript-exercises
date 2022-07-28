const fibonacci = function(inputNum) {
    //create array
    const sequence = [];
    
    //check for non-int and return error

    if (!Number.isInteger(inputNum) || inputNum <= 0) {
        return "OOPS";
    }

    //fill array with fibonacci numbers until input
    for (let i = 0; i < inputNum; i++) {
        if (i <= 1)  {
            let fibonacciNum = 1;
            sequence.push(fibonacciNum);
        } else if (i >= 2) {
            let fibonacciNum = (sequence[(i - 1)] + sequence[(i - 2)]);
            sequence.push(fibonacciNum);
        }
    }
    //return input-nth number with 1 being first element (that's why -1)
    return sequence[(inputNum - 1)];
};

// Do not edit below this line
module.exports = fibonacci;
