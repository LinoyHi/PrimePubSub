function mersenne(num){
    const calc = Math.log2(num+1)
    calc === parseInt(calc)? console.log(`this number - ${num} is a Mersenne number`):''
}

export default mersenne