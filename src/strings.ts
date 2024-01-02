let str_test:string='My name is George გოგიავა'

console.log(str_test.at(1)) //y
console.log(str_test.charAt(1)) //y
console.log(str_test.at(18)) //გ
console.log(str_test.charAt(18)) //გ
console.log(str_test.at(-1)) //ა
console.log(str_test.charAt(-1)) //უარყოფითებზე არ მუშაობს 

console.log(String.fromCharCode(4304, 4305, 4306)); //აბგ
console.log(str_test.length) //25

console.log(str_test.charCodeAt(18)) //4306
console.log(str_test.concat(' and my age is 52')) //My name is George გოგიავა and my age is 52
console.log(str_test.endsWith( 'ავა'))//true
console.log('asasasa'.endsWith( 'Asa'))//false
console.log('asasasa'.startsWith( 'Asa'))//false
console.log(str_test.includes('გოგი')) //true
console.log(str_test.includes('გოგი',20)) //ფალსე
console.log(str_test.indexOf('გ')) //18
console.log(str_test.lastIndexOf('გ')) //20
console.log(str_test.lastIndexOf('Jas')) //-1

console.log(str_test.padEnd(50, '*')) //My name is George გოგიავა*************************
console.log(str_test.padStart(50, '*')) //*************************My name is George გოგიავა
console.log('__12__'.repeat(3)) //__12____12____12__
console.log(str_test.replace('name', 'First name')) //My First name is George გოგიავა
console.log(str_test.replace('Name', 'First name')) //My name is George გოგიავა
console.log(str_test.search('გოგი')) //18 ვიყენებთ რეგულარული გამოსახულებისას, ისე სჯობს  indexOf
console.log(str_test.slice(18,22)) //'გოგი'
console.log(str_test.slice( 18)) //'გოგიავა'
console.log(str_test.slice( -5)) //'გიავა'
console.log(str_test.slice( -10, -5)) //'ge გო'
console.log(str_test.split('e')) //'ge გო' [ 'My nam', ' is G', 'org', ' გოგიავა' ]
console.log(str_test.substring(18,22)) //გოგი
console.log(str_test.substring(22, 18)) //გოგი  swaps the args
console.log(str_test.slice(22, 18)) // "" Empty string
console.log(str_test.toLowerCase()) //my name is george გოგიავა
console.log(str_test.toUpperCase()) //MY NAME IS GEORGE ᲒᲝᲒᲘᲐᲕᲐ

console.log("   ggg   ".trim()) //'ggg'
console.log("   ggg   ".trimEnd()) // '   ggg'
console.log("   ggg   ".trimStart()) //'ggg   '
console.log(str_test.valueOf()) //'My name is George გოგიავა

//Emoji's
//    https://unicode.org/emoji/charts/full-emoji-list.html#1f449
console.log("\u{1F600}   " + "Emoji"); //😀   Emoji
console.log("\u{1F449}   " + "Emoji");//👉   Emoji
console.log("\u{2700}   " + "Emoji"); //✀   Emoji
console.log("\u{1F450}   " + "Emoji"); //👐   Emoji
console.log("\u{1F5D0}   " + "Emoji"); //🔀   Emoji
console.log("\u{1F9D1}   " + "Emoji"); //🧑   Emoji
console.log("\u{1F41E}   " + "Emoji"); //🐞   Emoji
console.log("\u{1F332}   " + "Emoji"); //🌲   Emoji
console.log("\u{1F352}   " + "Emoji"); //🍒   Emoji
console.log("\u{1F353}   " + "Emoji"); //🍓   Emoji
console.log("\u{1F30D}   " + "Emoji"); //🌍   Emoji
console.log("\u{1F63A}   " + "Emoji"); //😺   Emoji
console.log("\u{1F497}   " + "Emoji"); //💗   Emoji
console.log("\u{1F55B}   " + "Emoji"); //🕛   Emoji
console.log("\u{2B50}   " + "Emoji"); //⭐    Emoji
console.log("\u{2744}   " + "Emoji"); //❄    Emoji
console.log("\u{26C4}   " + "Emoji"); //⛄    Emoji
console.log("\u{1F3B5}   " + "Emoji"); //🎵     Emoji


/* const [rows] = await connection.query(
    `SELECT id, name, age, birthday, image 
      FROM person 
     WHERE   
      name like ?;`, ['%o%']); 
  
 */

/* განსხვავება slice და substring 
What they have in common:
If start equals stop: returns an empty string
If stop is omitted: extracts characters to the end of the string
If either argument is greater than the string's length, the string's length will be used instead.
Distinctions of substring():

If start > stop, then substring will swap those 2 arguments.
If either argument is negative or is NaN, it is treated as if it were 0.

Distinctions of slice():

If start > stop, slice() will return the empty string. ("")
If start is negative: sets char from the end of string, exactly like substr() in Firefox. This behavior is observed in both Firefox and IE.
If stop is negative: sets stop to: string.length – Math.abs(stop) (original value), except bounded at 0 (thus, Math.max(0, string.length + stop)) as covered in the ECMA

 */


