// 5 falsy values : 0 , '' , undefined , null , NaN 
// everything else is a truthy value 

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));


const money = 0 ; 
if(money){

console.log("Don't spend it all !") ; 

}

else {
    console.log('you should get a job ');  
}
// This program returns the ELSE command , because the money = 0 , then
// the first block is gonna be false and in that case , the second blocks
// command will be logged into the console. 

let height ; 

if(height){

console.log(`height is defined`);

}
else {

console.log(`height is Undefined`); 

}
