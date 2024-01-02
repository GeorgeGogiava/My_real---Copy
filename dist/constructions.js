"use strict";
function highlightSubtext2(mainText, subtext, customClass, caseSensitive) {
    let indices = [];
    // find all indices of subtext in mainText
    let index = caseSensitive ? mainText.indexOf(subtext) : mainText.toLowerCase().indexOf(subtext.toLowerCase());
    while (index !== -1) {
        indices.push(index);
        index = caseSensitive ? mainText.indexOf(subtext, index + 1) : mainText.toLowerCase().indexOf(subtext.toLowerCase(), index + 1);
    }
    if (indices.length === 0) {
        return mainText;
    }
    // highlight each part of subtext
    let result = "";
    let startIndex = 0;
    for (let i = 0; i < indices.length; i++) {
        let index = indices[i];
        let highlightedSubtext = `<span class='${customClass}'>${mainText.substring(index, index + subtext.length)}</span>`;
        result += mainText.substring(startIndex, index) + highlightedSubtext;
        startIndex = index + subtext.length;
    }
    result += mainText.substring(startIndex, mainText.length);
    return result;
}
/* function highlightSubtext(text: string, subtext: string, customClass: string, caseSensitive: boolean = true): string {
    let result = text;
    let sub = caseSensitive ? subtext : subtext.toLowerCase();
    let highlightedSubtext = `<span class='${customClass}'>${subtext}</span>`;
    let index = caseSensitive ? result.indexOf(sub) : result.toLowerCase().indexOf(sub);

    while (index !== -1) {
        result = result.substring(0, index) + highlightedSubtext + result.substring(index + subtext.length);
        index = caseSensitive ? result.indexOf(sub, index + highlightedSubtext.length) : result.toLowerCase().indexOf(sub, index + highlightedSubtext.length);
    }

    return result;
} */
/*  function highlightSubtext(text: string, subtext: string, customClass: string, caseSensitive: boolean = true): string {
   let result = text;
   let currentIndex = 0;
   let subtextLowerCase = caseSensitive ? subtext : subtext.toLowerCase();
   let textLowerCase = caseSensitive ? text : text.toLowerCase();
 
   while (true) {
     let index = textLowerCase.indexOf(subtextLowerCase, currentIndex);
     if (index === -1) break;
 
     let highlightedSubtext = text.substring(index, index + subtext.length);
     highlightedSubtext = `<span class='${customClass}'>${highlightedSubtext}</span>`;
     result = result.substring(0, index) + highlightedSubtext + result.substring(index + subtext.length);
 
     currentIndex = index + highlightedSubtext.length;
     textLowerCase = caseSensitive ? result : result.toLowerCase();
   }
 
   return result;
 }
  */
console.log(highlightSubtext2("My name is George and I live in Georgia, georgia is the super country", "geor", "customClassName", true));
//******    IF   ***************** */
const old = 15;
if (old < 10) {
    console.log('baby');
}
else if (old < 20) {
    console.log('Teenager');
}
else if (old < 50) {
    console.log('Medium');
}
else {
    console.log('Old');
}
//******    TERNAR   ***************** */
old < 70 ? console.log("Less") : console.log("More");
//******    CASE SWITCH  ***************** */
let day = 4;
switch (day) {
    case 0:
        console.log("It is a Sunday.");
        break;
    case 1:
        console.log("It is a Monday.");
        break;
    case 2:
        console.log("It is a Tuesday.");
        break;
    case 3:
        console.log("It is a Wednesday.");
        break;
    case 4:
        console.log("It is a Thursday.");
        break;
    case 5:
        console.log("It is a Friday.");
        break;
    case 6:
        console.log("It is a Saturday.");
        break;
    default:
        console.log("No such day exists!");
        break;
}
//******    FOR LOOP ***************** */
let arr1 = [10, 20, 30, 40];
for (var val in arr1) {
    console.log(arr1[val]); // prints values: 10, 20, 30, 40
}
console.log("*".repeat(50));
let arr = [10, 20, 30, 40];
for (var vv of arr) {
    console.log(vv); // prints values: 10, 20, 30, 40
}
//******    WHILE ***************** */
let i = 2;
while (i < 4) {
    console.log("Block statement execution no." + i);
    i++;
}
//****************** FUNCTIONS *************** */
//****************** FUNCTIONS *************** */
//****************** FUNCTIONS *************** */
//JSDOC  უნდა აიკრიბოს  /** და შემდეგ მიეცეს ენტერი
/**
 * ეს ფუნქცია აბრუნებს ტექსტს
 * @param name სახელი, რომელიც უნდა მიეცეს ფუნქციას
 * @param age  ასაკი, რომელიც შეიძლება მიეცეს და შეიძლება არა, თუ არ მიეცემა მაშინ იქნება ტოლი 52-ისა
 */
function greet(name, age = 52) {
    console.info(`Hello ${name}, Age is ${age}`);
}
function greet3(age = 22, name) {
    console.info(`Hello ${name}, Age is ${age}`);
}
greet("Alex");
greet("Gabriel", 24);
greet3(undefined, "goga"); //Hello goga, Age is 22
//*****************ARROW FUNCTIONS *************** */
const greet2 = (name, age) => {
    if (!age) {
        console.info(`Hello ${name}`);
    }
    else {
        console.info(`Hello ${name}, Age is ${age}`);
    }
};
greet2("David");
greet2("Mariam", 22);
function aaaa(name) {
    if (typeof name === 'string') {
        return name.concat("**********");
    }
    else if (typeof name === 'number') {
        return name ** 2;
    }
    else {
        return "unknown type";
    }
}
console.log(aaaa(14)); //196
console.log(aaaa("Gogi")); //Gogi**********
//# sourceMappingURL=constructions.js.map