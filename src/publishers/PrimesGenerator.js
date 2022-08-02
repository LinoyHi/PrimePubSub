import MyEvent from "../common/MyEvent.js";

class PrimeGenerator extends MyEvent{
    constructor(){
        super()
    }

    nextPrime(num){
        const next= num+1
        if(((next%2==0||next%3==0||next%5==0||next%7==0)&&(next!=2||next!=3||next!=5||next!=7))&&num!=1){
            return this.nextPrime(num)
        }
        else{
            return next
        }
    }

    startNextPrimeTill(num=1,){
        let i = 1
        while(i<=num){
            const next =  this.nextPrime(i)
            setTimeout(this.emmit('getPrimes', next),i*1000)
            i= next
        }
    }
}

export default PrimeGenerator