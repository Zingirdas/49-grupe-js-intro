/*
FUNCTION - funkcija
Perpanaudojamas logikos blokas

function example() {
        // 1. prametru validavimas
        // 2. logika
        // 3. rezultato validavimas
        // 4. rezultato grazinimas
}
*/
// DRY - don't repeat your self

const a1 = 7;
const a2 = 5;
const a3 = 1 + a1 * 2 + a2 * 3 + 3;
console.log(a3);

const b1 = 13;
const b2 = 13;
const b3 = 1 + b1 * 2 + b2 * 3 + 3;
console.log(b3);

const c1 = 7;
const c2 = 77;
const c3 = 1 + c1 * 2 + c2 * 3 + 3;
console.log(c3);

function empty() {
}

//Nesvarbu kiek kartu kreipsis i funkscija su kitu kintamuoju  gausime ta pati rezultata

const x1 = empty();
console.log(x1);

function boolFalse() {
    return false;
}

const x2 = boolFalse();
console.log(x2);

const x3 = boolFalse();
console.log(x3);

function giveMeNumber() {
    return 42069
}

const x4 = giveMeNumber();
console.log(x4);

// VARDAS -> Labas, as {VARDAS}!
// Krabas -> Labas, as Krabas!
// Jonas -> Labas, as Jonas!
// Maryte -> Labas, as Maryte!

function labas() {
    return 'Labas, as Krabas!';
}

function labas(name) {
    return `Labas, as ${name}!`;
}

const x7 = labas();
console.log(x7);
const x8 = labas('Krabas');
console.log(x7);
const x9 = labas('Jonas');
console.log(x7);
const x10 = labas('Maryte');
console.log(x7);


function dvigubai(number) {
    return number * 2;
}

const x11 = dvigubai(10);
console.log(x11);
const x12 = dvigubai(11);
console.log(x12);
const x13 = dvigubai(-12);
console.log(x13);
const x14 = dvigubai(-3, 14);
console.log(x14);

function introduction(name, age) {
    return `Sveiki, mano vardas ${name} ir man ${age} metai`;
}

const x15 = introduction('Jonas', 99);
console.log(x15);
const x16 = introduction('Maryte', 88);
console.log(x16);

// const x17 = introduction('Petras');
// console.log(x17);
// const x18 = introduction(66);
// console.log(x18);
// const x19 = introduction();
// console.log(x19);

console.clear();

// Jeigu kaina yra 0 ->0 Eur
// Jeigu kaina yra 10 ->10 Eur
// Jeigu kaina yra 50 ->50 Eur
// Jeigu kaina yra 90 ->90 Eur
// Jeigu kaina yra 99 ->99 Eur
// Jeigu kaina yra 100 ->50 Eur
// Jeigu kaina yra 102 ->51 Eur
// Jeigu kaina yra 200 ->100 Eur 

function price(amount) {
    if (amount < 100) {
        return amount + ' Eur';
    } else {
        return (amount / 2) + ' Eur';
    }
}

function betterPrice(amount) {
    // validacijos

    // logika
    let result = '';

    if (amount < 100) {
        result = amount + ' Eur';
    } else {
        result = (amount * 0.5) + ' Eur'

        // rezultato validacija

        // rezultato grazinimas
        return result;
    }
}

console.log(price(0), '->', '0 Eur');
console.log(price(10), '->', '10 Eur');
console.log(price(50), '->', '50 Eur');
console.log(price(90), '->', '90 Eur');
console.log(price(99), '->', '99 Eur');
console.log(price(100), '->', '100 Eur');
console.log(price(102), '->', '102 Eur');
console.log(price(200), '->', '100 Eur');

console.log(price(-200), '->', ' ERROR');
console.log(price(Infinity), '->', 'ERROR');
console.log(price(-Infinity), '->', 'ERROR');
console.log(price(NaN), '->', 'ERROR');
console.log(price(true), '->', 'ERROR');
console.log(price('dasfd'), '->', 'ERROR');
console.log(price(undefined), '->', 'ERROR');
console.log(price(), '->', 'ERROR');
console.log(price(price), '->', 'ERROR');

console.clear();

function betterPrice(amount) {
    // validacijos
    if (typeof amount !== 'number' || amount < 0) {
        return 'ERROR: duok skaiciaus tio reiksme';
    }
    if (amount < 0) {
        return 'ERROR: duok teigiama skaiciu';
    }
    if (amount < 0) {
        return 'ERROR: skaicius negali buti Infinity';
    }
    if (amount === Infinity) {
        return 'ERROR: skaicius negali buti Infinity';
    }
    if (amount === NaN) {
        return 'ERROR: skaicius duok normalu skaiciu';
    }
    // logika
    let result = '';

    if (amount < 100) {
        result = amount + ' Eur';
    } else {
        result = (amount * 0.5) + ' Eur'

        // rezultato validacija
        if (result === '') {
            return 'ERROR: kazkas negerai su logika....';

        }
        // rezultato grazinimas
        return result;
    }
}

console.log(betterPrice(0), '->', '0 Eur');
console.log(betterPrice(10), '->', '10 Eur');
console.log(betterPrice(50), '->', '50 Eur');
console.log(betterPrice(90), '->', '90 Eur');
console.log(betterPrice(99), '->', '99 Eur');
console.log(betterPrice(100), '->', '100 Eur');
console.log(betterPrice(102), '->', '102 Eur');
console.log(betterPrice(200), '->', '100 Eur');

console.log(betterPrice(-200), '->', ' ERROR');
console.log(betterPrice(Infinity), '->', 'ERROR');
console.log(betterPrice(-Infinity), '->', 'ERROR');

console.log(betterPrice(NaN), '->', 'ERROR');
console.log(betterPrice(true), '->', 'ERROR');
console.log(betterPrice('dasfd'), '->', 'ERROR');
console.log(betterPrice(undefined), '->', 'ERROR');
console.log(betterPrice(), '->', 'ERROR');
console.log(betterPrice(betterPrice), '->', 'ERROR');



//if (isNaN) {
//    console.log('taip');
// } else {
//    c onsole.log('ne');
// }

// if (isFinite(NaN)) {
//    console.log('taip');
// } else {
//     console.log('ne');
// }

// if ('' + 234 === 'NaN') {
//     console.log('taip');
// } else {
//     console.log('ne');
// }




/* 
Trust me bro funkcija - negalima pasitiketi, turi buti validacija
*/

function sum(a, b) {
    return a + b;
}

sum(7, 5);
sum('asd', true);

/* Pabaiga */
