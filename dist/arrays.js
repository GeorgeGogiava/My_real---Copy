import * as ggDates from './ggDates.js';
let arrays = ["Red", "Green", "Blue", "Gray"];
let arrNum = [12, 45, 78, 102, 489];
let values = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
let values2 = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
console.log(values2.length);
let arrDate = [
    ggDates.dateSerial(2022, 7, 12),
    ggDates.dateSerial(2023, 7, 1),
    ggDates.dateSerial(2021, 4, 10),
    ggDates.dateSerial(2022, 3, 16),
    ggDates.dateSerial(2022, 1, 16)
];
let nums = [4, 7, 10];
let sum = 0;
nums.forEach((value) => { sum += value; });
console.log(`The sum of Array items is >> ${sum}`); //The sum of Array items is >> 21
/*  Showing array */
for (let i = 0; i <= arrays.length - 1; i++) {
    console.log(` ${i + 1} >> ${arrays[i]}`);
}
/* For In  */
for (let ind in arrNum) {
    console.log(` ${ind + 1} >> ${arrNum[ind]}`);
}
/* For of  */
for (let ind of arrNum) {
    console.log(`${ind}`);
}
/* SORT
******************************************************************
 */
arrays.sort();
console.log(arrays); //[ 'Blue', 'Gray', 'Green', 'Red' ]
values.sort();
console.log(values); //[ 2, 3, 4, 'Apple', 'Banana', 'Orange' ]
values.reverse(); //DESC
console.log(values); //[ 'Orange', 'Banana', 'Apple', 4, 3, 2 ]
//aq xdeba Chemi tarigebis dasortireba funqciis meshveobiT
arrDate.sort((a, b) => {
    return (a.toDate().getTime() - b.toDate().getTime());
});
/* for (let dd of arrDate) {
    console.log(ggDates.formatDate(dd))
} */
console.log("*".repeat(50));
arrDate.forEach(value => console.log(ggDates.formatDate(value)));
// ***************** METHODS ****************************
//PUSH  >> adds new elements to the array and returns the new array length
let dd = [];
console.log(dd.push('Apple')); //1
let dd2 = ['Banana'];
console.log(dd2.push('Apple')); //2
//pop() >> Removes the last element of the array and return that element
let dd3 = ['Andrey', 'Bob'];
console.log(dd3.pop()); //Bob
let dd4 = [];
console.log(dd4.pop()); // undefined
//shift()	Removes and returns the first element of the array
console.log(dd3.shift()); //'Andrey'
console.log(dd4.shift()); //undefined
//unshift() Adds one or more elements to the beginning of the array and returns the new length of array
dd3.push('Darvin'); //'1
dd3.unshift('Gela'); // 2
console.log(dd3); // [ 'Gela', 'Darvin' ]
dd3.unshift('Natia', 'Iamze'); //4
console.log(dd3); // [ 'Natia', 'Iamze', 'Gela', 'Darvin' ]
//concat()	Joins two arrays and returns the combined result
let dd5 = ['One', 'Two', 'Three', 'Two'];
let dd6 = ['Four', 'Five', 'Six'];
console.log(dd5.concat(dd6)); //[ 'One', 'Two', 'Three', 'Two,'Four', 'Five', 'Six' ]
//indexOf()	Returns the index of the first match of a value in the array (-1 if not found)
//lastIndexOf()	Returns the last index of an element in the array
console.info(dd5.indexOf('Two')); //1
console.info(dd5.indexOf('Two', 2)); //3
console.info(dd5.indexOf('Seven')); //-1
console.info(dd5.lastIndexOf('Two')); //3
//slice()	Extracts a section of the array and returns the new array
//არ ცვლის საწყის მასივს
let dd7 = ['One', 'Two', 'Three', 'Two', 'Ten'];
console.log(dd7.slice(1, 3)); //[ 'Two', 'Three' ]  last index not includs
console.log(dd7.slice(-2)); //[ 'Two', 'Ten' ]
console.info("_".repeat(60));
console.log(dd7);
//join()	Joins all elements of the array into a string
console.log(dd7.join("_")); //One_Two_Three_Two_Ten
//splice()	Adds or removes elements from the array
// ცალკე განხილვის თემაა 
//* ცვლის მასივს 
//1. №№№№№№№   ელემენტების ამოგდება   №№№№№№№№
// me-2 არგუმენტი ნიშნავს ამოსაგდები ელ. რაოდენობას
const fruits = ['apple', 'banana', 'cherry', 'date', 'Grape', 'Peach'];
const removedFruits = fruits.splice(2, 3); //
console.log(fruits); //[ 'apple', 'banana', 'Peach' ]
console.log(removedFruits); //[ 'cherry', 'date', 'Grape' ]
const fruits2 = ['apple', 'banana', 'cherry', 'date', 'Grape', 'Peach'];
fruits2.splice(-3); //ამოაგდებს ბოლო 3 ელემენტს
console.log(fruits2); // [ 'apple', 'banana', 'cherry' ]
//2. №№№№№№№   ელემენტების ჩამატება   №№№№№№№№
const fruits3 = ['apple', 'banana', 'cherry'];
fruits3.splice(1, 0, 'ORANGE', 'AVOKADO');
console.log(fruits3.toString()); // apple,ORANGE,AVOKADO,banana,cherry
//3. №№№№№№№   ელემენტების შეცვლა  №№№№№№№№
const fruits4 = ['apple', 'banana', 'cherry'];
fruits4.splice(1, 1, 'ORANGE');
console.log(fruits4.toString()); //apple,ORANGE,cherry
// END OF splice() >>>>>>>>>>>>>>>>>>>>>
//includes() Checks whether the array contains a certain element
console.log(fruits4.includes('apple')); //true
console.log(fruits4.includes('Apple')); //false
//Good example funqcia some abrunebs true თU ერთი მათგანი მაინც აკმაყოფილებს პირობას.
const fruits5 = ['Apple', 'banana', 'cherry', 'date', 'grape', 'peach'];
const searchStr = 'apple';
const found = fruits5.some((fruit) => fruit.toLowerCase() === searchStr.toLowerCase());
console.log(found); // true
//some() METHOD >> სუპერ მეთოდი  
//ეს მეთოდი არგუმენტად იღებს ქოლბექ ფუნქციას და ყველა წევრს 
//უკეთებს იტერაციას, რომელიც არგუმენტად გადაეწოდება
// და აბრუნებს ტრუს თუ რომელიმე ერთი მათგანი მაინც აკმაყოფილებს პირობას  
const numbers = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers.some((number) => {
    return number % 2 === 0;
});
/* const hasEvenNumber = numbers.some(function(number) {
  return number % 2 === 0;
}); */
console.log(hasEvenNumber); // true
//copyWithin()	Copies a sequence of elements within the array
let arr = ['one', 'two', 'three', 'four', 'five'];
arr.copyWithin(1, 2, 4); //პირველი არგუმენტის თუ სად უნდა ჩაჯდეს,
// მე-2 არგუმენტი საიდან დაიწყოს ამოჭრა და 
//მე-3 არგუმენტი სანამდე (თვითონ ეს წევრი არ ითვლება)
//ხდება თავზე გადაწერა
console.log(arr); //[ 'one', 'three', 'four', 'four', 'five' ]
//fill()	Fills the array with a static value from the provided start index to the end index
let arr2 = ['one', 'two', 'three', 'four', 'five'];
arr2.fill('***', 1, 4); //გადაეწერება შესაბამის ინდექსებს, ბოლო ინდექსი არ შედის
console.log(arr2); //[ 'one', '***', '***', '***', 'five' ]
let arr3 = [];
arr3.fill('###', 0, 8);
console.log(arr3); //დაბრუნდება კვლავ ცარიელი მასივი, რადგან არ არის ელემენტები, რომელსაც უნდა გადაეწეროს
const arr4 = new Array(10).fill('Hello');
const arr5 = [...new Array(3)].fill('Hello');
console.log(arr4); // ['Hello', 'Hello', 'Hello', 'Hello', 'Hello', 'Hello', 'Hello', 'Hello', 'Hello', 'Hello']
console.log(arr5); //[ 'Hello', 'Hello', 'Hello' ]
//ERASE ARRAY
const myArray = [1, 2, 3, 4];
myArray.length = 0;
console.log(myArray); // Output: []
// II WAY
const myArray2 = [1, 2, 3, 4];
myArray2.splice(0, myArray2.length);
console.log(myArray2); // Output: []
//# sourceMappingURL=arrays.js.map