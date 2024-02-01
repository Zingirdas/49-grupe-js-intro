/*
BOOLEAN - logine reiksme

Galimos reiksmes:
-true
-falce

Loginiai operatoriai
- && (and)
- || (or)
- ! (not/invert)

*/

const arSninga = true;
const arLyja = false;

const dabartineTemp = -1;
const siltaNuoTemp = 20;

const arSilta = false;

const vardas1 = '';
const arNurodytasVardas1 = false;

const vardas2 = 'Jonas';
const arNurodytasVardas2 = true;

console.log(true, false);

// Sportas
// varzybos vyksta tik dienos metu
// varzybos vyksta tik jei turime bent 2 komandas

const arDiena = true;
const arYraDviKomandos = true;

// Varzybos vyksta kai tenkinamos visos salygos

const arVykstaVarzybos = arDiena && arYraDviKomandos;
console.log('Varzybos', arVykstaVarzybos);

//Kermosius
// - vaikas noretu gaidelio
// - vaikas noretu lazdeles
// - vaikas noretu grybuko

const arTuriGaidelio = true;
const arTuriLazdeles = true;
const arTuriGrybuko = true;

const arVaikasGausSaldaini = arTuriGaidelio || arTuriLazdeles || arTuriGrybuko;
console.log('Kermosius', arVaikasGausSaldaini);

const a = true;
const b = false;
const c = true;

console.log(a && b, '->', false);
console.log(a || b, '->', true);
console.log(a || b || c, '->', true);
console.log(a && b || c, '->', false);
console.log(a && b || c, '->', false);

console.log(a && b || c, '->', true);

console.log(a || b && c, '->', true);

console.log(false && false || false, '->', false);
console.log(false && true || false, '->', false);
console.log(true && true || true, '->', true);
console.log(true && true || false, '->', true);
console.log(true && true || true, '->', true);
console.log(true && false || false, '->', false);
console.log(true && false || true, '->', true);
console.clear();


console.log(false || false && false, '->', false);
console.log(false || true && false, '->', false);
console.log(true || true && true, '->', true);
console.log(true || true && false, '->', true);
console.log(true || true && true, '->', true);
console.log(true || false && false, '->', true);
console.log(true || false && true, '->', true);

console.log(true && true || false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log((true && true) || (false && false));

console.clear();

console.log(!true);
console.log(!false);

const arMiega = false;
const arNeMiega = true;

console.log(!arMiega);
console.log(!arNeMiega);

console.log(!!true);
console.log(!!false);

console.clear();

// Visi stringai yra TRUE, isskyrus tuscias
console.log(!'Labas');
console.log('');
console.log(!'');

// Visi skaiciai yra TRUE, isskyrus 0 (nulis)
console.log(!5);
console.log(!-5);
console.log(!0);

/*
// Angliski pavadinimai:
    - positive, negative numbers
    - truthy, falsy number values

*/