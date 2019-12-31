const isPunctuation = require("is-punctuation");
const wordMap = require("./lib/replace-word.json"); // replace entire word with these mapping
const lastLetters = require("./lib/replace-last-letter.json"); // replace these last letters
const removeWord = require("./lib/remove-word.json"); // completely remove these words

function replaceLastLetter(lastLetter) {
  return (
    Object.keys(lastLetters).reduce((newLetter, letter) => {
      if (lastLetters[letter].indexOf(lastLetter) > -1) newLetter = letter;
      return newLetter;
    }, "") || lastLetter
  );
}

function wordToMumble(word) {
  let firstLetter = word[0],
    lastLetter = word[word.length - 1],
    puncuation = undefined,
    string = "";
  // see if last letter is punctuation
  if (isPunctuation(lastLetter)) {
    puncuation = word[word.length - 1];
    lastLetter = word[word.length - 2];
  }
  // replace last letter if necessary
  lastLetter = replaceLastLetter(lastLetter);
  // assemble the word
  string += `${firstLetter}ur${lastLetter}`;
  // add back punctuation
  if (puncuation) string += puncuation;
  return string;
}

function makeMumbles(arr) {
  return arr.reduce((arr, word) => {
    // replace word if it exists in wordMap
    if (wordMap[word.toLowerCase()]) arr.push(wordMap[word.toLowerCase()]);
    // if the word should be removed, don't push it
    else if (removeWord.indexOf(word.toLowerCase()) > -1) return arr;
    // else mumble the word
    else arr.push(wordToMumble(word));
    return arr;
  }, []);
}

function mumblize(sentence) {
  const words = sentence.split(" ");
  return makeMumbles(words).join(" ");
}

module.exports = {
  mumblize
};
