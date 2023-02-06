const fibonacci = function(num) {
    if(num < 0) return 'OOPS';
    if(num === 0) return 0;

    num = parseInt(num);
    let a = 1;
    let b = 1;
    for(let i = 2; i < num; i++) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
