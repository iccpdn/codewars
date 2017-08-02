//my version
const inArray = (a1, a2) => {
    const r = [];
    a1.forEach((a1String) => {
        a2.forEach((a2String) => {
            if (a2String.includes(a1String) && !r.includes(a1String)) { 
                r.push(a1String);
            }
        });
    });

    return r.sort();
};

//codewars best practice
function inArray(arr1, arr2) {
  return arr1.filter(function(needle) {
    return arr2.some(function(haystack) {
      return haystack.indexOf(needle) > -1;
    });
  }).sort();
}

function inArray(array1,array2){
  return array1
    .filter(a1 => array2.find(a2 => a2.match(a1)))
    .sort()
}

const a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];
const a1 = ['xyz', 'live', 'strong'];
console.log(inArray(a1, a2));
