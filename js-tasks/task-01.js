// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Pavlo Onyshko code

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(goals(0,0,0), 0)
    Test.assertEquals(goals(43, 10, 5), 58)
  });
});


// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

function makeNegative(num) {
  if (num > 0) {
    return -num;
  }

  return num;
}

// Pavlo Onyshko code

function makeNegative(num) {
  return -Math.abs(num);
}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(makeNegative(42), -42);
  });
});

// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

function move(position, roll) {
  return position + roll * 2;
}

// Pavlo Onyshko code

function move(position, roll) {
  return position + roll * 2;
}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(move(0, 4), 8);
    Test.assertEquals(move(3, 6), 15);
    Test.assertEquals(move(2, 5), 12);
  });
});

// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  }

  return "Hello guest";
}

// Pavlo Onyshko code

function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(greet('Alex', 'Alex'), 'Hello boss');
    Test.assertEquals(greet('Denis', 'Alex'), 'Hello guest');
  });
});

// https://www.codewars.com/kata/keep-hydrated-1/train/javascript

function litres(time) {
  return Math.floor(time / 2);
}

// Pavlo Onyshko code

function litres(time) {
  return Math.floor(time * 0.5);
}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("Fixed tests", () => {
    Test.assertEquals(litres(2), 1);
    Test.assertEquals(litres(1.4), 0);
    Test.assertEquals(litres(12.3), 6);
    Test.assertEquals(litres(0.82), 0);
    Test.assertEquals(litres(11.8), 5);
    Test.assertEquals(litres(1787), 893);
    Test.assertEquals(litres(0), 0);
  });
});

// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

function isEven(number) {
  return number % 2 === 0;
}

function lovefunc(flower1, flower2) {
  if (isEven(flower1) && !isEven(flower2)) {
    return true;
  }

  if (!isEven(flower1) && isEven(flower2)) {
    return true;
  }

  return false;
}

function lovefunc(flower1, flower2) {
  if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
    return true;
  } else if (flower1 % 2 !== 0 && flower2 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Pavlo Onyshko code

function lovefunc(flower1, flower2){
  return (flower1 + flower2) % 2 === 1;
}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(lovefunc(1, 4), true);
    Test.assertEquals(lovefunc(2, 2), false);
    Test.assertEquals(lovefunc(0, 1), true);
    Test.assertEquals(lovefunc(0, 0), false);
  });
});