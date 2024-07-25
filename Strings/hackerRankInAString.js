/*
We say that a string contains the word hackerrank if a subsequence of its characters spell the word hackerrank. Remeber that a subsequence maintains the order of characters selected from a sequence.

More formally, p[0],p[1],...p[9], let  be the respective indices of h, a, c, k, e, r, r, a, n, k in string s. If p[0] < p[1] < ... < p[9] is true, then  contains hackerrank.

For each query, print YES on a new line if the string contains hackerrank, otherwise, print NO.
*/


function hackerrankInString(s) {
    // Write your code here
    
    let array = s.split('');
    const word = 'hackerrank'.split('');
    const staticWord = 'hackerrank';
    let stack = [];
    let string ='';
    
     console.log('------------------------------------',s);
     //console.log(word);

    for(let i =0; i<= word.length -1 ;i++){
        
            // console.log('REVIEWING', word[i]);
        for(let j = 0; j <= array.length - 1;j++){
            
           
             
             if(word[i] === array[j] ){
                 console.log('reviewing ----->'+word[i],'index ' + i,' with ', array[j],'index ' + j ,s,word.join('')); 
                let shifted = word.shift();
                console.log('word',word.join(''));
                stack.push(shifted);
                console.log('stack',stack.join(''));
               // let aLetterBefore = i === 0 ? word[i] : word[i-1];          
             }         
        }
        
    }
    
  /*  console.log(array2.join('') ,'===', word.join(''));*/
    if(stack.join('') === staticWord){
        console.log('YES');
         return 'YES';
    }else{
      console.log('NO');  
    } return 'NO';
    
   
}
