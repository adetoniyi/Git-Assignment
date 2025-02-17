#!/usr/bin/env node

function largestNum(num1, num2, num3) {
    let largest;

    if (num1 > num2 && num1 > num3) {
        largest = num1
    } else if (num2 > num1 && num2 > num3) {
        largest = num2
    } else if (num3 > num1 && num3 > num2) {
        largest = num3
    } else if (num1 === num2 && num1 > num3) {
        largest = num1
    } else if (num1 === num3 && num1 > num2) {
        largest = num1
    } else if (num2 === num3 && num2 > num1) {
        largest = num2
    } else {
        console.log('numbers are equal')
        return
    }
    console.log(`largest number is: ${largest}`)
}
const num1 = 20;
const num2 = 5;
const num3 = 100

largestNum(num1, num2, num3)
