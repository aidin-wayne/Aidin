const age = '18'; 
if(age===18) console.log('You just became and adult ;D(Strict)') ;  

if(age == 18 )console.log('You just became and adult ;D(loose)') ;  

// === is strict and doesnt return coercion 
// == is loose and returns coercions 

console.log(18 === '18' );
console.log(18 =='18' );

// the first one is stric so '18' is a string and 18 is a number . 
//their types are differnt and 
// the result is gonna be false.
// the second one is loos and it prints true . 

const favourite = Number( prompt("What is your favortie numbr ? ") ); 

// we declared the favourite var . then used a prompt func in a number function and a string in the prompt.

// promp recives an input from a webpage . 



console.log(favourite); 
console.log(typeof favourite); 

if(favourite === 23){
    console.log('Cool! 23 is an amazing number !'); 
} 
else if(favourite === 7){
console.log(`7 is a cool number too . `)
}
else if( favourite === 9 ){
    console.log(`nice choice nigga !`); 
}
else{
    console.log(`Number is not 23 or 7 !`);
} 

if(favourite !== 23) console.log(`Why not 23 ? :( 23`);