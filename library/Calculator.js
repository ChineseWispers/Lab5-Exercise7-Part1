const Logger = require("./Logger")
let myLogger = new Logger();

class Calculator {
  constructor() {
    this.id = Math.floor(Math.random() * 100_000)
  }

  add(req) {
    let value = +req.query.num1 + +req.query.num2;
    myLogger.log(this.id, value);
    return value
  }

  subtract(req) {
    let value = +req.query.num1 - +req.query.num2;
    myLogger.log(this.id, value);
    return value
  }

  multiply(req) {
    let value = +req.query.num1 * +req.query.num2;
    myLogger.log(this.id, value);
    return value
  }

  divide(req) {
    let value = +req.query.num1 / +req.query.num2;
    myLogger.log(this.id, value);
    return value
  }
}

module.exports = Calculator