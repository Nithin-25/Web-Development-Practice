// function greet(){
//     console.log("Hello World!..");
// }
// greet();


// function callings

// function addition(a,b){
//     let c=a+b;
//     return c;
// }
// // let result=addition(10,20);
// // console.log(result);

// //or
// // console.log(addition(10,20));

// //or
// console.log(addition(a=100,b=200));


// function add(a,b){
//     let c=a+b;
//     console.log(c);
// }
// add(a=Number(prompt("Enter the first NUmber")),b=Number(prompt("Enter the second Number")));



// function add(a=100,b=400){ //here a=100,b=400 are the default paramaters
//     let c=a+b;
//     console.log(c);
// }
// add(a=50,b=100);  //here Arugumenst have the higher prority


//Function Expression
// let greet=function(){
//     console.log("Hello! JavaScript");
// }
// greet();


// //Arrow Function
// // let add=(a,b)=>{
// //     let c=a+b;
// //     console.log(c);
// // }
// // add(10,20);

// let add=(a,b)=>{
//     return a+b;
// }
// console.log(add(10,40));

// //or
// let add1=(a,b)=>a+b;
// console.log(add1(20,70));



// let square=(num)=>num*num;
// console.log(square(5));

// //or                              //Here both are valid
// let square1=num=>num*num;
// console.log(square1(10));


// let even=num=>num%2===0;
// console.log(even(10));

// let greet1=name=>`Hello ${name}`;
// console.log(greet1("Nithin Reddy"));

// //callback 

// let numbers=[1,2,3,4,5];
// numbers.forEach((number)=>{
//     console.log(number);
// });

//Gobal variables
// let x="Nithin"
// let y="Reddy"
// function name(){
//     console.log(x,y);
// }
// name();
// console.log(x,y);





//Assingnment

const employees = [
    {
        id: 1,
        name: "Nithin",
        department: "IT",
        salary: 40000
    },
    {
        id: 2,
        name: "Rahul",
        department: "HR",
        salary: 35000
    },
    {
        id: 3,
        name: "Arjun",
        department: "IT",
        salary: 45000
    },
    {
        id: 4,
        name: "Kiran",
        department: "Finance",
        salary: 50000
    }
];


//IT employess
let itEmployee=employees.filter(({department})=>department==="IT");
console.log(itEmployee);

//Names os IT Employees
let itEmployeeName=employees.filter(({department})=>department==="IT").map(({name})=>{
    return name;
});
console.log(itEmployeeName);

//Salary >40000
let getSalary=employees.filter(({salary})=>salary>40000);
console.log(getSalary);

//total Sum of employees Salary
const totalSalary = employees.reduce(
    (sum, { salary }) => sum + salary,
    0
);
console.log(totalSalary);

//
const nithin=employees[0];
const updatedNithin={
    ...nithin,
    salary:50000
};

console.log(updatedNithin);


const{name,de}