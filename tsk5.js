#!/usr/bin/env node 

let a = 10 
let b = 20

console.log(`before swapping: a = ${a}, b = ${b}`)

//swap the numbers 

a = a + b  
//b = a - b 
a = a - b 

console.log(a) 
console.log(b) 

console.log(`after swapping: a = ${a}, b = ${b}`)
