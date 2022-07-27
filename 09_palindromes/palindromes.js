const palindromes = function (string) {

//turn input into an array and of lower case letters
    const inputArray = [...string.toLowerCase()];

//filter array for alphanumerical characters

    const forwardArray = lowerCaseArray.filter(character => character >= "a" && character <= "z");

//create reverse array
//spread necessary to keep original array and not overwrite it

    const reverseArray = [...forwardArray].reverse();

//join() arrays to get string and compare for equality. return boolean

    return forwardArray.join() == reverseArray.join();

};




//note: comparing arrays for equality seems tricky. not working:
    //return forwardArray == reverseArray;

//looping over each element also not working
    // for (let i = 0; i <= forwardArray.length; i++) {
    //     if (forwardArray[i] != reverseArray[i]) {
    //         return false;
    //     };
    // }

//--> join() to get string and compare instead.



// Do not edit below this line
module.exports = palindromes;
