//Convert a string to an array
//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string) {
  return string.split(" ");
}

//DNA to RNA Conversion
//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}

//Find Maximum and Minimum Values of a List
//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

const min = (arr, toReturn) =>
  toReturn === "value" ? Math.min(...arr) : arr.indexOf(Math.min(...arr));

//extra

//Double Integer    https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript

function doubleInteger(i) {
  return i * 2;
}

//Twice as old    https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

//Return n-th even number    https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript

function nthEven(n) {
  return (n - 1) * 2;
}

//What's the real floor     https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

function getRealFloor(floorNumber) {
  return floorNumber > 13
    ? floorNumber - 2
    : floorNumber > 0
    ? floorNumber - 1
    : floorNumber;
}

// Clock    https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

function past(h, m, s) {
  return s * 1000 + m * 60000 + h * 3600000;
}

//Is n divisible by x and y    https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

function isDivisible(n, x, y) {
  return [x, y].every((div) => n % div === 0);
}
