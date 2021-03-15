
const {log} =console

const sum=(input)=>{                   // sum of 2 numbers
    
      let firstNumber=+input.split(',')[0]
      let secondNumber=+input.split(',')[1]
      return (firstNumber+secondNumber)    
    
}     

const multiply=(input)=>{                // multiply of 2 numbers

   
    let firstNumber=+input.split(',')[0]
    let secondNumber=+input.split(',')[1]
    return (firstNumber*secondNumber)    

}       

let fn_2=0
let fn_1=1
let fn= 1
let string1 = '' 
const fibonacci=input=>{     // first n Fibonacci sequence
    //if (n<=0) {throw new Error('please input the positive number ( minimun is 1 )')}
    let n=+input
    let temp= ''
    if (n==0) { 
          temp=string1
          string1=''
          fn_2=0
          fn_1=1
          fn= 1
          return temp.slice(1) }
    string1 = string1 + ", " + (fn_2)
    fn=fn_1+fn_2 
    fn_2= fn_1
    fn_1=fn
    return fibonacci(n-1)       
  }
  
const isPrime = (x) => {
  
    for(let i = 2; i <= x/2; i++){
      if(x % i === 0){
          return false
      }
    }
    return true
}  

const prime = input => {        //  first n pirme numbers
        //if (n<=0) {throw new Error('please input the positive number ( minimun is 1 )')}
      let n=+input
      const arr = []
      let i = 2
      while(arr.length < n){
        isPrime(i) && arr.push(i)
        i = i === 2 ? i+1 : i+2
      }
      return arr.join(', ')
 }
 
 module.exports={fibonacci,prime,sum,multiply,isPrime}