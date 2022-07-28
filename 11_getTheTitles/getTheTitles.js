const getTheTitles = function(searchArray) {

    //declare empty array for titles
    const titles = [];

    //loop over all objects in the array and push titles
    searchArray.forEach(element => titles.push(element.title));

    //return titles array

    return titles;

};

// Do not edit below this line
module.exports = getTheTitles;
