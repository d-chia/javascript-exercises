// rest argument in function call (...removeArray) turns multiple arguments into array
// loop through all elements from removeArray and check input for identical elements
// remove if identical via splice and indexOf the element

const removeFromArray = function(inputArray, ...removeArray) {
    for (let removeElement of removeArray) {
        for (let arrayElement of inputArray) {
            if (arrayElement == removeElement) {
                inputArray.splice(inputArray.indexOf(arrayElement), 1);
            } else {continue};
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
