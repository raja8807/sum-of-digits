const getInput = ()=>{
    let num = parseInt(prompt("enter the number"))
    sumDigits(num)
}

getInput()

function sumDigits(num){
    let sum = 0
    while(num!=0){
        let lastDigit = num%10
        sum=sum+lastDigit
        num =(num-lastDigit)/10
    }
    console.log(sum);
    return sum
}