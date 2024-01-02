import dayjs from "dayjs";
import arraySupport from "dayjs/plugin/arraySupport.js";
dayjs.extend(arraySupport);
export const TIME_ZONE_DIFF: number = 4;

// Write function that returns last day in the year
export function lastDayOfYear(dt: dayjs.Dayjs): dayjs.Dayjs {
  return dayjs(dt).endOf("year");
}
// Write function that returns last day in the month
export function lastDayOfMonth(dt: dayjs.Dayjs): dayjs.Dayjs {
  return dayjs(dt).endOf("month");
}

// Write function that returns last day in the week
export function lastDayOfWeek(dt: dayjs.Dayjs): dayjs.Dayjs {
  return dayjs(dt).endOf("week");
}

// !wrtwrtwtrwrtwrtwertwert
// ? dfgdgdfgdsgafsdgasdfgafg   არასწორია
// * სწორია
// todo

//* region NextDateFunctions
/**
 * აბრუნებს მომდევნო დღეს
 * @param dt თარიღი dayjs.Dayjs ფორმატში
 * @returns {dayjs.Dayjs}
 */
export function nextDay(dt: dayjs.Dayjs): dayjs.Dayjs {
  return addDays(dt, 1);
}
/**
 * აბრუნებს მომდევნო კვირა დღეს
 * @param dt თარიღი dayjs.Dayjs ფორმატში
 * @returns {dayjs.Dayjs}
 */
export function nextSunday(dt: dayjs.Dayjs): dayjs.Dayjs {
  do {
    dt = nextDay(dt);
  } while (dt.day() != 0);
  return dt;
}
/**
 * აბრუნებს მომდევნო ორშაბათ დღეს
 * @param dt თარიღი dayjs.Dayjs ფორმატში
 * @returns {dayjs.Dayjs}
 */
export function nextMonday(dt: dayjs.Dayjs): dayjs.Dayjs {
  do {
    dt = nextDay(dt);
  } while (dt.day() != 1);
  return dt;
}
/**
 * აბრუნებს მომდევნო სამშაბათს
 * @param dt თარიღი dayjs.Dayjs ფორმატში
 * @returns {dayjs.Dayjs}
 */
export function nextTuesday(dt: dayjs.Dayjs): dayjs.Dayjs {
  do {
    dt = nextDay(dt);
  } while (dt.day() != 2);
  return dt;
}
/**
 * აბრუნებს მომდევნო ოთხშაბათს
 * @param dt  თარიღი dayjs.Dayjs ფორმატში
 * @returns {dayjs.Dayjs}
 */
export function nextWednesday(dt: dayjs.Dayjs): dayjs.Dayjs {
  do {
    dt = nextDay(dt);
  } while (dt.day() != 3);
  return dt;
}
/**
 * აბრუნებს მომდევნო ხუთშაბათს
 * @param dt  თარიღი dayjs.Dayjs ფორმატში
 * @returns     {dayjs.Dayjs}
 */
export function nextThursday(dt: dayjs.Dayjs): dayjs.Dayjs {
  do {
    dt = nextDay(dt);
  } while (dt.day() != 4);
  return dt;
}
/**
 * აბრუნებს მომდევნო პარასკევის დღეს
 * @param dt თარიღი dayjs.Dayjs ფორმატში
 * @returns  {dayjs.Dayjs}
 */
export function nextFriday(dt: dayjs.Dayjs): dayjs.Dayjs {
  do {
    dt = nextDay(dt);
  } while (dt.day() != 5);
  return dt;
}
/**
 *  აბრუნებს მომდევნო შაბათს
 * @param dt თარიღი dayjs.Dayjs ფორმატში
 * @returns  {dayjs.Dayjs}
 */
export function nextSaturday(dt: dayjs.Dayjs): dayjs.Dayjs {
  do {
    dt = nextDay(dt);
  } while (dt.day() != 6);
  return dt;
}

//* region PreviousDateFunctions
/**
 *
 * @param dt თარიღი dayjs.Dayjs ფორმატში
 * @returns {dayjs.Dayjs}
 */
export function previousDay(dt: dayjs.Dayjs): dayjs.Dayjs {
  return addDays(dt, -1);
}
/**
 * აბრუნებს წინა კვირა დღეს
 * @param dt თარიღი dayjs.Dayjs ფორმატში
 * @returns  {dayjs.Dayjs}
 */
export function previousSunday(dt: dayjs.Dayjs): dayjs.Dayjs {
  do {
    dt = previousDay(dt);
  } while (dt.day() != 0);
  return dt;
}
/**
 *  აბრუნებს წინა ორშაბათს
 * @param dt თარიღი dayjs.Dayjs ფორმატში
 * @returns
 */
export function previousMonday(dt: dayjs.Dayjs): dayjs.Dayjs {
  do {
    dt = previousDay(dt);
  } while (dt.day() != 1);
  return dt;
}
/**
 * აბრუნებს წინა სამშაბათს
 * @param dt თარიღი dayjs.Dayjs ფორმატში
 * @returns  {dayjs.Dayjs}
 */
export function previousTuesday(dt: dayjs.Dayjs): dayjs.Dayjs {
  do {
    dt = previousDay(dt);
  } while (dt.day() != 2);
  return dt;
}
/**
 *  აბრუნებს წინა ოთხშაბათს
 * @param dt თარიღი dayjs.Dayjs ფორმატში
 * @returns  {dayjs.Dayjs}
 */
export function previousWednesday(dt: dayjs.Dayjs): dayjs.Dayjs {
  do {
    dt = previousDay(dt);
  } while (dt.day() != 3);
  return dt;
}
/**
 *  აბრუნებს წინა ხუთშაბათს
 * @param dt თარიღი dayjs.Dayjs ფორმატში
 * @returns  {dayjs.Dayjs}
 */
export function previousThursday(dt: dayjs.Dayjs): dayjs.Dayjs {
  do {
    dt = previousDay(dt);
  } while (dt.day() != 4);
  return dt;
}
/**
 *  აბრუნებს წინა პარასკევს
 * @param dt თარიღი dayjs.Dayjs ფორმატში
 * @returns  {dayjs.Dayjs}
 */
export function previousFriday(dt: dayjs.Dayjs): dayjs.Dayjs {
  do {
    dt = previousDay(dt);
  } while (dt.day() != 5);
  return dt;
}
/**
 *  აბრუნებს წინა შაბათს
 * @param dt თარიღი dayjs.Dayjs ფორმატში
 * @returns  {dayjs.Dayjs}
 */
export function previousSaturday(dt: dayjs.Dayjs): dayjs.Dayjs {
  do {
    dt = previousDay(dt);
  } while (dt.day() != 6);
  return dt;
}

//* region DateFunctions_INIT
/**
 * აბრუნებს აკონვერტირებს თარიღს dayjs.Dayjs ფორმატიდან Date ფორმატში
 * @param dt თარიღი dayjs.Dayjs ფორმატში
 * @returns {Date}
 */
export function fromDayJsToDate(dt: dayjs.Dayjs): Date {
  return new Date(
    dt.year(),
    dt.month(),
    dt.date(),
    dt.hour(),
    dt.minute(),
    dt.second()
  );
}
/**
 * აბრუნებს აკონვერტირებს თარიღს Date ფორმატიდან dayjs.Dayjs ფორმატში
 * @param dt თარიღი Date ფორმატში
 * @returns {dayjs.Dayjs}
 */
export function fronDateToDayJs(dt: Date): dayjs.Dayjs {
  return dayjs(dt);
}
/**
 * აბრუნებს მიმდინარე დღეს და დროს
 * @returns {dayjs.Dayjs}
 */
export function now(): dayjs.Dayjs {
  let dt: Date = new Date();
  return dayjs(dt);
}
/**
 *  აბრუნებს მიმდინარე დღეს ლოგიკურ ფორმატში
 * @returns {dayjs.Dayjs}
 */
export function today(): dayjs.Dayjs {
  let dt: dayjs.Dayjs = dayjs(new Date());
  dt.set("hour", 0).set("minute", 0).set("second", 0);
  return dt;
}
/**
 *  აბრუნებს ობიექტს dayjs.Dayjs
 * @param year {number} with 4 digit
 * @param month  {number}  0-11
 * @param dayOfMonth  {number}
 * @param hour  {number} hour 0-23
 * @param minute  {number} minute 0-59
 * @param second  {number} second 0-59
 * @returns {dayjs.Dayjs}
 */
export function dateTimeSerial(
  year: number,
  month: number,
  dayOfMonth: number,
  hour: number = 0,
  minute: number = 0,
  second: number = 0
): dayjs.Dayjs {
  return dayjs()
    .set("year", year)
    .set("month", month)
    .set("date", dayOfMonth)
    .set("hour", hour)
    .set("minute", minute)
    .set("second", second)
    .set("millisecond", 0);
}
/**
 *  აბრუნებს ობიექტს dayjs.Dayjs
 * @param year {number} with 4 digit
 * @param month  {number}  0-11
 * @param dayOfMonth  {number}
 * @returns
 */
export function dateSerial(
  year: number,
  month: number,
  dayOfMonth: number
): dayjs.Dayjs {
  return dayjs()
    .set("year", year)
    .set("month", month)
    .set("date", dayOfMonth)
    .set("hour", 0)
    .set("minute", 0)
    .set("second", 0)
    .set("millisecond", 0);
}

//* region DateFunctions_Format
export enum dateFormatTypes {
  normal,
  dan,
  mde,
  s,
  is,
  abr,
}
/**
 * აბრუნებს კვირის დღეს ქართულად
 * @param dt {dayjs.Dayjs}
 * @param isAbr {boolean} განსაზღვრავს იყოს თუ არა აბრევიატურა
 * @returns {string}
 */
export const weekDayNameGe = (
  dt: dayjs.Dayjs,
  isAbr: boolean = false
): string => {
  const week: string[] = [
    "კვირა",
    "ორშაბათი",
    "სამშაბათი",
    "ოთხშაბათი",
    "ხუთშაბათი",
    "პარასკევი",
    "შაბათი",
  ];
  const ab: string[] = ["კვი.", "ორშ.", "სამ.", "ოთხ.", "ხუთ.", "პარ.", "შაბ."];

  if (isAbr) {
    return ab[dt.day()];
  } else {
    return week[dt.day()];
  }
};
/**
 * აბრუნებს თვეს ქართულად თარიღის მიხედვით
 * @param dt {dayjs.Dayjs}
 * @param formatType {dateFormatTypes} აქვს შემდეგი მნიშვნელობები  normal, dan, mde, s, is,  abr
 * @returns {string}
 */
export function monthNameGe(
  dt: dayjs.Dayjs,
  formatType: dateFormatTypes = dateFormatTypes.normal
): string {
  const month: string[] = [
    "იანვარი",
    "თებერვალი",
    "მარტი",
    "აპრილი",
    "მაისი",
    "ივნისი",
    "ივლისი",
    "აგვისტო",
    "სექტემბერი",
    "ოქტომბერი",
    "ნოემბერი",
    "დეკემბერი",
  ];
  const dan: string[] = [
    "იანვრიდან",
    "თებერვლიდან",
    "მარტიდან",
    "აპრილიდან",
    "მაისიდან",
    "ივნისიდან",
    "ივლისიდან",
    "აგვისტოდან",
    "სექტემბრიდან",
    "ოქტომბრიდან",
    "ნოემბრიდან",
    "დეკემბრიდან",
  ];
  const s: string[] = [
    "იანვარს",
    "თებერვალს",
    "მარტს",
    "აპრილს",
    "მაისს",
    "ივნისს",
    "ივლისს",
    "აგვისტოს",
    "სექტემბერს",
    "ოქტომბერს",
    "ნოემბერს",
    "დეკემბერს",
  ];
  const mde: string[] = [
    "იანვრამდე",
    "თებერვლამდე",
    "მარტამდე",
    "აპრილამდე",
    "მაისამდე",
    "ივნისამდე",
    "ივლისამდე",
    "აგვისტომდე",
    "სექტემბრამდე",
    "ოქტომბრამდე",
    "ნოემბრამდე",
    "დეკემბრამდე",
  ];
  const is: string[] = [
    "იანვრის",
    "თებერვლის",
    "მარტის",
    "აპრილის",
    "მაისის",
    "ივნისის",
    "ივლისის",
    "აგვისტოს",
    "სექტემბრის",
    "ოქტომბრის",
    "ნოემბრის",
    "დეკემბრის",
  ];
  const abr: string[] = [
    "იან.",
    "თებ.",
    "მარ.",
    "აპრ.",
    "მაი.",
    "ივნ.",
    "ივლ.",
    "აგვ.",
    "სექ.",
    "ოქტ.",
    "ნოე.",
    "დეკ.",
  ];

  let monthName: string = "";
  switch (formatType) {
    case dateFormatTypes.normal:
      monthName = month[dt.month()];
      break;
    case dateFormatTypes.dan:
      monthName = dan[dt.month()];
      break;
    case dateFormatTypes.s:
      monthName = s[dt.month()];
      break;
    case dateFormatTypes.is:
      monthName = is[dt.month()];
      break;
    case dateFormatTypes.mde:
      monthName = mde[dt.month()];
      break;
    case dateFormatTypes.abr:
      monthName = abr[dt.month()];
      break;
    default:
      monthName = month[dt.month()];
      break;
  }
  return monthName;
}
/**
 * აბრუნებს დაფორმატებულ თარიღს, მაგ.: 2023 წლის 28 იანვარი
 * @param dt { dayjs.Dayjs}
 * @param formatType {dateFormatTypes} აქვს შემდეგი მნიშვნელობები  normal, dan, mde, s, is,  abr
 * @returns  {string}
 */
export function formatDate(
  dt: dayjs.Dayjs,
  formatType: dateFormatTypes = dateFormatTypes.normal
): string {
  return `${dt.year()} წლის ${dt.date()} ${monthNameGe(dt, formatType)}`;
}
/**
 *  აბრუნებს თარიღების ინტერვალს, თარიღების მიხედვით {2023 წლის 28 აპრილიდან - 2023 წლის 5 მაისამდე} ან {28.04.2023 - 05.05.2023}
 * @param dt1 {dayjs.Dayjs} პირველი თარიღი ლოგიკურ ფორმატში
 * @param dt2 {dayjs.Dayjs} მეორე თარიღი ლოგიკურ ფორმატში
 * @param short {boolean} თუ ჭეშმარიტია, მაშინ დაბრუნდება  shortDateString-ები, თუ არა და სრული თარიღების ინტერვალი
 * @returns {string}
 */
export function formatInterval(
  dt1: dayjs.Dayjs,
  dt2: dayjs.Dayjs,
  short: boolean = false
): string {
  if (short) {
    return `${shortDateString(dt1)} - ${shortDateString(dt2)}`;
  } else {
    return `${formatDate(dt1, dateFormatTypes.dan)} - ${formatDate(
      dt2,
      dateFormatTypes.mde
    )}`;
  }
}
/**
 * აბრუნებს დღეს მოკლე ფორმატში dd.MM.yyyy shortDateString like 27.01.2023
 * @param dt {dayjs.Dayjs}
 * @returns  {string}
 */
export function shortDateString(dt: dayjs.Dayjs): string {
  return `${dt.date().toString().padStart(2, "0")}.${(dt.month() + 1)
    .toString()
    .padStart(2, "0")}.${dt.year()}`;
}
/**
 *  date string for mysql like '2023-01-27'
 * @param dt {dayjs.Dayjs}
 * @returns {string}
 */
export function mysqlDateString(dt: dayjs.Dayjs): string {
  return `'${dt.year()}-${(dt.month() + 1).toString().padStart(2, "0")}-${dt
    .date()
    .toString()
    .padStart(2, "0")}'`;
}
/**
 * datetime string like '2023-01-27 09:43:50'
 * @param dt {dayjs.Dayjs}
 * @returns  {string}
 */
export function mysqlDateTimeString(dt: dayjs.Dayjs): string {
  return `'${dt.year()}-${(dt.month() + 1).toString().padStart(2, "0")}-${dt
    .date()
    .toString()
    .padStart(2, "0")} ${dt.hour().toString().padStart(2, "0")}:${dt
    .minute()
    .toString()
    .padStart(2, "0")}:${dt.second().toString().padStart(2, "0")}'`;
}
/**
 * ითვლის აღდგომის დღეს გრიგორიანული კალენდრით
 * @param year  {number}
 * @returns {dayjs.Dayjs}
 */
export function easter(year: number): dayjs.Dayjs {
  //gets date
  const a: number = year % 4;
  const b: number = year % 7;
  const c: number = year % 19;
  const d: number = (19 * c + 15) % 30;
  const e: number = (2 * a + 4 * b - d + 34) % 7;
  const month: number = Math.floor((d + e + 114) / 31);
  const day: number = ((d + e + 114) % 31) + 1;
  return dateSerial(year, month - 1, day + 13);
}
/**
 * აბრუნებს ლოგიკურ თარიღს, დამატებული დღეებით
 * @param dt {dayjs.Dayjs}, თარიღი, რომელსაც უნდა დაემატოს დღეები
 * @param days დღეების რაოდენობა, თუ რამდენი უნდა დაემატოს, არა აუცილებელი პარამეტრი. საგულისხმოდ =1
 * @returns {dayjs.Dayjs}
 */
export function addDays(dt: dayjs.Dayjs, days: number = 1): dayjs.Dayjs {
  return dt.add(days, "day");
}
