export { }
// let a  = "hello world";
// console.log(a);

// class Controller {
//     static getIndex = () => {
//         console.log("This is a class method");
//     }
// }

// Controller.getIndex();

// // ***Here type is optional***
// let num1:number = 10;
// console.log(num1);


// let num2:number = 10.10;
// console.log(num2);


// // c++ Array
// let arr:string[] = ["hello","world"];
// console.log(arr);


// // js Array
// let arr1 = ["hello","world",10,true];
// console.log(arr1);


// // object in ts and interface
// interface usersTyped {
//     firstName: string,
//     lastName: string,
//     age: number,
//     email: string,
//     phone: any,
//     address: string,
//     isVerify: boolean,
//     getFullName: Function
// }
// const user: usersTyped = {
//     firstName: "Anupam",
//     lastName: "Bera",
//     age: 23,
//     email: "anupambera@gamil.com",
//     phone: 8967264225,
//     address: "west bengal",
//     isVerify: true,
//     getFullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// }

// console.log(user);
// console.log(user.getFullName());


// // union types
// let phone:string|number = "8967264225";
// console.log(phone);
// console.log(typeof(phone));

// phone = 8967264225;
// console.log(phone);
// console.log(typeof(phone));


// // function in ts
// function sumOfTwoNo(num1:number,num2?:number):number {
//     return num2?(num1+num2):num1;
// }

// console.log(sumOfTwoNo(100,50));


// // class in ts 

// class basic {
//     firstName;
//     lastName;
//     constructor(firstName:string,lastName:string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     getFullName = function () {
//         return this.firstName+" "+this.lastName;
//     }
// }
// const object = new basic("Anupam","Bera");
// console.log(object);
// console.log(object.getFullName());

// // inheritance
// class parent {
//     firstName = "Anupam"
//     lastName = "Bera"
// }
// class child extends parent {
//     getFullName = function (): string {
//         return this.firstName + " " + this.lastName;
//     }
// }
// const obj = new child();
// console.log(obj.getFullName());


// // module programming

// import TeacherController from "./module/teacher";
// import StudentController from "./module/student";

// TeacherController.login();
// StudentController.login();

// // generics function
// function users<T>(data:T):T {
//     return data;
// } 
// console.log(users("Anupam"));

enum allDays {
    sun = "sun", mon = "mon", tue = "tue", wed = "wed", thu = "thu", fri = "fri", sat = "sat"
}
function whichDay(day: allDays): allDays {
    return day;
}
console.log(whichDay(allDays.mon));

