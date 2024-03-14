const age = 16 ; 

let A = age >= 20 ; // False 
let B = age < 30 ;  // True

console.log(!A); // True
console.log(A && B); // False 
console.log(!A || B);// True
console.log(!A && B); // True 
console.log(A || !B);  // False
