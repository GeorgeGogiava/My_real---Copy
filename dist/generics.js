"use strict";
var GG;
(function (GG) {
    class MyClass {
        constructor(value) {
            this.value = value;
        }
        show() {
            return this.value;
        }
    }
    //let ff= new MyClass<number>("45") //Gives the error
    let ff = new MyClass("45");
    console.info(ff.show());
    ``;
    // For function Use
    function myFunc(value) {
        return value;
    }
    let cc = myFunc("ERERER");
    console.log(cc);
    class KeyValuePair {
        get key() {
            return this._key;
        }
        get value() {
            return this._value;
        }
        set key(v) {
            if (!v) {
                throw new Error("Key must have the value !!!");
            }
            this._key = v;
        }
        set value(v) {
            if (!v) {
                throw new Error("Value must be a non empty");
            }
            this._value = v;
        }
    } //class KeyValuePair
    class MyDictionary {
        constructor() {
            this._data = [];
        }
        add(key, value) {
            let x = new KeyValuePair();
            x.key = key;
            x.value = value;
            this._data.push(x);
        }
        getValue(key) {
            let newArr = this._data.filter((value) => value.key === key);
            if (!newArr || newArr.length === 0) {
                return null;
            }
            else {
                return newArr[0].value;
            }
        }
    } //class MyDictionary
    let myDict = new MyDictionary();
    myDict.add("one", 100);
    myDict.add("two", 200);
    myDict.add("three", 300);
    myDict.add("four", 400);
    myDict.add("five", 500);
    console.log(myDict.getValue("threwe")); //null
    console.log(myDict.getValue("five")); //500
    //extends da ara implements
    class PersonGroup {
        constructor() {
            this._data = [];
        }
        add(person) {
            this._data.push(person);
        }
        showSorted() {
            this._data.sort((a, b) => a.age - b.age);
            this._data.forEach((a, idx) => {
                console.log(`${idx + 1}.  name ${a.name}, age ${a.age}, (${a.job})`);
            });
        }
    } // class PersonGroup
    class Person {
        constructor(name, age, job) {
            this.name = name;
            this.age = age;
            this.job = job;
        }
    }
    const personGroup = new PersonGroup;
    personGroup.add(new Person("George", 52, "developer"));
    personGroup.add(new Person("Gabriel", 25, "Soldier"));
    personGroup.add(new Person("Kakha", 48, "developer"));
    personGroup.add(new Person("Mariam", 23, "Student"));
    personGroup.showSorted();
    /* let x =new KeyValuePair <string, number>
  x.key="one"
  x.value =100
  console.log(`${x.key} = ${x.value}`) */
})(GG || (GG = {})); //nS
//# sourceMappingURL=generics.js.map