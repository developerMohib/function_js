/**
 Task-1  
Take four parameters. Multiply the four numbers and then return the result 
*/
function forMultiply( num1, num2 ){
    multiply = num1 * num2 ;
    return multiply;
}
let num1 = 23;
let num2 = 21;
forMultiply(num1, num2);
document.write( `My given Number are `+ num1 + ', '+ num2 + '. and Their Multiply is = ' + multiply + '<br>');

/** Multiplication table */

for(let i = 0 ; i <= 10; i++){
    document.write(num2 +'*'+ i + ' = '+ num2 * i + '<br>');
}

/*
Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
*/

function myNumber( num_1 ){
    document.write( 'Your given Number is = '+ num_1 + ' since is odd thats why result = ');
    if(num_1 % 2 === 0){
        result = num_1 / 2;
    }
    if(num_1 % 2 !==0 ){
        result = num_1 * 2;
    }
    return result;
}
myNumber(23);
document.write( ' '+ result +'<br>');


/*
### Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

---

### Task-4  
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

---

### Task-5 
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`

 */