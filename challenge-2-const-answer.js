/**
 *  Answer following Questions:
 *    1. Why no error is generated after the line with "arr.push(3)"?
 *    2. Why after the line 19 TypeError is generated?
 *  
 *    3. Change one line of code so, that error will go away.
 *  Don't change line with "arr.push(3)" or with "arr = [1, 2, 3, 4]"
 * 
 * 
 * 
 */

 /**
  * 1. We get no error because Array is a reference type. 
  *   And if a constant is a Array type, you can put, delete,
  *   change elements in array and so on. 
  *   In this case pointer, that points to to the value, isn't changed. 
  *   We changing just the value of the array so we get no error.
  * 
  * 2. If we try to reasign new array with new values, 
  *   new pointer will be created and because we declare arr as a constant,
  *   in this case we will get an error "Uncaught TypeError: Assigment to constant variable."
  *   We are not allowed to reasign value of the constant and that is exactly what is happening on line with 
  *   "arr = [1, 2, 3, 4]"
  * 3. We change const to var, 
  *   Sidenote: 
  *   You can use also "let" instead of "var" but i prefer using "let" only in block scopes where is needed. 
  *   For example in "for loops" 
  */

 "use strict";

 var arr = [1, 2];

 arr.push(3);

 console.log(arr);
 // [1, 2, 3]

 arr = [1, 2, 3, 4];
 // BEFORE: Uncaught TypeError:
 //   Assignment to constant variable.
 // AFTER: No error

 console.log(arr);
 // [1, 2, 3, 4]

