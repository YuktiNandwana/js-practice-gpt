let myFav =["japan","india","hongkong"];
console.log(myFav);

// //access by index
// console.log(myFav[2]);
 
//array properties

// console.log(myFav.length);

//array Methods

// myFav.push("dubai");  //last mei elemnet add hota hai
// console.log(myFav);

myFav.pop();   //last wala elemnet reemove hota hai
console.log(myFav);

myFav.unshift("switzeland"); // first pr add hota hai
console.log(myFav);

myFav.shift()   //starting se remove
console.log(myFav);



//Loops with array

//normal loops
for(let i=0;i<=myFav.length;i++){
    console.log(myFav);
}

myFav.push("rajasthan");
//for..of loop

for(let city of myFav){
    console.log(myFav);
}