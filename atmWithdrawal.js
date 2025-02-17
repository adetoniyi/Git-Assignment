#!/usr/bin/env node

function withdrawal(amount) { 
    if (amount <= 0) {
        console.log('Invalid amount');
        return;
    }
    const hundreds = amount %= 100;

    const fifties = amount %= 50;

    const twenties = amount %= 20;

    const tens = amount %= 10;

    const fives = amount %= 5

    const ones = amount

    // Display the result
    console.log(`Breakdown:`);
    if (hundreds > 0) console.log(`100s: ${hundreds}`);
    if (fifties > 0) console.log(`50s: ${fifties}`);
    if (twenties > 0) console.log(`20s: ${twenties}`);
    if (tens > 0) console.log(`10s: ${tens}`);
    if (fives > 0) console.log(`5s: ${fives}`);
    if (ones > 0) console.log(`1s: ${ones}`);
}
const withdraw = 20
withdrawal(withdraw)