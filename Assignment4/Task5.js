function filterOdd(num) {
    return num.filter(n => n % 2 !== 0);
}

function doubleNumber(num) {
    return num.map(n => n * 2);
}

function calculateSum(num) {
    return num.reduce((sum, n) => sum + n, 0);
}

function findMax(num) {
    return num.reduce((max, n) => (n > max ? n : max), num[0]);
}


function processData(num, callback) {
    return callback(num);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Filtered Odd Numbers:", processData(numbers, filterOdd));
console.log("Doubled Numbers:", processData(numbers, doubleNumber));
console.log("Sum of Numbers:", processData(numbers, calculateSum));
console.log("Maximum Number:", processData(numbers, findMax));