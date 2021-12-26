// javacrit ka code kesy chlta hai
// compilation
// compilation have 3 steps .
//1 tokenization 2 parsing code 3 code generation
//tokenazing mai choty choty part mai code ko divide kia jata ha phle ...
//parsing have to method  .... 1 early error checking , 2 determing aproperaite scope for varibles

//////////////////// execution code
// js code execute in execution context
//1 global execution context
//1.1 creation phase 1.2 code execution phase
/////////////// hoiesting

// console.log(myFunction());
// function myFunction() {
//   return `tayyab`;
// }
// /////////////
// console.log(hss); // undefined
// var hss = function () {
//   return `tayyabe`;
// };
// console.log(hss()); // tayaybe
// ///////////////// let
// // let k case mai variable global membory mai unitilalized
// console.log(firstName); // Cannot access 'firstName' before initialization
// let firstName = "tayyab";
// console.log(firstName);
// const k case mai variable global membory mai unitilalized
// console.log(firstName); // Cannot access 'firstName' before initialization
// const firstName = "tayyab";
// console.log(firstName);
///// LET AND CONST ARE LOESTED BECUASE     , variable unitilalized hoty hai lkm use mai nai hoty
// console.log(kkk); // kkk is not defined .... is case mai (kkk) variable majud e nai ... so let and cosnt are hoested
/// and jb tk koi variable itialized nai ho jta us wkt tk variabel temporal dead zone mi rehta ha
/////////////
// clouser : jb koi function return hota hia to wo apni local memory se kuch na kuh le k return hota hai ....mean variable
//example 1
// function printFullName(fname, lName) {
//   function printName() {
//     console.log(fname, lName);
//   }
//   return printName;
// }
// const ans = printFullName("tayyab", "ali");
// ans();
//// example 2

function hello(x) {
  const a = "v1";
  const b = "v2";
  return function () {
    console.log(x, a, b);
  };
}
const ans = hello("tayyab");
ans();
