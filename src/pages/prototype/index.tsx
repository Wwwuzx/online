import React, { useState } from "react";
import styles from "./index.module.less";

const PrototypePage: React.FC = () => {
  const [sayHi, setSayHi] = useState("");

  const Person = function (name: string) {
    this.name = name;
  };

  Person.prototype.sayHi = function () {
    setSayHi("hi，" + this.name);
  };

  const p1 = new Person("Alice");

  function Animal(type: string) {
    this.type = type;
  }

  Animal.prototype.sayType = function () {
    setSayHi("I am a " + this.type);
  };

  function Dog(name: string) {
    Animal.call(this, "Dog");
    this.name = name;
  }

  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  Dog.prototype.bark = function () {
    setSayHi(this.name + " says Woof!");
  };

  return (
    <div>
      <h1>原型链</h1>
      <button
        className={styles.button}
        onClick={() => {
          p1.sayHi();
        }}
      >
        sayhi
      </button>
      <button
        className={styles.button}
        onClick={() => {
          const d1 = new Dog("Buddy");
          d1.sayType();
        }}
      >
        sayAnimalType
      </button>
      <button
        className={styles.button}
        onClick={() => {
          const d1 = new Dog("Buddy");
          d1.bark();
        }}
      >
        dogWoof
      </button>
      <div className={styles.answer}>answer: {sayHi}</div>
    </div>
  );
};

export default PrototypePage;
