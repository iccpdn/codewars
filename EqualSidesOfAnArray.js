//my version
function findEvenIndex(arr) {
    let evenIndex = -1;
    let index = 0;
    arr.forEach(() => {
        let leftArr = [];
        let rightArr = [];
        if (index === 0) {
            leftArr = arr.slice(0, index);
            rightArr = arr.slice(index, arr.length);
        } else {
            leftArr = arr.slice(0, index);
            rightArr = arr.slice(index + 1, arr.length);
        }
        const sum = (a, b) => a + b;
        const leftSum = leftArr.reduce(sum, 0);
        const rightSum = rightArr.reduce(sum, 0);
        if (leftSum === rightSum) { 
            evenIndex = index; 
        }
        index++;
    });

    return evenIndex;
}

//codewars best practice
function findEvenIndex(arr)
{
  for(var i=1; i<arr.length-1; i++) {
    if(arr.slice(0, i).reduce((a, b) =>  a+b) === arr.slice(i+1).reduce((a, b) =>  a+b)) {
      return i;
    }
  }
  return -1;
}

console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));
