let button = document.getElementById("myButton");
let heading=document.getElementById("myHeading");

button.addEventListener("click",() =>{
//     heading.style.color="violet";
// });

// let div =document.getElementsByClassName("box");
// div.addEventListener("Mouseover",() => {
//  div.style.color="pink";
// });

let p = document.createElement("p");

 p.textContent="hey bro i m paragraph";
document.body.appendChild(p);
});