const sumAll = function(num1, num2) {
    if(!(Number.isInteger(num1) && Number.isInteger(num2))) return 'ERROR';
    if(num1 < 0 || num2 < 0) return 'ERROR';

    let result = 0;
    let edges = (num1 < num2) ? [num1, num2] : [num2, num1];

    for(let i = edges[0]; i <= edges[1]; i++) result+=i;
    return result;
};

// Do not edit below this line
module.exports = sumAll;
