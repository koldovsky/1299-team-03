// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

// Sydorov Stas
function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}

// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

// Sydorov Stas
function giveMeFive(obj) {
  const array = [];

  Object.entries(obj).forEach((el) => {
    for (const word in el) {
      if (el[word].length === 5) {
        array.push(el[word]);
      }
    }
  });

  return array;
}

// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

// Sydorov Stas
function buildFun(n) {
  const result = [];

  const closure = (num) => result.push(() => num);

  for (let i = 0; i < n; i++) {
    closure(i);
  }

  return result;
}

// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

// Sydorov Stas
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age);

    this.status = status;
    this.species = "shark";
    this.legs = 0;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, status);

    this.status = status;
    this.species = "cat";
    this.legs = 4;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, masterName) {
    super(name, age, status);

    this.status = status;
    this.species = "dog";
    this.legs = 4;
    this.masterName = masterName;
  }

  greetMaster() {
    return `Hello ${this.masterName}`;
  }
}
