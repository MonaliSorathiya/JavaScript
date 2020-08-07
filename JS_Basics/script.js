/*****************************
* Variables and data types
*/
/*
var firstName = 'John'; //string

var age = 28; //number

var fullAge = true; //boolean
console.log(fullAge);

var job; //undefined or null
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
//Rule1. variable can not start with numbers or symbols,except for the dollar sign and an underscore.
var $3years = 3;
var _3years = 3;
//var 3years = 3 ; //uncaught syntax error

//2. we can not use reserved JavaScript keywords as a variable name like function, delete, if,else...etc.
var johnMark = 'John and MArk'; 
//var if = 23; //uncaught syntax error
*/

/*****************************
* Variable mutation and type coercion
*/
/*
var firstName = 'John';
var age = 28;
// Type coercion
console.log(firstName + ' ' + age);
var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//Variable mutation
age = 'Twenty-two';
console.log(firstName + ' ' + age);
alert(firstName + ' is a ' + age + ' years old ' + job + ' Is he married ? ' +  isMarried);
var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName); 
*/

/*****************************
* Basic operators
*/
/*
var yearJohn = 2018 - 28;
console.log(yearJohn);
var yearMark = 2018 - 30;
console.log(yearMark);

//Math Operator
var year = 2018;
yearJohn = 2018 - 28;
yearMark = 2018 - 30;
console.log(yearJohn,yearMark);
console.log(year + 2);
console.log(year - 2);
console.log(year * 2);
console.log(year / 2);

//logical operator
var greaterAge = yearJohn > yearMark;
console.log('greaterAge',greaterAge);
var lessAge = yearJohn < yearMark;
console.log('lessAge',lessAge);

//typeof operator
console.log(typeof year);
console.log(typeof greaterAge);
console.log(typeof 'JavaScript');
var x;
console.log(typeof x);
*/

/*****************************
* Operator precedence
*/
/*
year = 2018;
yearJohn = 1989;
var fullAge = 18;
var isFullAge = year - yearJohn >= fullAge;
console.log(isFullAge);
            //Calculate average of john and his friend
var averageAge = yearJohn + yearMark / 2;
console.log(averageAge);
var groupBlock = (yearJohn + yearMark) / 2;
console.log(groupBlock);
            //you have a value that you want to assign to multiple variable at the same time
var x, y;
x = (3 + 5) * 4 - 6;
console.log(x);
            //assign this to x and y at the same time 
x = y = (3 + 5) * 4 - 6;
console.log(x, y);
            //more operation
x *= 2; //this is the exact same thing( x = x * 2)
console.log(x);
x /= 2;
console.log(x);
x -= 2;
console.log(x);
x += 2;
console.log(x);
x--;
console.log(x);
x++;
console.log(x);
*/

/*****************************
* CODING CHALLENGE 1
*/
/*
Mark and John are trying to compare their BMI (Body Mass Index),which is calculated using the formula: 
BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. 
(Something like "Is Mark's BMI higher than John's? true"). 
*/
var massMark = 68;
var heightMark = 1.95;
var massJohn = 78;
var heightJohn = 2.85;

var markBMI = massMark / (heightMark * heightMark);
console.log('Mark BMI',markBMI);
var johnBMI = massJohn / (heightJohn * heightJohn);
console.log('John BMI', johnBMI);

var higherBMI  = markBMI > johnBMI;
console.log('Is Mark BMI higher than john?',higherBMI);

/*****************************
* If / else statements
*/
/*
var status = 'married';
if(status === 'single')
{
    console.log(firstName + 'is a not married'); // output nothing
}
if(status === 'married')
{
    console.log(firstName + ' is a married '); // output ( john is a married)
}

status = 'single'
if(status === 'married')
{
    console.log(firstName + ' is a married '); 
}
else{
    console.log(firstName + ' will hopefully marry soon ...!!! '); //output ( john will hopefully marry soon ...!!! )
}

if(markBMI > johnBMI){
    console.log('Mark BMI higher than john BMI');
}else{
    console.log('John BMI higher than mark BMI');
} //OUTPUT : (Mark BMI higher than john BMI)
*/

/*****************************
* Boolean logic
*/
/*
var firstName = 'John';
var age = 20;
//11 - boy , 13 - teenager , 15 - young man , 18 - man
if(age < 11){
    console.log(firstName + ' is a boy ');
}else if (age >= 13 && age >= 15){
    console.log(firstName + ' is a teenager ');
}else if (age <= 13 && age <= 15){
    console.log(firstName + ' is a young man ');
}else{
    console.log(firstName + ' is a man ');
} //OUTPUT : (john is a teenager)
*/

/*****************************
* The Ternary Operator and Switch Statements
*/
/*
var firstName = 'John';
var age = 16;
		//Ternary Operator
age >= 20 ? console.log(firstName + ' drinks beer ') : console.log(firstName + ' drinks juice ');
//OUTUT : ( john drinks juice )
age = 20;
var drink = age >= 20 ? 'beer' : 'juice';
console.log(firstName + ' drinks',drink); // OUTPUT : john drinks beer

        //Switch statement
job = 'teacher';
switch(job){
    case 'teacher' :
        console.log(firstName + ' teaches code to kids ');
        break;
    case 'designer' :
        console.log(firstName + ' design website ');
        break;
    case 'driver' :
        console.log(firstName + ' drives the car ');
        break;
    default : 
        console.log(firstName + ' does something else'); // OUTPUT : john teaches code to kids
}

job = 'cop';
switch(job){
    case 'teacher' :
        console.log(firstName + ' teaches code to kids ');
        break;
    case 'designer' :
        console.log(firstName + ' design website ');
        break;
    case 'driver' :
        console.log(firstName + ' drives the car ');
        break;
    default : 
        console.log(firstName + ' does something else'); // OUTPUT : john does something else
}

// now we can also have multiple case clauses for the same code that we want to execute 
//for ex. if we want to exexcute , if the job is a teacher or also ,let's say instructor 
job = 'instructor';
switch(job){
    case 'teacher' :
    case 'instructor' :
        console.log(firstName + ' teaches code to kids ');
        break;
    case 'designer' :
        console.log(firstName + ' design website ');
        break;
    case 'driver' :
        console.log(firstName + ' drives the car ');
        break;
    default : 
        console.log(firstName + ' does something else'); // OUTPUT : john teaches code to kids
}

age = 17;
switch(true){
    case age < 11 :
        console.log(firstName + ' is a boy ');
    case age >= 13 && age >= 15 :
        console.log(firstName + ' is a teenager ');
    case age <= 13 && age <= 15 :
        console.log(firstName + ' is a young man ');
    default : 
        console.log(firstName + ' is a man ');
}
*/


/*****************************
* Truthy and Falsy values and equality operators
*/
/*
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;
if(height){
    console.log('The variable is defined')
}else{
    console.log('The variable has not been defined');
} //OUTPUT : (The variable has not been defined)

height = 33;
if(height){
    console.log('The variable is defined')
}else{
    console.log('The variable has not been defined');
}//OUTPUT : (The variable is defined)

height = 0;
if(height){
    console.log('The variable is defined')
}else{
    console.log('The variable has not been defined');
} //OUTPUT : (The variable has not been defined)

if(height || height === 0){
    console.log('The variable is defined')
}else{
    console.log('The variable has not been defined');
} //OUTPUT : (The variable is defined)

height = '';
if(height){
    console.log('The variable is defined')
}else{
    console.log('The variable has not been defined');
} //OUTPUT : (The variable has not been defined)

        //Equality operator (== ,===)
height = 50;
if(height == '50'){
    console.log('The == operator does type coercion !!');
} //OUTPUT : ('The == operator does type coercion !!')

if(height === '50'){
    console.log('The == operator does type coercion !!');
} //OUTPUT : nothing

//23 == '23' //output : true
//23 === '23' //output : false
*/


/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. 
Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account 
there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, 
log the average winner to the console. HINT: you will need the && operator to take the decision. 
If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
*/

var johnScore = 89 + 120 + 103 / 2;
var mikeScore = 116 + 94 + 123 / 2;
var maryScore = 97 + 134 + 105 / 2;
console.log(johnScore,mikeScore,maryScore);

if(johnScore > mikeScore && johnScore > maryScore){
    console.log('John\'s teams wins with ' + johnScore + ' points ');
}else if(mikeScore > johnScore && mikeScore > maryScore){
    console.log('Mike\'s teams wins with ' + mikeScore + ' points ');
}else if(maryScore > johnScore && maryScore > mikeScore){
    console.log('Mary\'s teams wins with' + maryScore + ' points ');
}else{
    console.log('There is a draw');
}//OUTPUT : (Mary's teams wins with 283.5 points)

if(johnScore > mikeScore){
    console.log('John\'s teams wins with ' + johnScore + ' points ');
}else if(mikeScore > johnScore){
    console.log('Mike\'s teams wins with ' + mikeScore + ' points ');
}else {
    console.log('There is a draw');
}//OUTPUT : (Mike's teams wins with 271.5 points)


/*****************************
* Functions
*/
/*
function calculateAge(birthYear){
    return 2020 - birthYear;
}

var ageJohn = calculateAge(1994);//26
var ageMike = calculateAge(1993);//27
var ageJane = calculateAge(1992);//28
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year,firstName){
    
    var age = calculateAge(year);
    var retirement = 65 - age; 
    console.log(firstName + ' is retires in ' + retirement + ' years');
}
yearsUntilRetirement(1996, 'John');//John is retires in 41 years (2020 - 1996 = 24 then 65 - 24 = 41)
yearsUntilRetirement(1994, 'Mike');//Mike is retires in 39 years
yearsUntilRetirement(1992, 'Jane');//Jane is retires in 37 years
    //With if...else statements
function yearsUntilRetirement(year,firstName){    
    var age = calculateAge(year);
    var retirement = 65 - age; 	
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    }else{
        console.log(firstName + ' is already retired.')
    }
}
yearsUntilRetirement(1996, 'John');//John is retires in 41 years (2020 - 1996 = 24 then 65 - 24 = 41)
yearsUntilRetirement(1994, 'Mike');//Mike is retires in 39 years
yearsUntilRetirement(1992, 'Jane');//Jane is retires in 37 years
*/

/*****************************
* Function Statements and Expressions
*/
/*
	// Function declaration
function whatDoYouDo(job, firstName) {}
	// Function expression
var funcVariable = function(job,firstName){
    switch(job){
        case 'teacher' : 
        return firstName + ' teaches code to kids ';
        
        case 'designer' :
        return firstName + ' design website ';
    
        case 'driver' :
        return firstName + ' drives the car ';
    
        default : 
        return firstName + ' does something else'; 
    }
}
console.log(funcVariable('teacher','John'));//John teaches code to kids 
console.log(funcVariable('designer','Mike'));//Mike design website 
console.log(funcVariable('driver','Jane'));//Jane drives the car 
console.log(funcVariable('cop','Joe'));//Joe does something else
*/

/*****************************
* Arrays
*/
/*
	// Initialize new array
var names = ['John','Mark','Online'];
console.log(names); //John Mark Online
console.log(names[0]);//John
	// Mutate array data
names[2] = 'Udemy'; //John Mark Udemy
names[names.length] = 'JavaScript'; 
console.log(names); //John Mark Udemy JavaScript
	//create new array
var year = new Array(1991,1992,1993);
console.log(year); //1991 1992 1993
	// Different data types
var john = ['John', 'Smith', 1990 ,'teacher', false];
console.log(john); //["John", "Smith", 1990, "teacher", false]
	//Different Method or function (push,pop,shift,unshift,indexOf)
john.push('Black'); //["John", "Smith", 1990, "teacher", false, "Black"]
console.log(john);

john.unshift('Mr.');
console.log(john);//["Mr.", "John", "Smith", 1990, "teacher", false, "Black"]

john.pop(); //["Mr.", "John", "Smith", 1990, "teacher", false]
console.log(john);

john.shift();
console.log(john);//["John", "Smith", 1990, "teacher", false]

john.indexOf('Smith'); //1
console.log(john);
john.indexOf(false); //4
console.log(john);
john.indexOf(1990); //2
console.log(john);
john.indexOf(25); //-1
console.log(john);

var isDesigner = john.indexOf('designer') === -1 ? ' john is not a designer ' : ' john is designer ';
console.log(isDesigner); // john is not a designer 
*/

/*****************************
* CODING CHALLENGE 3
*/
/*
John and his family went on a holiday and went to 3 different restaurants. 
The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between 
$50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
*/

function tipcalculator(bill){
    var percentage; 
    if(bill < 50){
        percentage = 0.2 ; //20% =0.2
    }else if(bill >= 50 && bill <=200){
        percentage = 0.15; //15% = 0.15
    }else{
        percentage = 0.1; //10% = 0.1
    }
    return percentage * bill;
}
console.log(tipcalculator(100)); //15

var bills = [124,48,268];
var tips = [tipcalculator(bills[0]),
            tipcalculator(bills[1]),
            tipcalculator(bills[2])];
var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];
console.log("tips",tips); //(3) [18.599999999999998, 9.600000000000001, 26.8] 
//How to calculate tips :  tipcalculator(bills) //tipcalculator(124);
console.log("final values",finalValues); //final values (3) [142.6, 57.6, 294.8]

/*****************************
* Objects and properties
*/
/*
	// Object literal
var bestFriend = {
    firstName : 'Suvodeep',
    nickName : '1Dx',
    birthYear : 1992,
    family : ['Dota','Dota','Dota'],
    job : 'Software Developer',
    isMarried : false
};
console.log(bestFriend); //{firstName: "Suvodeep", nickName: "1Dx", birthYear: 1992, family: Array(3), job: "Software Developer", …}

console.log(bestFriend.firstName); //Suvodeep

// console.log(bestFriend[nickName]); //Uncaught error
console.log(bestFriend['nickName']); //1Dx

var x = 'birthYear';
console.log(bestFriend[x]); //1992

bestFriend.job = 'Full Stack Developer';
console.log(bestFriend); //{firstName: "Suvodeep", nickName: "1Dx", birthYear: 1992, family: Array(3), job: "Full Stack Developer", …}
	//create new object
var mona = new Object();
mona.firstName = 'Mona';
mona.lastName = 'Sorathiya';
mona.birthYear = 1994;
mona.family = ['Jiya', 'Krishna', 'Manav'];
mona.job = 'Software Developer';
mona.isMarried = false;
console.log(mona); //{firstName: "Mona", lastName: "Sorathiya", birthYear: 1994, family: Array(3), job: "Software Developer", …}
*/

/*****************************
* Objects and methods
*/
/*
var objectMethod = {
    firstName : 'John',
    lastName : 'Smith',
    birthYear : 1992,
    family : ['John','Mike','Jane'],
    job : 'teacher',
    isMarried : false,
    // calcAge : function(birthYear){
    //     return 2020 - birthYear;
    // }
    calcAge : function(){
        return 2020 - this.birthYear;
    }
};
console.log(objectMethod); //{firstName: "John", lastName: "Smith", birthYear: 1992, family: Array(3), job: "teacher", …}
console.log(objectMethod.calcAge(1992)); //28 // without this

console.log(objectMethod.calcAge()); // 28 with this
*/

/*****************************
* CODING CHALLENGE 4
*/
/*
Let's remember the first coding challenge where Mark and John compared their BMIs. 
Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it 
from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and 
the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
*/

var johnBMIObject = {
    fullName : 'John Smith',
    mass : '78',
    height : 1.89,
    calcJohnBMI : function(){
        this.johnbmi = this.mass/(this.height * this.height);
        return this.johnbmi;
    }
}
console.log('JohnBMI',johnBMIObject.calcJohnBMI()); //JohnBMI 21.83589485176787

var markBMIObject = {
    fullName : 'Mark Smith',
    mass : '65',
    height : 1.69,
    calcMarkBMI : function(){
        this.markbmi = this.mass/(this.height * this.height);
        return this.markbmi;
    }
}
console.log('MarkBMI',markBMIObject.calcMarkBMI()); //MarkBMI 22.758306781975424

if(johnBMIObject.calcJohnBMI() > markBMIObject.calcMarkBMI()){
    console.log(johnBMIObject.fullName + ' is a higher bmi than mark bmi ' + johnBMIObject.johnbmi);
}else if(markBMIObject.calcMarkBMI() > johnBMIObject.calcJohnBMI()){
    console.log(markBMIObject.fullName + ' is a higher bmi than john bmi ' + markBMIObject.markbmi);
}else{
    console.log('tie');
} //OUTPUT : Mark Smith is a higher bmi than john bmi 22.758306781975424


/*****************************
* Loops and iteration
*/
/*
            // for loop
for(var i = 0; i < 10; i++){
    console.log(i);
}//OUTPUT : 0 1 2 3 4 5 6 7 8 9
		How to work loop ?
// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++
//...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 FALSE, exit the loop!


var arrJohn = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for(var i = 0; i < arrJohn.length; i++){
    console.log(arrJohn[i]);
}//OUTPUT : John Smith 1990 designer false blue

            //While loop
var i = 0;
while(i < arrJohn.length){
    console.log(arrJohn[i]);
    i++;
}//OUTPUT : John Smith 1990 designer false blue

            //continue statement
for(var i = 0; i < arrJohn.length; i++){
    if(typeof arrJohn[i] !== 'string'){
        continue;
    }
    console.log(arrJohn[i]);
}//OUTPUT : John Smith designer blue
 
        //Without curly braces continue statement
for(var i = 0; i < arrJohn.length; i++){
    if(typeof arrJohn[i] !== 'string') continue;
    console.log(arrJohn[i]);
}//OUTPUT : John Smith designer blue   

        //break statement
for(var i = 0; i < arrJohn.length; i++){
    if(typeof arrJohn[i] !== 'string') break;
    console.log(arrJohn[i]);
}//OUTPUT : John Smith
 
       // Looping backwards
for (var i = arrJohn.length - 1; i >= 0; i--) {
    console.log(arrJohn[i]);
} //OUTPUT : blue false designer 1990 Smith John
*/

/*****************************
* CODING CHALLENGE 5
*/
/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
*/

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
                
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            
            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
                
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            
            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}



















































