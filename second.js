//guess the Number

// let num=Number(prompt("Guess the Number"));
// let magicalNumber=25;
// while(magicalNumber!==num){
//     console.log("Better Luck next... Please Try Again");
//     num=Number(prompt("Guess Again:)"));
// }

// console.log("Your Lucky you got the right Number");


//Arrays

// let students=["Nithin","Raju","Ravi","Teja","Kiran","Raju"];
// // let revstu=[];
// // let revname=[];

// let b="Nithin Reddy";
// let c=[...students,b];
// console.log(c);



// for(let i=0;i<students.length;i++){
//     console.log(students[i]);
// }

// for(let i=students.length-1;i>=0;i--){
//     console.log(students[i]);
// }

//console.log(students.length);
// console.log(students.includes("Nithin"));
// console.log(students.push("Pavan"));
// console.log(students);
// console.log(students.pop());
// console.log(students);
// console.log(students.indexOf("Raju"));
// console.log(students.lastIndexOf("Raju"));
// console.log(students.reverse());
// console.log(students.unshift("Tilak"));
// console.log(students);
// console.log(students.splice(0,1));


// let fruits=["Apple","Mango","Grapes","Oranges","Banana"];
//for ...of
// for(let fruit of fruits){
//     console.log(fruit);
// }

//forEach()
// fruits.forEach(function(fruit){
//      console.log(fruit);
// });

//with arrow function
// fruits.forEach((fruit)=>{
//     console.log(fruit);
// });


//map()

// let numbers=[1,2,3,4,5];
// let double=numbers.map((number)=>{
//     return number*2;
// });
// console.log(double);

//shorter version of map()

// let double=numbers.map(number=>number*2);
// console.log(double);





//filter()
// let numbers=[1,2,3,4,5,6];
// let evenNumbers=numbers.filter((number)=>{
//     return number%2===0;
// })
// console.log(evenNumbers);

//or 
// let evenNumbers=numbers.filter(number=>number%2===0);
// console.log(evenNumbers);



//find()
//  let numbers=[1,2,3,4,5,6,7,8];
// let result=numbers.find((number)=>{
//     return number>5;
// })
// console.log(result);
// //or
// let result1=numbers.find(number=>number>5);
// console.log(result1);

// let evenNumbers=numbers.filter(number=>number%2===0);
// console.log(evenNumbers);

//Array of Objects

// let students=[
//     {
//         id:101,
//         name:"Nithin Reddy",
//         department:"IT"
//     },
//     {
//         id:102,
//         name:"Ravi",
//         department:"Finace"
//     },
//     {
//         id:103,
//         name:"yosha",
//         department:"HR"
//     }
// ];

// console.log(students[0].name);
// console.log(students[1].id);
// //map
// let names=students.map(student=>student.name);
// console.log(names);

// //filter
// let result=students.filter(student=>student.department==="IT");
// console.log(result);

// //combine filter and map
// let itStuNames=students.filter(student=>student.department==="IT").map(student=>student.name);
// console.log(itStuNames);

// Reversing of String
//a
// let a="Nithin";
// let b="";
// for(let i=a.length-1;i>=0;i--){
//      b=b+a.charAt(i);
// }
// console.log(b);

//b
// let a="Nithin";
// let b=(a.split(""));
// let c=[];
// for(let i=b.length-1;i>=0;i--){
//     console.log(c.push(a[i]));
// }
// console.log(c.join(""));




//Objects

// let students={
//     id:101,
//     name:"Nithin Reddy",
//     age:22
// };

// //dot notation
// console.log(students.name);
// console.log(students.id);


// //bracket notation
// console.log(students["id"]);
// console.log(students["name"]);

// //adding property
// students.dept="CSE";
// console.log(students);

// //updating property 
// students.age=23;
// console.log(students);

// //delete property
// delete students.dept;
// console.log(students);

// //Nested object

// let students1={
//     id:105,
//     name:"Nithin Reddy",
//     age:22,
//     address:{
//         city:"Bengaluru",
//         state:"Karnataka",
//         pincode:560054
//     }
// };

// console.log(students1);
// console.log(students1.address.city);

// //Arrays inside Object

// let students2={
//     id:102,
//     name:"Ravi",
//     skills:["HTML","CSS","Javascript","React Js","Next Js","Java"]
// };

// console.log(students2);
// // console.log(students2.skills[0]);

// // students2.skills.forEach((skill)=>{
// //     console.log(skill);
// // })

// //to access all skills from object(Array)
// for(skill of students2.skills){
//     console.log(skill);
// }

// //function in Object

// let students3={
//     id:106,
//     name:"Nithin Reddy",
//     greet:function(){
//         console.log("Hello!");
//         console.log("Hello",this.name);
//     }
// };
// console.log(students3);
// students3.greet();


// //Destructuring
// let company={
//  name:"ABC Company",
//  business:"IT Solutions",
//  address:"Bengaluru",
//  pincode:560089
// }
// let {name,business,address,pincode,state="Not Assigned"}=company;
// console.log(name);
// console.log(business);
// console.log(address);

// //Renaming
// let{name:companyName,business:businessType}=company;

// console.log(companyName);
// console.log(businessType);

// //Default Values
// console.log(state);


//spread operator

let a=[1,2,3,4,5];
let b=[6,7,8,9,10];
let c=[...a,...b];
console.log(c);

let emp={
    id:101,
    name:"Nithin"
}

let updatedemp={
    ...emp,
    address:"Bengaluru",
    name:"Nithin Reddy"   //updating the property using spread operator
}
console.log(updatedemp);

//optional Chaining " ? "

let user={
    name:"Nithin"
}
console.log(user.name);
//console.log(user.address.city); //here we get the error
console.log(user.address?.city); //here we get undefined