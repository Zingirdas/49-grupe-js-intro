/* 
ARRAY - sarasas, masyvas, listas, zodynas, N-mate matrica (neribota), arejas
*/

// marks - pazymiai

const empty = [];
console.log(empty);

const marks = [10, 2, 8, 4, 6];
console.log(marks);

const students = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(students);

console.log('Empty kiekis', empty.length);
console.log('Pazymiu kiekis', marks.length);
console.log('Studentu kiekis', students.length);

// visos kalbos pradeda skaiciuoti nuo 0, tik LUA kalba pradeda skaiciuoti nuo 1.

console.log(marks[0], marks[1], marks[2]);
console.log(marks[9999]);
console.log(marks[-1]);
console.log(marks[3.5]);

// Gaunam studento 5 pazymiu masyva. 
// Reikia suskaiciuoti pazymiu vidurki.

function marksAverage(marks) {
    // validacijos

    // logika
    // 1 scenarijus:
    // const total = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];

    // 2 scenarijus:
    // let total = 0;
    // total = total + marks[0];
    // total = total + marks[1];
    // total = total + marks[2];
    // total = total + marks[3];
    // total = total + marks[4];

    // 3 scenarijus
    // let total = 0;
    // total += marks[0];   // = 0 + 10
    // total += marks[1];   // = 10 + 2
    // total += marks[2];   // = 12 + 8
    // total += marks[3];   // = 20 + 4
    // total += marks[4];   // = 24 + 6

    console.log(marks);

    // 4 scenarijus:

    // let total = 0;
    // let i = 0;
    // console.log(i, total);
    // total += marks[i];
    // i += 1;
    // console.log(i, total);
    // total += marks[i];
    // i += 1;
    // console.log(i, total);
    // total += marks[i];
    // i += 1;
    // console.log(i, total);
    // total += marks[i];
    // i += 1;
    // console.log(i, total);
    // total += marks[i];
    // i += 1;
    // console.log(i, total);

    // 5 scenarijus:

    let total = 0;
    let i = 0;

    total += marks[i++];
    total += marks[i++];
    total += marks[i++];
    total += marks[i++];
    total += marks[i++];



    const count = marks.length;
    const result = total / count;

    //rezultato validacija

    // rezultato grazinimas
    return result;
}

console.log(marksAverage([10, 2, 8, 4, 6]), '->', 6);
// console.log(marksAverage([10, 10, 10, 10, 10]), '->', 10);
// console.log(marksAverage([1, 1, 1, 1, 1]), '->', 1);
// console.log(marksAverage([1, 2, 3, 4, 5]), '->', 3);