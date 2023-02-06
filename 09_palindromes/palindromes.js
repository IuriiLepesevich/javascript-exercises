const palindromes = function (string) {
    if(!string) return false;

    string = string.toLowerCase().replace(/\W/g, '');
    return (string === string.split('').reverse().join(''));
};

// Do not edit below this line
module.exports = palindromes;
