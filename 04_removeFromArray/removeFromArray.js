const removeFromArray = function(array, ...args) {
    return array.filter(elem => {
        return !args.includes(elem);
    });
};

// Do not edit below this line
module.exports = removeFromArray;
