function letterFrequency(text){
    var count = {};
    text.split('').filter(function(s) {
      return s.match(/[a-z]/i); 
    }).forEach(function(s) {
      s = s.toLowerCase(); 
      count[s] = count[s] ? count[s]+1 : 1; 
    });
    return count;
   }
   
   console.log(letterFrequency('Hello there! Apple!'));