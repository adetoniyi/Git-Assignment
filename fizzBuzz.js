#!/usr/bin/env node 

//FizzBuzz 

FizzBuzz = 100

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
        console.log(i)
   } else if (i % 3 === 0) {
        console.log('Fizz')
        console.log(i)
    } else if (i % 5 === 0) {
        console.log('Buzz')
        console.log(i)
    }       
}
