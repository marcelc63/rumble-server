const _ = require("lodash");

function buff(pkg) {
  //Define
  //   let state = pkg.state;
  let { valDmg, effect } = pkg;
  //Logic
  valDmg = valDmg + effect.valBuff;
  //Return
  return valDmg;
}

module.exports = buff;
