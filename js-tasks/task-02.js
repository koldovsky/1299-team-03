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
