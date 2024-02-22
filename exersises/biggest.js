function biggest(list) {
    if (!Array.isArray(list)) {
        return 'ERROR: duok masyva';
    }
    if (list.length === 0) {
        return 'ERROR: tuscias masyvas';
    }
    let biggestNumber = -Infinity;

    for (const number of list) {
        if (typeof number !== 'number' || !isFinite(number)) {
            continue
        }
        if (number > biggestNumber) {
            biggestNumber = number;
        }
    }

    if (biggestNumber === Infinity) {
        return 'ERROR: Masyve nerasta nei vieno normalaus skaiciaus';
    }

    return biggestNumber;
}

console.log(biggest([1]), '-->', 1);
console.log(biggest([1, 2, 3]), '-->', 3);
console.log(biggest([-5, 78, 14, 0, 18]), '-->', 78);
console.log(biggest([69, 69, 69, 69, 66]), '-->', 69);
console.log(biggest([-1, -2, -3, -4, -5, -6, -7, -8]), '-->', -1);
console.log(biggest('pomidoras'));
console.log(biggest([]));

console.log(biggest([-5, 78, 14, 0, 18, Infinity]), '-->', 78);
console.log(biggest([-5, 78, 14, Infinity, 0, 18]), '-->', 78);
console.log(biggest([Infinity, -5, 78, 14, 0, 18]), '-->', 78);

console.log(biggest([-5, 78, 14, 0, 18, true]), '-->', 78);
console.log(biggest([-5, 78, 14, true, 0, 18]), '-->', 78);
console.log(biggest([true, -5, 78, 14, 0, 18]), '-->', 78);

console.log(biggest([-5, 78, 14, 0, 18, false]), '-->', 78);
console.log(biggest([-5, 78, 14, false, 0, 18]), '-->', 78);
console.log(biggest([false, -5, 78, 14, 0, 18]), '-->', 78);

console.log(biggest([-5, 78, 14, 0, 18, '']), '-->', 78);
console.log(biggest([-5, 78, 14, '', 0, 18]), '-->', 78);
console.log(biggest(['', -5, 78, 14, 0, 18]), '-->', 78);

console.log(biggest([-5, 78, 14, 0, 18, Labas]), '-->', 78);
console.log(biggest([-5, 78, 14, Labas, 0, 18]), '-->', 78);
console.log(biggest([Labas, -5, 78, 14, 0, 18]), '-->', 78);

console.log(biggest(['labas', true, biggest, {}, null, undefined]));

// Rekursija
console.log(-5, [[[78], 14], 0, 18], '-->', 78);