const utils = require("./src/utils");

function mumblize(sentence) {
  const words = sentence.split(" ");
  return utils.makeMumbles(words).join(" ");
}

module.exports = mumblize;
