/*
Reduce a string of lowercase characters in range ascii[‘a’..’z’]by doing a series of operations. In each operation, select a pair of adjacent letters that match, and delete them.

Delete as many characters as possible using this method and return the resulting string. If the final string is empty, return Empty String
*/


function superReducedString(s) {
    let stack = [];
    
    for (let char of s) {
        let top = stack.length - 1;
        console.log('OUTSIDE',stack,char);
    if (stack.length > 0 && stack[top] === char) {
      //  console.log(stack.length,'>' ,0 ,'&&', stack[top] ,'===' ,char);
           console.log('STACK.LENGTH > 0',stack.length,'>' ,0 ,'&&', stack ,'===' ,char);
           stack.pop(); 
      } 
      else {
           stack.push(char); 
           console.log(stack);
       }
    }
    

    let result = stack.join('');
    
   return result === '' ? 'Empty String' : result;

}