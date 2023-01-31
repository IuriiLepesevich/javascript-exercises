const leapYears = function(year) {
    return year%4===0 && year%10!==0 || year%400===0;
};

// Do not edit below this line
module.exports = leapYears;
