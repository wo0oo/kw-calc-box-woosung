function avg(numbers) {
    //sum of numbers
    let s = 0;
    for (let i = 0; i < numbers.length; i++) {
        s += numbers[i];
    }
    //return avg
    return s / numbers.length;
}

function fact(number) {
    //factorial
    if (number <= 1) {
        return 1;
    }
    else {
        return number * fact(number - 1);
    }
}

function prime(number) {
    let s = true; //result value
    // prime: true
    // not prime: false
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            s = false;
        }
    }
    return s;
}


exports.avg = avg;
exports.fact = fact;
exports.prime = prime;