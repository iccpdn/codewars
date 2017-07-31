//my version
const duplicateEncode = (word) => {
    const count = {};
    const arr = word.toLowerCase().split('');
    arr.forEach((letter) => {
        count[letter] = (count[letter] || 0) + 1;
        console.log(count);
    });
    const newArr = arr.map((letter) => count[letter] === 1 ? '(' : ')');
    
    return newArr.join('');
};

//codewars best practice
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
    })
    .join('');
}

console.log(duplicateEncode('din'));
console.log(duplicateEncode('recede'));
