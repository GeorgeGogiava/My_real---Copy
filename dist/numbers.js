"use strict";
let a = 232.7573154;
console.log(Math.round(a)); //ამრგვალებს მათემატიკურად
console.log(Math.PI); //3.1415926....
//CEIL
console.log(Math.ceil(2.36)); //3
console.log(Math.ceil(2.86)); //3
console.log(Math.ceil(-2.36)); //-2
console.log(Math.ceil(-2.86)); //-2
//FLOOR
console.log(Math.floor(2.36)); //2
console.log(Math.floor(2.86)); //2
console.log(Math.floor(-2.36)); //-3
console.log(Math.floor(-2.86)); //-3
console.log(17 % 4); //ნაშთი 1
console.log(Math.sqrt(81)); // ფესვი >> 9
console.log(Math.SQRT2); // fesvi 2   1.41421356....
console.log(Math.abs(-5.69)); //5.69
console.log(Math.abs(5.69)); //5.69
console.log(Math.sign(-5)); //-1
console.log(Math.sign(7)); //1
console.log(Math.pow(2, 5)); //32
console.log(2 ** 6); //64
console.log(125 ** (1 / 3)); //5
console.log(Math.log(45)); //log  E fudzit
console.log(Math.log10(10000)); //log  10 fudzit 4
console.log(Math.log10(.0000001)); //log  10 fudzit -7
console.log(Math.log10(32) / Math.log10(2)); //log  (32 fudzit 2) =5
console.log(Math.log2(64)); // log  2 fudzit 6  
console.log(Math.max(7, 12, 8.9, -98, 73, 0.12)); //73
const n = [7, 12, 8.9, -98, 93, 0.12];
console.log(Math.max(...n)); //93
console.log(Math.min(7, 12, 8.9, -198, 73, 0.12)); //-98
console.log(Math.min(...n)); //-198
//TRIGONOMETRIA
console.log(Math.sin(30 * Math.PI / 180)); //0.5
//Math.cos, Math.acos, Math.asin, Math.tan, Math.atan
const b = true;
const float = 2.369;
const str = 'sdfgsdfgsdf';
const c = undefined;
const f = (x) => { return x * 10; };
const nu = null;
const o = { name: 'gss', age: 45 };
const names = ['dfdf', 'sgfgfg'];
console.log(typeof b); //boolean
console.log(typeof float); //number
console.log(typeof str); //string
console.log(typeof c); //undefined
console.log(typeof f); //function
console.log(typeof nu); // object
console.log(typeof o); // object
console.log(typeof names); // object
//convertations
let y = '3.65';
let yInt = "1564";
let y2 = parseFloat(y);
let y3 = parseInt(yInt);
let y4 = parseInt(y);
console.log(typeof y); // string
console.log(typeof y2); // number
console.log(y3); // number /1564
console.log(y4); // number /3
console.log((15).toString(16)); // f
let ff = 2.369784;
console.info(ff.toFixed(2)); //2.37
console.info(y4.toFixed(2)); //3.00
//console.log('2.3698' as number) //2.3698
console.log(Number('2.5597')); //2.5597
console.log(String(16.23)); //'16.23'
console.log(Boolean(-9)); //'true
console.log(Number('2,5597')); //NaN
console.log(String(true)); //'true'
console.log(Boolean('ssdfgfg')); //'true
console.log(Boolean('0')); //true
console.log(Boolean(0)); //false
console.log(Boolean(0.1245)); //true
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
//HEX TO DECIMAL, BINARY TO DECIMAL
console.log(parseInt('a34', 16)); //261
console.log(parseInt('100', 2)); //4
console.log(parseInt('10100', 2)); //20
//DECIMAL >>TO ANY BASE 
console.log((100).toString(2)); //'1100100'
console.log((10).toString(8)); //'12'
console.log((17).toString(16)); //'11'
console.log(!!0); //false
console.log(!!1); //true 
/* let uy:number
console.log(String(uy)) //'undefined' */
//console.log('2.8698'.at(2)) //8
/* console.log(Math.random()) // between 0 and 1

function getRandomInt(min:number, max:number):number {
    return min+Math.round(Math.random() * (max-min));
  }

  for(let i:number=0; i<100; i++){
  console.log(`${i+1} >> ${getRandomInt(1,6.2)}`)

  }


 */
//# sourceMappingURL=numbers.js.map