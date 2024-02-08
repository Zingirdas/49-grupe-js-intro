/* 
Suskaiciuoti skaiciu suma intervale (imtinai
    pvz.: 0...4 -> 0+1+2+3+4=10
*/

let sum = 0;

for (let i = 0; i <= 4; i++) {
    sum += i;
    console.log(i, sum);

}

console.log('SUM', sum);

console.clear();

const min = 0;
const max = 100;
let sum2 = 0;

for (let i = min; i <= max; i++) {
    sum2 += i;
}
console.log('SUM2', sum2);


function sumBetween(min, max) {
    let total = 0;

    for (let i = min; i <= max; i++) {
        total += i;
    }
    // return 'Sum between ${min} and ${max} is ${total}';
    return total;
}
// Sum between o and 4 is 10;

console.log(sumBetween(0, 4));
console.log(sumBetween(0, 10));
console.log(sumBetween(13, 15));
console.log(sumBetween(0, 100));
console.log(sumBetween(0, 1000));
console.log(sumBetween(0, 10_000));
console.log(sumBetween(0, 100_000));
console.log(sumBetween(0, 1000_000));
console.log(sumBetween(0, 10_000_000));
console.log(sumBetween(0, 100_000_000));
console.log(sumBetween(0, 1000_000_000));

console.clear();

function correctBetween(min, max) {
    return (max * (max + 1)) / 2;

}
console.log(correctBetween(1));
console.log(correctBetween(10));
console.log(correctBetween(15));
console.log(correctBetween(100));
console.log(correctBetween(1000));
console.log(correctBetween(10_000));
console.log(correctBetween(100_000));
console.log(correctBetween(1000_000));
console.log(correctBetween(10_000_000));
console.log(correctBetween(100_000_000));
console.log(correctBetween(1000_000_000));
