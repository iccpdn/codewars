//my version
function tickets(peopleInLine) {
    const register = { 25: 0, 50: 0, 100: 0 };
    if (peopleInLine[0] !== 25) {
        return 'NO';
    }
    for (let i = 0; i < peopleInLine.length; i++) {
        const clientCash = peopleInLine[i];
        switch (clientCash) {
            case 25:
                ++register['25'];
                break;
            case 50:
                if (register['25'] > 0) {
                    --register['25'];
                    ++register['50'];
                    break;
                }
                return 'NO';  
            case 100:
                if (register['25'] > 0 && register['50'] > 0) {
                    --register['25'];
                    --register['50'];
                    ++register['100'];
                    break;
                } else if (register['25'] > 2) {
                    register['25'] -= 3;
                    ++register['100'];
                    break;
                }
                return 'NO';    
            default:
                return 'NO';
        }
    }

    return 'YES';
}

//codewars best practice

function Clerk(name) {
  this.name = name;
  
  this.money = {
    25 : 0,
    50 : 0,
    100: 0 
  };
  
  this.sell = function(element, index, array) {
    this.money[element]++;

    switch (element) {
      case 25:
        return true;
      case 50:
        this.money[25]--;
        break;
      case 100:
        this.money[50] ? this.money[50]-- : this.money[25] -= 2;
        this.money[25]--;
        break;
    }
    return this.money[25] >= 0;
  };
}

function tickets(peopleInLine){
  var vasya = new Clerk("Vasya");
  return peopleInLine.every(vasya.sell.bind(vasya)) ? "YES" : "NO";
}

console.log(tickets([25,25,50,100,25,50,25,100,25,25,25,100,25,25,25,100,25,25,50,100]));
// console.log(tickets([25, 25, 50, 50]));

