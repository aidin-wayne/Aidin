console.log('John and Mark BMI challenge ;D');

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and heigth in meter); 

const markmass = 78;
const markheight = 1.69;

const johnmass = 87;
const johnheight = 1.95;

const markbmi = markmass / (markheight ** 2);
console.log(markbmi);
const johnbmi = johnmass / (johnheight ** 2);
console.log(johnbmi);

const markHigherBMI = markbmi > johnbmi;
console.log(markHigherBMI);