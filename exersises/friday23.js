const vardas = 'Chuck';
const pavarde = 'Norris';

const short = vardas.length < pavarde.length ? vardas : pavarde;
console.log(short);

// const n = 'Chuck';
// const s = 'Norris';
// if (n.length < s.length) {
//     console.log(n);
// } else {

//     console.log(s);
// }
console.clear();

const name = 'Chuck';
const surname = 'Norris';
const dateOfBirth = 1960;
const thisYear = 2024;
const age = thisYear - dateOfBirth;
console.log(`Aš esu ${name} ${surname}. Man yra ${age} metai(ų)`);
console.clear();


const name2 = 'Chuck';
const surname2 = 'Norris';
const mockName = name2.slice(name2.length - 3) + surname2.slice(surname2.length - 3);
console.log(mockName);
console.clear();

const hollywood = 'Once upon a time in hollywood'.toLowerCase();
const star = hollywood.replaceAll('o', '*');
console.log(star);
console.clear();


function random_0_2() {
    return Math.floor(Math.random() * 3);
}
const count5 = Array(4).fill(0);
for (let i = 0; i < 3; i++) {
    const r = random_0_2();
    count5[r]++
}
const how = count5.filter(n => n === 0).length;
const heh = count5.filter(n => n === 1).length;
const huh = count5.filter(n => n === 2).length;
console.log('Kiek yra 0:', how, 'Kiek yra 1:', heh, 'Kiek yra 2:', huh);
console.log(count5);
console.clear();


const a = Math.floor(Math.random() * 5);
const b = Math.floor(Math.random() * 5);
const c = a >= b ? a / b : b / a;
const d = ((c * 100) - c % (c * 100)) / 100;
// Math.round(c * 100) / 100;
console.log(c, d);
console.clear();


const a2 = Math.floor(Math.random() * 26);
const b2 = Math.floor(Math.random() * 26);
const c2 = Math.floor(Math.random() * 26);
console.log((a2, b2, c2) / 2);
console.clear();

function random_0_25() {
    return Math.floor(Math.random() * 26);
}
const count6 = Array(25).fill(0);
for (let i = 0; i < 25; i++) {
    const r = random_0_2();
    count5[r]++
}
// for (let i = 0; i < 25; i++) {
//     random_0_25 = (random_0_25 / 3)
// }
console.log(count6);
console.clear();

const a5 = 'Jonas';
const b5 = 'Dammas';
const c5 = a5[0] + '.' + b5[0] + '.';
console.log(c5);
console.clear();


// function random_letters() {
//     return Math.floor(Math.random() * 25 + 97);
// }

// // for (let i = 97; i <= 122; i++) {
// //     // console.log(String.fromCharCode(i));
// // }
// const s = Math.floor(Math.random() * 25 + 97);
// const r = Math.floor(Math.random() * 25 + 97);
// const h = Math.floor(Math.random() * 25 + 97);

// console.log((String.fromCharCode(s)));
// console.log(random_letters);

function generateRandomString(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters.charAt(randomIndex);
    }
    return result;
}
const randomString = generateRandomString(3);
console.log(randomString);












