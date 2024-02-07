/*
IF - reiksmiu palyginimas

SABLONAI
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} else {}
if () {} ... else if () {} ...
if () {} ... else if () {} ... else if () {}

PALYGINIMO ELEMENTAI
-visi: >, <, >=, <=, ==, ===, !=, !==
-naudotini:>, <, >=, <=, ==, ===, !==
-nenaudotini: ==, !=
*/

const profesija = 'Studentas';
const amzius = 22;
const amziausLimitas = 21;

console.log('START');

const msg1 = profesija + ' eina i bara...';

console.log(msg1);

if (amzius >= amziausLimitas) {
    msg = 'Tai ko noresi uzsisakyti?';
} else {
    msg = profesija + '... Tu gi vis vien neturi pinigu...';

}
console.log(msg);



console.clear();

const win = 2000
let msgWin = 'Tu neturi windowsu???';

if (win === '95') {
    msgWin = 'Windows 95';
} else if (win === '98') {
    msgWin = 'Windows 98';
} else if (win === 'xp') {
    msgWin = 'Windows XP';
} else if (win === 'vista') {
    msgWin = 'Windows Vista';
} else if (win === '10') {
    msgWin = 'Windows 10';
} else {
    msgWin = 'Neatpazinta OS...';
}

console.log(msgWin);

console.clear();


if (4 > 2) {
    console.log('Taip');
} else {
    console.log('NE');

}

if (4 === 2) {
    console.log('Taip');
} else {
    console.log('NE');

}

const saskaita = 100;
const isimti = 50;

let msgAB = 'Inicijuojame bankine operacija...';


if (saskaita >= isimti) {
    msgAB = 'Stai tavo ' + isimti + ' pinigu';
} else {
    msgAB = 'Tu tiek neturi, kiek nori issiimti';

}

console.log(msgAB);

console.clear();

// Code nesting

const diena = 1;
// Iki 11val - pusryciu meniu
// Iki 16val - dienos meniu
// Po 16val - vakaro meniu
const laikas = 20;

if (diena === 1) {
    if (laikas < 11) {
        console.log('Pirmos menesio dienos meniu: rytas');
    } else if (laikas < 16) {
        console.log('Pirmos menesio dienos meniu: vakaras');
    } else {
        console.log(Pirmos menesio dienos meniu: vakaras);
    }
} else if (diena === 24 || diena === 25);
 
} else {
    if (laikas < 11) {
        console.log('Standartinis meniu: rytas');
    } else if (laikas < 16) {
        console.log('Standartinis meniu: vakaras');
    } else {
        console.log(Standartinis meniu: vakaras);

    }

    if (diena === 1 && laikas < 11) {
        console.log('Pirmadienio meniu: rytas');
    } else if (diena === 1 && laikas < 16) {
        console.log('Pirmadienio meniu: diena');
    } else if (diena === 1 && laikas > 16) {
        console.log('Pirmadienio meniu: diena');
    }
}

console.clear();