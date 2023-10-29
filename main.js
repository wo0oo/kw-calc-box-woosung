#!/usr/bin/env node

const lib = require("./lib");

//error handling: Insufficient number of parameters
if (process.argv.length <= 3) {
    console.log("Insufficient parameter!");
    process.exit(1);
}

let command = process.argv[2]; //command value 



let result;
switch (command) {
    case "avg": // avg
        let avg_numbers = process.argv //get number value
            .slice(3, process.argv.length) // slicing index 1 to 3
            .map((n) => parseFloat(n)); // float

        //error handling: Non-number argument
        if (avg_numbers.some((n) => isNaN(n))) {
            console.log("Some arguments are not numbers!");
            process.exit(1);
        }
        result = lib.avg(avg_numbers);
        break;

    case "fact": // factorial
        let fact_number = process.argv[3]; // get number value

        if (fact_number > 15) {
            console.log("You can input number up to 15.");
            process.exit(1);
        }

        result = lib.fact(fact_number); //call fact
        break;

    case "prime": // prime number
        let prime_number = process.argv[3]; // get number value
        result = lib.prime(prime_number); //call prime
        break;

    default:
        console.log("Wrong command!");
        process.exit(1);
}

console.log(result);



