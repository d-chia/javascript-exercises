const palindromes = function (string) {

//turn input into an array
    const inputArray = [...string];

//turn all elements into all lower case

    const lowerCaseArray = inputArray.map(character => {
        return character.toLowerCase();
        }
    )

//remove or filter non-alphanumerical from array

    const forwardArray = lowerCaseArray.filter(character => character >= "a" && character <= "z");

//create reverse array

    const reverseArray = [...forwardArray].reverse();
 
//check if array is identical in both directions by looping and comparing each element


//comparing arrays for equality seems tricky --> join to get string and compare instead
    // for (let i = 0; i <= forwardArray.length; i++) {
    //     if (forwardArray[i] != reverseArray[i]) {
    //         return false;
    //     } else {
    //        continue;
    //     }
    // }

    return forwardArray.join() == reverseArray.join();

};

// Do not edit below this line
module.exports = palindromes;
