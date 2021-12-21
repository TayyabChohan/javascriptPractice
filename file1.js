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

let temp = ["ab", "bd", "dd"];
let tep1 = temp[0];
let tep2 = temp[1];
console.log(tep1, tep2);

let [ab, bd, dd] = temp;
console.log(ab, bd, dd);

let temp1 = ["vv", "vvv", "bb", "hh", "rr", "uu"];
let [vv, vvv, ...newArry] = temp1;
console.log(newArry);
