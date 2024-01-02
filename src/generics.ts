namespace GG {
  class MyClass<T> {
    constructor(public value: T) {}

    show(): T {
      return this.value;
    }
  }

  //let ff= new MyClass<number>("45") //Gives the error
  let ff = new MyClass<string>("45");
  console.info(ff.show());
  ``;
  // For function Use
  function myFunc<T>(value: T): T {
    return value;
  }

  let cc = myFunc<string>("ERERER");
  console.log(cc);

  class KeyValuePair<TKey, TValue> {
    //! -key!  ძახილის ნიშანი ნიშნავს,
    //რომ შეგვიძლია არ მივანიჭოთ მნიშვნელობა, თუმცა არის რისკი
    private _key!: TKey;
    private _value!: TValue;

    get key(): TKey {
      return this._key;
    }

    get value(): TValue {
      return this._value;
    }

    set key(v: TKey) {
      if (!v) {
        throw new Error("Key must have the value !!!");
      }
      this._key = v;
    }

    set value(v: TValue) {
      if (!v) {
        throw new Error("Value must be a non empty");
      }
      this._value = v;
    }
  } //class KeyValuePair

  class MyDictionary<TKey, TValue> {
    private _data: KeyValuePair<TKey, TValue>[] = [];

    add(key: TKey, value: TValue) {
      let x = new KeyValuePair<TKey, TValue>();
      x.key = key;
      x.value = value;
      this._data.push(x);
    }

    getValue(key: TKey): TValue | null {
      let newArr: KeyValuePair<TKey, TValue>[] = this._data.filter(
        (value) => value.key === key
      );
      if (!newArr || newArr.length === 0) {
        return null;
      } else {
        return newArr[0].value;
      }
    }
  } //class MyDictionary

  let myDict = new MyDictionary<string, number>();

  myDict.add("one", 100);
  myDict.add("two", 200);
  myDict.add("three", 300);
  myDict.add("four", 400);
  myDict.add("five", 500);

  console.log(myDict.getValue("threwe")); //null
  console.log(myDict.getValue("five")); //500

  //! NEW ClASS GENERIC WITH RESTRICTION

  interface IPerson {
    name: string;
    age: number;
    job: string;
  }

  //extends da ara implements
  class PersonGroup<T extends IPerson> {
    private _data: T[] = [];

    add(person: T) {
      this._data.push(person);
    }

    showSorted() {
      this._data.sort((a, b) => a.age - b.age);
      this._data.forEach((a: T, idx: number) => {
        console.log(`${idx + 1}.  name ${a.name}, age ${a.age}, (${a.job})`);
      });
    }
  } // class PersonGroup

  class Person implements IPerson {
    constructor(public name: string, public age: number, public job: string) {}
  }

const personGroup =new PersonGroup

personGroup.add(new Person("George", 52, "developer"))
personGroup.add(new Person("Gabriel", 25, "Soldier"))
personGroup.add(new Person("Kakha", 48, "developer"))
personGroup.add(new Person("Mariam", 23, "Student"))


personGroup.showSorted()



  /* let x =new KeyValuePair <string, number>
x.key="one"
x.value =100
console.log(`${x.key} = ${x.value}`) */
} //nS
