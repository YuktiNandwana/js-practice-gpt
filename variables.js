// let fullName = "Yukti Nandwana";
// console.log(fullName);
// let age=20;
// console.log(age);
// let isStudent = true;
// console.log(isStudent);
// let favFoods=["chiku","grapes","papaya"];
// console.log(favFoods);

let age = 20;

// Check if age > 18
console.log(age > 18); // true

// Expression that returns true with &&
console.log(age > 18 && age < 30); // true

// Expression that returns false with ||
console.log(age < 18 || age > 100); // false

// for(const i =0;i<=10;i){
//     console.log(i);
// // }
// let n=[1,4,7];
// for(let num of n );
// console.log(
//     num);
let arr=[8,9,7];
arr.forEach((value,index)=>{
console.log(index,value);
});

let fruits = ["apple", "chicku", "banana"];
for (let num of fruits) {
  console.log(num);
}
