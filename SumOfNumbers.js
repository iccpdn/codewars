//my version
function getSum(a, b) {
    const [x, y] = (a <= b) ? [a, b] : [b, a];
    const arr = [];
    for (let i = x; i <= y; i++) {
        arr.push(i);
    }
    return arr.reduce((n, m) => n + m);
}

//codewars best practice
const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

console.log(getSum(1, -8));
