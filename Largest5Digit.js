//my version
function solution(digits) {
    const arr = digits.toString()
                      .split('')
                      .map((element, index) => Number(digits.toString().substr(index, 5)));

    return Math.max.apply(0, arr);
}

//codewars best practice
function solution(digits) {
  if (digits.length <= 5) return Number(digits);
  return Math.max(Number(digits.toString().substr(0, 5)), solution(digits.toString().substr(1)));
}

console.log(solution(123456789));
