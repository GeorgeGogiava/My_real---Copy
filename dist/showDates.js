import * as ggDates from './ggDates.js';
import dayjs from 'dayjs';
let i = 0;
do {
    i++;
    let dt = ggDates.addDays(ggDates.now(), i);
    console.info(`${i} >> ${ggDates.formatDate(dt)},  ${ggDates.weekDayNameGe(dt)}`);
} while (i < 15);
//function that gets me if year is leap or not  (წლის ნაბიჯი არის თუ არა)
function isLeapYear(year) {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0) ? true : false; //ანუ თუ ნაბიჯი არის 400-ის გამყოფი ან არა 100-ის გამყოფი და 4-ის გამყოფი ანუ ნაბიჯი არის თუ არა    ანუ თუ ნაბიჯი არის 100-ის გამყოფი და 4-ის გამყოფი ანუ ნაბიჯი არის თუ არა    
}
const c = ggDates.now();
console.log(c);
const c2 = ggDates.dateTimeSerial(2023, 0, 29, 15, 8, 14);
console.log(c2);
let c3 = dayjs();
c3 = c3.set('year', 2023);
c3 = c3.set('month', 0);
c3 = c3.set('date', 29);
c3 = c3.set('hour', 15);
c3 = c3.set('minute', 8);
c3 = c3.set('second', 14);
console.log(ggDates.formatDate(ggDates.dateSerial(2023, 3, 16), ggDates.dateFormatTypes.s));
console.log(ggDates.monthNameGe(ggDates.dateSerial(2023, 3, 16), ggDates.dateFormatTypes.mde));
console.log(ggDates.weekDayNameGe(ggDates.now(), true));
console.log(ggDates.formatDate(ggDates.easter(2000)));
console.log(ggDates.shortDateString(ggDates.easter(2021)));
console.log(ggDates.mysqlDateString(ggDates.easter(2021)));
console.log(ggDates.mysqlDateTimeString(ggDates.now()));
const cc = ggDates.dateSerial(2023, 3, 28);
const cc2 = ggDates.addDays(cc, 7);
console.log(ggDates.formatDate(cc2));
console.log(ggDates.formatInterval(cc, cc2, true));
let ddt = ggDates.nextMonday(ggDates.now());
console.log(ggDates.formatDate(ddt));
//console.log(dayjs(2023, 0, 29, 15,8,14))
//console.log(ggDates.today())
/*
let c4=dayjs([2023,3,16,15,12,23])
const c=dayjs('2023-02-27T15:16:7')
const c2=dayjs('2023-01-32T00:00:00')
const c3=dayjs('2023-04-16')

console.log(c.hour())
console.log(c.date())
console.log(c.add(7, 'minute'))
console.log(c.daysInMonth())
console.log(c.day())
console.log(c.diff(c2, 'day'))
console.log(c.toDate())
console.log(c.format('DD-MMM-YYYY HH:mm:ss') )
console.log(`C2 >> ${c2.date()}, ${c2.month()}  ${c2.hour()}:${c2.minute()}`)
console.log(`C3 >> ${c3.date()}, ${c3.month()}  ${c3.hour()}:${c3.minute()}`)

console.log(c2.endOf('y'))
console.log(c4.format())
//c4=console.log(c4.date(20).format())
c4=c4.set('hour', 26)
console.log(`'${c4.format('YYYY-MM-DD HH:mm:ss')}'`)

*/
//const c=dayjs('2023-01-28')
/* const c=dayjs('2023-01-28 15:16:17')
const c2=dayjs([2023,1,28,15,16,17])
console.log(c.day())
console.log(c.format('YYYY-MM-DD HH:mm:ss MMM'))

console.log(c2.day())
console.log(c2.format('YYYY-MM-DD HH:mm:ss MMM'))
 */ 
//# sourceMappingURL=showDates.js.map