const age = 15;
const isOldEnough = age >= 18;

if (age >= 18) {
    console.log(`you are allowed to take driver's license `);
}
else {
    const yearsleft = 18 - age;
    console.log(`You are too young , you should wait 3 more years . `)
}
// if the condition is not as it should be :

//  const age = 19;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log(`you are allowed to take driver's license `);
// }

// the code above is not gonna be executed . 

const birthYear = 2012;
let century;
if (birthYear <= 2000) {

    let century = 20;
    console.log('You were borned at the 20th century');
}
else {

    let century = 21;
    console.log('You were borned at the 21th century');
}
