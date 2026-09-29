let heading=document.getElementById("head");

heading.textContent= "Nithin Reddy";

let head=document.querySelector("#head");
head.textContent="Java script";

let head1=document.querySelector(".heading");
head1.textContent="Java";



// const button=document.getElementById("btn");
// const message=document.getElementById("message");

// button.addEventListener("click",()=>{
//     message.textContent="Button Clicked!.."
// })


const mesg=document.querySelectorAll(".message");

mesg.forEach(function (mes){
    mes.style.color="red";
});



let h1=document.getElementById("heading");

let para=document.querySelector(".text");
let paras=document.querySelectorAll(".text");

h1.textContent="My Portfolio";
para.textContent="I am learning DOM";
paras.forEach(function (phara){
    phara.style.color="red"
});

let head4=document.getElementById("head4");
head4.innerHTML="<i>Tom And Jerry";


const title=document.getElementById("title");
const message=document.getElementById("message");
const box=document.getElementById("box");
const btn=document.getElementById("btn");


btn.addEventListener("click",()=>{
    title.textContent="My Portfolio";
    message.textContent="I am learning DOM";
    box.innerHTML="<b>This is Javascript</b>";
});


const image=document.getElementById("profile");
console.log(image.getAttribute("src"));

console.log(image.getAttribute("id"));

image.setAttribute("alt","image is loading...");
console.log(image.getAttribute("alt"));



const user=document.getElementById("userName");
user.removeAttribute("disabled");



const img=document.getElementById("profile1");
const a=document.getElementById("website");
const input=document.getElementById("username");
console.log(img.getAttribute("src"));
img.setAttribute("src","new.jpg");

console.log(img.getAttribute("alt"));
img.setAttribute("alt","My Profilo Photo");

console.log(a.getAttribute("href"));
a.setAttribute("href","https://github.com");

input.removeAttribute("disabled");




//classList

//1)classList.add()
const title1=document.getElementById("title1");
title1.classList.add("red");

//2)classList.remove()
title1.classList.remove("red");


const btn1=document.getElementById("darkBtn");

btn1.addEventListener("click",()=>{
    document.body.classList.toggle("body");
});


const h11=document.getElementById("title2");
const add=document.getElementById("add");
const remove=document.getElementById("remove");
const toggle=document.getElementById("toggle");

add.addEventListener("click",()=>{
    h11.classList.add("highlight");
});

remove.addEventListener("click",()=>{
    h11.classList.remove("highlight");
});

toggle.addEventListener("click",()=>{
    h11.classList.toggle("highlight");
});

// const username=document.getElementById("username");
// username.addEventListener("keydown",()=>{
//     console.log("key Pressed");
// })


const input1=document.getElementById("user1");
input1.addEventListener("input",(event)=>{
    console.log(input1.value);
    console.log(event.target.value);
})


// const un=document.getElementById("usrname");
// console.log(un.value);

const reloadBtn=document.getElementById("reload");
reloadBtn.addEventListener("click",(event)=>{
    console.log(event);
    console.log(event.target);
    console.log(event.target.value)
})



console.log("JavaScript is Running");
const uinput=document.getElementById("usernames");
const showNameBtn=document.getElementById("btnsn");
const messagepp=document.getElementById("messagep");

uinput.addEventListener("input",(event)=>{
    console.log(event.target.value);
});

showNameBtn.addEventListener("click",()=>{
    console.log("button clicked");
    messagepp.textContent="Hello "+uinput.value;
});


const studentuser=document.getElementById("studentuser");

// studentuser.addEventListener("keydown",()=>{
//     console.log("key pressed");
// });
// studentuser.addEventListener("keyup",()=>{
//     console.log("key released");
// });

// studentuser.addEventListener("keydown",(event)=>{
//     console.log(event);
// })
// studentuser.addEventListener("keydown",(event)=>{
//     console.log(event.key);
// })

const studentmeg=document.getElementById("studentmeg");
studentuser.addEventListener("keydown",(event)=>{
      console.log(event.key);
    if(event.key==="Enter"){
        studentmeg.textContent="Hello "+studentuser.value;
    }
})

const form=document.getElementById("studentForm"); 
const sname=document.getElementById("studentName");
const pwd=document.getElementById("password");
const formmsg=document.getElementById("formmessage");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    if(sname.value.trim()==="" || pwd.value.trim()===""){
        formmsg.textContent="Please fill the fields";
        return;
    }
    else if(pwd.value.length<6){
        formmsg.textContent="Password should contain atleast 6 letters..";
        return;
    }
    formmsg.textContent="WelCome! "+sname.value;
    console.log("Form Submitted"); //for our understading...
});


//creating elements dynamically

//creating paragraph 
const paragraph=document.createElement("p");
paragraph.textContent="Hello Nithin";
document.body.appendChild(paragraph);

//creating button
const cbutton=document.getElementById("button");
cbutton.textContent="Click Me";
document.body.appendChild(cbutton);


//creating element inside another element

const container=document.getElementById("container");
const cpara=document.createElement("p");
cpara.textContent="Hello World!...";

const cpara1=document.createElement("p");
cpara1.textContent="Hello, Nithin Reddy!";

container.appendChild(cpara);
container.appendChild(cpara1);



