/*
A numeric string, s , is beautiful if it can be split into a sequence of two or more positive integers, a[1],a[2],...,a[n] satisfying the following conditions:

a[i] - a[i-1] = 1 for any 1 < i <= n (i.e., each element in the sequence is  more than the previous element).
No a[i] contains a leading zero. For example, we can split s=10203 into the sequence {1,02,03}, but it is not beautiful because 02 and 03 have leading zeroes.
The contents of the sequence cannot be rearranged. For example, we can split s=312 into the sequence {3,1,2}, but it is not beautiful because it breaks our first constraint (i.e., 1 - 3 not equal 1).


Perform q queries where each query consists of some integer string s. For each query, print whether or not the string is beautiful on a new line. If it is beautiful, print YES x, where  is the first number of the increasing sequence. If there are multiple such values of , choose the smallest. Otherwise, print NO.

*/


function separateNumbers(s) {
    if(s.length === 1){
        console.log('NO');
    }else{

    let n = s.length;
    let i =1;
    while( i <= Math.floor(n/2)){
        
     const newString = s.substring(0,i);
     let next = BigInt(newString);
     let built= '';
     while(built.length < s.length){
        // console.log('BEFORE ',built,next);
         built += next++;
        // console.log('AFTER ',built,next++);
     }
     //console.log(built, '===' ,s);
       if(built === s){
          console.log('YES ' + newString);
           return;
       }
      i++;
    }
        console.log('NO');
    }
}