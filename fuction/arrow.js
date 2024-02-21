const n1 = 7;
const n2 = 5;

// Function declaration - standartine function sintakse.
function sum(a, b) {
    return a + b;

}
console.log(`${n1}+${n2}=${sum(n1, n2)}`);

// Kintamajam priskiriame anonimine funkcija

const diff = function (a, b) {
    return a - b;

}
console.log(`${n1} - ${n2} = ${diff(n1, n2)}`);

// Arrow function
const multiply = (a, b) => {
    return a * b;

}
console.log(`${n1} * ${n2} = ${multiply(n1, n2)}`);

//arrow function
// jeigu logikos bloke yra TIK 1 salyga(statement)
// tai galima nerasyti: {,return,}

const div = (a, b) => a / b;
console.log(`${n1} / ${n2} = ${div(n1, n2)}`);
// arrow function
const cube = a => a ** 3;
console.log(`${n1} ** 3 = ${cube(n1)}`);
console.log(`${n2} ** 3 = ${cube(n2)}`);

// 
// function firstLetter(text) {
//     return text[0];
// }
// console.log(firstLetter('Chuck'));
// console.log(firstLetter('Norris'));

// console.clear();

// Kintamasis kuriam priskirta logika.
const firstLetter = text => text[0]

console.log(firstLetter('Chuck'));
console.log(firstLetter('Norris'));

function formatName = (text) => text[0].toUpperCase() + s.slice(1).toLowerCase();
const firstLetter = text[0].toUpperCase();
const otherLetters = text.slice(1).toLowerCase();
const formatName = s => s[0].toUpperCase + s(1).toLowerCase;



