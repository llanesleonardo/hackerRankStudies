// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.
//Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10 exp (-4) are acceptable.

const array1 = [7,3,89,3,4,5,15,-3,-12,0,4,-6,7];

const plusMinus = (arr) => {

    let positives =0;
    let negatives =0;
    let zeros =0;
    
    
    const resultsFuction = (arr) =>{
       // loop through the array and sum a unit to each variable depending on the conditional matched.
        for(let i=0; i<= arr.length -1; i++){
           if(arr[i] < 0){
            negatives = negatives + 1;   
           }else if(arr[i]> 0 ){
             positives = positives +1;  
           }else if(arr[i]=== 0){
             zeros = zeros +1; 
           }
       } 
       const newArray=[];
       //Get the ratio of positives, negatives and zeros.
       newArray.push(positives/arr.length);
       newArray.push(negatives/arr.length);
       newArray.push(zeros/arr.length);
    
       // create a new Array with ratios fixex with 6 decimal places.
      newArray.map((element) =>(console.log(element.toFixed(6))));
    }
    
    return resultsFuction(arr);
    }

    console.log(resultsFuction(array1));