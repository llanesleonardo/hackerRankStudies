/*
Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc
*/

function caesarCipher(s, k) {
 
    let valuesforNewArray = [];
    const abecedary = 'abcdefghijklmnopqrstuvwxyz';
    const abecedaryUpperCase = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    const abecedaryArray = abecedary.split('');
    let abecedaryIndexes = [];
    
    for(let i =0; i<= k-1;i++){
        let shiftedValue = null;
        shiftedValue = abecedaryArray.shift();
        abecedaryArray.push(shiftedValue);      
    }
    
   const shiftedAbecedary = abecedaryArray.join('');
   
   let cipheredArray = [];
      
       for (const char of s) {
            let indexLetter = null;
            if(char !== char.toUpperCase()){
                if(abecedary.includes(char)){
                   indexLetter = abecedary.indexOf(char);
                   abecedaryIndexes.push(indexLetter);
               }else{
                   abecedaryIndexes.push(char);
               }
            }else{
                 
                    abecedaryIndexes.push(char);
            }
           };
       
   
          for(let i = 0; i <= abecedaryIndexes.length -1;i++){
              if(Number.isInteger(abecedaryIndexes[i])){
            let letter = shiftedAbecedary.charAt(abecedaryIndexes[i]); 
            cipheredArray.push(letter);
               console.log(abecedaryIndexes[i],letter);
               }else if(abecedaryUpperCase.includes(abecedaryIndexes[i])){
                 let indexLetter = abecedaryUpperCase.indexOf(abecedaryIndexes[i]);
                 let letter = shiftedAbecedary.toUpperCase().charAt(indexLetter); 
                cipheredArray.push(letter);   
               }else{
                  cipheredArray.push(abecedaryIndexes[i]);    
               }
          }
          
          const cipheredString = cipheredArray.join('');
          console.log(cipheredString);
         return cipheredString;
        
   }