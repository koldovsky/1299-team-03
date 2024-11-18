// Messi Goals
// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Pavlo Onyshko code

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//Seliutina Svitlana
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  const sumGoals = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  return sumGoals;
}

//Oleksii Pavliuk
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Make negative
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

//Seliutina Svitlana
function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}

//Oleksii Pavliuk
function makeNegative(num) {
  if (num > 0) {
    return(num * -1);
  } else {
    return(num);
  }
}

//Game Move
// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

function move(position, roll) {
  return position + roll * 2;
}

// Pavlo Onyshko code

function move(position, roll) {
  return position + roll * 2;
}

//Seliutina Svitlana

function move(position, roll) {
  return position + roll * 2;
}

//Oleksii Pavliuk
function move (position, roll) {
  return position + roll * 2;
}

//Personalized Message
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

//Seliutina Svitlana
function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

//Oleksii Pavliuk
function greet (name, owner) {
  if (name == owner) {
    return 'Hello boss';
  } else {
    return 'Hello guest';
  }
}

//Keep Hydrated
// https://www.codewars.com/kata/keep-hydrated-1/train/javascript

function litres(time) {
  return Math.floor(time / 2);
}

// Pavlo Onyshko code

function litres(time) {
  return Math.floor(time * 0.5);
}

//Seliuna Svitlana
function litres(time) {
  return Math.trunc(time * 0.5);
}

//OLeksii Pavliuk
function litres(time) {
  return Math.floor(time * 0.5);
}

//Opposites Attract
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

//Oleksii Pavliuk
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

function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 === 1;
}

//Seliuna Svitlana
function lovefunc(flower1, flower2) {
  if (
    (flower1 % 2 === 1 && flower2 % 2 === 0) ||
    (flower1 % 2 === 0 && flower2 % 2 === 1)
  ) {
    return true;
  } else {
    return false;
  }
}
