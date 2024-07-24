// Given an array of integers, find the sum of its elements.
const array1 = [5,3,2,7,1];
const simpleArraySum = (ar) =>{
    // Write your code here
    let sumAr = ar.reduce((accumulator,currentValue) =>{
       return  accumulator + currentValue
    })
    
    return sumAr;
}

console.log(simpleArraySum(array1) );