// * SIMPLE CLASS EXAMPLE
const showName = (obj) => {
    console.log(obj.name + " " + obj.age);
};
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this._makeCalc = 0;
        this.job = "Developer";
        this.sleep = () => {
            this._makeCalc += 25;
            console.log(`${this.name} is sleeping ...`);
        };
    }
    work() {
        this._makeCalc += 250;
        console.log(`${this.name} is working`);
    }
    get makeCalc() {
        return this._makeCalc;
    }
    method() {
        return "agegegef";
    }
}
const gia = new Person("George", 52);
gia.sleep();
gia.work();
console.log(gia.makeCalc);
showName(gia);
const search = (cont) => {
    return true;
};
//ქვემოთ არასწორია რადგან txt უნდა ჰქონდეს ტიპი string
//let search2:ISearch =function(txt:number){return false}
console.log(search("asasas"));
export {};
//# sourceMappingURL=classes.js.map