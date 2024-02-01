/*
STRING - tekstas, simboliu grandinele

Iniciavimo simboliai/budai: viengubos kabutes ('), dvigubos kabutes (") ir ` (backtic) kabutes
*/

const text1 = 'Pirmas tekstas.';
console.log(text1);

const text2 = "0 cia jau antras tekstas.";
console.log(text2);

// Cia yra tekstas be kabuciu
const text31 = 'Cia yra tekstas be kabuciu';
const text32 = "Cia yra tekstas be kabuciu";
console.log(text31);
console.log(text32);

// Viengubos (') kabutes
const kabute21 = "Vienguba (') kabute";
console.log(kabute21);

//Dvigubos (") kabutes
const kabute12 = 'Dvigubos (") kabutes';
console.log(kabute12);

//Vienguba (') ir dviguba (") kabutes.
const kabute = "";

const vardas = 'Chuck';
const pavarde = 'Norris';

const fullName = vardas + ' ' + pavarde;
console.log(fullName);

//Vienguba (') ir dviguba (") kabutes.
const kabuteMIX = "Vienguba (') ir" + ' dviguba (") kabutes.';
console.log(kabuteMIX);

const kabuteMIX21 = 'Vienguba (\') ir dviguba (") kabutes.'
console.log(kabuteMIX21);

const kabuteMIX22 = "Vienguba (') ir dviguba (\") kabutes.";
console.log(kabuteMIX22);

const kabuteMIX23 = "Vienguba (\') ir dviguba (\") kabutes.";
console.log(kabuteMIX23);

const kabuteMIX24 = 'Vienguba (\') ir dviguba (\") kabutes.'
console.log(kabuteMIX24);

console.clear();

const gele = 'tulpe';
const spalva = 'geltona';

// As turiu tulpe kuri yra geltona.
const sakinys = 'As turiu ' + gele + ' kuri yra ' + spalva + '.';
console.log(sakinys);

const backtic = `Backtic sakinys.`;
console.log(backtic);

const backtic12 = `Vienguba (\') ir dviguba (\") kabutes.`;
console.log(backtic12);

const backtic123 = `Vienguba ('), dviguba (") ir backtic (\`) kabutes.`;
console.log(backtic123);

const backticGelytes = `As turiu ${gele} kuri yra ${spalva}.`;
console.log(backticGelytes);

const n1 = 77;
const n2 = 55;

// 7 + 5 = 12; 
const pliusas = `${n1} + ${n2} = ${n1 + n2}; `;
console.log(pliusas);