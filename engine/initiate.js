const _ = require("lodash");
let getChar = require("./dummyChar.js");
let newChar = require("./dummy/naruto.js");
let shikamaru = require("./dummy/shikamaru.js");
let sakura = require("./dummy/sakura.js");
let energy = require("./energy/energyGenerate");
let parser = require("./parsers/parser.js");

function initiate() {
  let char = getChar();

  let odd = {
    char: [_.cloneDeep(newChar), _.cloneDeep(sakura), _.cloneDeep(shikamaru)],
    energy: energy(1),
    name: "test1",
    using: []
  };
  let even = {
    char: [_.cloneDeep(newChar), _.cloneDeep(sakura), _.cloneDeep(shikamaru)],
    energy: energy(),
    name: "test2",
    using: []
  };

  let stateBasic = {
    odd: odd,
    even: even,
    turn: 1,
    turnid: "turn1",
    timestamp: Date().now
  };

  let stateMeta = {
    room: "",
    channel: "",
    log: []
  };

  let state = {
    ...stateBasic,
    ...stateMeta
  };

  //Exit
  let payload = { state };
  return payload;
}

module.exports = initiate;
