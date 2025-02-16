#!/usr/bin/env node

function daysIntheYear(day, month) {
    const daysinMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (month < 1 || month > 12 || day < 1 || day > daysinMonth[month - 1]) {
        return 'Invaild date'
    }
    let daysPassed = day 
    for (let i = 0; i < month - 1; i++) {
        daysPassed += daysinMonth[i]
    }
    const tDaysIntheYear = 365
    const daysLeft = tDaysIntheYear - daysPassed
    return daysLeft
}
const day = 15 
const month = 3
console.log(`There are ${daysIntheYear(day, month)} days left until the end of the year.`)
