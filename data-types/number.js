/*
NUMBERS

KINTAMUJU INICIJAVIMAS:
- const (default)
- let (kai informacija turi buti kintama)
- var (niekada nenaudoti, nebent zinai ka darai)

SKAICIU KATEGORIJOS:
- normalus
    - teigiami/neigiami
    - sveikieji/desimtainiai
- ne normalus
    - Infinity (begalybes)
    - NaN (not-a-number)

    OPERATORIAI
    -priskirymo (=)
    -matematiniai:
        - aritmetiniai: +, -, /, *; % (liekana), **(kelimas laipsniu)
        - aritmetiniai priskirymo operatoriui: +=, -=, /=, *=; %= (liekana), **=(kelimas laipsniu)
*/

console.log(1);
console.log(2);
console.log(3.1415);
console.log(-4);
console.log(5.555);
console.log(Infinity);
console.log(-Infinity);
console.log(NaN);

console.clear();

console.log(555);

const a = 1;
const b = -22;
const PI = 3.1415;
const pi = 777;
const duZodziaic = 8888;
const trysIlgiZodziai = 8888;

console.log(a);
console.log(b);
console.log(PI);
console.log(pi);

const number1 = 111;
const number2 = 222;
const number3 = 333;

console.log(number1);
console.log(number2);
console.log(number3);

console.clear();

const sum12 = number1 + number2;
console.log(sum12);

const sum23 = number2 + number3;
console.log(sum23);

const sum13 = number1 + number3;
console.log(sum13);

const x = 1 + 2 + 3 + sum12;
console.log(x);

console.clear();

const n1 = 7;
const n2 = 5;

console.log(n1, n2);

console.log('Labas rytas');

console.log(n1, '+', n2, '=', n1 + n2);

// 7 + 5 = 12

const diff = n1 - n2;
console.log(n1, '-', n2, '=', diff);

const multi = n1 * n2;
console.log(n1, '*', n2, '=', multi);

const div = n1 / n2;
console.log(n1, '/', n2, '=', div);

const du0 = 2 ** 0;
const du1 = 2 ** 1;
const du2 = 2 ** 2;
const du3 = 2 ** 3;
const du4 = 2 ** 4;

console.log(du0);
console.log(du1);
console.log(du2, 2 * 2);
console.log(du3, 2 * 2 * 2);
console.log(du4, 2 * 2 * 2 * 2);

console.clear();

console.log(28 / 5);
console.log(28 % 5);

console.log(9 % 3);
console.log(9 / 3);

// Pirmadienis = 1, 8, 15;
// Antradienis=2, 9, 16;
//..
//Sekmadienis=7, 14;

const diena = 31;
const savaitesDiena = diena % 7;

console.log(diena, savaitesDiena);

console.clear();

const valandos = 20;

// naktis = 0; diena = 1;
const dienaArNaktis = (valandos - (valandos % 12)) / 12;
console.log(dienaArNaktis);

// 2+2*2

console.log(2 + 2 * 2 ** 2);
// console.log(2 + 2 *  4);
// console.log(2 + 8);
// console.log(10);

console.log(4 * 4 / 4);

console.log(45214 / 0);
console.log(-45214 / 0);
console.log(45214 / -0);
console.log(45214 / -0);

console.log(45214 * 0);
console.log(-45214 * 0);
console.log(45214 * -0);
console.log(45214 * -0);
// nulis programavime yra imanomas, bet labai retai naudojamas

console.clear();

let pinigine = 10;
console.log(pinigine);

pinigine = pinigine + 5;
console.log(pinigine);

pinigine = pinigine + 8;
console.log(pinigine);

pinigine = pinigine - 7;
console.log(pinigine);

console.log('--------------');

let money = 30;
console.log(money);

money += 43;
console.log(money);

money -= 7;
console.log(money);

console.clear();

let k = 29;
console.log(k);

k += 8;
console.log(k);

k *= 2;
console.log(k);

k /= 4;
console.log(k);

k %= 7;
console.log(k);

k **= 2;
console.log(k);