'use strict';

/* 
FOR - ciklas (pagrindinis)
*/

let a = 0;

a += 2;
a += 2;
a += 2;
a += 2;
a += 2;
a += 2;
a += 2;
a += 2;
a += 2;
a += 2;

console.log(a);

console.clear();

console.log('START');

for (let i = -5; i <= 10; i += 2) {
    console.log(i);
}

console.log('END');

console.clear();

const marks = [10, 2, 8, 4, 6, 10];

let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}

console.log('SUM:', sum, sum / marks.length);

// pradzia buvo naudojama VAR 
// x // sukuri kintamaji, bet jis nepastebimas
// xx = 5;
// var y;
// var = 5;
// 
2016
// const aa = 5;
// let b;
// let cc = 5;

console.clear();

for (let k = 0; k < 4; k++) {
    console.log(k);
}

console.log('------');

for (let k = 0; k < 8; k++) {
    console.log(k);
}

console.log('------');

for (let k = 0; k < 11; k++) {
    console.log(k);
}

console.clear();

// pirmas variantas skaiciavimo
let k = 2;

for (let i = 0; i + k < 5;) {
    console.log(i, k, i + k);
    i++; // galima perkelti ir cia sita bloka, nes skaiciavimo procedura ganasi ta pati.
}

// paaiskinimas kaip skaiciuojama for auksciau:
// k=2; i=0; i+k=2<5=true -> 0
// k=2; i=1; i+k=3<5=true -> 1
// k=2; i=2; i+k=4<5=true -> 2
// k=2; i=3; i+k=5<5=false 

console.clear();

// antras variantas skaiciavimo

function arTestiCikla(index) {
    if (index < 5) {
        return true;
    }
    return false;
}

let kk = 0;
let ii = 0;

for (; arTestiCikla(ii);) {
    console.log(ii, kk++);
    ii++;
}

console.clear();

// trecias variantas skaiciavimo

for (let i = 5; i > 0; i--) {
    console.log(i);
}

console.log('------');

for (let i = 0; i > 5; i++) {
    console.log(4 - i);
}