/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: 
BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

var massMark = 68; //kg
var massJohn = 59;

var heightMark = 1.67; //meter
var heightJohn = 1.67;

var bmiMark = massMark / (heightMark * heightMark);
console.log('Mark\'s BMI: ', bmiMark);
var bmiJohn = massJohn / (heightJohn^2);
console.log('John\'s BMI: ', bmiJohn);

var isMarkHeavier = bmiMark > bmiJohn;
console.log('Does Mark have a higher BMI than John? ', isMarkHeavier);