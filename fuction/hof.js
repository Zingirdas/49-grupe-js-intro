/* 
HOF - higher ofder function
*/

const sum = (a, b) => a + b;
const diff = (a, b) => a - b;
const multi = (a, b) => a * b;
const div = (a, b) => a / b;

const mathFunctions = {
    sum: (a, b) => a + b,
    diff: (a, b) => a - b,
    multi: (a, b) => a * b,
    div: (a, b) => a / b,

};


function calculator(a, opera, b) {
    return mathFunctions[opera](a, b);
}
const res1 = calculator(7, '+', 5);
const res2 = calculator(7, '-', 5);
const res3 = calculator(7, '*', 5);
const res4 = calculator(7, '/', 5);

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);

function firstLetter(text) {
    return text[text.length - 1];
    // arba gali buti retur, text.at(-1);
}

function giveMeLetter(text, func) {
    console.log('----------');
    console.log(text);
    console.log(func);

    return func(text);

}

console.log(firstLetter('Chuck'));
console.log(lastLetter('Chuck'));

console.log(giveMeLetter('Chuck', firstLetter));
console.log(giveMeLetter('Chuck', lastLetter));

const sum = (a, b) => a + b;
const diff = (a, b) => a - b;

const calc = (a, func, b) => func(a, b);
console.log(calc(7, sum, 5));
console.diff(calc(7, diff, 5));
