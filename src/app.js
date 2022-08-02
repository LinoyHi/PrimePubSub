import mersenne from "./clients/mersenne.js";
import endsWithOne from "./clients/prime1.js";
import fourDigits from "./clients/prime4Digits.js";
import PrimeGenerator from "./publishers/PrimesGenerator.js";

const primeGenerator= new PrimeGenerator()
primeGenerator.on('getPrimes', (num)=>mersenne(num))
primeGenerator.on('getPrimes', (num)=>endsWithOne(num))
primeGenerator.on('getPrimes', (num)=>fourDigits(num))

export function run(num){
    primeGenerator.startNextPrimeTill(num)
}