const findTheOldest = function(arr) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i].yearOfDeath == null){
            const now = new Date();
            arr[i].age = (now.getFullYear()) - arr[i].yearOfBirth;
        }
        else{
            arr[i].age = (arr[i].yearOfDeath - arr[i].yearOfBirth);
        }
    }
    arr.sort((a,b)=> b.age - a.age);
    return arr[0];
    };

// Do not edit below this line
module.exports = findTheOldest;
