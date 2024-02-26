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
 */
function make_avg(marks){
    total = 0;
    for (const item of marks) {
        total = item + total;
    }
    average = total / 3;
    return average;
}
make_avg([23, 25, 24]);
document.write(' <br> This is average ',average );

let marks =[23, 25, 24];
let marks_total = 0;
for (const item of marks) {
    marks_total = item + marks_total;
}
let gor = marks_total / marks.length;
document.write( '<br> My Total Marks = ',gor , "<br>");

/**
 * 

### Task-4  
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

*/
 
function count_zero(binary){
    // document.write(binary , ' <br>'); 
    zero_array = binary.split('');
    document.write('length of array = ', zero_array.length , '<br>')
    
    let sum = 0;
    for (let i=0; i < zero_array.length; i++) {
        document.write(i, ' ');
        if(zero_array[i] === '0'){
            sum++;
        }
    }
    return sum;
}
let zeroCount = count_zero('10101010101010');
document.write('<br> Total 0 in this string = ', zeroCount , '<br>')
/*
/**
### Task-5 
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`

 */

function odd_even(myNumber){
    if(myNumber % 2 === 0){
        return 'Even';
    }
    else{
        return 'Odd';
    }
} 
let ckeckNumber = odd_even(232);
document.write('Your given Number is : ', ckeckNumber);

document.write('<br> <br> <hr> <h1> New Modiule of Function </h1> <hr> <br> <br>');

// Default Function calling 

function add(a, b=2){
    return (a + b);
}
let myAddition = add(5, 9) ;
document.write( 'adding parameter : ', myAddition, '<br> <br>' );

myAddition = add(5) ;
document.write( 'without adding parameter : ', myAddition, '<br> <br>' );
