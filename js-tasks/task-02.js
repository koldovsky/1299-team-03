//Convert a string to an array
//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

//Seliutina Svitlana
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

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

// Sydorov Stas
const min = (arr, toReturn) => toReturn === "value" ? Math.min(...arr) : arr.indexOf(Math.min(...arr));

