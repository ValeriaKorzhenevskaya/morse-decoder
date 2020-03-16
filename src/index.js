const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  " ": " "
};

function decode(expr) {
  let letters = "";
  let string = "";
  for (let i = 0; i < expr.length; i += 10) {
    letters = expr
      .slice(i, i + 10)
      .replace(/00/g, "")
      .replace(/10/g, ".")
      .replace(/11/g, "-");
    if (letters == "**********") {
      letters = " ";
    }
    string += MORSE_TABLE[letters];
  }
  return string;
}

module.exports = {
  decode
};
