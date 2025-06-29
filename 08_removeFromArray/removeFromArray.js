const Numbers = [1, 2, 3, 4];

const removeFromArray = function(array, ...N) {
    for (let i=0; i< array.length; i++){
           for (let j=0; j < N.length; j++){
               N.sort((a,b) => a-b);
            while (array[i] === N[j]){
                array.splice(i, 1);
            }


            }
        }
return array;

}
// Do not edit below this line
module.exports = removeFromArray;
