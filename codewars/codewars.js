// const { assert } = require("chai")

// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//         assert.strictEqual(positiveSum([1, 2, 3, 4, 5]), 15);
//         assert.strictEqual(positiveSum([1, -2, 3, 4, 5]), 13);
//         assert.strictEqual(positiveSum([]), 0);
//         assert.strictEqual(positiveSum([-1, -2, -3, -4, -5]), 0);
//         assert.strictEqual(positiveSum([-1, 2, 3, 4, -5]), 9);
//     });
// });


function positiveSum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            total += arr[i];
        }
    }
    return total;
}
console.clear();

/* 
The function is not returning the correct values. Can you figure out why?
Example (Input --> Output ):
3 --> "Earth"
*/

function getPlanetName(id) {
    let name;
    switch (id) {
        case 1:
            name = 'Mercury'
            break;
        case 2:
            name = 'Venus'
            break;
        case 3:
            name = 'Earth'
            break;
        case 4:
            name = 'Mars'
            break;
        case 5:
            name = 'Jupiter'
            break;
        case 6:
            name = 'Saturn'
            break;
        case 7:
            name = 'Uranus'
            break;
        case 8:
            name = 'Neptune'
            break;
    }


    return name;
}
console.clear();


/* 
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
Your task is to change the letters with diacritics:
    ą -> a,
    ć -> c,
    ę -> e,
    ł -> l,
    ń -> n,
    ó -> o,
    ś -> s,
    ź -> z,
    ż -> z
and print out the string without the use of the Polish letters.

For example: "Jędrzej Błądziński"  -- > "Jedrzej Bladzinski"
 */

// correctPolishLetters = string => string.replace([ąćęłńóśźż] / g, replacer => 'acelnoszz'['ąćęłńóśźż'.indexOf(replacer)])

function correctPolishLetters(s) {
    return s.replace(/[ąćęłńóśźż]/g, c => "acelnoszz"[ąćęłńóśźż.indexOf(c)])
}
console.clear();

function strCount(str, letter) {
    let result = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == letter) {
            result++
        }
    }
    return result
}

const distanceToPump = 50;
const mpg = 25;
const fuelLeft = 2;


const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return mpg * fuelLeft >= distanceToPump
};


function differenceInAges(ages) {
    let max = Math.max(...ages),
        min = Math.min(...ages)
    diff = max - min

    return [min, max, diff]

}
// describe("Tests", () => {
//     it("test", () => {
//         Test.assertSimilar(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
//         Test.assertSimilar(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);
//     });
// });


function getDrinkByProfession(param) {
    switch (param.toLowerCase()) {
        case 'jabroni':
            return 'Patron Tequila';
        case 'school counselor':
            return 'Anything with Alcohol';
        case 'programmer':
            return 'Hipster Craft Beer';
        case 'bike gang member':
            return 'Moonshine';
        case 'politician':
            return 'Your tax dollars';
        case 'rapper':
            return 'Cristal';
        default:
            return 'Beer';
    }
}