// // console.log("hello world");

// let age = 12;
// let inputNUmber = +prompt("Gues Age");
// if (inputNUmber == age) {
//   console.log("You Are Right");
// } else {
//   if (inputNUmber < age) {
//     console.log("Number is too low");
//   } else {
//     console.log("number is ligh");
//   }
// }

// let num = 1;
// switch (num) {
//   case 0:
//     console.log("sunday");
//     break
//   case 1:
//     console.log("monday");
//     break
//   case 2:
//     console.log("tuesday");
//     break
//   case 3:
//     console.log("wednestday");
//     break
//   case 4:
//     console.log("thusrday");
//     break
//   default:
//     console.log("all is one");
// }

/// while loop
// let num = 0;
// while (num < 9) {
//   console.log(num);
//   i++;
// }
// var temp = 0;
// var total = 0;
// while (temp < 9) {
//   total = total + temp;
//   temp++;
// }
// console.log(total);
////////////////////// for loop/////////////
// var temp = 0;
// for (let i = 0; i < 10; i++) {
//   temp = temp + i;
//   console.log(i);
// }
// console.log(temp);
/////////////// can be write in form of this
// let i = 0;

// for (; i < 10; i++) {
//   console.log(i);
// }
//////////////// braek in for loop//////////////////

// for (let i = 0; i < 9; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }
// for (let i = 0; i < 9; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }
////////////// do while loop/////////////

// var temp = 10;

// do {
//   console.log(temp);
//   temp++;
// } while (temp <= 9);
/////////////////////////// push and unshift mehod////////////

// let temp = ["tayyab", "ali", "hader"];
// console.log("1", temp);
// // temp.push("chohan"); // add value at end
// // temp.pop();
// let rro = temp.pop(); //remove value from end
// console.log("2", temp);
// console.log("3", rro);

// temp.unshift("Ab"); ///// add value from start in aarray
// console.log(temp);

// ///// to remove value from stsrt use shift method
// temp.shift();
// let removed = temp.shift();

// console.log(temp);

// console.log(removed);
///////////// primitive type//////////////
// let num1 = 6;
// let num2 = num1;
// console.log(num1); //6
// console.log(num2); //6
// num1++;

// console.log(num1); //7
// console.log(num2); //6

///////////////////// reference type//////
// let array1 = ["tayayb", "ali", "haider"];
// let array2 = array1;
// console.log(array1);
// console.log(array2);
// console.log("after pushing element");
// array1.push("ab");
// console.log(array1);
// console.log(array2);

/////////////////////////////  calone a array/////////////////

// let array = ["tayay", "aaaa"];
// // let array1 = ["tayay", "aaaa"];
// // let array1 = array.slice(0);/// new array
// // let array1 = [].concat(array); /// new array
// let array3 = [].concat(array, ["sdsd", "sssssssssss"]); /// new array
// //new method  (spread operator)
// let array4 = [...array].concat(["sdsd", "ssdsd"]);

// //// if we want to new array data in array1 after cloning we should use it in that way
// let array1 = array.slice(0).concat(["222", "3"]);

// array.push("bbbb");
// console.log(array === array1);
// console.log(array);
// console.log(array1);
// console.log(array4);
// console.log(array3);
// let onemOreArray = [...array, ...array1, ...array3];
// console.log(onemOreArray);
/////////////////////////////for loop for array/////////////
// var arr = [];
// let array = ["aaa", "bbb", "ccc", "nnn", "fff"];
// for (let i = 0; i < array.length; i++) {
//   // console.log(i);
//   // console.log(array[i]);
//   arr.push(array[i].toUpperCase());
//   // console.log(ar);
// }
// console.log(arr);
/////////////////////////////// while loop on array
// const array = ["cc", "vv", "ff", "hh"];
// let i = 0;
// let arr = [];
// while (i < array.length) {
//   arr.push(array[i].toUpperCase());
//   // console.log(array[i]);
//   i++;
// }
// console.log(arr);

///////////////////////// destruring .////////////

// let temp = ["ab", "bd", "dd"];
// let tep1 = temp[0];
// let tep2 = temp[1];
// console.log(tep1, tep2);

// let [ab, bd, dd] = temp;
// console.log(ab, bd, dd);

// let temp1 = ["vv", "vvv", "bb", "hh", "rr", "uu"];
// let [vv, vvv, ...newArry] = temp1;
// console.log(newArry);

////////////////////////////////// how we can add key par values in object////////////////
// let obj = {
//   name: "tayyab",
//   age: 22,
//   arr: ["ratatv", "ali", "dddd"],
// };
// obj.gender = "male";
// obj.gender1 = "female";
// console.log(obj["name"]);
// console.log(obj);

// ////////////////// get data from object , dot notation and brakect notation//////////
// const key = "email";
// let obj = {
//   name: "tayyab",
//   age: 22,
//   "vvcvc arr": ["ratatv", "ali", "dddd"],
// };
// //console.log(obj.vvcvc arr)// not possible
// console.log(obj["vvcvc arr"]); // possible
// /////////// to save value of bject against its key
// obj[key] = "tayyachohan@gamil.com";
// console.log(obj);

/////////////// iteration of objct//////////////

// let obj = {
//   name: "tayyab",
//   age: 22,
//   "vvcvc arr": ["ratatv", "ali", "dddd"],
// };
// for (key in obj) {
//   //   console.log(key);
//   //   console.log(obj[key]);
//   //   console.log(`${key}: ${obj[key]}`);
//   console.log(Object.keys(obj));
// }
//////////////////////// computed value////////////////
// const key1 = "value1";
// const key2 = "value2";

// let obj = {};
// obj[key1] = "value1";
// obj[key2] = "value2"    ;
// console.log(obj);

/////////////////////spread operator///////////////////
// const obj = [1, 2, 3, 4];
// const obj1 = [5, 6, 7, 8];
// const final = [...obj, ...obj1];
// const final1 = [...obj, ...obj1, 3, 4, 5, 5566, 7];
// console.log(final);
// console.log(final1);

// console.log([..."234555667"]);
// const b = [{ ananna: "ff", dsfsdf: "ggh" }];
// console.log([...b]);

//////////////////spread operator in objects
// const obj = {
//   name: "tayayb",
//   age: 22,
// };
// const obj1 = {
//   name1: "tayayb1",
//   age1: 221,
// };

// const final = { ...obj, ...obj1 };
// console.log(final);

/////////////////////destruturing in object/////////////////
// const obj = {
//   names: "tayyab",
//   age: 33,
//   dd: 78,
//   sadas: "sadas",
// };
// const newObj = obj.names;
// const newObj1 = obj.age;
// const { names, age, ...restprops } = obj;
// console.log(names, age);
// console.log(restprops);
//////////////////////////////////////// object is array////////////
// const users = [
//   { id: 1, name: "tayyab", age: 34, hhh: "erewr" },
//   { id: 2, name: "tayyab", age: 34, hhh: "erewr" },
//   { id: 3, sname: "tayyab", age: 34, hhh: "erewr" },
// ];
// console.log(users);
// for (key in users) {
//   console.log(users[key].id);
//   console.log(users[key].name);
// }

////////////////////////// use of function/////////////////

// function mufunc() {
//   console.log("tayyab is good boy");
// }
// mufunc();
/////////////////////////////////////////
// function mufusnc() {
//   return "dddtayyab is good boy";
// }
// const ttt = mufusnc();
// console.log(ttt);
//////////////////////////////
// function mydd(p, p1) {
//   console.log(p + p1);
// }
// mydd(2, 3);
//////////////////////////////////////////////
// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isEven(3));
//////////////////////////////////////////////////
// function strinch(num) {
//   return [...num][0];
// }
// console.log(strinch("tayyab"));
/////////////////////////////////////////////////////

// function findch(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == num) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(findch([1, 2, 3, 4, 5], 4));
/////////////////////////////////////////////////
// function strinch(num) {
//   return [...num][0];
// }
// console.log(strinch("tayyab"));
///////////////////////////////////// function expresion//////////////
// const myn = function () {
//   console.log("tayyab chohan");
// };
////////////////////////////hoisting//////////////////////
// myfunc(); /////////////////Cannot access 'myfunc' before initialization
// const myfunc = () => {
//   console.log("tayyab");
// };
// myfunc1(); /////////////////Cannot access 'myfunc' before initialization
// const myfunc1 = function () {
//   console.log("tayyab");
// };
// myfunc2(); /////// tayyab
// function myfunc2() {
//   console.log("tayyab");
// }

/////////////////////////////// lexical enviroment////////////////////
// const myvar = "tayyab";
// function myapp() {
//   // const myvar = "tayyab";
//   function d2() {
//     // const myvar = "tufail";
//     const d3 = () => {
//       console.log("chohan", myvar);
//     };
//     d3();
//   }
//   console.log(myvar);
//   d2();
// }
// myapp();
//////////////////////////////////////////block scope and function sope
// let and const are block scope  and var is function scope
// {
//   let temop = "tayyab";
//   const temop1 = "tayyab";
//   console.log(temop);
//   console.log(temop1);
// }
// {
//   let temop = "ta";
//   const temop2 = "ta";
//   console.log(temop);
//   console.log(temop2);
// }
// const tc = "ta";
// console.log(tc);

/////////////// defualt parameters////////////////
// function myFunc(b, c) {
//   if (typeof c === "undefined") {
//     c = 0;
//   }
//   return b + c;
// }
// const my = myFunc(2);
// console.log(my);
////////////////////// or ./////////////

// function myFunc(b, c=0) {
//   return b + c;
// }
// const my = myFunc(2);
// console.log(my);

/////////////////////////////rest parametre////////////////

// function myFinc(a, b, ...c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// myFinc(3, 4, 45, 6, 6, 7, 8);
///////////////////////////////////////////
// function mySum(...numbers) {
//   let total = 0;
//   for (let num of numbers) {
//     total = total + num;
//   }
//   return total;
// }
// const bb = mySum(3, 4, 45, 6, 6, 7, 8);
// console.log(bb);

///////////////////////////parameter destruting///////////////

// const person = {
//   names: "tayyab",
//   age: 22,
//   gender: "male",
// };
// function muFunc(obj) {
//   console.log(obj.names);
//   console.log(obj.age);
// }
// muFunc(person);

//////////////////////////////////// callBacek
// function fun2(dd) {
//   console.log("ali");
//   console.log(dd);
// }
// function muFunc(callback) {
//   console.log("tayyayb");
//   callback("hader");
// }
// muFunc(fun2);
//////////////////////////funtion returning function//////////

// function myFunc() {
//   function myd() {
//     console.log("tayyab chohan");
//   }
//   return myd;
// }
// const ans = myFunc();
// ans();
//////////////
// function myFunc() {
//   return function () {
//     return "tayyab";
//   };
// }
// const ans = myFunc();
// console.log(ans());

////////////////////////////////////////////forEach Loop//////////
// const temp = [
//   {
//     names: "tayayb",
//     age: 22,
//     names: "tayayb",
//     age: 22,
//     names: "tayayb",
//     age: 22,
//     names: "tayayb",
//     age: 22,
//   },
// ];
// temp.forEach((element, index) => {
//   console.log(element, index);
// });
///////////////////////////////map function/////////////////
// const temp = [1, 2, 3, 5, 6, 7, 8];
// const t = temp.map((num) => {
//   return num * num;
// });
// console.log(t);

///////////////////// filter method/////
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const temp = function (item) {
//   return item % 2 === 0;
// };

// const data = items.filter(temp);
// console.log(data);
///////////////////////////// reduce //////////////
// const data = [1, 2, 3, 4, 5];
// const ddd = data.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 100);
// console.log(ddd);
////////// accumulator + currentValue  return
//          1              2             3
//          3              3              6
//          6              4              10
//          10              5              15
///////////////////////////////////////////
// const data = [
//   { item: "cv", price: 10 },
//   { item: "cv", price: 12 },
//   { item: "cv", price: 13 },
//   { item: "cv", price: 14 },
// ];
// const sum = data.reduce((totalPrice, currentPrice) => {
//   return totalPrice + currentPrice.price;
// }, 0);
// console.log(sum);

////// total price currentProduct return
///////  0           10            10
//////// 10           12            22
////////  22           13           33
////////   33          14           49
////////////////////////// find method///////////////
// const data = ["tayyab", "ali", "ssss"];
// function myadd(string) {
//   return string.length === 4;
// }
// const d = data.find(myadd);
// console.log(d);
////////////////////////
// const data = ["tayyab", "ali", "ssss"];

// const d = data.find((string) => {
//   return string.length === 3;
// });
// console.log(d);
////////////////////
// const data = [
//   { id: 1, item: "cv", price: 10 },
//   { id: 2, item: "cv", price: 12 },
//   { id: 3, item: "cv", price: 13 },
//   { id: 4, item: "cv", price: 14 },
// ];
// const dat = data.find((user) => {
//   return user.id == 2;
// });
// console.log(dat);
/////////////////////// every mothod

// const data = [1, 2, 4, 6, 8];
// const d = data.every((item) => item % 2 === 0);
// console.log(d); sb k sm even yan odd ho gy to true and false ho ga
/////////////////////// some mothod

// const data = [1, 2, 4, 6, 8];
// const d = data.some((item) => item % 2 === 0);
// console.log(d); koi ek b odd ga yan even o ga to then true otherwise false
///////////////////////// fill method////////// it is use for to make new array

// const data = new Array(20).fill(0);
// console.log(data);

//////////////////
// const ff = [1, 1, 2, 3, 4];
// const dd = ff.fill(0, 1, 3);
// console.log(dd);

//////////////////////////////splice method////////////
/// start, delete , insert
// const data = ["item1", "item2", "item3"];
// //delete
// // data.splice(0, 1);
// //insert
// data.splice(1, 0, "tayayb");
// console.log(data);

///////////////////// set
// const ddd = new Set([1, 3, 4, 5]);
// console.log(ddd); //// set mai duplicate allow nai hai
// //// no idex-d=based acccess ,
// ddd.add(7);
// ddd.add(7); /// not allowed
// ddd.has(1); /// check the existence of nomber 1 in set
// for (let i of ddd) {
//   console.log(i);
// }
///////////////////////////// call ////
// const person = {
//   age: 11,
//   namee: "tayb",
// };
// const person1 = {
//   age: 44,
//   namee: "t",
//   about: function (a, b) {
//     console.log(this.age, this.namee, a, b);
//   },
// };
// person1.about.call(person, "tayayaaaa", "sdsf");
///////////////////////////////////
// function about(a, b) {
//   console.log(this.age, this.namee, a, b);
// }
// const person = {
//   age: 11,
//   namee: "tayb",
// };
// const person1 = {
//   age: 44,
//   namee: "t",
// };
// about.call(person, "tayayaaaa", "sdsf");
///////////////////////////////////apply///////////////

// function about(a, b) {
//   console.log(this.age, this.namee, a, b);
// }
// const person = {
//   age: 11,
//   namee: "tayb",
// };
// const person1 = {
//   age: 44,
//   namee: "t",
// };
// about.apply(person, ["tayayaaaa", "sdsf"]);
///////////////////////////////////bind///////////////

// function about(a, b) {
//   console.log(this.age, this.namee, a, b);
// }
// const person = {
//   age: 11,
//   namee: "tayb",
// };
// const person1 = {
//   age: 44,
//   namee: "t",
// };
// const h = about.bind(person, "tayayaaaa", "sdsf");
// h()


