// const mybtn1 = document.getElementById("mybtn");
// const inp = document.getElementsByName("email");
// // inp.style.border="1px solid red";
// console.log(inp[0]);
// inp[0].style.border="1px solid red";
// inp[0].style.padding="2vmax 5vmax";
// console.log(mybtn1);
// mybtn1.style.backgroundColor ="#000";
// mybtn1.style.color ="#fff";
// mybtn1.style.border ="none";
// mybtn1.style.padding ="2vmax 5vmax";
// mybtn1.style.marginTop ="4vmax";
// mybtn1.style.cursor ="pointer";
// mybtn1.style.fontFamily="verdana";
// mybtn1.style.textTransform="uppercase";
// mybtn1.style.fontWeight="bold";

// const btn = document.querySelector("#mybtn");
// console.log(btn);
// btn.innerText = "RICK SAHA";
// console.log(btn.getAttribute("id"));
// btn.setAttribute("class","myBtn_class");
// console.log(btn.getAttribute("class"));
// btn.querySelector(".this is a button class");
// console.log(btn);


const h1 = document.createElement("h1");
document.body.prepend(h1);
h1.innerText="I am Admin Box";
h1.style.color="white";
h1.style.backgroundColor="black";
h1.style.padding="4vmax 0vmax";

function addelement(){
    const p = document.createElement("p");
    p.setAttribute("class","paragraph");
    p.innerText = "New para Added";
    p.style.color="#fff";
    p.style.backgroundColor="green";
    p.style.fontSize="1vmax";
    p.style.padding="2vmax 1vmax";
    document.body.prepend(p);
}

const btn = document.querySelector("#mybtn");
btn.style.backgroundColor = "black";
btn.style.color = "#fff";
btn.style.padding = "2vmax 5vmax";
btn.style.fontSize  = "1vmax";

btn.innerText="Add para";

// const btn2  = document.createElement("button");
// document.body.append(btn2);
// btn2.setAttribute("id","mybtn2");
// mybtn2.innerText="Delete para";
// mybtn2.style.marginTop = "2vmax";
// mybtn2.style.backgroundColor = "black";
// mybtn2.style.color = "#fff";
// mybtn2.style.fontSize  = "1vmax";
// mybtn2.style.padding = "2vmax 5vmax";


const btn2 = document.querySelector("#mybtn2");
btn2.style.padding = "2vmax 5vmax";
btn2.style.color = "#fff";
btn2.style.fontSize  = "1vmax";
btn2.style.backgroundColor = "black";

function deleteelement(){
    const p = document.querySelector(".paragraph");
    p.remove();
}






