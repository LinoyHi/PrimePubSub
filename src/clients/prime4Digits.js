function fourDigits(num){
    if(checkAmountDigits(num,4)){
        console.log(10000-num)
    }
}

function checkAmountDigits(num,tillDigit=4){
    if(tillDigit>1){return checkAmountDigits(Math.floor(num/10),tillDigit-1)}
    else{
        if(num>0){
            return true
        }
        else{
            return false
        }
    }
}

export default fourDigits