//1. default parameters

// function greet(name = "guest") {
//     console.log(`hello,${name}`);
// }
// greet("yukz");
// greet();

//2. higher order functions (hof)
// function jo dusre functions ko arguent mei letw ya return krte hai

//1. FUNCTION AS ARGUMENT
// function greet(name) {
//     return `hello, ${name}`;
// }

// function processInput(callback) {
//     let name = "Yukti";
//     console.log(callback(name));
// }

// processInput(greet);

// // Example 2: Function returning Function

// function multiplier(factor) {
//     return function (num) {
//         return num * factor;
//     };
// }
// let double = multiplier(2);
// console.log(double(5));



// 1 default parameters

// function greet(name = "guest") {
//     console.log(`hello,${name}!`)
// }
// greet("yukti nandwana");

// 2 hof = Functions jo dusre function ko argument me lete ya return karte hain
// function add(a, b) {
//     return a + b;
// }
// function calculator(fn, x, y) {
//     return fn(x, y);
// }
// console.log(calculator(add, 4, 5));

// 3. Callbacks= function ko parameter ke roop me pass krna

// function sayHello(name){
//     console.log("hello,"+name);
// }
// function greetUser(callback){
// let user="yukt";
// callback(user);
// }
// greetUser(sayHello);

//normal function

// function sayBy(name) {
//     console.log("hello" + name);
// }
// sayBy("himani");


//callback

// function greetUser(callback) {
//     let user = "neha";
//     callback(user);
// }
// greetUser(hey);

//closures=function jo apni outer function ki varibles access kr skee.

// function outer() {
//     let count = 0;
//     return function inner() {
//         count++;
//         console.log("count:", count);
//     }
// }
// let counter = outer();
// counter();
// counter();
// counter();

//IIFE = IMMEDIATELY INVOKED FUNCTON EXPRESSIONS

// You create a function (function(x,y){ return x+y; })

// You immediately call it with (5,10)

// Inside: return x+y → 5+10 = 15

// That returned value goes into result.

// 👉 Think of it like this:
// An IIFE is a snack you cook and eat instantly 🍪 — no saving for later.
// You make the function, you feed it values, and you get the result on the spot.

// TASK
// 
// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply(3, 7));

// 2. operate (fn,a,b) = hof example
// function operate(fn, a, b) {
//     return fn(a, b);
// }
// function add(x, y) {
//     return x + y;
// }
// console.log(operate(add, 50, 2));

// 3.greetUser("Yukti", callbackFn) → callback function

// function greetUser(name, callbackFn) {
//     console.log("hi" + name);
//     callbackFn();
// }
// function sayBye() {
//     console.log("goodBye");
// }
// greetUser("jamna", sayBye);

//4. closure=function inside function remembers th outer variable.

function counter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    }
}
let c = counter();
c();
c();
c();
c();
c();
c();