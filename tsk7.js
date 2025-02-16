#!/usr/bin/env node 

function isPrime(num) {
    if (num <= 1) {
        console.log(`${num} is not a prime number.`);
    } else {
        let isPrime = true; // Declare isPrime before the loop
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false; // Mark as not prime if divisible
                break;
            }
        }
        
        if (isPrime) {
            console.log(`${num} is a prime number.`);
        } else {
            console.log(`${num} is not a prime number.`);
        }
    }
}

let number = 20 
isPrime(number)