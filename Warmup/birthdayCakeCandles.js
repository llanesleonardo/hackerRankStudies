/*
You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
*/

const array =  [1,2,6,5,3];

const birthdayCakeCandles = (candles)  =>{
    // Write your code here
    let temp = 0;
    let newCandles = [];
    // Sort  = the best way to sort an array. a-b is used to sort arrays by ASC or DESC.
    const candlesSorted = candles.sort((a,b)=>a-b);
    
    // In this case, every element is compared with the last element or the tallest.
    newCandles = candlesSorted.filter((element,index)=>{
     if(element === candlesSorted[candlesSorted.length-1]){
         return element;
     }   
    });
    
    return newCandles.length;
}

console.log(birthdayCakeCandles(array));