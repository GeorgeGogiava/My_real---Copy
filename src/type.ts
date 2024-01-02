// ! Declaring variables

const myNumber: number = 14;
let myNum2: number = 45;
const price: number = 5.56;
let price2

//string
let myString: string = "This is my string";
let myStr2: string = "This is my text2";
let myStr3: string = `This is my text2 
                    line2  ${myNumber}`;
console.log(myStr3);

let myBool: boolean = true;
let myBool2 = false;
console.log(typeof myBool2);

let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

console.log(typeof myNumber); //number
console.log(typeof price2); //underfined

//! Conversions

let r:string='24'
let r2:number =+r 
console.log(r2, `he type is ${typeof r2}`)// 

let bool:string='5'
let bool2:boolean =!bool
console.log(Boolean('false'))// 


console.log(Number('3.56'))


console.log((1145).toString(16))





