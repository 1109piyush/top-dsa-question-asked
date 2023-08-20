// Generating Fibonacci series up to n terms

const numTerms = 10;
let term1 = 0, term2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= numTerms; i++) {
    console.log(term1);
    nextTerm = term1 + term2;
    term1 = term2;
    term2 = nextTerm;
}


// Generating Fibonacci series up to a certain number

const maxNumber = 100;
let fibNum1 = 0, fibNum2 = 1, nextFibNum;

console.log('Fibonacci Series:');
console.log(fibNum1);
console.log(fibNum2);

nextFibNum = fibNum1 + fibNum2;

while (nextFibNum <= maxNumber) {
    console.log(nextFibNum);
    fibNum1 = fibNum2;
    fibNum2 = nextFibNum;
    nextFibNum = fibNum1 + fibNum2;
}
console.log('Fibonacci Series')

function fibo(n){
    if(n < 2){
        return n;
    }
    return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(10));
