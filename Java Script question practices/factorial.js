
// Write a program of a factorial of any number 

// let a = prompt("enter a number for Factorial : "); 

function factorial (n){

    if( n === 0 || n === 1){
        return 1 ;
    }else if( n < 0){
        return "not find for negative number"
    }else{

        return n * factorial(n-1)
    }
}
let n = 4;
const result = factorial(n)
console.log(`Factorial Of ${n} is ${result}`)


    


