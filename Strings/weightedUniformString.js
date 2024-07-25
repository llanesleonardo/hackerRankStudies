/*
A weighted string is a string of lowercase English letters where each letter has a weight. Character weights are 1 to 26 from a to z as shown below:

The weight of a string is the sum of the weights of its characters.

A uniform string consists of a single character repeated zero or more times. For example, ccc and a are uniform strings, but bcb and cd are not.

Given a string, s, let U be the set of weights for all possible uniform contiguous substrings of string s. There will be n queries to answer where each query consists of a single integer.
 Create a return array where for each query, the value is Yes if query[i] E U . Otherwise, append No.

Note: The E symbol denotes that x[its] is an element of set U.
*/

function weightedUniformStrings(s, queries) {
    // Write your code here
    
    const abc = 'abcdefghijklmnopqrstuvwxyz';
    const abcArray = abc.split('');
    const abcKeys = [...abcArray.keys()].map((element)=>{return  element+1});
    const sArray = s.split('');
    let array = [];
    
    
   // console.log(abcKeys);
    
    for(let i =0; i<= sArray.length -1; i++ ){
     
        for(let j =0; j<= abcArray.length -1; j++ ){
     
            if(abcArray[j] === sArray[i]){           
                console.log(abcArray[j], '===', sArray[i]);
               array.push(abcKeys[j]);
               
            }
        
        }
        
    }
    
    console.log(array);
    
    
    let sum = 0;
    let finalStack = [];
    
    for(let i =0; i<=array.length -1; i++ ){
        if(array[i] === array[i-1]){
            let lastElement = finalStack.pop();
            finalStack.push(lastElement);
            finalStack.push(lastElement+array[i]);
            
        }else{
            
            finalStack.push(array[i]);
        }
    }
    
     console.log(finalStack);
     
     
     
    let array3 = [];
   /* const methodx = (weight,finalStack) =>{
         return finalStack.includes(weight) ?  'Yes' : 'No';
    };*/
    
   for(let i =0; i<= queries.length -1; i++){
        array3.push(finalStack.includes(queries[i]) ?  'Yes' : 'No');
   }
    
return array3;
}