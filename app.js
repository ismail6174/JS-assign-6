 
// JS Assignment # 6 - Starts


// chapter 21-25 "String Method" - Starts


/* 1. Write a program that takes two user inputs for first and 
last name using prompt and merge them in a new variable 
titled fullName. Greet the user using his full name. */

var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName= firstName+lastName;

console.log("Hello", fullName);


/* 2. Write a program to take a user input about his favorite 
mobile phone model. Find and display the length of user 
input in your browser */


var favPhone = prompt("Enter your favourite phone model name");
var index = favPhone.length;
console.log("My favourite phone is: ",favPhone) 
console.log("Length of string is" , index)

 
/* 3. Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser . */

var strg = "Pakistan";
console.log("String:",strg)
var index = strg.indexOf("n");
console.log("index of 'n' is:",index)
 
/* 4. Write a program to find the last index of letter “l” in the 
word “Hello World” and display the result in your browser. */
 
var strg = "Hello World";
var slice = strg.slice(6);
var lastInd = slice.indexOf("l");
console.log("String:" ,strg)
console.log("Last index of 'l' is:" ,lastInd)


/* 5. Write a program to find the character at 3rd index in the 
word “Pakistani” and display the result in your browser. */

var strg = "Pakistan";
console.log("String:",strg)
var indexNum = strg[3];
console.log("Character at index 3 is:",indexNum)
 
//6. Repeat Q1 using string concat() method.

var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName= firstName.concate(lastName);

console.log("Hello", fullName);

/* 7. Write a program to replace the “Hyder” to “Islam” in the 
word “Hyderabad” and display the result in your browser. */

var city = "Hyderabad";
var replace = city.slice(5);
var update = "Islam";
console.log("City:", city)
console.log("After replacement:",update + replace)

/* 8. Write a program to replace all occurrences of “and” in the
string with “&” and display the result in your browser.
 */

var message = "Ali and Sami are best friends.They play cricket and football together.";
var upd_message= message.replaceAll("and","&");
console.log(upd_message)

/* 9. Write a program that converts a string “472” to a number 
472. Display the values & types in your browser. */

var strg = "472";
console.log("Value:",strg)
console.log("Type:",typeof strg);
var num = Number(strg);
console.log("Value:",num)
console.log("Type:",typeof num)

/* 10. Write a program that takes user input. Convert and 
show the input in capital letters. */

var userInp = prompt("Enter any text");
var cap_let = userInp.toUpperCase();
console.log("User Input:",userInp)
console.log("Upper case:",cap_let)
 
/* 11. Write a program that takes user input. Convert and 
show the input in title case. */

var userInp = prompt("Enter any text");
var frstChar = userInp.slice(0,1).toUpperCase() ;
var remainChar = userInp.slice(1).toLowerCase() ;
var updated = frstChar + remainChar;
console.log("User Input:",userInp)
console.log("Title case:",updated)


/* 12. Write a program that converts the variable num to 
string.
var num = 35.36 ;
Remove the dot to display “3536” display in your browser. */

var num = 35.36;
var num_str = num.toString();
var copy1 = num_str.slice(0,2);
var copy2 = num_str.slice(3,5);
console.log("Number:",num)
console.log("Result:",copy1 + copy2)
 
 
/* 13. Write a program to take user input and store username 
in a variable. If the username contains any special symbol 
among [@ . , !], prompt the user to enter a valid username. 
For character codes of [@ . */

// will ask to sir!!!

var username = prompt("Enter a username:");

if (username.includes('@') || username.includes('.') || username.includes(',') || username.includes('!')) {
    alert("Please enter a valid username.");
} else {
    alert("Username storedp     successfully!");
}

/* 14. You have an array
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an 
array. After searching, prompt the user whether the given 
item is found in the list or not. */

var user_item= prompt("Welcome to our bakery.What do you want to order mam/sir?")
var bakery_item=["cake","bread","cookie",
"chips","patties"]
var flag = false;

for(var i = 0;i < bakery_item.length;i++){ if(user_item.toLowerCase()===bakery_item[i]){
    flag = true;
    console.log(user_item, "is available at index",bakery_item.indexOf(user_item),"in our bakery")
}
}
if(flag === false){
    console.log("We are Sorry, This bakery item is not available in our bakery")
}


/* 15. Write a program to take password as an input from 
user. The password must qualify these requirements:
a. It should contain alphabets and numbers
b. It should not start with a number
c. It must at least 6 characters long
If the password does not meet above requirements,
prompt the user to enter a valid password.
For character codes of a-z, A-Z & 0-9, refer to ASCII
table at the end of this document.
 */
 

//will ask to sir!!!


/* 16. Write a program to convert the following string to an 
array using string split method.
var university = “University of Karachi”;
Display the elements of array in your browser. */


//will ask to sir!!!


var university = "University of Karachi";
var uni_array = university.split("");

// Display each character in the browser without quotes

for (var i = 0; i < uni_array.length; i++) {
    console.log(uni_array[i]);
}

/* 17. Write a program to display the last character of a user input. */

var userInput = prompt("Enter a word:");
var lastChar = userInput[userInput.length - 1];
console.log("User input:", userInput);
console.log("Last character of input:", lastChar);


/* 18. You have a string “The quick brown fox jumps over the 
lazy dog”. Write a program to count number of 
occurrences of word “the” in given string */

//will ask to sir!!!



// chapter 21-25 "String Method" - Ends
 
 
 
// chapter 26-30 "Math Methods" - Starts
 

/* 1. Write a program that takes a positive integer from user &
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number
 */
  
var userNum = parseInt(prompt("Enter Any positive number"));
var rounding = Math.round(userNum);
var floor = Math.floor(userNum);
var ceiling = Math.ceil(userNum);
console.log("Number:",userNum)
console.log("round off value:",rounding)
console.log("floor value:",floor)
console.log("ceil value:",ceiling)

/* 2. Write a program that takes a negative floating point
number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */


var userNum = parseFloat(prompt("Enter Any positive number"));
var rounding = Math.round(userNum);
var floor = Math.floor(userNum);
var ceiling = Math.ceil(userNum);
console.log("Number:",userNum)
console.log("round off value:",rounding)
console.log("floor value:",floor)
console.log("ceil value:",ceiling)

/* 3. Write a program that displays the absolute value of a 
number.
E.g. absolute value of -4 is 4 & absolute value of 5 is 5 */

var value1 = -4;
var value2 = 5;
var absValue1 = Math.abs(value1);
var absValue2 = Math.abs(value2);

console.log("the absolute value of",value1,"is",absValue1)

console.log("the absolute value of",value2,"is",absValue2)

/* 4. Write a program that simulates a dice using random() 
method of JS Math class. Display the value of dice in your 
browser.: */

var dice1 = Math.round(Math.random()*5+1);
var dice2 = Math.round(Math.random()*5+1);
console.log("random dice value is:",dice1)
console.log("random dice value is:",dice2)


/* 5. Write a program that simulates a coin toss using random()
method of JS Math class. Display the value of coin in your
browser */

var coin1 = Math.round(Math.random()*1+1);
console.log(coin1)
if(coin1 == 1){
    document.write("random coin value is: Tails");
}
else{
    document.write("random coin value is: Heads");
}
var coin2 = Math.round(Math.random()*1+1);
console.log(coin2)
if(coin2 == 2){
    document.write("random coin value is: Heads");
}
else{
    document.write("random coin value is: Tails");
}

/* 6. Write a program that shows a random number between 1 
and 100 in your browser. */

var Num1_100 = Math.round(Math.random()*101);
document.write(Num1_100)
 

/* 7. Write a program that asks the user about his weight. Parse 
the user input and display his weight in your browser. 
Possible user inputs can be:
a. 50
b. 50kgs
c. 50.2kgs
d. 50.2kilograms */

var userInput= prompt("Enter your weight in kilograms");
var user_weight = parseFloat(userInput);
document.write("the weight of user is",user_weight,"kilograms")


/* 8. Write a program that stores a random secret number from 
1 to 10 in a variable. Ask the user to input a number 
between 1 and 10. If the user input equals the secret 
number, congratulate the user. */

var secretNum = Math.round(Math.random()*9+1);
var userNum = +prompt("Enter a number between 1 to 10");
if(userNum == secretNum){
    alert("congratulation! you got the secret number")
}
else{
    alert("Try again!")
}
 
 
// chapter 26-30 "Math Methods" - Ends
 
 
// chapter 31-34 "Data Methods" - Starts
 
 
/* 1. Write a program that displays current date and time in 
your browser. */
 
var zone = new Date();
console.log(zone)
 
/* 2. Write a program that alerts the current month in words. 
For example December. */

var month_name = ["january","febuary","march","april","may","june","july","august","september","october","november","december"]
var monthNum = new Date().getMonth();
var nameofMonth = month_name[monthNum];
alert("Current Month :" + nameofMonth)

/* 3. Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show 
Sun. */

var week = ["Sun","Mon","tues","Wed","Thurs","Fri","Sat"]
var weekNum = new Date().getDay();
var dayName = week[weekNum];
alert("Today is", dayName)


/* 4. Write a program that displays a message “It’s Fun day” if 
its Saturday or Sunday today. */


var week = ["Sun","Mon","tues","Wed","Thurs","Fri","Sat"]
var weekNum = new Date().getDay();
var dayName = week[weekNum];
if(dayName === week[weekNum]){
    alert("Its Fun Day")
}

/* 5. Write a program that shows the message “First fifteen 
days of the month” if the date is less than 16th of the month 
else shows “Last days of the month”. */

var daysofMonth = new Date().getMonth();
if(daysofMonth <= 15){
    alert("first fifteen days of month")
}
else{
    alert("last fifteen days of month")
}


/* 6. Write a program that determines the minutes since 
midnight, Jan. 1, 1970 and assigns it to a variable that 
hasn't been declared beforehand. Use any variable you like 
to represent the Date object. */


var current = new Date();
var milli_sec = current.getTime();
//1seconds = 1000m.s & 1minutes = 60sec
var minutes = current.getTime()/1000/60;
alert("Current Date :"+ current);
alert("Elapsed milliseconds since january 1,1970 :" + milli_sec);
alert(alert("Elapsed minutes since january 1,1970 :" + minutes);

/* 7. Write a program that tests whether it's before noon and 
alert “Its AM” else “its PM”. */

var time = new Date().getHours();
if(time < 12){
    alert("Its A.M")
}
else{
    alert("Its P.M")
}


/* 8. Write a program that creates a Date object for the last day 
of the last month of 2020 and assigns it to variable named 
laterDate. */

var laterDate = new Date("31 dec, 2020");

alert(laterDate);

/* 9. Create a date object of the starting date of this Ramadan 
and alert the number of days past since 1st Ramadan?
Note: 1st Ramadan was on June 18, 2015 */


var firstRamadan = new Date("March 2, 2025").getTime();

var currentDate = new Date().getTime();

var timeDiffer = currentDate - firstRamadan;

var daysPassed = Math.floor(timeDiffer / (1000 * 60 * 60 * 24)); //convert milliseconds into days 

alert(daysPassed + " days have passed since 1st Ramadan, 2025");

//this whole concept is mentioned in book page 106

/* 10. Write a program that displays in your browser the 
seconds that elapsed between the reference date and the 
beginning of 2025. */

var begin2025 = new Date("January 1, 2025").getTime();

var currentDate = new Date().getTime();

var timeDiffer = currentDate - begin2025;

var daysPassed = Math.floor(timeDiffer / (1000 )); //convert milliseconds into seconds 

alert(daysPassed + " seconds had passed since begining of 2025");

/* 11. Create a Date object for the current date and time. 
Extract the hours, reset the date object an hour ahead and 
finally display the date object in your browser. */


var currentDate = new Date();

console.log("Current date: " + currentDate);

pastDate = new Date(currentDate);
pastDate.setHours(currentDate.getHours() - 1);

console.log("1 hour ago, it was: " + pastDate);


/* 12. Write a program that creates a date object and show the 
date in an alert box that is reset to 100 years back? */


var currentDate = new Date();

console.log("Current date: " + currentDate);

pastYear = new Date(currentDate);
pastYear.setFullYear(currentDate.getFullYear() - 100);

console.log("100 years ago, it was: " + pastYear);


/* 13. Write a program to ask the user about his age. Calculate 
and show his birth year in your browser. */

var userAge = +prompt("Enter your age");
 
var current = new Date().getFullYear();

var birthYear = current - userAge;

console.log("Your age is " + userAge)
console.log("Your birth year is " + birthYear);


/* 14. Write a program to generate your K-Electric bill in your
browser. All the amounts should be rounded off to 2 
decimal places. Display the following fields:
a. Customer Name
b. Current Month
c. Number of units
d. Charges per unit
e. Net Amount Payable (within Due Date)
f. Late Payment Surcharge
g. Gross Amount Payable (after Due Date)
Where,

Net Amount Payable (within Due Date) = Number of units * Charges per unit
& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
 */

var bill = "K-Electric Bill"; 
var costumername = "Ismail Shah";
var month = "March";
var unitsNum = 410 ;
var charges = 16;

var netAmount = unitsNum * charges;
var duecharges = 350;
var dueAmount = netAmount + duecharges;

console.log(bill)
console.log("Costumer name :" + " " + costumername )
console.log("Month :"+" " + month)
console.log("Number of units :" +" " + unitsNum)
console.log("Charges per unit :" +" " + charges)
console.log("Net Amount Payable (within Due Date) :" +" " + netAmount)
console.log("Late payment surcharge :" +" " + duecharges)
console.log("Gross Amount Payable (after Due Date) :" +" " + dueAmount)


// dynamic electric bill !

var costumername = prompt("Enter your name");
var month = prompt("Enter month name");
var unitsNum = +prompt("Enter your units") ;
var charges = +prompt("Enter per unit charges");

var netAmount = unitsNum * charges;
var duecharges = 350;
var dueAmount = netAmount + duecharges;

document.write("<h1>K-Electric Bill<\h1>","<br>","Costumer name :" + " " + costumername,"<br>","Month :"+" " + month,"<br>","Number of units :" +" " + unitsNum ,"<br>","Charges per unit :" +" " + charges ,"<br>","Net Amount Payable (within Due Date) :" +" " + netAmount ,"<br>","Late payment surcharge :" +" " + duecharges ,"<br>","Gross Amount Payable (after Due Date) :" +" " + dueAmount);



// chapter 31-34 "Data Methods" - Ends


// JS Assignment # 6 - Ends








