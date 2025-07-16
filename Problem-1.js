class Calculator {
    constructor(a, b, operation) {
        this.a = a;
        this.b = b;
        this.operation = operation;
    }

    calculate() {
        switch (this.operation) {
            case 'add':
                return this.a + this.b;
            case 'subtract':
                return this.a - this.b;
            case 'multiply':
                return this.a * this.b;
            case 'divide':
                return this.b !== 0 ? this.a / this.b : 'Cannot divide by zero';
            default:
                return 'Invalid operation';
        }
    }
}

const operation = [
    { a: 10, b: 5, op: 'add' },
    { a: 20, b: 4, op: 'subtract' },
    { a: 7, b: 3, op: 'multiply' },
    { a: 8, b: 2, op: 'divide' },
    { a: 5, b: 0, op: 'divide' },
];

operation.forEach(({ a, b, op }) => {
    const calc = new Calculator(a, b, op);
    console.log(`Operation: ${op}, Result: ${calc.calculate()}`);
});
