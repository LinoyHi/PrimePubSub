function mersenne(num,newnum=num-1){   
    if(newnum%2==0){
        if(newnum==2){
            console.log('this number is a Mersenne number')
        }
        else{
            mersenne(num,newnum/2)
        }
    }
}

export default mersenne