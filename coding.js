
// const numbers = [12, 7, 9, 20, 33, 42, 15, 8];

// //print only even numbers from the array

// let even=numbers.filter(number=>number%2===0);
// console.log(even);


//square of array
// const numbers = [2, 4, 6, 8, 10];
// //square of numbers
// let square=numbers.map(number=>number*number);
// console.log(square);


// const employees = [
//     { name: "Nithin", department: "IT", salary: 40000 },
//     { name: "Rahul", department: "HR", salary: 35000 },
//     { name: "Arjun", department: "IT", salary: 45000 },
//     { name: "Kiran", department: "Finance", salary: 50000 },
//     { name: "Sneha", department: "IT", salary: 55000 }
// ];

// //to get the IT employee names who's salary is >40000
// //const itempNames=employees.filter(({department})=>department==="IT").filter(({salary})=>salary>40000).map(({name})=>name);

// //or
// const itempNames=employees.filter(({department,salary})=>department==="IT" && salary>40000).map(({name})=>name);

// console.log(itempNames);


//reduce()

// const numbers = [10, 20, 30, 40, 50];

// let total=numbers.reduce((sum,number)=>sum+number,0);
// console.log(total);



//find employee whose id=103

// const employees = [
//     { id: 101, name: "Nithin", department: "IT" },
//     { id: 102, name: "Rahul", department: "HR" },
//     { id: 103, name: "Arjun", department: "IT" },
//     { id: 104, name: "Kiran", department: "Finance" }
// ];
// let emp=employees.find(({id})=>id===103);
// console.log(emp);

// let dep=employees.reduce((count,{department})=>{

//     if (count[department]) {
//         count[department]++;
//     } else {
//         count[department] = 1;
//     }
//     return count;
// },{});
// console.log(dep);


// const employee = {
//     id: 101,
//     name: "Nithin",
//     department: "IT",
//     salary: 40000
// };

// const updatedEmployee={
//     ...employee,
//     salary:50000,
//     experince:1
// }

// console.log(updatedEmployee);


// const employee = {
//     id: 101,
//     name: "Nithin",
//     department: "IT",
//     salary: 40000,
//     experience: 1
// };

// const{name,department,...otherDetails}=employee;
// console.log(name);
// console.log(department);

// console.log(otherDetails);


// const employees = [
//     { name: "Nithin", salary: 40000 },
//     { name: "Rahul", salary: 35000 },
//     { name: "Arjun", salary: 45000 },
//     { name: "Kiran", salary: 50000 }
// ];

// let atsalary=employees.some(({salary})=>salary>40000);
// console.log(atsalary);

// let evsalary=employees.every(({salary})=>salary>30000);
// console.log(evsalary);


const employees = [
    { name: "Nithin", department: "IT", salary: 40000 },
    { name: "Rahul", department: "HR", salary: 35000 },
    { name: "Arjun", department: "IT", salary: 45000 },
    { name: "Kiran", department: "Finance", salary: 50000 },
    { name: "Sneha", department: "IT", salary: 55000 }
];

let total=employees.filter(({department,salary})=>department==="IT" && salary>40000).reduce((sum,{salary})=>sum+salary,0);
console.log(total);