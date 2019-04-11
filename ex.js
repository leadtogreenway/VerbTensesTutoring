// Exercise functions

/*
  var submitAnswer = function() {

  var radios = document.getElementsByName('choice');
  var val= "";
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value; 
         break;
       }
  }
  
  if (val == "" ) {
    alert('please select choice answer');
  } else if ( val == "ate" ) {
    alert('Answer is correct !');
  } else {
    alert('Answer is wrong');
  }
}
*/

var submitAnswer = function(valore, rightanswer) {
if (valore == rightanswer) {
    alert("Your answer is correct");
}
else{
    alert("Your answer is wrong!");
}
};
    
   // Next Question was clicked -- must be after answering correct
   function next()
   {
       if (nextFlag == 1) // after answering correct
        { 
          nextFlag = 0; 
          clearIt(); 
          if  (n==1){
          giveQuestion1(); 
          }
          else if (n==2){
          giveQuestion2();
          }
          else if (n==3){
          giveQuestion3();
          }
        }
   }


// The following are for EX2 and EX3 - you can have their own checkAnswer
// and Hint functions

  function giveQuestion2()
  {
      var canvas = document.getElementById("para1");
      var context = canvas.getContext("2d");

      context.fillStyle = "black";
      context.font = "bold 16px Arial";
      
      var total = Math.floor(Math.random()*1000) ;
      var percentage = Math.random();
      percentage = percentage.toFixed(2);
      //alert(percentage);
      answer = (percentage/100)*total;
      answer = answer.toFixed(2);
      n = 2; 
      context.fillText("what is "+percentage+" % of "+total+" ?", 10,12);

      // check answer if Submit is clicked
      $("#submitButton1").click ( function() {
               checkAnswer( 
                   document.getElementById('pa').value);
              });   
  }   

  /* This is to clear and give question 2 
  function next2()
   {
       if (nextFlag == 1) // after answering correct
       { nextFlag = 0; clearIt(); giveQuestion2(); }
   }
  */

  function giveQuestion3()
  {
      var canvas = document.getElementById("para1");
      var context = canvas.getContext("2d");

      context.fillStyle = "black";
      context.font = "bold 16px Arial";
      
      var total = Math.floor(Math.random()*1000) ;
      var amount = Math.random()*100;
      amount = amount.toFixed(2);
      //alert(percentage);
      answer = (amount/total)*100;
      answer = answer.toFixed(2);
      n = 3; 
      context.fillText("what is the percentage of "+amount+" out of "+total+" ?", 10,12);

      // check answer if Submit is clicked
      $("#submitButton1").click ( function() {
               checkAnswer( 
                   document.getElementById('pa').value);
              });   
  }   

