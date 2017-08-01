// my version
function likes(names) {
    if (typeof names !== 'undefined' && names.length > 0) {
        switch (names.length) {
            case 1:
                return names[0] + ' likes this';
            case 2:
                return names[0] + ' and ' + names[1] + ' like this';
            case 3:
                return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
            default:
                return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';  
        }
    } else {
        return 'no one likes this'; 
    }
    
}

//codewars best practice!
function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}

console.log(likes([]));
console.log(likes(['Ion']));
console.log(likes(['Ion', 'Cezar']));
console.log(likes(['Ion', 'Cezar', 'Ciubotariu', 'iccpdn']));
