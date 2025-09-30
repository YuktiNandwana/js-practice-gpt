// function sayHello() {
//   console.log("Hello, Yukti!");
// }
// sayHello();

//functions with parameter

function greet (aunty){
    console.log("namaste " + aunty );
}
greet("sunita ji");
greet("lata ji");

//function with return 

//Add
function add (x,y){
    return x+y;
}
let result=add(2,5);
console.log(result);

//Subtract
function subtract (a,b){
    return a-b;
}
let output=console.log(subtract(11,3));

// task1

function square (number){
return number *number;
}
let outputSquare = console.log(square(9));

//task2

function isAdult (age){
if(age<=18){
   return true;
}else{
   return  false;
}

}
console.log(isAdult(2));

//task3 

function findMax (n1,n2){
return n1>n2?n1:n2;
}
console.log(findMax(10,18));