function alphabetize(input) {
  const wordMap = {
    "lol": ":lol:" };

  const numberMap = {
    1: ":one:",
    2: ":two:",
    3: ":three:",
    4: ":four:",
    5: ":five:",
    6: ":six:",
    7: ":seven:",
    8: ":eight:",
    9: ":nine:",
    0: ":zero:" };

  const specialCharsMap = {
    "#": ":alphabet-hash:",
    "?": ":alphabet-question:",
    "!": ":alphabet-exclamation:",
    "@": ":alphabet-at:" };


  return input.
  replace(/\w+/g, match => {
    if (wordMap[match.toLowerCase()]) {
      return wordMap[match.toLowerCase()]; // Replaces words.
    }

    return match.replace(/([A-z])+?/g, ":alphabet-$1:"); // Replaces letters.
  }).
  replace(/(\s)+?/g, ":blank:") // Replace spaces.
  .replace(/([0-9])+?/g, match => numberMap[match]) // Replaces numbers.
  .replace(/([?!#@])+?/g, match => specialCharsMap[match]); // Replaces numbers.
}

function copy(element) {
  element.select();
  document.execCommand("copy");
}

const input = document.getElementById("input");
const output = document.getElementById("output");
const copyButton = document.getElementById("copy");

// Handle text transform.
input.addEventListener("keyup", () => {
  const alphabetized = alphabetize(input.value);
  output.value = alphabetized;
});

// Handle text copying.
copyButton.addEventListener("click", () => copy(output));