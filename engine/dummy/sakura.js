let effect1a = {
  type: "damage",
  val: 20,
  name: "Uzumaki Combo",
  description: "",
  id: "narutoskill1",
  caster: "naruto",
  turnid: "",
  target: "target",
  duration: 1,
  during: "this turn",
  after: [],
  condition: [],
  persistence: "instant",
  class: "physical",
  current: 0,
  usage: 0,
  stack: 0,
  charge: 0,
  multi: 0,
  active: true,
  isStack: false,
  isInvisible: false,
  isMulti: false,
  isUnremovable: false,
  isMarking: false,
  isHarmful: false,
  isPiercing: false,
  isActive: false,
  isLastTurn: false,
  isAllowed: true,
  isNoCounter: false
};

let effect1b = {
  type: "stun",
  name: "Uzumaki Combo",
  description: "",
  id: "narutoskill1",
  caster: "naruto",
  turnid: "",
  target: "target",
  duration: 1,
  during: "next turn",
  scope: ["classes", ["physical", "mental"], "inclusive"],
  after: [],
  condition: [],
  persistence: "instant",
  class: "physical",
  current: 0,
  usage: 0,
  stack: 0,
  charge: 0,
  multi: 0,
  active: true,
  isStack: false,
  isInvisible: false,
  isMulti: false,
  isUnremovable: false,
  isMarking: false,
  isHarmful: false,
  isPiercing: false,
  isActive: false,
  isLastTurn: false,
  isAllowed: true,
  isNoCounter: false
};

let skill1 = {
  name: "KO Punch",
  description: "",
  picture: "https://i.imgur.com/EqnqvRO.jpg",
  classes: "instant, physical",
  id: "",
  index: 0,
  caster: "naruto",
  persistence: "instant",
  class: "physical",
  effects: [effect1a, effect1b],
  target: "enemy",
  cooldown: 0,
  cost: {
    g: 1,
    b: 0,
    r: 0,
    w: 0,
    rd: 0
  },
  counter: 0,
  active: true,
  store: [],
  isHarmful: true,
  isAllowed: true,
  isCooldown: false,
  isStore: false,
  isNoCounter: false,
  isIgnoreStun: false,
  isIgnoreInvul: false
};

let effect2a = {
  type: "heal",
  val: 25,
  name: "",
  description: "",
  id: "",
  caster: "",
  turnid: "",
  target: "target",
  duration: 1,
  during: "this turn",
  after: [],
  condition: [],
  persistence: "instant",
  class: "energy",
  scope: ["none"],
  specify: ["skill name", "consideration"],
  current: 0,
  usage: 0,
  stack: 0,
  charge: 0,
  multi: 0,
  active: true,
  isStack: false,
  isInvisible: false,
  isMulti: false,
  isUnremovable: false,
  isMarking: false,
  isHarmful: false,
  isPiercing: false,
  isActive: false,
  isLastTurn: false,
  isAllowed: true,
  isNoCounter: false
};

let skill2 = {
  name: "Heal",
  description: "",
  picture: "https://i.imgur.com/ujKvn9V.jpg",
  classes: "instant, energy",
  id: "narutoskill2",
  index: 1,
  caster: "naruto",
  persistence: "instant",
  class: "energy",
  effects: [effect2a],
  target: "ally",
  cooldown: 0,
  cost: {
    g: 0,
    b: 1,
    r: 0,
    w: 0,
    rd: 0
  },
  counter: 0,
  active: true,
  store: [],
  isHarmful: true,
  isAllowed: [
    { default: false },
    {
      subject: "state", //What to look at
      evaluator: "exist", //How to evaluate
      comparison: "Shadow Clones", //Comparison against what. Can be an array with String and Number
      value: true //value to return after
    }
  ],
  isCooldown: false,
  isStore: false,
  isNoCounter: false,
  isIgnoreStun: false,
  isIgnoreInvul: false
};

let effect3a = {
  type: "ignore",
  name: "Shadow Clones",
  description: "",
  id: "",
  caster: "",
  turnid: "",
  target: "target",
  duration: 4,
  during: "next turn",
  after: [],
  condition: [],
  persistence: "instant",
  class: "mental",
  scope: ["types", ["energy"], "exclusive"],
  specify: ["skill name", "consideration"],
  current: 0,
  usage: 0,
  stack: 0,
  charge: 0,
  multi: 0,
  active: true,
  isStack: false,
  isInvisible: false,
  isMulti: false,
  isUnremovable: false,
  isMarking: false,
  isHarmful: false,
  isPiercing: false,
  isActive: false,
  isLastTurn: false,
  isAllowed: true,
  isNoCounter: false
};

let effect3b = {
  type: "buff",
  val: 10,
  scope: ["skills", "KO Punch"],
  name: "",
  description: "",
  id: "",
  caster: "",
  turnid: "",
  target: "target",
  duration: 4,
  during: "next turn",
  after: [],
  condition: [],
  persistence: "instant",
  class: "mental",
  current: 0,
  usage: 0,
  stack: 0,
  charge: 0,
  multi: 0,
  active: true,
  isStack: false,
  isInvisible: false,
  isMulti: false,
  isUnremovable: false,
  isMarking: false,
  isHarmful: false,
  isPiercing: false,
  isActive: false,
  isLastTurn: false,
  isAllowed: true,
  isNoCounter: false
};

let effect3c = {
  type: "dr",
  val: 10,
  name: "",
  description: "",
  id: "",
  caster: "",
  turnid: "",
  target: "target",
  duration: 4,
  during: "next turn",
  after: [],
  condition: [],
  persistence: "instant",
  class: "mental",
  scope: ["none"],
  specify: ["skill name", "consideration"],
  current: 0,
  usage: 0,
  stack: 0,
  charge: 0,
  multi: 0,
  active: true,
  isStack: false,
  isInvisible: false,
  isMulti: false,
  isUnremovable: false,
  isMarking: false,
  isHarmful: false,
  isPiercing: false,
  isActive: false,
  isLastTurn: false,
  isAllowed: true,
  isNoCounter: false
};

let skill3 = {
  name: "Inner Sakura",
  description: "",
  picture: "https://i.imgur.com/YVMTQcR.jpg",
  classes: "",
  id: "",
  index: 2,
  caster: "",
  persistence: "instant",
  class: "mental",
  effects: [effect3a, effect3b, effect3c],
  target: "self",
  cooldown: 5,
  cost: {
    g: 0,
    b: 0,
    r: 0,
    w: 0,
    rd: 1
  },
  counter: 0,
  active: true,
  store: [],
  isHarmful: true,
  isAllowed: true,
  isCooldown: false,
  isStore: false,
  isNoCounter: false,
  isIgnoreStun: false,
  isIgnoreInvul: false
};

let effect4 = {
  type: "invul",
  name: "",
  description: "",
  id: "",
  caster: "",
  turnid: "",
  target: "target",
  duration: 1,
  during: "next turn",
  after: [],
  condition: [],
  persistence: "instant",
  class: "strategic",
  scope: ["none"],
  specify: ["skill name", "consideration"],
  current: 0,
  usage: 0,
  stack: 0,
  charge: 0,
  multi: 0,
  active: true,
  isStack: false,
  isInvisible: false,
  isMulti: false,
  isUnremovable: false,
  isMarking: false,
  isHarmful: false,
  isPiercing: false,
  isActive: false,
  isLastTurn: false,
  isAllowed: true,
  isNoCounter: false
};

let skill4 = {
  name: "Sakura Hide",
  description: "",
  picture: "https://i.imgur.com/HTi9VYf.jpg",
  classes: "",
  id: "",
  index: 3,
  caster: "",
  persistence: "instant",
  class: "strategic",
  effects: [effect4],
  target: "self",
  cooldown: 4,
  cost: {
    g: 0,
    b: 0,
    r: 0,
    w: 0,
    rd: 1
  },
  counter: 0,
  active: true,
  store: [],
  isHarmful: true,
  isAllowed: true,
  isCooldown: false,
  isStore: false,
  isNoCounter: false,
  isIgnoreStun: false,
  isIgnoreInvul: false
};

let char = {
  name: "Sakura",
  description: "",
  picture: "https://i.imgur.com/IT6XF7l.jpg",
  anime: "",
  credit: {
    author: "",
    pictures: "",
    coder: ""
  },
  maxHp: 100,
  category: [],
  id: "naruto",
  status: {
    onAttack: [],
    onReceive: [],
    onSkill: [],
    onState: []
  },
  skills: [skill1, skill2, skill3, skill4],
  hp: 100,
  alive: true
};

module.exports = char;

console.log("nothing's wrong");
