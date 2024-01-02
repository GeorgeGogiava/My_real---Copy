import * as ggDates from "./ggDates.js";
//! forEach
let yq = [4, 5, 7, 10];
// შევკრიბოთ ჯამი
let sum = 0;
yq.forEach((value) => (sum += value));
console.log(sum); //26
// ახალი მასივის შექმნა ძველი მასივიდან
let newArr = [];
yq.forEach((value, idx) => {
    newArr[idx] = value * 10;
});
console.log(newArr); //[ 40, 50, 70, 100 ]
// მასივში ყველაზე 5-ის დამატება
yq.forEach((element, idx) => {
    yq[idx] = element + 5;
});
console.log(yq); //[ 9, 10, 12, 15 ]
let arr2 = [];
// მასივის პირდაპირ მინიჭება redim preserve -ს გარეშე
for (let i = 0; i < 5; i++) {
    arr2[i] = i ** 2;
}
arr2[8] = 4545; // ვახდებით წინა ინდექსებს, მაგარია!!!!
console.log(arr2); //[ 0, 1, 4, 9, 16, <3 empty items>, 4545 ]
console.log(arr2[6]); //undefined
//! map
//map პრაქტიკულად აბრუნებს ახალ მასივს, რომლის თითოეული წევრი მიიღება
// თითოეული ელემენტის ქოლბექ ფუნქციაში გატარებით
let arr3 = [10, 20, 30];
let arr4 = [];
arr4 = arr3.map((value) => {
    return `__${value}`;
});
arr3 = arr3.map((value) => {
    return value * 3;
});
console.log(arr3); //[ 30, 60, 90 ]
console.log(arr4); //[ '__10', '__20', '__30' ]
//!filter
//ეს ფუნქცია გადახედავს ყველა წევრებს და ამოარჩევს რომლებიც აკმაყოფილებენ კრიტერიუმს
//ქოლბექ ფუნქციის ტანში უნდა დაბრუნდეს boolean ტიპის მნიშვნელობა
const arr5 = [15, 45, 80, 189, 20, 60];
let arr6 = arr5.filter((value) => value % 10 === 0);
console.info(arr6); //[80, 20, 60]
//! some
//ეს ფუნქცია გადახედავს მასივის ყველა ელემენტს და აბრუნებს ჭეშმარიტს, თუ ერთი მათგანი
//მაინც აკმაყოფილებს კრიტერიუმს
let arr7 = [24, 11, 46, 78, 12];
console.log(arr7.some((value) => value % 2 !== 0)); // დააბრუნებს true რადგან ერთი კენტი მაინც არის
//! every
//ეს ფუნქცია გადახედავს მასივის ყველა ელემენტს და აბრუნებს ჭეშმარიტს, თუ ყველა მათგანი
//აკმაყოფილებს კრიტერიუმს
let arr8 = [24, 16, 46, 78, 12];
console.log(arr8.every(function (value) {
    return value % 2 === 0;
})); // დააბრუნებს true რადგან ყველა ლუწია
//or
console.log(arr8.every((value) => value % 2 === 0));
//! spread
//ეს ფუნქცია გამოიყენება მასივების მისაბმელად, ასევე თვისების დასამატებლად
let arr9 = [48, ...arr8, 150];
console.log(arr9); //[48, 24,  16, 46, 78, 12, 150]
let obj2 = { name: "George", age: 52 };
let obj3 = { ...obj2, profession: "developer" };
console.log(obj3); // { name: 'George', age: 52, profession: 'developer' }
//! erase dublicates
const arr10 = ["a", "b", "c", "d", "d", "c", "e"];
const uniqueArray = Array.from(new Set(arr10));
console.log(uniqueArray); // ['a', 'b', 'c', 'd', 'e']
//# erase dublicates objects
const arr11 = [
    { name: "George", age: 52 },
    { name: "George", age: 52 },
    { name: "george", age: 52 },
    { name: "george", age: 53 },
    { name: "george", age: 53 },
];
const uniqueObjects = Array.from(new Set(arr11.map((obj) => JSON.stringify(obj)))).map((str) => JSON.parse(str));
console.log(uniqueObjects);
/* [
    { name: 'George', age: 52 },
    { name: 'george', age: 52 },
    { name: 'george', age: 53 }
  ] */
//! EXAMPLE როგორ გავჩეხოთ ტექსტი თანაბარი რაოდენობის ნაწილებად
const str12 = "გიორგიგოგიავა1970";
const splitPairs = str12.match(/.{1,2}/g);
//const splitPairs2 = str12.match(/.{1,3}/g); //[ 'გიო', 'რგი', 'გოგ', 'იავ', 'ა19', '70' ]
const splitPairs2 = str12.match(/.{1,4}/g); //[ 'გიორ', 'გიგო', 'გიავ', 'ა197', '0' ]
console.log(splitPairs); // [ 'გი', 'ორ', 'გი', 'გო', 'გი', 'ავ',  'ა1', '97', '0' ]
console.log(splitPairs2); //[ 'გიო', 'რგი', 'გოგ', 'იავ', 'ა19', '70' ]
//! EXAMPLE როგორ გავჩეხოთ ტექსტი ერთნაირი სიმბოლოების მიხედვით
const str13 = "abbcccdeefghhiijklllccbc";
const splitChars = str13.match(/(.)\1*/g);
console.log(splitChars); //[ 'a',  'bb', 'ccc', 'd', 'ee', 'f',  'g',   'hh',  'ii', 'j',  'k',   'lll',  'cc', 'b',  'c'  ]
let arr22 = [
    {
        name: "George",
        age: 52,
        isGeorgian: true,
        birthday: ggDates.dateSerial(1970, 8, 8),
    },
    {
        name: "Irina",
        age: 50,
        isGeorgian: false,
        birthday: ggDates.dateSerial(1972, 11, 31),
    },
    {
        name: "Nora",
        age: 73,
        isGeorgian: true,
        birthday: ggDates.dateSerial(1950, 1, 17),
    },
];
// sort above array by name
arr22.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
});
console.log(arr22);
//! advantage of class over object serialize and deserialize
class Person {
    constructor(name, age, isGeorgian, birthday) {
        this.name = name;
        this.age = age;
        this.isGeorgian = isGeorgian;
        this.birthday = birthday;
    }
    toString() {
        let geor = this.isGeorgian ? "ქართველი" : "არაქართველი";
        return `${this.name}, ${this.age} old, ${geor}, დაბ. დღე - ${ggDates.formatDate(this.birthday)} `;
    }
}
let arr23 = [];
arr23.push(new Person("Kakha", 48, true, ggDates.dateSerial(1974, 7, 20)));
arr23[1] = new Person("John", 47, false, ggDates.dateSerial(2058, 1, 1));
arr23.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
});
console.log(arr23);
// Convert the array to JSON
const json = JSON.stringify(arr23);
console.log(json); //[{"name":"John","age":47,"isGeorgian":false,"birthday":"2058-01-31T20:00:00.000Z"},{"name":"Kakha","age":48,"isGeorgian":true,"birthday":"1974-08-19T20:00:00.000Z"}]
// Deserialize json
const json2 = '[{"name":"John","age":47,"isGeorgian":false,"birthday":"2058-01-31T20:00:00.000Z"},{"name":"Kakha","age":48,"isGeorgian":true,"birthday":"1974-08-19T20:00:00.000Z"}]';
const data = JSON.parse(json2);
const people = data.map((obj) => new Person(obj.name, obj.age, obj.isGeorgian, obj.birthday));
console.log(people);
//! REDUCE
//ფუნქცია, რომელიც ღებულობს I პარამეტრად აკუმულატორს, ეს იქნება საბოლოო შედეგი
//II პარამეტრი მასივის მიმდინარე წევრი
//III პარამეტრი ინდექსი
//IV პარამეტრი მიმდინარე მასივის რეფერნსი
// პრინციპი ასეთია ყოველ იტერაციაზე უნდა დავაბრუნოთ მნიშვნელობა, რომელიც
// იწერება აკუმულატორში
// me-2 argumentad aris satskisi akumulatori
let arr20 = [10, 2, 3, 4, 5, 6, 7];
let q1 = arr20.reduce((p, c) => {
    return p + c;
}, 0);
// # მაგალითი: დავთვალოთ, თუ რამდენ-რამდენია ხილი
let fruits = [
    "Apple",
    "Pear",
    "Peach",
    "Cherry",
    "Apple",
    "Peach",
    "Peach",
];
const fruitCounts = fruits.reduce((accumulator, currentValue) => {
    const index = accumulator.findIndex((element) => element.fruit === currentValue);
    if (index !== -1) {
        accumulator[index].count++;
    }
    else {
        accumulator.push({ fruit: currentValue, count: 1 });
    }
    return accumulator;
}, []);
console.log(fruitCounts);
console.log("_".repeat(90));
let myCars = [
    "Mercedes-Benz",
    "Jeep",
    "Ferrari",
    "Lamborghini",
    "Mercedes-Benz",
    "BMW",
    "Ferrari",
];
let instances = myCars.reduce(function (allCars, car) {
    if (car in allCars) {
        allCars[car]++;
    }
    else {
        allCars[car] = 1;
    }
    return allCars;
}, {});
console.log(instances);
console.log("11111111111111@@@@@@@@@@@@222222222222222");
//# sourceMappingURL=Array_Advanced.js.map