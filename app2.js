

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
console.log('My age : ', myAge(student));
