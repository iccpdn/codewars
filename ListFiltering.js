//my version

function filterList(l) {
  // Return a new array with the strings filtered out
  return l.filter(x => {
    if (x !== parseInt(x, 10)) {
      return false;  
    }
    return true;
  });
}

//codewars best practice

function filterList(l) {
  return l.filter(v => typeof v === 'number');
}

console.log(filterList([1, 2, 'a', 'b']));
