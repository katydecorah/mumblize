const test = require("tape");
const mumblize = require("../");

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
