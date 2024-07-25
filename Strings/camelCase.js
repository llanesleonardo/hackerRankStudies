/*
There is a sequence of words in CamelCase as a string of letters s, , having the following properties:

It is a concatenation of one or more words consisting of English letters.
All letters in the first word are lowercase.
For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
Given , determine the number of words in s.
*/



function camelcase(s) {
    // Write your code here
    let arr = s.split('');
    const regex = /[A-Z]/;
    let matchString = [];
    for(let i = 0 ; i <= arr.length -1; i ++){
     
    if(regex.test(arr[i])){
       matchString.push(i); 
    }
    //arr2.push(matchString); 
    //console.log(matchString);
    }
   
    
    
    return matchString.length + 1;

}
