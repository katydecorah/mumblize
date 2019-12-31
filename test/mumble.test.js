const test = require("tape");
const fn = require("../");

test("mumblize", assert => {
  assert.equal(fn.mumblize("hello"), "hurn");
  assert.equal(fn.mumblize("hello friend"), "hurn furd");
  assert.equal(fn.mumblize("good morning friend"), "gurd murn furd");
  assert.equal(fn.mumblize("what are you doing?"), "wurt urr yurr durn?");
  assert.equal(
    fn.mumblize("how do i turn off dark mode"),
    "hurr durn turn urf durk murn"
  );
  assert.equal(fn.mumblize("when is nap time"), "wurn ir nurp turn");
  assert.equal(fn.mumblize("where is the code"), "wurn ir tur curn");
  assert.equal(
    fn.mumblize("the kerning is too tight"),
    "tur kurn ir turn turt"
  );
  assert.equal(
    fn.mumblize("do you want me to just put butt in"),
    "durn yurr wurt murr turr jurt purt burt irn"
  );
  assert.end();
});
