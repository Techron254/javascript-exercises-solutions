const getTheTitles = function(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++){
        let title = arr[i].title;
        result.push(title);
    }
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
