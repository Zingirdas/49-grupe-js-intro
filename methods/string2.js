
const text = 'Pomidoras';

console.log(text.at(0), text[0]);
console.log(text.at(1), text[1]);
console.log(text.at(2), text[2]);
console.log(text.at(3), text[3]);
console.log(text.at(9), text[9]);
console.log(text.at(-1), text[-1]);
console.log(text.at(-2), text[-2]);
console.log(text.at(-3), text[-3]);
console.log(text.at(-4), text[-4]);
console.log(text.at(-5), text[-5]);

console.log('a'.charCodeAt(0));
console.log('b'.charCodeAt(0));
console.log('c'.charCodeAt(0));
console.log('d'.charCodeAt(0));
console.log('A'.charCodeAt(0));
console.log('B'.charCodeAt(0));
console.log('C'.charCodeAt(0));
console.log('D'.charCodeAt(0));


console.log(text.charCodeAt(0));
console.log(text.charCodeAt(1));
console.log(text.charCodeAt(2));
console.log(text.charCodeAt(3));

console.log(String.fromCharCode(168));

console.clear();

console.log(text.endsWith('a'));
console.log(text.endsWith('s'));
console.log(text.endsWith('as'));

console.log(text.startsWith('Pom'));

console.clear();

console.log('Pomidoras'.includes('o'));
console.log('Pomidoras'.includes('omi'));
console.log('Pomidoras'.includes('omitronas'));
console.log('Pomidoras'.includes('ras'));

console.clear();

console.log('Pomidoras'.indexOf('x'));
console.log('Pomidoras'.indexOf('5'));
console.log('Pomidoras'.indexOf('defretr'));
console.log('Pomidoras'.indexOf('P'));
console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('m'));
console.log('Pomidoras'.indexOf('i'));
console.log('Pomidoras'.indexOf('d', 1));
console.log('Pomidoras'.indexOf('d', 2));
console.log('Pomidoras'.indexOf('d', 3));
console.log('Pomidoras'.indexOf('d', 4));
console.log('Pomidoras'.indexOf('d', 5));
console.log('Pomidoras'.indexOf('d', 6));
console.log('Pomidoras'.indexOf('d', 7));
console.log('------------------------');
console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('o', 0));
console.log('Pomidoras'.indexOf('o', 2));
console.log('Pomidoras'.indexOf('o', 5));
console.log('Pomidoras'.indexOf('o', 6));

console.clear();

// pakartok teksta "labas" 3 kartus -> (atsakymas) labaslabaslabas

const repText = 'labas';
const count = 3;
let result = '';

for (let i = 0; i < count; i++) {
    result += text;

    return result;
}

// const result = repText * count;
console.log(repeat('labas', 0));
console.log(repeat('labas', 1));
console.log(repeat('labas', 2));
console.log(repeat('labas', 3));
console.log(repeat('labas', 4));

console.clear();

console.log = 'vasara',
    replace('a', '-')
replace('a', '-')
replace('a', '-');


console.log(vasara2);

const vasara2 = 'vasaravasaravasara'

console.log('Pomidoras'.slice());
console.log('Pomidoras'.slice(0));
console.log('Pomidoras'.slice(1));
console.log('Pomidoras'.slice(2));
console.log('Pomidoras'.slice(3));

//           012345678
console.log('Pomidoras'.slice(0, 5));
console.log('Pomidoras'.slice(1, 5));
console.log('Pomidoras'.slice(2, 5));

console.log('-----------');

//           876543210-
//          +012345678
console.log('Pomidoras'.slice(-1));
console.log('Pomidoras'.slice(-2));
console.log('Pomidoras'.slice(-3));
console.log('Pomidoras'.slice(-4));
console.log('Pomidoras'.slice(-4, -2));
console.log('Pomidoras'.slice(2, -2));

console.clear();

console.log('Pomidoras'.split());
console.log('Pomidoras'.split('m'));
console.log('Pomidoras'.split('i'));
console.log('Pomidoras'.split('o'));

console.log('vasara'.split('s'));
console.log('vasara'.split('v'));
console.log('vasara'.split('v')[0].length);
console.log('vasara'.split('v')[1].length);

console.log('vasara'.split('a'));
console.log('vasara'.split('X'));
console.log(''.split('a'));
console.log(''.split(''));
console.log('vasara'.split(''));

console.clear();

console.log('vasara'.toUpperCase());
console.log('VASara'.toUpperCase());
console.log('VASara'.toLowerCase());

console.clear();

console.log(`"${'vasara'.trim()}"`);
console.log(`"${'v a s a r a'.trim()}"`);
console.log(`"${'v  a  s  a  r  a'.trim()}"`);
console.log(`"${'v   a   s   a   r   a'.trim()}"`);
console.log(`"${'     vasara'.trim()}"`);
console.log(`"${'vasara     '.trim()}"`);
console.log(`"${'     vasara     '.trim()}"`);
console.log(`"${'     vas     ara     '.trim()}"`);