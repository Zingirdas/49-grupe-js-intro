//           012345678

const text = 'Pomidoras';

const lower = text.toLowerCase();
console.log(lower);

const upper = text.toUpperCase();
console.log(upper);

const combo = text.toUpperCase().toLowerCase();
console.log(combo);

const firstLetter = text[0];
console.log(firstLetter);

const secondLetter = text[1];
console.log(secondLetter);

const lastLetter = text[8];
console.log(lastLetter);

const crazyLetter1 = text[2.5];
console.log(crazyLetter1);

const crazyLetter2 = text[-1];
console.log(crazyLetter2);

const crazyLetter3 = text[10];
console.log(crazyLetter3);

// Pomidoras turi 9 raides.

const sakinys = `${text} turi ${text.length} raides.`
console.log(sakinys);

const ilgis = 'Kiek cia simboliu?'.length;
console.log(ilgis);

const name1 = 'Jonas';
const surname1 = 'Jonaitis'
const name2 = 'Maryte';
const surname2 = 'Marytaite';
const name3 = 'Petras';
const surname3 = 'Petraitis';
const name4 = 'Ona';
const surname4 = 'Onaite';

// Vardo "Jonas" ilgis yra 5 simboliai.
// Asmens Jonas Jonaitis inicialai yra J.J.

const name11 = `Vardo ${name1} ilgis yra ${name1.length} simboliai.`;
console.log(name11);

const name21 = `Vardo ${name2} ilgis yra ${name2.length} simboliai.`;
console.log(name21);

const name31 = `Vardo ${name3} ilgis yra ${name3.length} simboliai.`;
console.log(name31);

const name41 = `Vardo ${name4} ilgis yra ${name4.length} simboliai.`;
console.log(name41);

const name111 = `Asmens ${name1} ${surname1} inicialai yra ${name1[0]}.${surname1[0]}.`;
console.log(name111);

const name211 = `Asmens ${name2} ${surname2} inicialai yra ${name2[0]}.${surname2[0]}.`;
console.log(name211);

const name311 = `Asmens ${name3} ${surname3} inicialai yra ${name3[0]}.${surname3[0]}.`;
console.log(name311);

const name411 = `Asmens ${name4} ${surname4} inicialai yra ${name4[0]}.${surname4[0]}.`;
console.log(name411);