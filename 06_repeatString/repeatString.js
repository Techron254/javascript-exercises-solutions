let string;
let num;
let i;
const repeatString = function(string, num) {
    let str ="";
    if (num < 0){
        return "ERROR";
    }
    else{
        for (i = 0; i < num; i++) {
    
        str += string;
    }
  }
return str;

    };
// Do not edit below this line
module.exports = repeatString;
