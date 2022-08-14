// print the given string
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
// print the given quote
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);
//question3:check if typeOf '10' equals 10. If not make them equal
let num = "10";
let turnNumToInt = parseInt(num);
if (typeof "10" === typeof 10) {
  console.log("They are equal");
} else {
  console.log(
    `string ${num} is not equal to number 10. Therefore, ${turnNumToInt} that is acheived using parseInt method, makes string ${num} exactly equals to number 10`
  );
}
//question4:check if parseFloat(9.8) equals 10. If not make it equal.
let floatNum = parseFloat("9.8");
floatTurnsToInt = Math.round(9.8);
if (floatNum == 10) {
  console.log("They are equal");
}
console.log(
  `the float number ${floatNum} is not equal to number 10. Therefore, ${floatTurnsToInt} that is acheived using Math.roud method, makes float number ${floatNum} exactly equals to number 10`
);
//question5:Check if 'on' is found in both python and jargon
arr = ["python", "jargon"];
if (arr[0].includes("on") && arr[1].includes("on")) {
  console.log('Yes, python and Jargon include "on"');
} else {
  console.log('No, python and Jargon doesn\'t include "on"');
}
// OR question5 BELOW
//pattern = /on/gi
//patternMatch1 = arr[0].match(pattern);
//patternMatch2 = arr[1].match(pattern);
//console.log(
//`${patternMatch1} and ${patternMatch2}  match results shows that ${arr[0]} and ${arr[1]} includes \"on\" respectively`
//);
//question6: Check if jargon is in the sentence "I hope this course is not full of jargon"
jarg = "I hope this course is not full of jargon";
patternInJarg = /jargon/gi;
checkJarg = jarg.match(patternInJarg);
console.log(`${checkJarg}`);
console.log(`the word \"jargon\" is in the sentence \"${jarg}\"`);
//question7:Generate a random number between 0 and 100 inclusively.
let numGenerate1 = Math.floor(Math.random() * 100 + 1);
console.log(numGenerate1);

//question8: Generate a random number between 50 and 100 inclusively.
//0+1 =1
min = 50;
max = 100;
let numGenerate2 = Math.floor(Math.random(+1) * 50 + 50 - 1);
console.log(numGenerate2);

//question9: Generate a random number between 0 and 255 inclusively.
//let numGenerate3 = Math.floor((Math.random() * 255) + 1);
//console.log(numGenerate3);

//question10: Access the 'JavaScript' string characters using a random number
let str23 = "JavaScript";
let ran = Math.floor(Math.random() * str23.length + 1);
console.log(ran);
console.log(str23[ran]);

//question11: Use console.log() and escape characters to print the following pattern.

console.log(
  "\n 1 \b 1 \b 1 \b 1 \b 1 \n 2 \b 1 \b 2 \b 1 \b 1 \n 3 \b 1 \b 3 \b 9 \b 27 \n 4 \b 1 \b 4 \b 16 \b 64 \n 5 \b 1 \b 5 \b 25 \b 125"
);
//question12: Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let english =
  "You cannot end a sentence with because because because is a conjunction";

let indxSubStrStart = english.indexOf("b");
let indxSubStrEnd = english.lastIndexOf("e");
console.log(indxSubStrEnd);
let sliceEnglish = english.substring(indxSubStrStart, indxSubStrEnd);
console.log(sliceEnglish);
