class Stack {
  constructor() {
    this.item = [];
  }

  pop() {
    return this.item.pop();
  }

  push(data) {
    return this.item.push(data);
  }

  size() {
    return this.item.length;
  }

  display() {
    console.log(this.item);
  }
  findNextGreaterElement(arr) {
    for (let i = 0; i < arr.length; i++) {
      let found = false;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          this.item.push(arr[j]);
          found = true;
          break;
        }
      }
      if (!found) {
        this.item.push(-1);
      }
    }

    return this.item;
  }

  evaluatePostfixExpression(arr) {
    for (let i = 0; i < arr.length; i++) {
      const value = arr[i];
      const number = Number(value);

      if (isNaN(number)) {
        const operand2 = this.item.pop();
        const operand1 = this.item.pop();

        let result;
        switch (value) {
          case "+":
            result = operand1 + operand2;
            break;
          case "-":
            result = operand1 - operand2;
            break;
          case "*":
            result = operand1 * operand2;
            break;
          case "/":
            result = operand1 / operand2;
            break;
          default:
            throw new Error(`Unsupported operator: ${value}`);
        }
        this.item.push(result);
      } else {
        this.item.push(number);
      }
    }

    return this.item.pop();
  }
}

const stack = new Stack();

console.log(stack.evaluatePostfixExpression("231*+9-"));
