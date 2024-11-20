//Convert a string to an array
//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

//Seliutina Svitlana
function stringToArray(string) {
  return string.split(" ");
}

//Pavlo Onyshko

function stringToArray(string) {
  return string.split(" ");
}
//DNA to RNA Conversion
//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

//Seliutina Svitlana
function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}

// Sydorov Stas
function DNAtoRNA(dna) {
  return dna.split("").map(el => el === "T" ? "U" : el).join("")
}

//Pavlo Onyshko

function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}

//Find Maximum and Minimum Values of a List
//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

//Seliutina Svitlana
var min = function (list) {
  const listCopy = [...list];
  listCopy.sort((a, b) => a - b);
  return listCopy[0];
};

var max = function (list) {
  const listCopy = [...list];
  listCopy.sort((a, b) => b - a);
  return listCopy[0];
};

// Sydorov Stas
const min = function (list) {
  return [...list].sort((a, b) => a - b)[0];
};

const max = function (list) {
  return [...list].sort((a, b) => b - a)[0];
};

//Stepan Seniak
var min = function(list){ 
  return Math.min(...list);
}

var max = function(list){
  return Math.max(...list)
}

// Pavlo Onyshko

var min = function(list){
  return Math.min(...list);
}

var max = function(list){
  return Math.max(...list);
}

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

// Sydorov Stas
const min = (arr, toReturn) => toReturn === "value" ? Math.min(...arr) : arr.indexOf(Math.min(...arr));

// Pavlo Onyshko

function min(arr, toReturn) {
  var minValue = Math.min(...arr);
  if (toReturn === 'value') {
      return minValue;
  } else if (toReturn === 'index') {
      return arr.indexOf(minValue);
  }
}

//extra

//Double Integer    https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript

function doubleInteger(i){
  return i * 2;
}

//Twice as old    https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

//Return n-th even number    https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript

function nthEven(n){
  return (n - 1) * 2;
}

//What's the real floor     https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

function getRealFloor(floorNumber) {
  return floorNumber > 13 ? floorNumber - 2 : floorNumber > 0 ? floorNumber - 1 : floorNumber;
}

// Clock    https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

function past(h, m, s){
  return s * 1000 + m * 60000 + h * 3600000;
}

//Is n divisible by x and y    https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

function isDivisible(n, x, y) {
  return [x,y].every(div => n % div === 0);
}