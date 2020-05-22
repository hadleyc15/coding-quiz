// Quiz Variables
var initialTime = 50;
var time = 50;
var score = 0;
var quizCount = 0;
var setTime;
var answers = document.querySelectorAll('#quizHolder button');
var clock;
var recordsArray = [];
var userScores = []

// list of all questions, choices, and answers
var questions = [
    {
        //Question 1
        Question: "What does HTML stand for?",
        choices: ["Hyper Text Makeup Language", "HyperText Markup Language", "HyperText Madeup Language", "Habanero Tacos Made Lovingly"],
        answer: "HyperText Markup Language"
    },
    {
        //Question 2
        Question: "If we want to wrap a block of text around an image, which css property will we use?",
        choices: ["wrap", "push", "float", "align"],
        answer: "float"
    },
    {
        //Question 3
        Question: "Arrays in JavaScript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        //Question 4
        Question: "What does CSS stand for?",
        choices: ["Complete Styling Sheets", "Cascading Simple Style", "Complex Style Simulator", "Cascading Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        //Questiopn 5
        Question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
    },
    {
        //Question 6
        Question: "BONUS QUESTION!! What is the best NFL team according to the person who wrote this quiz??",
        choices: ["Green Bay Packers", "Dallas Cowboys", "San Fransisco 49ers", "Arizona Cardinals"],
        answer: "Arizona Cardinals"
    },
];

var pageContentEl = function(element) {
	return document.querySelector(element);
};
//Function for timer, quiz continues if time is > 0.
var myTimer = function() {
	if (time > 0) {
		time = time - 1;
		pageContentEl('#time').innerHTML = time;
	} else {
		clearInterval(clock);
		pageContentEl('#score').innerHTML = score;
		onlyDisplaySection("#finish");
	}
};
//function so that only the things i want displayed are visible during the quiz
var onlyDisplaySection = function(element) {
	let sections = document.querySelectorAll("section");
	Array.from(sections).forEach(function(userItem) {
		userItem.classList.add('hide');
	});
	pageContentEl(element).classList.remove('hide');
};
//Function for the answer alert to be visible upon answering
var quizUpdate = function(answerCopy) {
	pageContentEl('#scoreAlert p').innerHTML = answerCopy;
	pageContentEl('#scoreAlert').classList.remove('invisible', scoreAlert());
	Array.from(answers).forEach(answer =>
	{
		answer.classList.add('disable');
    });

var quizUpdate = function(answerCopy) {
    pageContentEl('#scoreAlert p').innerHTML = answerCopy;
    pageContentEl('#scoreAlert').classList.remove('invisible', scoreAlert());
    Array.from(answers).forEach(answer =>
    {
        answer.classList.add('disable');
    });
//checks to see timer, if more time, moves on to next question
    setTimeout(function() {
        if (quizCount === questions.length) {
            onlyDisplaySection("#finish");
            time = 0;
            pageContentEl('#time').innerHTML = time;
        } else {
            setQuestionData();
            Array.from(answers).forEach(answer => {
                answer.classList.remove('disable');
            });
        }
    }, 1000);
};