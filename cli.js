#!/usr/bin/env node

"use strict";

const meow = require("meow");
const mumblize = require(".");

const cli = meow(`
	Usage
	  $ mumblize <input>

	Examples
	  $ mumblize hello friend
	  hurn furd
`);

const input = cli.input.join(" ");
if (!input.length) {
  console.log(cli.help);
  return;
}

console.log(mumblize(input));
