const palindromes = function (word) {
    let wordArray = word
        .replace(/\W/g, '')
        .toLowerCase()
        .split('');
    
    return (wordArray.join('') === wordArray.reverse().join(''));
    
};
//palindromes("A car, a man, a maraca.");
// Do not edit below this line
module.exports = palindromes;
