const palindromes = function (str) {
    const noPunct = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?'"]/g, "");
    joinedNoPunct= noPunct.split(' ').join('');

    let reversed = joinedNoPunct.split('').reverse().join('');

    if (joinedNoPunct.toLowerCase() === reversed.toLowerCase()){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
