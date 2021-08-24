
var readlineSync = require("readline-sync");

const chalk = require('chalk');

var score = 0;

var userName = readlineSync.question(chalk.hex('#FFFF00').bold("What's your name?"));

var highScores = [{
    name: "Varshith",
    score: 5
}, {
    name: "Nihal",
    score: 3
}]

console.log("Welcome " + userName + " to " + chalk.red(" CRICKET QUIZ "));


function play(question, answer) {
    var userAnswer = readlineSync.question(question + "\n" + "Your answer:");

    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log(chalk.green("right"));
        score = score + 1;

    } else {
        console.log(chalk.red("wrong"));
    }
    console.log(chalk.cyan("Current score :", score));
    console.log("-------------------")

}
var questionList = [{
    question: "In what year, did India win its first worldcup ?",
    answer: "1983"
}, {
    question: "Who is called as the WALL?", answer: "Rahul Dravid"
}
    , {
    question: "Which is the other country that plays ASHES along with England?", answer: "Australia"
}, {
    question: "Who is called as Master Blaster?", answer: "Sachin Tendulkar"
}, {
    question: "Who hit the winning runs for India in the famous Gabba test match in the 2020-21 Border Gavaskar trophy?", answer: "Rishabh Pant"
}
];

for (var i = 0; i < questionList.length; i++) {
    var currentQuestion = questionList[i];
    play(currentQuestion.question, currentQuestion.answer);
}

console.log(chalk.red("YAY! Your final score is ", score));
console.log(chalk.gray("Let me know if you have beaten the top score"));
console.log(chalk.blue("*****Leader Board*****"));
for (var i = 0; i < highScores.length; i++) {
    console.log(highScores[i].name + " : " + highScores[i].score);

}

