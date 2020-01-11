# mumblize [![Build Status](https://travis-ci.com/katydecorah/mumblize.svg?branch=master)](https://travis-ci.com/katydecorah/mumblize)

Mumble a sentence or word.

## Install

```sh
npm install mumblize
```

## Usage

```js
const mumblize = require("mumblize");

mumblize("the kerning is too tight");
// tur kurn ir turn turt
```

## CLI

```sh
npm install mumblize -g
```

```sh
Usage
  $ mumblize <input>

Examples
  $ mumblize hello friend
  hurn furd
```

Use with [say](https://ss64.com/osx/say.html):

```sh
mumblize <input> | say

mumblize good morning | say
```
