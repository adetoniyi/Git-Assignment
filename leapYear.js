#!/usr/bin/env node 

function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true
    } else {
        return false 
    }
}
const year = 2028 
if (leapYear(year)) {
    console.log(`${year} is a leap year`)
} else {
    console.log(`${year} is not a leap year`)
}
