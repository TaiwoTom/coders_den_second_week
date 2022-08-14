//question1: declaring and assigning of variable named challenge
challenge = "30 Days Of JavaScript";
//question2: print above string on browser console
console.log(challenge);
//question3: print length of the above string in browser console
console.log(challenge.length);
//question4: make the string characters to be capital letters
bigLetrsChallenge = challenge.toUpperCase();
console.log(bigLetrsChallenge);
//question5: make the string characters to be lowercase letters
smallLetrsChallenge = challenge.toLowerCase();
console.log(smallLetrsChallenge);
//question6: slice out first word of string using substr() or substring()
subLetrsChallenge1 = challenge.substr(2, 6);
console.log(subLetrsChallenge1);
//question7: slice out phrase "Days Of JavaScript" from the string
subLetrsChallenge2 = challenge.substr(2);
console.log(subLetrsChallenge2);
//question8: check string for the word "Script" using includes() method
wordCheckChallenge = challenge.includes("Script");
console.log(wordCheckChallenge);
//question9: split the string into an array using split() method
arrChallenge1 = challenge.split();
console.log(arrChallenge1);
//question10: split the string at space using split() method
arrChallenge2 = challenge.split(" ");
console.log(arrChallenge2);
// question11:split string below at comma and change it to an array
itCompany = "Facebook, Google, Apple, IBM, Oracle, Amazon";
arritCompany = itCompany.split(" , ");
console.log(arritCompany);
// question12:In string, replace JavaScript with  Python  using replace() method
replaceChallenge = challenge.replace("JavaScript", "Python");
console.log(replaceChallenge);
// question13:find the charater at index 15 using charAT() method
charChallenge = challenge.charAt(15);
console.log(charChallenge);
// question14:find the charater code of'J'  using charAt() method
charChallenge = challenge.charCodeAt("J");
console.log(charChallenge);
// question15:find position of first occurence of 'a' in challenge string using indexOf() method
indxChallenge = challenge.indexOf("a");
console.log(indxChallenge);
// question16:find position of last occurence of 'a' in challenge string using lastindexOf() method
lastIndxChallenge = challenge.lastIndexOf("a");
console.log(lastIndxChallenge);
// question17:find position of first occurence of 'because' in the string below using indexOf() method
english =
  "You cannot end a sentence with  because because because is  a conjunction";
indxEnglish = english.indexOf("because");
console.log(indxEnglish);
// question18:find position of last occurence of 'because' in the string above using lastIndexOf() method
lastIndxEnglish = english.lastIndexOf("because");
console.log(lastIndxEnglish);
// question19:find position of first occurence of 'because' in the string above using search() method
searchEnglish = english.search("because");
console.log(searchEnglish);
// question20:use trim() method to remove white space at the beginning and end of the below string
whtspaceChallenge = "' 30 Days Of JavaScript ' ";
trimChallenge = whtspaceChallenge.trim();
console.log(trimChallenge);
// question21:use startsWith() method with the challenge string. Let it result in true.
startWordChallenge = challenge.startsWith(30);
console.log(startWordChallenge);
// question22:use endsWith() method with the challenge string. Let it result in true.
endingWordChallenge = challenge.endsWith("JavaScript");
console.log(endingWordChallenge);
// question23:use match() method to find all a's in the challenge string.
mtchingTxtChallenge = challenge.match("a");
console.log(mtchingTxtChallenge);
// question24:use concat() to merge the two strings below.
concatStr1 = "30 Days Of ";
concatStr2 = "JavaScript";
finalConcatStr = concatStr1.concat(concatStr2);
console.log(finalConcatStr);
// question25:use repeat() method to print challenge string 2 times.
repeatChallenge = challenge.repeat(2);
console.log(repeatChallenge);
