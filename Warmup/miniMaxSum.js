/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
*/
const array1 = [3,2,5,8,9];

const miniMaxSum = (arr) => {

  
    const arraSum =(arr)=>{
          let sum = 0;
          let arr2 = [];
      for(let i=0;i<=arr.length -1 ;i++){
           for(let j=0;j<=arr.length -1 ;j++){
          // Key, dont sum the same number     
          if(i !== j ){
               sum = sum + arr[j];
               } 
           }   
       arr2.push(sum); 
       sum = 0;   
      }
          return arr2;
    };
    
    // Send as a parameter a sorted array
    const arraSumValues = arraSum(arr.sort((a,b) => a-b));
    // The result sort it again to be a more organic result.
    arraSumValues.sort((a,b) => a-b);
      
      console.log(arraSumValues[0],arraSumValues[arraSumValues.length-1]);
  }
  
  console.log(arraSum(array1));