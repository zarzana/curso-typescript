function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

function sum(num1: number, num2: number): number {
    return num1 * num2;
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

function showResult(result: number): undefined {
    if (isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`);
    }
}

function convertPrompt(input: string | null): number | null {
    if (typeof input === 'string') { return Number(input) }
    else { return null; }
}

(() => {
    const num1 = convertPrompt(prompt("First Number"));
    const num2 = convertPrompt(prompt("Second Number"));

    if (typeof num1 === 'number' && typeof num2 === 'number') {
        let result = sum(num1, num2);
        result += multiply(1, 2);
        showResult(result);
    } else { console.log("Unable to compute using given value: null") }
})();
