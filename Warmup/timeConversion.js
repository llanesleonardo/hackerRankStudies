/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
*/

function timeConversion(s) {
    // pattern to find AM or PM words
      const regex = /(AM|PM)/;
      const matchString = s.match(regex);
      
      if(!matchString){
          return s;
      }
      // GET THE FULL TIME
          const time = s.slice(0,matchString.index);
      // GET THE AM OR PM  
          const period = s.slice(matchString.index);
          let  [hours, minutes, seconds] = time.split(':');
          
          // Convert the hours component based on AM/PM
    if (period === 'AM') {
        hours = hours === '12' ? '00' : hours.padStart(2, '0');
    } else { 
        // if PM needs to add a 0 if the hour is less than 12. 03,04,05
        hours = hours === '12' ? '12' : String(parseInt(hours) + 12).padStart(2, '0');
    }    
    
    
return `${hours}:${minutes}:${seconds}`;
}

timeConversion(new Date());