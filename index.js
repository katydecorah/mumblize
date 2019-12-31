const isPunctuation = require("is-punctuation");
const wordMap = require("./lib/replace-word.json"); // replace entire word with these mapping
const replaceLastLetter = require("./lib/replace-last-letter.json"); // replace these last letters
const removeWord = require("./lib/remove-word.json"); // completely remove these words

function createString(arr) {
  return arr.reduce((string, word, index) => {
    // replace word if it exists in wordMap
    if (wordMap[word.toLowerCase()]) string += wordMap[word.toLowerCase()];
    // check if word should be removed
    else if (removeWord.indexOf(word.toLowerCase()) > -1) string += "";
    else {
      // mumble the word
      const firstLetter = word[0];
      let punc = undefined;
      let lastLetter = word[word.length - 1];
      // see if last letter is punctuation
      if (isPunctuation(lastLetter)) {
        punc = word[word.length - 1];
        lastLetter = word[word.length - 2];
      }
      if (replaceLastLetter["n"].indexOf(lastLetter) > -1) lastLetter = "n";
      if (replaceLastLetter["r"].indexOf(lastLetter) > -1) lastLetter = "r";
      string += `${firstLetter}ur${lastLetter}`;
      // add back punctuation
      if (punc) string += punc;
    }
    if (arr.length - 1 !== index && string !== "") string += " ";
    return string.replace(/\s\s/g, " ");
  }, "");
}

function mumblize(sentence) {
  const words = sentence.split(" ");
  return createString(words);
}

module.exports = {
  mumblize
};
