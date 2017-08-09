const pascalsTriangle = n => {
    const pascal = [];
    for (let line = 0; line < n; line++) {
        pascal[line] = {};
        for (let i = 0; i <= line; i++) {
            if (line === i || i === 0) pascal[line][i] = 1;
            else {
                pascal[line][i] = pascal[line - 1][i - 1] + pascal[line - 1][i];
            }
        }
    }
    const arr = [];
    pascal.forEach(obj => {
        for (const key in obj) {
            arr.push(obj[key]);
        }
    });

    return arr;
};

//codewars version
// function pascalsTriangle(n) {
//   var pascal = [];
//   var idx = 0;
  
//   for ( var i = 0; i < n; i++ ) {
//     idx = pascal.length - i;
//     for ( var j = 0; j < i+1; j++ ) {
//       if ( j === 0 || j === i ) {
//         pascal.push(1);
//       } else {
//         pascal.push( pascal[ idx+j ] + pascal[ idx+j-1 ] );
//       }
//     }
//   }
  
//   return pascal;
// };

console.log(pascalsTriangle(5));
