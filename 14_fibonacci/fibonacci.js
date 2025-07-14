
const fibonacci = function(num) {
    if (typeof(num) === String){
        Number(num);
    }
    let result = [];
    let a = 0;
    let b = 1;
    let next;
    if(num < 0){
            return ("OOPS");
        }
        else{
            for (let i = 1; i<=num; i++){
            next = a+b;
            a=b;
            b=next;
            result.push(a);
            }
        }

    if (num == 0){
        return 0;
    }
    else{
    return result[num-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
