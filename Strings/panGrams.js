/*
A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.
*/


function pangrams(s) {
    // Write your code here
    const abece = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let array2= [];
    //console.log(s.split(''));
    const withOutWhiteSpaces = s.split('')
    .filter((element)=>{ return element !== ' ' });

   let sumchar ='';
 
   

const discoverLetter = (letter) =>{
     for(let j =0; j<= withOutWhiteSpaces.length-1; j++) { 
            if(letter === withOutWhiteSpaces[j].toLowerCase()){
                console.log('YES',letter,'===',withOutWhiteSpaces[j].toLowerCase());
                return letter;
            }else{
                console.log('NO',letter ,'===', withOutWhiteSpaces[j].toLowerCase());
            }
    }
}

 for(let i =0; i<= abece.length-1; i++){
     console.log('--------------------------------------');
        const letter = discoverLetter(abece[i]);
        array2.push(letter);
    };

console.log(array2.join('') );
console.log( abece.join('') );

return array2.join('') === abece.join('') ? 'pangram' : 'not pangram' ;


}