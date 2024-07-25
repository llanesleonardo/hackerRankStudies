/*
Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and a password. However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:

Its length is at least .
It contains at least one digit.
It contains at least one lowercase English character.
It contains at least one uppercase English character.
It contains at least one special character. The special characters are: !@#$%^&*()-+
She typed a random string of length  in the password field but wasn't sure if it was strong. Given the string she typed, can you find the minimum number of characters she must add to make her password strong?

Note: Here's the set of types of characters in a form you can paste in your solution:

numbers = "0123456789"
lower_case = "abcdefghijklmnopqrstuvwxyz"
upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
special_characters = "!@#$%^&*()-+"
*/



function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let length = 0;
    const minLength = 6;
    const numbers = /[0-9]/;
    const lower_case = /[a-z]/;
    const upper_case = /[A-Z]/;
    const special_characters = /[!@#$%^&*()\-+]/;
 


      if(!lower_case.test(password)){
         length++;
      }
      
      if(!upper_case.test(password)){
          length++;
      }
      
      if(!special_characters.test(password)){
          length++;
      }
      
      if(!numbers.test(password)){
          length++;
      }
     
     const neededLength = Math.max(0,minLength - n);
     
     console.log('Math.max(',neededLength,length,')');
    return Math.max(neededLength,length);

  
}