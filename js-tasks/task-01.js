// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

function makeNegative(num) {
  if (num > 0) {
    return -num;
  }

  return num;
}

// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

function move(position, roll) {
  return position + roll * 2;
}

// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  }

  return "Hello guest";
}

// https://www.codewars.com/kata/keep-hydrated-1/train/javascript

function litres(time) {
  return Math.floor(time / 2);
}

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
