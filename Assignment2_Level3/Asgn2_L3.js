//question1: Count the number of word love in this sentence.
sentence1 =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let sentence1Pattern = sentence1.match(/love/gi);
let sentence1PatternCount = console.log(sentence1Pattern.length);
//question2: Use match() to count the number of all because in the following sentence
sentence2 =
  "You cannot end a sentence with because because because is a conjunction";
let sentence2Pattern = sentence2.match(/because/gi);
let sentence2PatternCount = console.log(sentence2Pattern.length);
//question3: Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence3 =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
console.log(sentence3.replace(/%|$|@|&|#/gi, ""));
//question3: Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
newTxt =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
newTxtPattern = newTxt.match(/\d+/g);

let annualIncome =
  newTxtPattern[0] * 12 + parseInt(newTxtPattern[1]) + newTxtPattern[2] * 12;
console.log(annualIncome);
