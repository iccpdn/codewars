//my version
function highAndLow(numbers) {
    const arr = numbers.split(' ').map((x) => Number(x));
    
    return String(Math.max.apply(0, arr)) + ' ' + String(Math.min.apply(0, arr));
}

//codewars best practice
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

console.log(highAndLow('1 2 3 4 5'));
