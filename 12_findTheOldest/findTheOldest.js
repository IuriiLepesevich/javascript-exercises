const findTheOldest = function(people) {
    return people.reduce((obj, elem) => {
        if(!obj.yearOfBirth) obj = elem;
        
        deathDateElem = (elem.yearOfDeath) ? elem.yearOfDeath :
        (new Date).getFullYear();

        deathDateObj = (obj.yearOfDeath) ? obj.yearOfDeath :
        (new Date).getFullYear();

        if((deathDateElem - elem.yearOfBirth) > (deathDateObj - obj.yearOfBirth)) {
            obj = elem;
        }
        return obj;
    }, {})
};

// Do not edit below this line
module.exports = findTheOldest;
