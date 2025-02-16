#!/usr/bin/env node 

let originalPrice = 500 
let discountPercent = 20

//calculate the discount amount 
let discountamount = (originalPrice * discountPercent) / 100
console.log(discountamount)

//Subtract the discount amount from the original price to get the total price
let totalprice = (originalPrice - discountamount)
console.log(totalprice)
