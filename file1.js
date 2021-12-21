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

function findch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return i;
    }
  }
  return -1;
}
console.log(findch([1, 2, 3, 4, 5], 4));
/////////////////////////////////////////////////
// function strinch(num) {
//   return [...num][0];
// }
// console.log(strinch("tayyab"));
///////////////////////////////////// function expresion//////////////
const myn = function () {
  console.log("tayyab chohan");
};
