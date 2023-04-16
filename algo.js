class Parser {
  constructor(input) {
    this.input = input.replace(/\s+/g, '');
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
      if (operator === 'A' || operator === 'S') {
        this.index += 1;
        const right = this.term();
        if (operator === 'A') {
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
      if (operator === 'M' || operator === 'D') {
        this.index += 1;
        const right = this.factor();
        if (operator === 'M') {
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
    const wordsToReplace = ['अधिक', 'वजा', 'गुणिले', 'भागिले'];
    const replacementWords = ['A', 'S', 'M', 'D'];
    for (let i = 0; i < wordsToReplace.length; i += 1) {
      str = str.replaceAll(wordsToReplace[i], replacementWords[i]);
    }
    return str;
  }

  factor() {
    let left = this.number();
    if (this.index < this.input.length && this.input[this.index] === '(') {
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
        if (char === '.' && dotFound) {
          // Only one dot allowed in a number
          break;
        } else if (char === '.') {
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

const input1 = '10 अधिक 2 गुणिले 3 वजा 4 भागिले 2'; // '10 + 2 * 3 - 4 / 2'
const input2 = '10.5 अधिक 2 गुणिले (3 वजा 4) भागिले 2.5'; // '10.5 + 2 * (3 - 4) / 2.5'
const input3 = '10.5अधिक2गुणिले(3वजा4)भागिले2.5'; // '10.5+2*(3-4)/2.5'
const input4 = '16 वजा 8 अधिक 14 भागिले 2'; // '16 - 8 + 14 / 2'
const input5 = '16 वजा (8 अधिक 14) भागिले 2'; // '16 - (8 + 14) / 2'
const input6 = '16.5अधिक2.5गुणिले(3वजा4)भागिले2.5'; // '16.5+2.5*(3-4)/2.5'
const input7 = '1अधिक2अधिक3'; // '1+2+3'

const parser1 = new Parser(input1);
const parser2 = new Parser(input2);
const parser3 = new Parser(input3);
const parser4 = new Parser(input4);
const parser5 = new Parser(input5);
const parser6 = new Parser(input6);
const parser7 = new Parser(input7);

const result1 = parser1.parse();
const result2 = parser2.parse();
const result3 = parser3.parse();
const result4 = parser4.parse();
const result5 = parser5.parse();
const result6 = parser6.parse();
const result7 = parser7.parse();

console.log(result1); // Output: 14
console.log(result2); // Output: 9.7
console.log(result3); // Output: 9.7
console.log(result4); // Output: 15
console.log(result5); // Output: 5
console.log(result6); // Output: 15.5
console.log(result7); // Output: 6
