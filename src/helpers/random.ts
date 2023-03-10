import { random } from "lodash";

const alphabet: Array<string> = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const alphabetUp: Array<string> = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

/**
 * Generate Random string
 * @param {number} length
 */
export const randString = (length: number = 10): string => {
  const resultArr = [];
  let counter = 0;

  const str: Array<string> = [...alphabet, ...alphabetUp];

  while (counter < length) {
    const symbol = str[random(str.length)];
    resultArr.push(symbol);
    counter++;
  }

  return resultArr.join("");
};
