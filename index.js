var readLineSync = require("readline-sync");

var userName = readLineSync.question("What is your name? ");
console.log("\nWelcome " + userName.toUpperCase() + " to TMKOC quiz \n")


var correctAnswer = "You Are Correct";
var wrongAnswer = "You Are Wrong";
var score = 0;

function play(question,answer){
  var userAnswer = readLineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()){
  console.log(correctAnswer);
  score += 1;
}else{
  console.log(wrongAnswer + "\nCorrect answer is " + answer);
  score -= 1;
}
  console.log("You score is : " + score);
  console.log("==================")
}

var questions = [{
   question : "Who does Jethalal call PANOTI as? ",
   answer : "Sundarlal"
 } ,
                  {
   question : "____ Beta Masti Nahi.. (Fill in the blanks) -> ",
   answer : "Goli"
 } ,
                 {
   question : "Who is Jethalal's Fire Brigade? ",
   answer : "Taarak Mehta"
 } ,
                 {
   question : "What is name of Bhide's Scooter ",
   answer : "Sakharam"
 } ,
                 {
   question : "When will popatlal get married? ",
   answer : "Bhagwaan Jaane..😂"
 }]

for(i=0 ; i<questions.length ; i++){
  play(questions[i].question , questions[i].answer);
}

console.log("\nYay " + userName + "!! You scored " + score + " points..")