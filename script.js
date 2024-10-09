                 //   DATE METHOD

// 1. Program that displays current date and time in the browser:
var currentDate = new Date();
document.write("Current Date and Time: " + currentDate);

// 2. Program that alerts the current month in words:
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = new Date().getMonth();
alert("Current Month: " + months[currentMonth]);

// 3. Program that alerts the first 3 letters of the current day:
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDay = new Date().getDay();
alert("Today is: " + days[currentDay]);

// 4. Program that displays "It's Fun day" if it's Saturday or Sunday:
var today = new Date().getDay();
if (today === 6 || today === 0) {
    alert("It's Fun day");
}

// 5. Program that shows whether it's the first 15 days or last days of the month:
var todayDate = new Date().getDate();
if (todayDate < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}

// 6. Program that determines the minutes since Jan 1, 1970:
var minutesSince1970 = Math.floor(new Date().getTime() / 60000);
alert("Minutes since midnight, Jan 1, 1970: " + minutesSince1970);

// 7. Program that checks whether it's AM or PM:
var hours = new Date().getHours();
if (hours < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}
// 8. Program that creates a Date object for the last day of the last month of 2020:
var laterDate = new Date(2020, 11, 31); // Months are 0-indexed
alert("Later Date: " + laterDate);

// 9. Program to alert the number of days since 1st Ramadan (June 18, 2015):
var ramadanStart = new Date("June 18, 2015");
var todayDate = new Date();
var timeDifference = todayDate - ramadanStart;
var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
alert("Days since 1st Ramadan: " + daysPassed);

// 10. Program that displays the seconds between reference date and Jan 1, 2015:
var referenceDate = new Date();
var start2015 = new Date("January 1, 2015");
var secondsElapsed = Math.floor((referenceDate - start2015) / 1000);
document.write("Seconds since the beginning of 2015: " + secondsElapsed);

// 11. Program that resets the date an hour ahead:
var date = new Date();
var hours = date.getHours();
date.setHours(hours + 1);
document.write("Date an hour ahead: " + date);

// 12. Program that resets the date to 100 years back:
var date = new Date();
date.setFullYear(date.getFullYear() - 100);
alert("Date 100 years back: " + date);

// 13. Program that calculates and shows birth year:
var age = prompt("Enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
document.write("Your birth year is: " + birthYear);

// 14. Program to generate a K-Electric bill:
var customerName = prompt("Enter customer name:");
var month = prompt("Enter current month:");
var units = parseFloat(prompt("Enter number of units:"));
var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
var latePaymentSurcharge = parseFloat(prompt("Enter late payment surcharge:"));

var netAmount = units * chargesPerUnit;
var grossAmount = netAmount + latePaymentSurcharge;

document.write(`<h2>K-Electric Bill</h2>`);
document.write("Customer Name: " + customerName + "<br>");
document.write("Current Month: " + month + "<br>");
document.write("Number of Units: " + units + "<br>");
document.write("Charges per Unit: " + chargesPerUnit.toFixed(2) + "<br>");
document.write("Net Amount Payable (within Due Date): " + netAmount.toFixed(2) + "<br>");
document.write("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmount.toFixed(2) + "<br>");



        //    CHAP 34 TO 38      "FUNCTION"



        // 1. Function that displays current date & time in your browser
function showDateTime() {
    var currentDate = new Date();
    document.write("Current Date and Time: " + currentDate + "<br>");
}
showDateTime();

// 2. Function that takes first & last name and greets the user
function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    alert("Hello, " + fullName + "!");
}
greetUser("John", "Doe");

// 3. Function that adds two numbers (input by user) and returns the sum
function addNumbers() {
    var num1 = parseFloat(prompt("Enter first number:"));
    var num2 = parseFloat(prompt("Enter second number:"));
    var sum = num1 + num2;
    return sum;
}
document.write("Sum: " + addNumbers() + "<br>");

// 4. Calculator function that takes two numbers and an operator
function calculator(num1, num2, operator) {
    var result;
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator";
    }
    return result;
}
document.write("Result: " + calculator(5, 3, '+') + "<br>");

// 5. Function that squares its argument
function square(num) {
    return num * num;
}
document.write("Square: " + square(4) + "<br>");

// 6. Function that computes the factorial of a number
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
document.write("Factorial: " + factorial(5) + "<br>");

// 7. Function that takes start and end number as inputs and displays counting
function displayCounting(start, end) {
    for (var i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}
displayCounting(1, 10);

// 8. Nested function that computes the hypotenuse of a right-angled triangle
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return num * num;
    }
    var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
    return hypotenuse;
}
document.write("Hypotenuse: " + calculateHypotenuse(3, 4) + "<br>");

// 9. Function that calculates the area of a rectangle (Arguments as values and variables)
function calculateArea(width, height) {
    return width * height;
}
document.write("Area: " + calculateArea(5, 10) + "<br>");
var width = 6;
var height = 12;
document.write("Area (using variables): " + calculateArea(width, height) + "<br>");

// 10. Function that checks if a string is a palindrome
function isPalindrome(str) {
    var reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
document.write("Is palindrome: " + isPalindrome("madam") + "<br>");

// 11. Function that capitalizes the first letter of each word
function capitalizeFirstLetter(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}
document.write("Capitalized: " + capitalizeFirstLetter('the quick brown fox') + "<br>");

// 12. Function that finds the longest word in a string
function findLongestWord(str) {
    var words = str.split(' ');
    var longestWord = words[0];
    for (var i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
document.write("Longest word: " + findLongestWord('Web Development Tutorial') + "<br>");

// 13. Function that counts occurrences of a specified letter
function countOccurrences(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            count++;
        }
    }
    return count;
}
document.write("Occurrences of 'o': " + countOccurrences('JSResourceS.com', 'o') + "<br>");

// 14. The Geometrizer - Calculate properties of a circle

// i. Function to calculate the circumference of a circle
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write("The circumference is " + circumference.toFixed(2) + "<br>");
}
calcCircumference(5);

// ii. Function to calculate the area of a circle
function calcArea(radius) {
    var area = Math.PI * radius * radius;
    document.write("The area is " + area.toFixed(2) + "<br>");
}
calcArea(5);