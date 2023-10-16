const Calculator = require("../library/Calculator");
let myCalc = new Calculator();

const addNumbers = (req, res) => {
  value = myCalc.add(req);
  res.status(200);
  res.json({result:value});
}

const subtractNumbers = (req, res) => {
  value = myCalc.subtract(req);
  res.status(200);
  res.json({result:value});
}

const multiplyNumbers = (req, res) => {
  value = myCalc.multiply(req);
  res.status(200)
  res.json({result:value})
}

const divideNumbers = (req, res) => {
  value = myCalc.divide(req);
  res.status(200)
  res.json({result:value})
}

exports.addNumbers = addNumbers;
exports.subtractNumbers = subtractNumbers;
exports.multiplyNumbers = multiplyNumbers;
exports.divideNumbers = divideNumbers;
