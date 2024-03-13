// 1. Parašykite funkciją, kuri priima vartotojo vardą kaip argumentą ir grąžina pasveikinimo žinutę.

let name = 'Tomas';
function labas(name) {
    return name;
}
console.log(`Labas, as esu ${name}`);
// Atsakymas: Labas, as esu Tomas

// 2. Sukurkite funkciją, kuri priima du skaičius kaip argumentus ir grąžina jų sumą.

const a = 20;
const b = 20;
console.log(a + b);
// Atsakymas: 40

// 3. Parašykite funkciją, kuri priima masyvą kaip argumentą ir grąžina visų masyvo elementų sumą.

let numbers = [10, 20, 30, 50, 45];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);
//Atsakymas: 155


// 4.  Sukurkite funkciją, kuri priima masyvą skaičių ir grąžina didžiausią skaičių masyve.

let skaicius = Math.max(10, 5, 20, 15, 8);
console.log(skaicius);
// Atsakymas: 20


// 5.Parašykite funkciją, kuri priima tekstą kaip argumentą ir grąžina to teksto ilgį.

const note = 'Parašykite funkciją, kuri priima tekstą kaip argumentą ir grąžina to teksto ilgį.'.length;
console.log(note);
// Atsakymas: 81

// 6.: Sukurkite funkciją, kuri priima skaičių ir grąžina jo faktorialą.

let number = 5;

function factorial(number) {
    let result = 1;
    for (let i = number; i > 1; i--) {
        result *= i;
    }
    return result
}
console.log(factorial(number));
// Atsakymas: 120

// 7.Parašykite funkciją, kuri priima masyvą skaičių ir skaičių kaip argumentus, o grąžina naują masyvą, kuriame yra tik tie skaičiai, kurie didesni už pateiktą skaičių.

let number1 = [10, 20, 30, 50, 45];
const filteredNumbers = numbers.filter(item => item > 30);
console.log(filteredNumbers);
// Atsakymas: [ 50, 45 ]


// 8. Sukurkite funkciją, kuri priima tekstą kaip argumentą ir grąžina jį atvirkštine tvarka.

const text = 'Gyvenimas';
function reverseText(text) {
    return text.split('').reverse().join('');
}
console.log(reverseText(text));
// Atsakymas: saminevyG


// 9. Parašykite funkciją, kuri nustato, ar pateiktas tekstas yra palindromas.

function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord ? `${word} yra palindromas` : `${word} nėra palindromas`;
}

let word = "rotor";

console.log(isPalindrome(word));

// 10. Sukurkite funkciją, kuri priima skaičių ir grąžina true, jei skaičius yra lyginis, ir false, jei skaičius yra nelyginis.

let number3 = 4;
function isEven(number3) {
    return number3 % 2 === 0;
}
console.log(isEven(number3));
// Atsakymas - true

// 11.  Parašykite funkciją, kuri priima tekstą ir dvi eilutes: pakeistiną simbolį ir pakeitimo simbolį.Funkcija grąžina naują tekstą su pakeistais simboliais.

const originalText = "savas kampas";
const replaceChars = (text, replacedChar, replacementChar) => text.replace(new RegExp(replacedChar, 'g'), replacementChar);

const newText = replaceChars(originalText, 'a', 'i');
console.log(newText);
// Atsakymas: sivis kimpis



// 12. Sukurkite funkciją, kuri priima temperatūrą Celsijaus laipsniais ir konvertuoja ją į Farenheito laipsnius.

const celsiusTemperature = 20;

function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

// Pavyzdinė naudojimo situacija:
let fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log(fahrenheitTemperature); // Rezultatas: 68



// 13.  Parašykite funkciją, kuri priima masyvą ir grąžina naują masyvą be dublikatų.

// 13. Sukurkite funkciją, kuri priima skaičių ir grąžina true, jei skaičius yra pirminis, ir false, jei ne.

// 14. Parašykite funkciją, kuri priima masyvą skaičių ir grąžina jį surikiuotą mažėjančia tvarka.

let numbers2 = [10, 20, 30, 50, 45];
function sortnum(array) {
    return array.sort(numbers2).reverse;
}
console.log(sortnum);

// 15.  Sukurkite funkciją, kuri priima du skaičius kaip pradžios ir pabaigos intervalo ribas ir grąžina visų skaičių, esančių tame intervale, sumą.

// 17.  Parašykite funkciją, kuri priima tekstą ir grąžina jį, pakeisdamas kiekvieną raidę į sekantį raidę abėcėlėje.

// 18.  Sukurkite funkciją, kuri priima gimimo metus ir grąžina asmenio amžių.

// 19.Parašykite funkciją, kuri priima tekstą ir simbolį, o grąžina, kiek kartų tas simbolis pasikartoja tekste.

// Paskutinė užduotis sunkesnė ir jei pasirodė praeitos užduotys per lengvos galite pasipraktikuoti su šita:)


// 20. Parašykite funkciją, kuri priima kelių masyvų sąrašą ir grąžina naują masyvą, kuris sudarytas tik iš tų elementų, kurie pasikartoja visuose pradiniuose masyvuose.
//     Reikalavimai:


// Universalumas: funkcija turėtų veikti su bet kokiu masyvu sudarytu iš skaičių.
//     Veiksmingumas: stenkitės optimizuoti funkciją taip, kad ji veiktų kuo efektyviau su dideliais masyvais.
//         Unikalumas: grąžinamame masyve neturėtų būti pasikartojančių elementų.

console.clear();






















//  1. Duomenų Objektas: Sukurkite objektą, kuris saugotų jūsų mėgstamiausios knygos pavadinimą, autorių ir leidimo metus.Išveskite kiekvieną objekto savybę naudojant for in ciklą.

const megstamiausiaKnyga = {
    pavadinimas: "Guliverio kelionės",
    autorius: "Jonathan Swift",
    metai: 2010
};
for (let property in megstamiausiaKnyga) {
    console.log(`${property}: ${megstamiausiaKnyga[property]}`);
}
// Atsakymas: pavadinimas: Guliverio kelionės
//            autorius: Jonathan Swift
//            metai: 2010
console.log('---------------------------');


//  2. Vartotojų Masyvas: Sukurkite masyvą, kuriame būtų kelios objektų reikšmės, kiekviena reikšmė turėtų vartotojo vardą ir amžių.Naudodami for of ciklą, išveskite kiekvieno vartotojo vardą ir amžių.

const zmones = [
    { vardas: 'Jonas', metai: 25 },
    { vardas: 'Darius', metai: 3 },
    { vardas: 'Agota', metai: 56 },
    { vardas: 'Justina', metai: 37 },
];
for (const zmogus of zmones) {
    console.log(`${zmogus.vardas}: ${zmogus.metai}`);
}
// Atsakymas: Jonas: 25
//            Darius: 3
//            Agota: 56
//            Justina: 37
console.log('---------------------------');

//  3. Sąrašo Filtravimas: Turite objektų masyvą, kuriame saugoma informacija apie įvairius produktus(pavadinimas, kaina, kategorija).Parašykite funkciją, kuri naudojant for of ciklą grąžintų tik tuos produktus, kurie priklauso tam tikrai kategorijai.

const daiktai = [
    { pavadinimas: 'masina', kaina: 5000, kategorija: 'automobilis' },
    { pavadinimas: 'batai', kaina: 35, kategorija: 'avlyne' },
    { pavadinimas: 'padanga', kaina: 90, kategorija: 'automobilis' },
    { pavadinimas: 'vidpadis', kaina: 3, kategorija: 'avalyne' },
    { pavadinimas: 'duona', kaina: 1, kategorija: 'maistas' },
    { pavadinimas: 'desra', kaina: 10, kategorija: 'maistas' },
];

const kategorija = 'maistas';
const filteredDaiktai = filterProductsByCategory(daiktai, kategorija);

function filterProductsByCategory(products, category) {
    const filteredProducts = [];

    for (let product of products) {
        if (product.kategorija === category) {
            filteredProducts.push(product);
        }
    }
    return filteredProducts;
}
console.log(filteredDaiktai);

//  Atsakymas: { pavadinimas: 'duona', kaina: 1, kategorija: 'maistas' },
//             { pavadinimas: 'desra', kaina: 10, kategorija: 'maistas' }
console.log('---------------------------');

//  4. Objekto Kopijavimas: Parašykite funkciją, kuri naudojant for in ciklą sukurtų objekto kopiją.

const objektas = {
    pavadinimas: "Guliverio kelionės",
    autorius: "Jonathan Swift",
    metai: 2010
};
function copyObject(obj) {
    const copy = {};
    for (let key in obj) {
        copy[key] = obj[key];
    }
    return copy;
}
const copiedObject = copyObject(objektas);
console.log(copiedObject);

// Atsakymas: pavadinimas: 'Guliverio kelionės',
//                          autorius: 'Jonathan Swift',
//                          metai: 2010
console.log('---------------------------');

//  5. Raktų ir Reikšmių Atrinkimas: Turite vartotojo objektą su įvairiomis savybėmis.Naudodami for in ciklą, sukurti du masyvus: viename saugokite objekto raktus, o kitame - reikšmes.

const daiktai1 =
    { pavadinimas: 'masina', kaina: 5000, kategorija: 'automobilis' };

const raktai = [];
const reiksmes = [];

for (let key in daiktai1) {
    raktai.push(key);
    reiksmes.push(daiktai1[key]);
}

console.log("Raktai:", raktai);
console.log("Reikšmės:", reiksmes);

//  Atsakymas: Raktai: [ 'pavadinimas', 'kaina', 'kategorija' ]
//             Reikšmės: ['masina', 5000, 'automobilis']
console.log('---------------------------');

//  6. Masyvo Suma: Turite masyvą, kuriame yra skaičiai.Naudodami for ciklą, apskaičiuokite masyvo skaičių sumą.

const numbers1 = [20, 30, 40, 50, 60, 80, 10];
let sum1 = 0;
for (let i = 0; i < numbers1.length; i++) {
    sum1 += numbers1[i];
}
console.log("Suma:", sum1);

// Atsakymas: Suma: 290
console.log('---------------------------');

//  7. Didžiausias Skaičius: Turite skaičių masyvą.Naudodami for ciklą, raskite didžiausią skaičių masyve.

const numbers12 = [20, 30, 40, 50, 60, 80, 10];
let biggestNumber = numbers12[0];
for (let i = 0; i < numbers12.length; i++) {
    if (numbers12[i] > biggestNumber) {
        biggestNumber = numbers12[i];
    };
}
console.log(biggestNumber);

// Atsakymas: 80
console.log('---------------------------');

//  8. Objekto Savybių Skaičius: Sukurkite funkciją, kuri naudojant for in ciklą, grąžina objekto savybių skaičių.

const daiktai3 = { pavadinimas: 'masina', kaina: 5000, kategorija: 'automobilis' };

function kiekSavybiu(daiktai3) {
    let savybiuSkaicius = 0;
    for (let savybe in daiktai3) {
        savybiuSkaicius++;
    }
    return savybiuSkaicius;
}
console.log("Savybes:", kiekSavybiu(daiktai3));

// Atsakymas: 3
console.log('---------------------------');

//  9. Sąlyginis Objektų Atrinkimas: Turite vartotojų masyvą su objektais, kuriuose yra vardas ir amžius.Naudodami for of ciklą, išveskite tik tuos vartotojus, kurių amžius yra didesnis nei 18.

const zmones1 = [
    { vardas: 'Jonas', metai: 25 },
    { vardas: 'Darius', metai: 3 },
    { vardas: 'Agota', metai: 56 },
    { vardas: 'Justina', metai: 37 },
];
for (let zmogus of zmones1) {
    if (zmogus.metai > 18) {
        console.log(zmogus.vardas, zmogus.metai);
    }
}

// Atsakymas: Jonas 25
//            Agota 56
//            Justina 37
console.log('---------------------------');

//  10.Objekto Savybių Keitimas: Turite objektą, kuriame saugomi įvairių žmonių amžiai.Naudodami for in ciklą, padidinkite kiekvieno asmens amžių 1 metais.

const zmones2 = [
    { vardas: 'Jonas', metai: 25 },
    { vardas: 'Darius', metai: 3 },
    { vardas: 'Agota', metai: 56 },
    { vardas: 'Justina', metai: 37 },
];
for (let zmogus of zmones2) {
    zmogus.metai++;
}
console.log(zmones2);

// Atsakymas: { vardas: 'Jonas', metai: 26 },
//            { vardas: 'Darius', metai: 4 },
//            { vardas: 'Agota', metai: 57 },
//            { vardas: 'Justina', metai: 38 }
console.log('---------------------------');