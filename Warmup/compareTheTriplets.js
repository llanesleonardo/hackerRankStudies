/**
Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.
*/

   const array1 =  [5, 6, 7];
   const array2 =  [3, 6, 10];

const compareTriplets = (a, b) => {
    //console.log(a,b);
    /**
     * 5 6 7
     * 3 6 10
     */
    let pointa = 0;
    let pointb = 0;
    
    // Because both arrays have the same length, It can be use the same For loop for both.
    for(let i = 0; i <= a.length;i++){
     //console.log('a[i]>b[i]',a[i],b[i]);
      // console.log('a[i]< b[i]',a[i], b[i]);
        if(a[i]>b[i]){
             
            pointa = pointa + 1;
        } else if(a[i]< b[i]){
            pointb = pointb + 1;
            
        } else{
            
        }      
    }
    
    return [pointa,pointb]
    }

    console.log(compareTriplets(array1, array2));