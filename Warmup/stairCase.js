/* Staircase detail
 This is a staircase of size n = 4

   #
  ##
 ###
####

Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size

*/


const staircase = (n)=> {
    // create 1D or vector array
    const arr1 = Array(n);
    
     for (let i = 0; i <= n-1; i++) {
        // Create the 2 Dimension array
        arr1[i] = Array(n);
        //looping from the last to the first array element
        for (let j = 0; j <= arr1.length -1;j++) {       

            let place = (arr1.length-1) -i;
            // print #, then print ##, then print ###
            if(place <= j){
                   arr1[i][j]='#';
                   
               }else{
                   arr1[i][j]=' ';
                
               }        
     }
     }
     // convert array to String with join, to print the shape.
  for(let i=0;i<=arr1.length-1;i++){
       console.log(arr1[i].join(''));
  }
}

staircase(4);