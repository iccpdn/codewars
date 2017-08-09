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

console.log(pascalsTriangle(5));
