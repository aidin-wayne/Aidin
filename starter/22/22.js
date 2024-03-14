const hasDriverLicense = true ; //A 
const hasGoodVision = true ; // B 

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// const shouldDrive = hasDriverLicense && hasGoodVision ; 

// if(shouldDrive){
//     console.log(`Sarah is able to drive !`); 
// } else {
//     console.log(`Some one else should drive`); 
// }

const isTired  = false ; // C 

if(hasDriverLicense && hasGoodVision && !isTired){
    console.log ("Zlawg can drive"); 
} else {
    console.log("prevent Zlawg from driving ;|");
}

