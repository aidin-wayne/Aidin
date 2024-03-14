//type convertion

const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number(`jonas`));
console.log(typeof NaN);

console.log(String(23), 23);

// we can only convert to a number , a string or a boolean .

//type coercion
console.log('i am ' + 23 + ' years old');
console.log('i am ' + '23' + ' years old');
// the number converts to strings automatically. 

// not only operators do coersion . 

console.log('23' - '10' - 3);
// in this example 23 and 10 are converted to numbers . 

console.log('23' + '10' + 3); // here we get 23103 . 

console.log('23' * '2'); // 46
console.log('23' / '2'); // 11.5  // at both , strings are converted into numbers . 

// the section challenge : 

let n = '1' + 1; // 11
n = n - 1; // 11 - 1 = 10 
console.log(n); // the answer would be 10

console.log('10' - '4' - '3' - 2 + '5'); // 15  



