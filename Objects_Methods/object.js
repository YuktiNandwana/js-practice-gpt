let profile ={
    name:"yukti nandwana",
    age: 20,
    school: "bvp"
}
console.log(profile.name);
console.log(profile);

//object ke andr funcitons(methods)

let bioData ={
    name:"disha",
    age:24,
    greet: function(){
        console.log("what are you doing ?" + this.name);
    }
}
    bioData.greet();

    // Shorter Syntax (ES6)

    // let personal ={
    //     purse:"gucci",
    //     makeup:"loreal",
    //     ytEvent(){
    //         console.log("ohh my god ! you have this branded purse of "+ this.purse);
    //     }
    // };
    // personal.ytEvent();

// Arrow Function inside Object

// Arrow functions this ko object se nahi, surrounding scope se lete hain.

let profile5 = {
  name: "Yukti",
  greet: () => console.log("Hi, " + this.name)
};

profile5.greet(); // Hi, undefined

// Isiliye object methods me arrow functions avoid karo agar this use karna hai.


//task 1
 let car = {
    brand:" maruti",
    model:"audi xuv",
    year:2000,
    info: function() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
 };
 car.info();

 //task 2 student object

 let  student ={
    name:"yukz",
    marks:5,
    isPass: function(){
return this.marks>=40;
    }
 }
 console.log(student.isPass());
 
 //calclator object

 let calculator={
    add:function(a,b){ return a+b;},
subtract:function(a,b){ return a-b;},
multiply:function(a,b){ return a*b;},
divide:function(a,b){ return a/b;},

 }
 console.log(calculator.add(7,8));
 console.log(calculator.subtract(7,8));
 console.log(calculator.multiply(7,8));
 console.log(calculator.divide(7,8));
