//Given a square matrix, calculate the absolute difference between the sums of its diagonals.

/**
 *  -###
 *  #-##
 *  ##-#
 *  ###-
 * 
 */

let myArray = [
    [0, 1, 2, 3], 
    [4, 5, 6, 7],
    [8, 9, 0, 0]
    ];


const diagonalDifference = (arr) => {
 
    const btoE = (arr)=>{
          let sum = 0;
          console.log(arr);
      for(let i=0;i <= arr.length-1; i++){
       for(let j=0;j <= arr[i].length-1; j++){
        // This is the key to solve the problem.  
        if(j===i){
             sum =sum + arr[i][j];  
           }
           
       }
      }
      return [sum];
    }
    
    const etoB = (arr)=>{
       const arrR = arr.reverse();
       console.log(arrR);
          let sum = 0;
      for(let i=0;i <= arrR.length-1; i++){
       for(let j=0;j <= arrR[i].length-1; j++){
                // This is the key to solve the problem.    
        if(j===i){
             sum =sum + arr[i][j];  
           }
           
       }
      }
      return [sum];
    };
    
   const btoEValue = btoE(arr);
   const etoBValue = etoB(arr);
   const result = btoEValue - etoBValue;
    
    
    return Math.abs(result);
   }

   console.log(diagonalDifference(myArray));