/*
In this challenge, you will determine whether a string is funny or not. To determine whether a string is funny, create a copy of the string in reverse e.g. abcv -> cba. Iterating through each string, compare the absolute difference in the ascii values of the characters at positions 0 and 1, 1 and 2 and so on to the end. If the list of absolute differences is the same for both strings, they are funny.

Determine whether a give string is funny. If it is, return Funny, otherwise return Not Funny.
*/



function funnyString(s) {
    // Write your code here
    
    let base = s.split('');
    let copy = base.reverse();
    let result = [];
    
    const getOrdinalValue = (value) =>{
        return value.charCodeAt(0);
    }
    
     let ordinal = base.map((element,index)=>{
         return getOrdinalValue(element)
     });
     let ordinalCopy = base.map((element,index)=>{
         return getOrdinalValue(element)
     });
       
    ordinal.reverse();
    
    console.log('ordinal',ordinal,'ordinalCopy',ordinalCopy);
    
      let ordinalAbs = [];
     let ordinalCopyAbs = [];
    for(let i =0; i <= ordinal.length - 2;i++){
        
        let abso = Math.abs(ordinal[i] - ordinal[i+1]);
        let absoCopy = Math.abs(ordinalCopy[i]  - ordinalCopy[i+1]);
        ordinalAbs.push(abso);
        ordinalCopyAbs.push(absoCopy);
    }
    
    console.log('ordinalAbs',ordinalAbs,'ordinalCopyAbs',ordinalCopyAbs);
    
    return ordinalAbs.join('') === ordinalCopyAbs.join('') ? 'Funny' : 'Not Funny'
    

}