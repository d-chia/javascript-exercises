const removeFromArray = function(inputArray, removeElement) {
    for (let arrayElement of inputArray) {
        if (arrayElement == removeElement) {
            inputArray.splice(inputArray.indexOf(arrayElement), 1);
        } else {continue};
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
