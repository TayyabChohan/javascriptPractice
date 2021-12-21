// console.log("hello world 2");
//TO FIND LAST INDEX AND LAST VALUE
// var temp = "tsahdjasbdjasdjasjd";
// console.log(temp);
// console.log(temp.length);
// console.log(temp.length - 1);
//TO FIND LAST VALUE
// console.log(temp[temp.length - 1]);

/// USE OF TRIM AT TRINGS
/////////////////////////////////////////////////////////////////
// let trm = "tayyab_chohan";
// console.log(trm);
// console.log(trm.length);
// var t = trm.trim();
// console.log(t);
// var t1 = trm.length.trim();
// console.log(t1);

// console.log(trm.toUpperCase())
// console.log(trm.toLowerCase())
///===================== slice =================
//start index
//end index
// console.log(trm.slice(0,6))
///-----------data type--------------
//primtive data type
//number , string, number, boolean, bigInt, null, undefined
// let age = 13;
// let agd = "tayaygaaag";
// console.log(typeof age); // number
// console.log(typeof agd); // string

// ///convert number to string
// console.log(typeof age + ""); //number
// console.log(typeof (age + "")); // string
// console.log("string2", String(age));
// //convert string to number

// let ff = +"455";
// console.log(typeof ff); /// number
// console.log(Number(ff));
/////////////////////////////////////// concatination of string/////////////////////
// var temp = "tayyab";
// var temp1 = "chohan";
// console.log(temp + " " + temp1);
// /////////////////////
// var tp = "23";
// var tp2 = "43";
// console.log(tp+tp2)/// 2343 string
// console.log(+tp + +tp2)/// 66   number
////////////////template string///////////////
// var age = 23;
// var names = "tayyab";
// var final = "my name is" + " " + names + " " + "and age is" + " " + age;
// console.log(final);
// var final2 = `my name is ${names} and age is ${age}`;
// console.log(final2);
////////////////////////// null , undefined,bigInt/////////////////////////////
// var firstname;
// console.log(typeof firstname); //// undefined

// let firstname;
// console.log(typeof firstname); //// undefined

// const firstname;
// console.log(typeof firstname); //// Uncaught SyntaxError: Missing initializer in const declaration
// console.log(typeof null) // object

// let myNUmber = BigInt(234); //////// to save large numbers
// let mynumber2 = 3345n; //// same like above
// let mynumber3 = 33453; //// integer
// console.log(myNUmber + mynumber2); // 3579n
// console.log(myNUmber + mynumber3); // TypeError: Cannot mix BigInt and other types, use explicit conversions
///////////////////////////EQUAL////////////////////
// var temp = 4;
// var temp1 = 4;
// var temp2 = "4";
// console.log(temp1 == temp1); // true
// console.log(temp == temp2); // true
// console.log(temp === temp2); // false

// console.log(temp1 != temp); // false
// console.log(temp1 != temp2); // false
// console.log(temp1 !== temp2); // true

///////////////////////// even odd//////////////////
// var temp = 13;
// if (temp % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }
///////////////////////////////////////////ternary operator//////////////////

// let temp = 12;
// let temp1 = temp <= 4 ? "tayyab" : "chohan";
// console.log(temp1)
