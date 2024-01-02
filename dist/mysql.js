import { createPool } from 'mysql2/promise';
let tt = 34;
const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'GGSoft_2007',
    database: 'node'
});
tt++;
tt = tt + 45;
const connection = await pool.getConnection();
//const queryString:string =
const [rows] = await connection.query(`SELECT id, name, age, birthday, image 
    FROM person 
   WHERE   
    name like ?;`, ['%o%']);
connection.release();
console.log(rows);
console.log(tt);
//# sourceMappingURL=mysql.js.map