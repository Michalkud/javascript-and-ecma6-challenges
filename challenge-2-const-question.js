/**
 *  Answer following Questions:
 *    1. Why no error is generated after the line with "arr.push(3)"?
 *    2. Why after the line 19 TypeError is generated?
 *  
 *  Change one line of code so, that error will go away.
 *  Don't change line with "arr.push(3)" or with "arr = [1, 2, 3, 4]"
 * 
 */

 "use strict";

 const arr = [1, 2];

 arr.push(3);

 console.log(arr);
 // [1, 2, 3]

 arr = [1, 2, 3, 4];
 // BEFORE: Uncaught TypeError:
 //   Assignment to constant variable.
 // AFTER: No error

 console.log(arr);
 // [1, 2, 3, 4]

