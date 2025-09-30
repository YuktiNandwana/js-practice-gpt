//Normal functions

function add (a,b){
    return a+b;
}
console.log(add(2,1));

//Arrow functions

const add1 = ()=>{
    return a+b;
}
console.log(add(1,4));

//Single-line Arrow Function

// Agar sirf ek hi line return karna hai, toh {} aur return likhne ki bhi zarurat nahi:

const sub1= (a,b)=> a-b;
    console.log(sub1(10,3));


    //task1

    const cube =(n1)=>n1*n1*n1;
    console.log(cube(2));

    //task2

    let isEven =(n1)=> {
        if(n1%2==0){
            return true;
        }else{
        return false;
    }
}

console.log(isEven(32));

// //task 3


let maxOfThree = (a, b, c) => {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
};

console.log(maxOfThree(10, 20, 15)); // 20
console.log(maxOfThree(30, 25, 18)); // 30
console.log(maxOfThree(5, 12, 7));   // 12

let maxOfThree1= (a,b,c)=>{
if(a>=b && a>=c){
    return a;
}else if(b>=c && b>=a) {
    return b;
}else{
    return c;
}

}
console.log(maxOfThree(2,10,4));