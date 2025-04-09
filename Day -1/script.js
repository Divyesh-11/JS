console.log("Hello world..! This is a first script in JS");

//    Rules of choiceing Variable names:- 
//     ==> Letters, digits, number & $ sign allowed.
//     ==> Must begin with a $,_,or a latters.
//     ==> Variable name is a case censitive. (Divyesh & DIVYESH & dIvyesh are diffrent).

var a = 5;
var b = 66;
console.log(a);
console.log(b);


//    var vs. let in JavaScript:- 
//     ==> var is goloblly scoped while let & const are block scoped.
//     ==> var can be updated & re-feclared within its scoped. 
//     ==> const can naither be updated not be re-declared.
//     ==> let can be updated but not re-declared.

var c = 6;
let d = 66;
{
    let c = 77;
    console.log(c);
}

console.log(c);

console.log(typeof a, typeof b, typeof c);


//    Datatypes in JavaScript.
//     ==> two types Datatype in JavaScript.
//     1. primative Datatype :- primative Data type are a set od basic data type in JavaScript
//     2. Object :- object is a non primative Datatype in JavaScript

//     These are the 7 primative Datatype in JavaScript.
//     ==> Null , Number , String , Symbol , Undifined , Boolean , Bigint


let intvar = 121;
let floatvar = 120.11;
let strvar = "Divyesh";
const booleanvar = true;
let Undifinedvar = undefined;
let nullvar = null;

console.log(intvar);
console.log(floatvar);
console.log(strvar);
console.log(booleanvar);
console.log(Undifinedvar);
console.log(nullvar);

console.log(intvar, floatvar, strvar, booleanvar, Undifinedvar, nullvar);
console.log(typeof intvar, typeof floatvar, typeof strvar, typeof booleanvar, typeof Undifinedvar, typeof nullvar);


// object :- An object in javascript can be created as follows. 

let ob = {
    "name": "Divyesh",
    "Age": 21,
    "Job Role": "PHP Backend developer",
    "Job Code": 6500
}

console.log(ob);
ob.Salary = "24,00,000 per anum.";
console.log(ob);