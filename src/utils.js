const isPunctuation = require("is-punctuation");
const cypher = require("./cypher.json");
const wordMap = cypher.replace.word;
const removeWord = cypher.remove.word;
const allowSecondLetter = cypher.allow.secondLetter;
const lastLettersOptions = cypher.replace.lastLetter;

function firstLetter(word) {
  return word[0];
}

function secondLetter(word) {
  return allowSecondLetter.indexOf(word[1]) === -1 ? "" : word[1];
}

function replaceLastLetter(lastLetter) {
  return (
    Object.keys(lastLettersOptions).reduce((newLetter, letter) => {
      if (lastLettersOptions[letter].indexOf(lastLetter) > -1)
        newLetter = letter;
      return newLetter;
    }, "") || lastLetter
  );
}

function lastLetter(word) {
  return replaceLastLetter(
    isPunctuation(word[word.length - 1])
      ? word[word.length - 2]
      : word[word.length - 1]
  );
}

function punctuation(word) {
  return isPunctuation(word[word.length - 1]) ? word[word.length - 1] : "";
}

function wordToMumble(word) {
  return `${firstLetter(word)}${secondLetter(word)}ur${lastLetter(
    word
  )}${punctuation(word)}`;
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

module.exports = {
  makeMumbles
};
