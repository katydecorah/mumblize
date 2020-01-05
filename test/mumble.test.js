const test = require("tape");
const mumblize = require("../");
const lastLetters = require("../lib/replace-last-letter.json");
const removeWord = require("../lib/remove-word.json");
const replaceWord = require("../lib/replace-word.json");

test("replace-last-letter.json", assert => {
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

test("remove-word.json", assert => {
  removeWord.forEach(v => {
    assert.equal(v, v.toLowerCase(), `"${v}" must be lowercase`);
  });
  assert.end();
});

test("replace-word.json", assert => {
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

test("mumblize", assert => {
  assert.equal(mumblize("hello"), "hurn");
  assert.equal(mumblize("hello friend"), "hurn furd");
  assert.equal(mumblize("good morning friend"), "gurd murn furd");
  assert.equal(mumblize("what are you doing?"), "wurt urr yurr durn?");
  assert.equal(
    mumblize("how do i turn off dark mode"),
    "hurr durn turn urf durk murn"
  );
  assert.equal(mumblize("when is nap time"), "wurn ir nurp turn");
  assert.equal(mumblize("where is the code"), "wurn ir tur curn");
  assert.equal(mumblize("the kerning is too tight"), "tur kurn ir turn turt");
  assert.equal(
    mumblize("do you want me to just put butt in"),
    "durn yurr wurt murr turr jurt purt burt irn"
  );
  assert.equal(mumblize("it is snowing"), "irrt ir snurn");
  assert.equal(mumblize("i want a snack"), "wurt er snurk");
  assert.end();
});
