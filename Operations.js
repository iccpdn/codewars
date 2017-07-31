//my version
const operation = (n, x) => (x) ? x.call(x, n) : n;

const zero = (x) => operation(0, x);
const one = (x) => operation(1, x);
const two = (x) => operation(2, x);
const three = (x) => operation(3, x);
const four = (x) => operation(4, x);
const five = (x) => operation(5, x);
const six = (x) => operation(6, x);
const seven = (x) => operation(7, x);
const eight = (x) => operation(8, x);
const nine = (x) => operation(9, x);

const plus = (num) => (res) => res + num;
const minus = (num) => (res) => res - num;
const times = (num) => (res) => res * num;
const dividedBy = (num) => (res) => res / num;

console.log(two(times(three())));

//codewars best practice
var n = function(digit) {
  return function(op) {
    return op ? op(digit) : digit;
  }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }
