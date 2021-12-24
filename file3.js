// const user1 = {
//   firstName: "tayab",
//   age: 34,
//   about: () => {
//     console.log(this.firstName);
//   },
// };
// const h = user1.about;
// h();
/////////////////////////////////// make a function to create a object/////Function
// function createObject(firstName, lastName, age, about) {
//   const data = {};
//   data.firstName = firstName;
//   data.lastName = lastName;
//   data.age = age;
//   data.about = function () {
//     return this.firstName, this.lastName;
//   };
//   return data;
// }
// const dd = createObject("tayyab", "chohan", 22);
// const sdsdf = dd.data.about();
// console.log(dd);
// console.log(sdsdf);
////////////////////////////////proto
// const myData = {
//   is18: function () {
//     return this.age >= 18;
//   },
// };
// function createObject(firstName, lastName, age, about) {
//   const data = Object.create(myData);
//   data.firstName = firstName;
//   data.lastName = lastName;
//   data.age = age;

//   return data;
// }
// const dd = createObject("tayyab", "chohan", 22);
// console.log(dd);
//////////////////////[[prototype]]
// // const data = {
// //   key1: "value1",
// //   key2: "value2",
// // };
// // const data1 = Object.create(data);
// // data1.key3 = "tayyab";
// // console.log(data1);
// // console.log(data1.key2);
// console.log(data1.__proto__);
/////////////////////protoType function
// function hyten() {
//   console.log("tayayb");
// }
// ///only functions have prototype property
// if (hyten.prototype) {
//   console.log("property is present");
// } else {
//   console.log("not present");
// }
// hyten.prototype.daata = "ali";
// console.log(hyten.prototype.daata);
///////////////////////// new keyword/////////////
/////empty object this ={}
//    return this

// function CreateObject(firstName, lastName, age, about) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// }
// CreateObject.prototype.is18 = function () {
//   return this.age >= 18;
// };
// const dd = new CreateObject("tayyab", "chohan", 2);

// console.log(dd);
// console.log(dd.is18());
////////////////////////////////////////
// class CreateObject {
//   constructor(firstName, lastName, age, about) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   is18() {
//     return this.age >= 18;
//   }
// }
// const dd = new CreateObject("tayyab", "chohan", 2);

// console.log(dd);
// console.log(dd.is18());

////////////////////////////////////class

// class Cat {
//   constructor(mane, age) {
//     (this.mane = mane), (this.age = age);
//   }
//   eat() {
//     return `${this.age}`;
//   }
//   isCat() {
//     return `${this.mane}`;
//   }
// }
///////////////////inheritence

// class ca extends Cat {}
// const callNum = new Dog("blue", 23);
// console.log(callNum);
// console.log(callNum.eat());
// /////////////////////////////////////
// class Cat {
//   constructor(mane, age) {
//     (this.mane = mane), (this.age = age);
//   }
//   eat() {
//     return `${this.age}`;
//   }
//   isCat() {
//     return `${this.mane}`;
//   }
// }
///////////////////inheritence

class Cat {
  constructor(mane, age) {
    (this.mane = mane), (this.age = age);
  }
  eat() {
    return `${this.age}`;
  }
  isCat() {
    return `${this.mane}`;
  }
}
class Dog extends Cat {
  constructor(mane, age, speed) {
    super(mane, age);
    this.speed = speed;
  }
}
const callNum = new Dog("blue", 23, 234);
console.log(callNum);
console.log(callNum.eat());
