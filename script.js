const inputExpression = document.getElementById("input-expression");
const outputResult = document.getElementById("output-result");
const parseBtn = document.getElementById("parse-btn");

parseBtn.addEventListener("click", () => {
  const expression = inputExpression.value;
  const result = parseExpression(expression);
  outputResult.value = result;
});
function parseExpression(expression) {
  const generatedParser = new Parser(expression);
  expression = generatedParser.parse();
  return expression;
}

class Parser {
  constructor(input) {
    this.input = input.replace(/\s+/g, "");
    this.input = this.replaceWords(this.input);
    this.index = 0;
  }

  parse() {
    return this.expr();
  }

  expr() {
    let left = this.term();
    while (this.index < this.input.length) {
      const operator = this.input[this.index];
      if (operator === "A" || operator === "S") {
        this.index += 1;
        const right = this.term();
        if (operator === "A") {
          left += right;
        } else {
          left -= right;
        }
      } else {
        break;
      }
    }
    return left;
  }

  term() {
    let left = this.factor();
    while (this.index < this.input.length) {
      const operator = this.input[this.index];
      if (operator === "M" || operator === "D") {
        this.index += 1;
        const right = this.factor();
        if (operator === "M") {
          left *= right;
        } else {
          left /= right;
        }
      } else {
        break;
      }
    }
    return left;
  }

  replaceWords(str) {
    const wordsToReplace = ["अधिक", "वजा", "गुणिले", "भागिले"];
    const replacementWords = ["A", "S", "M", "D"];
    for (let i = 0; i < wordsToReplace.length; i += 1) {
      str = str.replaceAll(wordsToReplace[i], replacementWords[i]);
    }
    return str;
  }

  factor() {
    let left = this.number();
    if (this.index < this.input.length && this.input[this.index] === "(") {
      this.index += 1; // Skip opening bracket
      left = this.expr(); // Evaluate the expression within the bracket
      this.index += 1; // Skip closing bracket
    }
    return left;
  }

  number() {
    const start = this.index;
    let dotFound = false;
    while (this.index < this.input.length) {
      const char = this.input[this.index];
      if (/[\d.]/.test(char)) {
        if (char === "." && dotFound) {
          // Only one dot allowed in a number
          break;
        } else if (char === ".") {
          dotFound = true;
        }
        this.index += 1;
      } else {
        break;
      }
    }
    return parseFloat(this.input.slice(start, this.index));
  }
}
