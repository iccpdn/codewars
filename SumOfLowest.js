//my version
function sumTwoSmallestNumbers(numbers) {
    if (!(numbers instanceof Array) || numbers.length === undefined) {
        return false;
    }
    const newArray = numbers.sort((a, b) => a - b);
    
    return newArray[0] + newArray[1];
}

//codewars best practice
function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};

console.log(sumTwoSmallestNumbers([22, 5, 12, 19, 8]));
