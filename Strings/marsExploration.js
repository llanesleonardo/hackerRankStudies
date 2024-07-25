/*
A space explorer's ship crashed on Mars! They send a series of SOS messages to Earth for help.

Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, s , determine how many letters of the SOS message have been changed by radiation.
*/



function marsExploration(s) {
    // Write your code here
    console.log(s,s.length/3,'quantity of SOS messages sent from mars');
    let array = s.split('');
    let arrayDefault = s.split('').map((element,index)=>{
        if(index <= ((s.length/3)-1)) return 'SOS'
    }).filter((element)=> element === 'SOS').join('').split('');
    
    console.log(arrayDefault);
    
    let mistakes = 0;
    for(let i =0; i <= arrayDefault.length -1; i ++){
        if(arrayDefault[i] !== array[i]) mistakes++;  
    }
    
    return mistakes;

}