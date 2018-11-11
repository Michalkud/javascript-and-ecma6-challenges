/**
 * Challenge 7 - Default parameters
 * 
 * Answer following question:
 * 1. Why on the line with ternary operator we can't simply use following statement;
 * mult = mult || 2;
 * 
 * Set default value of the mult parameter
 * in the multiplyBy() function.
 */

 /**
  * Because 
  * "mult !== undefined" is type safe but
  * "mult || 2" isn't
  * 
  * in case that mult will be 0 first operator will be resolved as true but second false.
  *  
  */

"use strict";

function multiplyBy(a, mult = 2) {
  mult = mult !== undefined ? mult : 2;
  console.log(a * mult);
}

multiplyBy(2);
// 4

multiplyBy(2, undefined);
// 4

multiplyBy(2, 0);
// 0

multiplyBy(5, 10);
// 50

