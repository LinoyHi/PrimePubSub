import MyEvent from "../common/MyEvent.js";

class PrimeGenerator extends MyEvent{
    constructor(){
        super()
    }

    nextPrime(num){
        const next= num+1
        if(((next%2==0||next%3==0||next%5==0||next%7==0)&&(next!=2||next!=3||next!=5||next!=7))&&num!=1){
            return this.nextPrime(next)
        }
        else{
            return next
        }
    }

    startNextPrimeTill(num=1){
        let i = 1
        let count= 1
        while(i<=num){
            const next = this.nextPrime(i)
            setTimeout(()=>this.emmit('getPrimes', next),count*1000)
            i= next
            count++
        }
    }
}

export default PrimeGenerator