//my version
function digPow(n, p) {
    const array = n.toString().split('');
    let sum = 0;
    for (let i = 0; i < array.length; ++i) {
        const power = p + i;
        sum += Math.pow(array[i], power);
    }

    return sum % n ? -1 : sum / n;
}

//codewars best practice
function digPow2(n, p) {
    const x = String(n).split('').reduce((s, d, i) => s + Math.pow(d, p + i), 0);
    return x % n ? -1 : x / n;
}

console.log(digPow(695, 2));
console.log(digPow2(695, 2));
