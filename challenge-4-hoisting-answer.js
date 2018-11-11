/** Challenge 4 - hoisting
 * 
 *  Change code to fix first error after the line with first console.log(c).
 *  Error after the line with second console.log(c) should still be generated.
 */

"use strict";

var a = 5,
  b = 10;

if (b > a) {
  let c = 2;
  c = a + b + c;
  
  console.log(c);
  // BEFORE: Uncaught ReferenceError: c is not defined
  // AFTER: 17 
}

console.log(c);
// Uncaught ReferenceError: c is not defined



