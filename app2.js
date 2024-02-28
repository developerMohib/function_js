

document.write('<br> <br> <h1> Single Function, Arrow Function </h1> <br> ')


const difference = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    return 'sum of three Numbers : ', sum, 'multiply of Three Numbers : ', mult;
}

const myDifferentFuntion = difference(2,3,4);
console.log(myDifferentFuntion);
document.write('<br> See the result : ', myDifferentFuntion);