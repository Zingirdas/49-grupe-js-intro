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
