const removeFromArray = function(array, val) {
    let newArray = array.filter(item => item !== val);
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
