

document.write('<br> <br> <h1> Single Function, Arrow Function </h1> <br> ')


const difference = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    return 'sum of three Numbers : ', sum, 'multiply of Three Numbers : ', mult;
}

const myDifferentFuntion = difference(2,3,4);
console.log(myDifferentFuntion);
document.write('<br> See the result : ', myDifferentFuntion);

const myAge = (person) => person.age;
const student = {
    name: 'Mohib',
    mobile: '01706439736',
    age: 22
}
// const age = myAge(student);
document.write('<br> My age : ', myAge(student));

// Find the third Number from Array

const findThird = (numbers) => numbers[2];
const myArrayOfNumber = findThird([2,3,4,5,6,7]);

document.write('<br> Find the third Number : ', myArrayOfNumber);
