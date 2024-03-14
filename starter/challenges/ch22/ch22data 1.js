// const dolScoreNo1 = 96;
// const dolScoreNo2 = 108;
// const dolScoreNo3 = 89;

// const koalScoreNo1 = 88;
// const koalScoreNo2 = 91;
// const koalcoreNo3 = 110;

const dolAverage = (96 + 108 + 89 )/ 3 ; 
const koaAverage = (88 + 91 + 110 ) / 3 ; 
console.log(`${dolAverage}
$`); 

if(dolAverage > koaAverage){
console.log("The winners are the Dolphines :))) ");
} else if(koaAverage > dolAverage){
console.log("The Koalas are the winners :)))))"); 
} else if (dolAverage === koaAverage){
console.log("The result is tied :/");
} 

// //*Here we go with the bonus data codes 

// //!NO 1
const minimum = 100 ; 
const dolbAverage = (97+112+101)/3 ; 
const koabAverage = (109+95+123)/3 ; 

console.log(`${dolbAverage}

${koabAverage}
`);

if(dolbAverage > koabAverage && dolbAverage >= 100){
    console.log("The winners are the Dolphines :D");
} else if(koabAverage > dolbAverage && koabAverage >= 100){
    console.log("The Koalas are the winners :D"); 
}

// //!NO 2
const dolb2Average = (97+112+101)/3 ; 
const koab2Average = (109+95+106)/3 ; 

console.log(`${dolb2Average}

${koab2Average}`);

if(dolb2Average > koab2Average && dolb2Average >= 100 && koab2Average>=100){
    console.log("There is no winner and both their average is the same ");
} else if(koab2Average > dolb2Average &&  dolb2Average >= 100){
    console.log("Dolphins win");
} else  {

    console.log(`No one wins :(`);

}
   




