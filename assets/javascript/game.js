$( document ).ready(function() { 

var correctAnswers = 0;

var incorrectAnswers = 0;

var unanswered = 0;

var quizAnswers =["b","c","a"];

var userAnswers =[];

var timeLeft = 45;



function run() {
      setInterval(count, 1000);
    }

function count(){

timeLeft -=1;

$("#timer").text(timeLeft);

}

function checkAnswer() {

$("input[type='radio']").each(function() {
	var name = $(this).attr("name");
	if($("input:radio[name="+name+"]:checked").length == 0)
  {
    userAnswers.push("");  
  }
  else {
  	if  ($(this).is(":checked")) 
  	userAnswers.push($(this).val());
  }
});
for(i=0; i < userAnswers.length; i++) {

if (quizAnswers[i] == userAnswers[i]) {

correctAnswers++;

}

else if (userAnswers[i] == "") {

unanswered++;

}

else {

incorrectAnswers++;

}

}

$("#correct").text(correctAnswers);

unanswered = unanswered / 4;

incorrectAnswers += unanswered;

$("#unanswered").text(unanswered);

$("#incorrect").text(incorrectAnswers);

}

 $("#middle").hide();

 $("#end").hide();

$("#start").click(function() {

 $("#begin").hide();

 $("#middle").show();

 run();

 setTimeout(function(){
 
 $("#middle").hide();

 checkAnswer();

 $("#end").show();

      }, 1000 * 45);

});


$("#done").click(function() {

checkAnswer();

$("#middle").hide();

$("#end").show();

});
});
//answer check function

//on click event

//load page

//timer start/end 

//load end page

//call answer check function








