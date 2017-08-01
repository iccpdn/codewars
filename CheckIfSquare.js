// my version
const isSquare = function(n) {
    return Number.isInteger(Math.sqrt(n));
}

// codewars best practice

function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}


console.log(isSquare(-1)); // => false
isSquare( 3) // => false
isSquare( 4) // => true
isSquare(25) // => true
isSquare(26) // => false
