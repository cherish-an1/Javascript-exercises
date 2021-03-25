/*Exercises on introduction to programming */

// 1. Write a program that reads in (from standard input) a price of an item of clothing in dollars
// and then writes out to standard output how much the price would be if that item was at a 10% discount

function discountPrice (n) {

    let pricing = n - (n / 10);
    return pricing;
}

console.log(discountPrice(100));

// 2. Write a program that reads in two numbers from standard input: the price of sneakers before discount,
// and discounted price. The program should output the percentage of the sneakers that were discounted.

function discountDiscounted (a, b) {
    const dist = a * (b/100)

    const price = a - dist

    console.log(price);
}

discountDiscounted (50, 20)

// 3. Write a program that reads in (from standard input) the length of a movie in hours and minutes.
// The program should calculate and write out (to standard output) the length of the movie in minutes.

function time (n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round (minutes);
    var rsec = rminutes * 60;

    return num + " minutes = " + rhours + " hours " + rminutes + "minutes and " + rsec + "secconds.";
}

console.log(time(200));
//4. Write a program that reads in (from standard input) the length of a movie in hours, minutes, and seconds.
// The program should calculate and write out (to standard output) the length of the movie in seconds.

function time (n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round (minutes);
    var rsec = rminutes * 60;

    return num + " minutes = " + rhours + " hours " + rminutes + "minutes and " + rsec + "secconds.";
}

console.log(time(500));

// 5. Write a program that reads in one natural number (let us call it n) and then prints out squares of the
// first n natural numbers.

function squarePrint (xy) {
    let square = 0, prev_x = 0;

    for (let x = 0; x < nz; x++) {
        square = (square + x + prev_x);

        console.log(square + " ");
        prev_x = x;
    }
}

let xy = 5;
squarePrint(nz);

// 6. Write a program that reads in two numbers (from standard input) and then writes out the value of the 
// smaller ones.

// 7. Write a program that reads in three different numbers and then writes out the value of the smallest one.


// 8. Write a program that reads in one natural number and then writes out a message telling whether the given
// number has exactly two digits.

// 9. Let us play with corporate taxes. Write a program that reads in two numbers: the annual income and annual
// expenses of a company, expressed in dollars. The program has to write out the amount of tax that the company
// has to pay; let us call it the profit tax. If the expenses are greater than the income, then the profit tax 
// equals 0 dollars. Otherwise, let the profit tax be equal to 20% of the profits, where profits equal the 
//difference of income and expenses.

// 10. Write a program that reads in a number n. Then it should write out the first power of number 10 that is
// greater than number n. The powers of number 10 are 1, 10, 100, 1000, 10000, and so on.

// 11. Write a program that reads in a number n. Then it should write out all the powers of number 10 that are smaller
// than the number n.

// 12. Write a function named Sub which takes two arguments of type double, and returns the result of subtracting the
// second one from the first one. Use this function to calculate 3.2 – 8 and write out the result. The result should be -4.8.

var sub = 3.2 - 8;
console.log(sub)
// 13. Write a JavaScript program to get a list of elements that exist in both arrays.

var name = ["Mary", "Cecila", "Angela", "Alex"]
var age = [20, 21, 23, 22]

// 14. Write a JavaScript program to remove specified elements from the left of a given array of elements.

var array = ["Ngozi", "A", ["girl"]];
var removeArray = array.shift();

console.log(removeArray);

// 15. Write a JavaScript program to filter out the element(s) of a given array, that has one of the specified values
var array = ["Apple", "Banana", "Orange" ];

let result = array.filter(array => array.length > 5);

console.log(result);

// 16. Write a JavaScript program to get the sum of a given array, after mapping each element to a value using the provided function

var number = [4, 9, 16, 25];
var x = number.map(Math.sqrt);
var x

console.log (x);

// 17. Write a JavaScript program to get a random number in the specified range.
function r () {
    return Math.floor(Math.random() * 255);
}
console.log(r());

// 18. Write a JavaScript program to round a number to a specified amount of digits. 
var num = 5.56789;
var l = num.toFixed();

console.log(l);

// 19. Write a JavaScript program to capitalize the first letter of every word in a string.

const weather= "rain";
const upper = weather.toUpperCase();

console.log(upper);

var publication = "heavy";
var capitalize = publication[0].toUpperCase();
console.log(capitalize);

// 20. Write a JavaScript program to get all the elements of an array except the last one. 
var middlePoints = ["start", "a", "b", "c", "end"];
var origin = middlePoints.shifts();
var destination = middlePoints.pop();

console.log(destination);
