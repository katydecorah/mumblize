const test = require("tape");
const cypher = require("../src/cypher.json");
const lastLetters = cypher.replace.lastLetter;
const removeWord = cypher.remove.word;
const replaceWord = cypher.replace.word;

test("cypher.replace.lastLetter", assert => {
  const values = Object.keys(lastLetters).reduce((arr, letter) => {
    arr = arr.concat(lastLetters[letter]);
    return arr;
  }, []);
  const findDuplicates = arr =>
    arr.filter((item, index) => arr.indexOf(item) != index);
  assert.deepEqual(
    findDuplicates(values),
    [],
    `"${findDuplicates(values)}" appears as a value for more than one letter`
  );
  values.forEach(v => {
    assert.equal(v, v.toLowerCase(), `"${v}" must be lowercase`);
  });
  Object.keys(lastLetters).forEach(v => {
    assert.equal(v, v.toLowerCase(), `"${v}" must be lowercase`);
  });
  assert.end();
});

test("cypher.remove.word", assert => {
  removeWord.forEach(v => {
    assert.equal(v, v.toLowerCase(), `"${v}" must be lowercase`);
  });
  assert.end();
});

test("cypher.replace.word", assert => {
  Object.keys(replaceWord).forEach(k => {
    assert.equal(k, k.toLowerCase(), `"${k}" must be lowercase`);
    assert.equal(
      replaceWord[k],
      replaceWord[k].toLowerCase(),
      `"${replaceWord[k]}" must be lowercase`
    );
  });
  assert.end();
});
