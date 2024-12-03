// var a=12
// console.log(typeof(a))
// var b="Hello Friends"
// console.log(typeof(b))
// var c=true
// console.log(typeof(c))
// var d=10.40
// console.log(typeof(d))
// var e='Z'
// console.log(typeof(e))

// var a=199
// var a="hello friends"

// console.log(a)


// let age=22;
// let price=33.3
// 
// let name="sonu star"
// isFollow=true;
// let x=null;
// let y = Symbol("Hello");
// const student = {
    // fullname:"sonu kumar",
    // age:22,
    // cgpa:8.5,
    // isPass:true,
    // isFail:false,
// };
// student["age"] = student ["age"]+2;
// console.log(student.age);
// Arithematic operators
// let a=4;
// let b=2;
// console.log("a-b=",a-b);
// console.log("a+b=",a+b);
// console.log("a%b=",a%b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
// console.log("a**b=",a**b);
// unary operator
// let a=4;
// let b=2;
// console.log("a=",a, " & b=",b);
// console.log("a++ = ",a++);
// console.log("a = ",a);
// console.log("--a = ",--a);
// console.log("a-- =",a--);
// console.log("a = ",a);
// Assignment operators
// let a=5;
// let b=2;
// a+=4;
// console.log(a);
// a-=4;
// console.log(a);
// a*=4;
// console.log(a);
// a/=4;
// console.log(a);
// a%=4;
// console.log(a);
// b**=4;
// console.log(b);
// comprison operators
// let a=5;
// let b=3;
// console.log("5===5",a===b); // triue or false
// console.log("5!=2",a!=b); // triue or false
// console.log(a>=b); // triue or false
// logical operators
// let a=5;
// let b=3;
// let cond1=a>b;// true
// let cond2 =a===5; // true
// // console.log("cond1 && cond2  = ",cond1 && cond2);
// console.log("cond1 || cond2  = ",cond1 ||
    // cond2);
    // // console.log("cond1 && cond2  = ",cond1 && 
// cond2);
// console.log("cond1 !  = ",!cond1);
    // 
    // conditional statement on if 
    // let age =29;
    // if(age>=18){
        // console.log("you can vote");
    // }
    // if(age<18){
        // console.log("you can not vote");
    // 
    // let mode = "dark";
    // let color;
    // if(mode === "dark"){
        // color = "black";
    // }
    // if(mode === "light"){
        // color = "white";
    // }
    // console.log(color);
    // conditional statement on if else
    // let mode = "dark";
// let color;
// if(mode === "dark"){
    // color = "black";
// }else if(mode === "blue"){
    // color = "blue";
// }else if(mode === "pink"){
    // color = "pink";
// } else{
    // color = "white";
// }
// console.log(color);
// if(mode === "dark") console.log(mode); // for single statement print
// Ternary operator 
// let age =32;
// let result=age>=18 ? "adult":"no adult";
// console.log(result);
// practices question 1
// let num=prompt("Enter a number:");
// if(num%5===0){
    // console.log(num,"number multiple of  5");
// 
// }else{
    // // console.log(num,"number is not multiple of 5")
// }
// check garade of students
// let score=prompt("Enter your marks");
// if(score>=90 && score<=100){
    // console.log(score,"Grade A");
// }else if(score>=70 && score<90){
    // console.log(score,"Grade B");
// }else if(score>=60 && score<70){
    // console.log(score,"Grade C");
// }else if(score>=50 && score<60){
    // console.log(score,"Grade D");
// }else{
    // console.log(score,"Fail")
// }
// loops satements
// print 1 to 15
// for(let i=1; i<=15; i++){
    // console.log("sonu chaurasiya");
// } 
// calculate sum of 1 to n
// let sum=0;
// let num = prompt("Enter the number");
// for(let i=1; i<=num; i++){
    // sum=sum+i;
    // console.log("i=",i);
// }
// console.log("sum=",sum);
// let sum=0;
// let num = prompt("Enter the number");
//   let i=1;
//   while(i<=num){
    // console.log("i=",i);
    // i++;
    // sum=sum+i;
//   }
// 
//do while loops
//   let i=1;
//   do{
    // console.log("i=",i);
    // i++;
//   }
//   while(i<=6);
// for-of loops 
//  let str = "sonuchaurasiya";
//  let size = 0;
//  for(let val of str){
    // console.log("val",val)
    // size++;
//  }
//  console.log("string-size=",size);
  // for-in loops 
//   let student={
//    name:"sonu kumar",
//    age:22,
//    cgpa:8.5,
//    ispass:true,
//   };
//   for(let key in student){
    // // console.log("key=",key, "value=",student[key]);
//   }
// practice question1
// for(let num=0; num<=100; num++){
    // if(num%2===0){// even and not even !==
        // console.log("number=",num);
    // }
    // 
// }
// practice question 2
// let gameNum = 25;
//  let userNum=prompt("gues the game number");
// while(userNum!=gameNum){
//  userNum=prompt("You Entered wrong number. Guess Again : ");
// }
// console.log("Congratulations, You entered the  right number"); 
// topic string
// let str="sonkumar";
// let str1='sonu';
// console.log(str[1]);
// template literals
// let obj = {
    // item: "pen",
    // price: 10,
// };
// // let output = `the cost of ${obj.item} is ${obj.price}rupees`;
// console.log(output);
// let specialString = `this is a temlate literals`;
// console.log(specialString );
// let str = "   Sonu kumar    ";
// console.log(str.trim());
// let newStr =str.toUpperCase();
// console.log(newStr);
// let str =  "01234567";
// console.log(str.slice(2,7));
// let str1 = "sonu";
// let str2 = "kumar";
// let result = str1.concat(str2);
// console.log(result);
// 
// let str = "Hello";
//console.log(str.replace("h","H"));
// console.log(str.charAt(2));
// practices question username create
// let fullName = prompt("Enter your fullname without spacing");
// let userName = "@" +fullName + fullName.length;
// console.log(userName);
// Array Topics 
// let marks = [67,85,75,99,78,83];
// console.log(marks);
// console.log(marks.length);
// let str  = ["sonu","monu","sachin","mangal"]
// console.log(str);
// for loops 
// for(let indx=0; indx<marks.length;indx++){
    // console.log(marks[indx]);
// }
// for(let idx=0; idx<str.length;idx++){
    // console.log(str[idx]);
// }
// for of loops 
// for (let el of marks) {
    // console.log(el);
// }
// for (let val of str) {
    // console.log(val.toUpperCase());
// }
// practices questions on arrays  1
// let arr = [85,97,44,37,76,60];
// let sum=0;
// for(let i=0;i<arr.length;i++){
    // sum=sum+arr[i];
// }
// let avg=sum/arr.length;
// console.log(avg);
// practices questions on arrays  2
// let items = [250,645,300,900,50];
// let i =0;
// for(let val of items){
// console.log("value at index=  ",val);
// let offer = val/10;
// items[i] = items[i]- offer;
// console.log("value after offer =",items[i]);
// i++;
// }
// Array in methods
// let fooditems = ["tomato","potato","litchi"];
// console.log(fooditems.toString());
// let deleteditems=fooditems.pop();
//fooditems.push("guava","banana","jeera");
// console.log(fooditems);
// console.log("deleted items =",deleteditems);
// let marvel_heroes = ["thor","spiderman","ironman"];
// let dc_heroes = ["superman","batman"];
// let nm = ["sonu","sanjeet","sachin"];
// let heroes=marvel_heroes.concat(dc_heroes,nm);
// console.log(heroes);
// let nm = ["sonu","sanjeet","sachin"];
// nm.unshift("deepak");
// console.log(nm);
// nm.shift();
// console.log(nm);
// let marvel_heroes = ["thor","spiderman","ironman","superman","batman"];
// console.log(marvel_heroes);
// console.log(marvel_heroes.slice(0,3));
// let arr = [10,20,30,40,50,60];
// arr.splice(2,4,22,33);
// console.log(arr);
// practices questions 
// let companies = ["bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.shift();
// companies.splice(1,1,"OLA");
// companies.push("Amazon");
// console.log(companies);
// function in javascript
// function myfun(msg){ // some parameter 
    // console.log(msg);
    // console.log(msg);
// }
// myfun("welcome to js");
// myfun("we are learining js"); // passing arguements
// myfun("we are learining js"); // passing arguements
//  function two number of sum 
// function funSum(a,b){
    // console.log(a-b);
    // console.log(a*b);
    // console.log(a/b);
    // console.log(a%b);
// }
// funSum(15,4);
//  funtion return type 
// function funSum(a,b){
    // s=a%b;
    // return s;
// }
// let val = funSum(40,20);
// console.log(val);
// sum funtions 
//function funSum(a,b){
//  return a + b;
// }
//modern js arrow type function
// const arrowSum = (a,b) => {
    // console.log(a*b);
// 
// };
// arrowSum(3,5);
// 
//mult function
// function funMul(a,b){
    // return a * b;
    // 
//    }
// 
// let print = () =>{
    // console.log("hello sonu");
// }
// practices questions 
// function countVowels(str){
    // let count = 0;
    // for(const char of str){
        // if(char ==="a" 
            // || char==="e"
            // || char==="i" 
            // || char==="o" 
            // || char==="u"){
            // count++;
        // }
    // }
    // console.log(count);
// }
// countVowels("sonuchaurasiya");
// const countVow = (str) =>{
    // let count = 0;
    // for(const char of str){
        // if(char ==="a" 
            // || char==="e"
            // || char==="i" 
            // || char==="o" 
            // || char==="u"){
            // count++;
        // }
    // }
    // return count;
// 
// }
// let arr = [1,2,3,4,5,6,7];
// arr.forEach(function printval(val,i,arr) {
//    console.log(val,i,arr);
// });
// var nums = [1,2,3,4,5,6,7];
// nums.forEach((num) =>{
//    console.log(num*num);
// });
//or this methods
// let nums = [11,22,43,44,65,556,7];
// nums.forEach(function printsquare(val){
    // console.log(val*val);
// });
// Map method like to similar of for each loops
// let nums = [11,22,43,44,65,56,47];
// nums.map((val)=>{
//  console.log(val);
// });
// or this way
// let nums = [12,2,43,44,65,56,47];
// let newArr=nums.map((val)=>{
//  return val*4;
// });
// console.log(newArr);
// let nums = [12,2,43,44,65,56,47];
// let evenArr=nums.filter((val)=>{
//  return val%2===0;
// });
// console.log(evenArr);
// reduce methods
// let arr = [1,2,3,4,5,6,7,8];
// const output=arr.reduce((prev,curr)=>{
   // return prev * curr;
    // return prev<curr?prev:curr; // ternary operator
// });
// console.log(output);
// practices some questions greater 90+ marks
// let marks =[56,67,98,97,92,76];
// let Topper=marks.filter((val)=>{
    // return val>90; 
// });
// console.log(Topper);
// let n = prompt("Enter a number : ");
// let arr = [];
// for(let i=1; i<=n; i++){
    // arr[i-1]=i;
// }
// console.log(arr);
// let sum = arr.reduce((prev,curr)=>{
    // return prev + curr;
// });
// console.log("Sum of all value =",sum);
// factorials using Js
// let n = prompt("Enter a number : ");
// let arr = [];
// for(let i=1; i<=n; i++){
    // arr[i-1]=i;
// }
// console.log(arr);
// let factorials = arr.reduce((prev,curr)=>{
    // return prev * curr;
// });
// console.log("Factorial of N number=",factorials);