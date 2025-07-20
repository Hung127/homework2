const prompt = require("prompt-sync")();

// Exercise 1
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}

// Exercise 2
function sumOdds(n) {
    sum = 0;
    for (let i = 1; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}

// Exercise 3
function arrayProcessing() {
    let len = parseInt(prompt("Enter array len: "));
    var arr = [];
    // read in an array
    for (let i = 0; i < len; i++) {
        number = parseInt(prompt("Enter number: "));
        arr.push(number);
    }
    console.log("Even Numbers:")
    var maxNum = arr[0];
    // print all numbers that is even
    for (let num of arr) {
        if (num % 2 == 0) console.log(num);
        if (num > maxNum) maxNum = num;
    }
    // print max
    console.log("Maximum: ", maxNum)
    // positive array
    var positives = [];
    for (let num of arr) {
        if (num > 0) positives.push(num);
    }
    console.log("Positive numbers:")    
    for (let num of positives) {
        console.log(num);
    }
}

console.log(isPrime(10));
console.log(sumOdds(10));
arrayProcessing();