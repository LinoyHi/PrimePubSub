import chalk from "chalk"


function endsWithOne(num){
    if(num%10==1){
        console.log(chalk.red(`${num}`))
    }
}

export default endsWithOne