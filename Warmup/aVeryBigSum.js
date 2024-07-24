/*
In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.
*/

const array =  [1,2,3,4,5,6];

const aVeryBigSum = (ar) => {
   //console.log(ar);
const sumValue = new BigInt();
   // Reduce = reduce an array to one value
sumValue = ar.reduce((accumulator,currentValue)=>{
        return accumulator + currentValue
    });
   
    return sumValue;
}


console.log(aVeryBigSum(array));