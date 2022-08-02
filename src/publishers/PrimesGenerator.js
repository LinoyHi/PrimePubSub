import MyEvent from "../common/MyEvent.js";

class PrimeGenerator extends MyEvent {
    constructor() {
        super()
    }

    isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++)
            if (num % i == 0) return false;
        return true;
    }

    startNextPrimeTill(num = 1) {
        let i = 0
        let count = 1
        while (i <= num) {
            let newNum = i+1
            while(!this.isPrime(newNum)){
                newNum++
            }
            const next = newNum
            setTimeout(() => this.emmit('getPrimes', next), count * 1000)
            i = next
            count++
        }
    }
}

export default PrimeGenerator