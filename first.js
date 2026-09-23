// console.log("Hello World");

// let name="Nithin";
// let age=22;
// let isEmployee=true;

//  age=age+5;
// console.log(`My Name is ${name} \n My age is ${age} \n Im Employee ${isEmployee}`);

// let $name="Reddy";
// console.log("Surname",$name);

//String Methods

// let city="Bengaluru";
// let state="Karnataka";
// console.log(city);
// console.log(typeof(city));
// console.log(city.length);
// console.log(city.indexOf("u"));
// console.log(city.lastIndexOf("u"));
// console.log(city.charAt(5));
// console.log(city.concat(state));
// console.log(city+state);
// console.log(city.endsWith("u"));
// console.log(city.startsWith("B"));
// console.log(city.startsWith("Ben"));
// console.log(city.includes("luru"));

// let sub1=city.substring(0,5);
// console.log(sub1);
// let upper=city.toUpperCase();
// console.log(upper);
// let lower=city.toLowerCase();
// console.log(lower);

// //Operators and conditions

// // if(age>=18){
// //     console.log("Licensed");
// // }

// let marks=58;
// if(marks>=90){
//     console.log("Outstanding");
// }
// else if(marks>=80 && marks<90){
//     console.log("Excellent");
// }
// else if(marks>=70 && marks<80){
//     console.log("Good");
// }
// else if(marks>=60 && marks<70){
//     console.log("Average");
// }
// else{
//     console.log("Failed");
// }


// let employee={
//     id:101,
//     salary:2200000,
//     dept:"devlopment",
// };
// console.log(employee.id);

//destructuring

// let {id,salary,dept}=employee;
// console.log(id);


// //Loops
// //Table
// let n=5;
// //let n=Number(prompt("Enter the Number for table"));
// for(let i=1;i<=10;i++){
// //console.log(`${n} * ${i} = ${n*i}`);
// console.log(n+" * "+i+" = "+n*i);
// }

//Even Number

// for(let i=1;i<=20;i++){
    //     if(i%2===0){
        //         console.log(i);
        //     }
        // }
        
//let num=Number(prompt("Enter the Number"));
// if(num%2===0){
//     console.log("Even");
// }
// else{
//     console.log("Odd");
// }

// for(let i=1;i<=num;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

// let a=10;
// let b=5;
// if(a>b){
//     console.log(`The Largest Number is ${a}`);
// }
// else{
//     console.log(`The Largest Number is ${b}`);
// }

// let p=8;

// let p=Number(prompt("Enter the Number"));
// let isPrime=true;
// for(let i=2;i<=p/2;i++){
// if(p%i===0){
//    isPrime=false;
//    break;
// }
// }
// if(isPrime){
//     console.log("Prime Number");
// }
// else{
//     console.log("Not Prime Number");
// }

// console.log(isPrime ? "Prime Number" : "Not Prime Number");


//prime numbers form 2 to given n number 
// let c=Number(prompt("Enter the Number"));
// for(let i=2;i<=c;i++){
//     let isPrime=true;
//     for(let j=2;j<=i/2;j++){
//         if(i%j===0){
//             isPrime=false;
//             break;
//         }
//     }
//     if(isPrime){
//         console.log(i);
//     }
// }


//prime number to n count;
// let d=Number(prompt("Number of Prime Number you want to print"));
// let count=0;
// let pn=2;
// while(count<d){
// let isPrime=true;
// for(let i=2;i<pn;i++){
//     if(pn%i===0){
//         isPrime=false;
//         break;
//     }
// }
// if(isPrime){
//     console.log(pn);
//     count++;
// }

// pn++;
// }


//Eligibility for Vote

// let age=Number(prompt("Enter your age"));
// if(age>=18){
//   console.log("Your Elgible to Vote",age);
// }
// else{
//     console.log("Your not eligible to Vote",age);
// }


//Check Number is Posvitive or negative

// let n1=Number(prompt("Enter the Number"));
// if(n1>0){
//     console.log("Positive Number");
// }
// else{
//     console.log("Negative Number");
// }


//Check Number is multiple of 3 and 5

// let n2=Number(prompt("Enter the Number"));
// if(n2%3===0 && n2%5===0){
//      console.log(`Number ${n2} is divisble by both 3 and 5`);
// }
// else if(n2%3===0){
//     console.log(`Number ${n2} is divisible by 3`);
// }
// else if(n2%5===0){
//     console.log(`Number ${n2} is divisible by 5`);
// }
// else{
//     console.log(`Number ${n2} is not divisible by both 3 and 5`);
// }


//check input is String or Number

// let a=prompt("Enter any thing");
// if(a-a===0){
//     console.log("Input is Number");
// }
// else{
//     console.log("Input is String");
// }




//Date
// let date=new Date();
// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(date.getDay());
// console.log(date.getHours());



//Check is today is Thursday or not
// if(date.getDay()===4){
//     console.log("Today is Thursday");
// }
// else{
//     console.log("Today is Not Thursday");
// }

//check to wish good morning or not

// let currentHour=new Date().getHours();
// if(currentHour< 12){
//     console.log("Good Morning");
// }
// else{
//     console.log("Not Morning");
// }

//check user entered the input or not

// let input=prompt("Enter any thing");
// if(Boolean(input)==true){
//     console.log("User Entered the Input");
// }
// else{
//     console.log("User has Not Entered the Input");
// }



// for(let i=1;i<=5;i++){
//     console.log(i);
// }
// for(let i=5;i>=1;i--){
//     console.log(i);
// }


// let a=Number(prompt("Enter the Starting Number"));
// let b=Number(prompt("Enter the End Number"));

// for(let i=a;i<=b;i++){
//     console.log(i);
// }

// for(let i=a;i<=b;i++){
//     for(let j=1;j<=10;j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
//     console.log("\n");
// }

//square
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         document.write("* ");
//     }
//     document.write("<br>");
// }


// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         document.write("*");
//     }
//     document.write("<br>");
// }

// for(let i=5;i>=1;i--){
//     for(let j=1;j<=i;j++){
//         document.write("*");
//     }
//     document.write("<br>");
// }

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5-i;j++){
//         document.write("&nbsp;&nbsp;");
//     }
//     for(let k=1;k<=i;k++){
//         document.write("*");
//     }
//     document.write("<br>");
// }

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         if(i+j>5){
//             document.write("*");
//         }
//     }
//     document.write("<br>");
// }




// for(let i=5;i>=1;i--){
//     for(let j=1;j<=5-i;j++){
//         document.write("&nbsp;&nbsp;");
//     }
//     for(let k=1;k<=i;k++){
//         document.write("*");
//     }
//     document.write("<br>");
// }

