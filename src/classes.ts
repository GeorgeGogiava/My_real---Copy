// * SIMPLE CLASS EXAMPLE

import { Agent, setMaxIdleHTTPParsers } from "http";

/* class User {
    firstName ? : string
    lastName ? : string
    private age ? : number
    readonly job: string | undefined = "developer"


// ! public private protected 
// * public - доступен везде (Default)
// * private - доступен только внутри класса
// * protected - доступен внутри класса и в наследниках

    constructor(firstName: string, lastName: string, job?: string) {
        this.firstName = firstName
        this.lastName = lastName
       // this.job = job
    }

    showName(): void {
       // this.job="Frontend" // ! readonly მინიჭება შეიძლება მხოლოდ კონსტრუქტორში
        console.log(this.firstName + " " + this.lastName + " " + this.job)
    }
}

let user1= new User("Boris", "Lav")
user1.showName() */

//* Class with Sugar Syntax, setters and getters, static methods

/* class Dog {
  private _width: number = 0;
  private _height: number = 0;
  private _color: string = "black";

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    if (value < 0) {
      throw new Error("მაგიდის სიგანე ვერ იქნება უარყოფითი");
    }
    this._width = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    if (value < 0) {
      this._height = 120;
    } else {
      this._height = value;
    }
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    console.log("Setting color ...");
    this._color = value;
  }

  // სტატიკური მეთოდი 
  static bark(voice: string) {
    console.log(voice);
  }

  // როდესაც კონსტრუქტორს გადაეცემა არგუმენტები მოდიფიკატორებით,
  //მაშინ შესაბამისი თვისების შექმნა არ არის საჭირო და აუცილებელი
  constructor(public name: string, private age: number) {}

  showName(): void {
    console.log(this.name + " " + this.age);
  }
}

let dog1 = new Dog("Sharik", 5);
dog1.height = 480;
dog1.width = 1500;
dog1.color = "Green";

console.log(`Height >> ${dog1.height} 
width >> ${dog1.width}
color >> ${dog1.color}`);

Dog.bark("Gav Gav");
dog1.showName();
 */

//* კლასებში თვისება როგორც მეორე კლასის მასივი, ასევე toString() მეთოდი

/* class Point {
  constructor(public x: number, public y: number) {} //sweet syntax

  //! ეს მეთოდი სჭირდება შემდგომში, როდესაც გამოგვაქვს point[i],
  //! თუ ამ მეთოდს არ დავახვედრებთ, მაშინ გამოიტანს [object Object]
  toString(){
    return `X=${this.x}, Y=${this.y}`
  }
}

class Grid {
  point: Point[] = [];
  // # აი, ნახეთ თუ როგორ ხდება
  //ასევე კლასის ეგზემპლარის მინიჭება, როდესაც ობიექტი ემთხვევა სტრუქტურას
  //static origin: Point = { x: 0, y: 0 };
  static origin:Point =new Point(0, 100)

  add(x: number, y: number) {
    this.point.push(new Point(x, y));
  }

  showPoints() {
    for (let i = 0; i < this.point.length; i++) {
      console.log(`${i.toString().padStart(2, " ")} >> ${this.point[i]}`);
    }
  }
}

let grid1=new Grid 

grid1.add(20, 120)
grid1.add(30, 154)
grid1.add(154, 78)
console.log(Grid.origin.toString())
grid1.showPoints() */

// * მემკვიდეობითობა

/* class Shape {
  constructor(public name: string, public color: string) {}
  //# წვდომადია მხოლოდ წარმოებულ კლასებში
  protected getInfo(): string {
    return `Shape  >> ${this.name} (${this.color})`;
  }
  // ეს კლასი მომავალში ექნება მემკვიდრე კლასებს გადასაზღვრული
  showInfo() {}

  //ეს მეთოდი მომავალში გამოძახებულ იქნება მეთოდით super 
  //და დამატებული ექნება რაღაც ტექსტი წარმოებულ კლასში 
  showName():string {
    return this.name;
  }
}

// I წარმოებული კლასი
class Rectangle extends Shape {
  //ტკბილი სინტაქსით, ჩვენ თვითონ ვამატებთ, ახალ თვისებებს width, height
  constructor(public width: number, public height: number, color: string) {
    //აუცილებელია რადგან საჭიროა ვუპასუხოთ მშობლის კონსტრუქტორს
    super("Rectangle", color);
  }
  //გადასაზღვრული მეთოდი
  showInfo() {
    const baseInfo: string = this.getInfo();
    console.log(`${baseInfo}, Width: ${this.width}, Height: ${this.height}`);
  }

  //აქ არის ვარიანტი, როცა ვიძახებთ საბაზისო კლასის მეთოდს super.showName()
  //და ვამატებთ დამატებით ტექსტს
  showName(): string {
    return super.showName() + " (Additional text By rectangle)";
  }
}

//II წარმოებული კლასი
class Circle extends Shape {
  //ტკბილი სინტაქსით, ჩვენ თვითონ ვამატებთ, ახალ თვისებებს radius
  constructor(public radius: number, color: string) {
    super("Circle", color);
  }

  showInfo() {
    const baseInfo: string = this.getInfo();
    console.log(`${baseInfo}, Radius: ${this.radius}`);
  }

  showName(): string {
    return super.showName() + " (Additional text By circle)";
  }
}

//აქ ხდება გამოყენება
const r1 = new Rectangle(200, 300, "Blue");
//r1.showInfo()

const c1 = new Circle(500, "Red");
//c1.showInfo()

let shapes: Shape[] = [];
shapes.push(r1);
shapes.push(c1);
shapes.push(new Circle(450, "Green"));

for (let shape of shapes) {
  shape.showInfo();
  console.log(shape.showName());
}

 გამოაქვს შედეგები 
Shape  >> Rectangle (Blue), Width: 200, Height: 300
Rectangle (Additional text By rectangle)
Shape  >> Circle (Red), Radius: 500
Circle (Additional text By circle)
Shape  >> Circle (Green), Radius: 450
Circle (Additional text By circle) 
 */

// * აბსტრაქტული კლასები
//აბსტრაქტულია კლასი, როცა იგი განკუთვნილია მხოლოდ კლასების საწარმოებლად,
//აბსტრაქტული კლასის ეგზემპლარის შექმნა შეუძლებელია
// თუ შეიცავს აბსტრაქტულ მეთოდს,
//მაშინ იგი აუცილებელია იმპლემენტიერებული იყოს შვილობის კლასებში
/* abstract class Animal {
  constructor(public name: string) {}
  abstract makeSound(): void;
  AnimalMove(): void {
    console.log(this.name + " moves...");
  }
}

class Cat extends Animal {
  constructor() {
    super("Cat");
  }

  makeSound(): void {
    console.log("meow-meow");
  }
}

class Cow extends Animal {
  constructor() {
    super("Cow");
  }

  makeSound(): void {
    console.log("Mu-u-u-u...");
  }
}

const c1=new Cat()
const c2 =new Cow()

c1.AnimalMove()
c2.AnimalMove()

c1.makeSound()
c2.makeSound()
 */

//* INTERFACIES
/* 
interface IPerson {
  name: string;
  work(): void;
  sleep(): void;
  arise(): string;
}

const printName = (obj: IPerson) => {
  console.log(obj.name);
};

const obj2 = {
  name: "George",
  age: 52,
  work() {
    console.log(this.name + " is working...");
  },
  //sleep: ()=> {console.log(this.name + " is sleeping ...")} //Error ისრიანი ფუნქციები არ სეიძლება ამ დროს
  sleep() {
    console.log(this.name + " is sleeping...");
  },
  arise() {
    return this.name + " is arising at 8:00 o'clock";
  },
};

printName(obj2);

class Person implements IPerson {
  private _calc:number =0
  
  get calc():number{
    return this._calc
  }


  proffession: string = "Developer";
  constructor(public name: string, public age: number) {}

  work(): void {
    console.log(this.name + " is working...");
  }

  sleep = (): void => {
    this._calc=45
    console.log(this.name + " is sleeping..." + this.proffession);
  };

  arise = (): string => {
    return "8 AM";
  };
}

const john = new Person("John", 25);
john.work();
john.sleep();
console.log(john.calc)
printName(john);
 */

// * Interfacies My test
interface IPerson {
  proffession?: string; // არაა აუცილებელი იმპლემენტაციისთვის
  name: string;
  age: number;
  work(): void;
  sleep(): void;
  method:()=>string;
}

const showName = (obj: IPerson) => {
  console.log(obj.name + " " + obj.age);
};

class Person implements IPerson {
  private _makeCalc: number = 0;
  job: string = "Developer";
  constructor(public name: string, public age: number) {}
  work(): void {
    this._makeCalc += 250;
    console.log(`${this.name} is working`);
  }
  sleep = (): void => {
    this._makeCalc += 25;
    console.log(`${this.name} is sleeping ...`);
  };

  get makeCalc(): number {
    return this._makeCalc;
  }

method():string{
return "agegegef"
}

}

const gia: Person = new Person("George", 52);
gia.sleep();
gia.work();
console.log(gia.makeCalc);
showName(gia);

// * ინტერფეისი ფუნქციისთვის

//აქ აღწერილია ინტერფეისი, რომელიც გამოიყენება ფუნქციისთვის ქვემოთ;
// ანუ ფუნქციას ევალება მიიღოს string არგუმენტი, (ამ დროს არ არის აუცილებელი
// ემთხვეოდეს სახელი) და უნდა დააბრუნოს boolean
//მრგვალ ფრჩხილებში ჩასმა აუცილებელია

interface ISearch {
  (text: string): boolean;
}

const search: ISearch = (cont: string): boolean => {
  return true;
};

//ქვემოთ არასწორია რადგან txt უნდა ჰქონდეს ტიპი string
//let search2:ISearch =function(txt:number){return false}

console.log(search("asasas"));
