console.log('John and Mark BMI challenge ;D');

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and heigth in meter); 

/*Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.*/

const markmass = 95;
const markheight = 1.88;

const johnmass = 85;
const johnheight = 1.76;

const markbmi = markmass / (markheight ** 2);
console.log(markbmi);
const johnbmi = johnmass / (johnheight ** 2);
console.log(johnbmi);

const firstBox = `Mark's BMI (${markbmi}) is higher than John's (${johnbmi})!`;

const secondBox = `john's BMI (${johnbmi}) is higher than mark's (${markbmi})!`;

/*Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement
 */

if (markbmi > johnbmi) {

    console.log(firstBox);

    // or console.log(`Mark's BMI (${markbmi}) is higher than John's (${johnbmi})!` ) ; 

}

else {
    console.log(secondBox);

    // or console.log (`john's BMI (${johnbmi}) is higher than mark's (${markbmi})! `) ; 
}