//take year as input
//check if divisible by 4
//if yes, check if not divisible by 100
//if yes, check if divisible by 400
//if all conditions are met: return leap year

const leapYears = function(year) {
    if (year % 400 == 0) {
        return true;
    } else if ((year %  4) == 0 && (year % 100) != 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
