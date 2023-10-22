// Part II: JavaScript Reps
// Easy Going
// Write a for loop that will log the numbers 1 through 20.

// let i = 20;

// for (let i =0; i < 21; i++) {
//     console.log(i);
// }
// ============================================================================================
// Get Even
// Write a for loop that will log only the even numbers in 0 through 200.

// Hint: Think about the increment expression.

// 

// =============================================================================================
// Fizz Buzz
// This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

let i = 100;

for (let i=0; i <= 100; i++)
    if (i%3 === 0) {
    console.log('Fizz');
    } else  {
        if (i%5 === 0) {
            console.log('Buzz');
        } else {
            if (i%3 && i%5 === 0) {
                console.log('FizzBuzz');
            }
        }
    }

// ============================================================================================
