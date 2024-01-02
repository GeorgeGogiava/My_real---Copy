import path from "path";
import { myName, myAge } from "./module.js";
import { fileURLToPath } from 'url';
import * as dotenv from "dotenv";
import * as gg from "./module.js";
import * as rr from "./module2.js";
console.log(`gggg >>>>>>  ${rr.rrSquare(rr.r1)}`);
dotenv.config();
// 👇️ "/home/borislav/Desktop/javascript/index.js"
const __filename = fileURLToPath(import.meta.url); //works with ES2020 and later
console.log(__filename);
// 👇️ "/home/borislav/Desktop/javascript"
const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);
// 👇️ "/home/borislav/Desktop/javascript/dist/index.html"
console.log(path.join(__dirname, '/dist', 'index.html'));
console.log(path.join(__dirname, 'dist', 'index.html'));
console.info(`
My name is  >> ${myName}
And my age is >> ${myAge}
`);
console.log(__dirname);
console.log(__filename);
console.log(`:)  👉️👉️👉️👉️ ${process.env.PORT}`);
console.log(`:)  ${process.env.AGE}`);
console.log(`:)  === ${gg.myAge}`);
console.log(`:)  👉️👉️👉️👉️ ${gg.myFunc(9)}`);
console.log(`:)  👉️👉️👉️👉️ ${gg.mySquare(5)}`);
//# sourceMappingURL=index.js.map