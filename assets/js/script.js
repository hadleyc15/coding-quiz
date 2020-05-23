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
		Question: "What does HTML stand for?",
		choices: ["Hyper Text Makeup Language", "HyperText Markup Language", "HyperText Madeup Language", "Habanero Tacos Made Lovingly"],
		answer: "HyperText Markup Language"
	},
	{
		Question: "If we want to wrap a block of text around an image, which css property will we use?",
		choices: ["wrap", "push", "float", "align"],
		answer: "float"
	},
	{
		Question: "Arrays in JavaScript can be used to store ____.",
		choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
		answer: "all of the above"
	},
	{
		Question:"What does CSS stand for?",
		choices: ["Complete Styling Sheets", "Cascading Simple Style", "Complex Style Simulator", "Cascading Style Sheets"],
		answer: "Cascading Style Sheets"
	},
	{
		Question:"A very useful tool used during development and debugging for printing content to the debugger is:",
		choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
		answer: "console.log"
	},
	{
		Question:"BONUS QUESTION!! What is the best NFL team according to the person who wrote this quiz??",
		choices: ["Green Bay Packers", "Dallas Cowboys", "San Fransisco 49ers", "Arizona Cardinals"],
		answer: "Arizona Cardinals"
	},
];

var pageContentEl = function (element) {
	return document.querySelector(element);
};

var timer = function () {
	if (time > 0) {
		time = time - 1;
		pageContentEl('#time').innerHTML = time;
	} else {
		clearInterval(clock);
		pageContentEl('#score').innerHTML = score;
		onlyDisplaySection("#finish");
	}
};
//Only displays what I want to be seen during the quiz
var onlyDisplaySection = function (element) {
	let sections = document.querySelectorAll("section");
	Array.from(sections).forEach(function (userItem) {
		userItem.classList.add('hide');
	});
	pageContentEl(element).classList.remove('hide');
};

var quizUpdate = function (answerCopy) {
	pageContentEl('#scoreAlert p').innerHTML = answerCopy;
	pageContentEl('#scoreAlert').classList.remove('invisible', scoreAlert());
	Array.from(answers).forEach(answer => {
		answer.classList.add('disable');
	});
	//If there are questions and time left, test continues, if either run out, test is done
	setTimeout(function () {
		if (quizCount === questions.length) {
			onlyDisplaySection("#finish");
			time = 0;
			pageContentEl('#time').innerHTML = time;
		} else {
			setQuestion();
			Array.from(answers).forEach(answer => {
				answer.classList.remove('disable');
			});
		}
	}, 1000);
};
//sets the question as well as the answers associated with that question
var setQuestion = function () {
	pageContentEl('#quizHolder p').innerHTML = questions[quizCount].Question;
	pageContentEl('#quizHolder button:nth-of-type(1)').innerHTML = `1. ${questions[quizCount].choices[0]}`;
	pageContentEl('#quizHolder button:nth-of-type(2)').innerHTML = `2. ${questions[quizCount].choices[1]}`;
	pageContentEl('#quizHolder button:nth-of-type(3)').innerHTML = `3. ${questions[quizCount].choices[2]}`;
	pageContentEl('#quizHolder button:nth-of-type(4)').innerHTML = `4. ${questions[quizCount].choices[3]}`;
};

var scoreAlert = function () {
	clearTimeout(setTime);
	setTime = setTimeout(function () {
		pageContentEl('#scoreAlert').classList.add('invisible');
	}, 1000);
};

var errorAlert = function () {
	clearTimeout(setTime);
	setTime = setTimeout(function () {
		pageContentEl('#errorAlert').classList.add('invisible');
	}, 3000);
};
//Allows user to enter initals at end of quiz
var enterInitials = function () {
	let initialsRecord = pageContentEl('#initials').value;
	if (initialsRecord === '') {
		pageContentEl('#errorAlert p').innerHTML = "You must enter your initials!";
		pageContentEl('#errorAlert').classList.remove('invisible', errorAlert());
		//allows the user to imput both uppercase initials as well as lower case.
	} else if (initialsRecord.match(/[[A-Za-z]/) === null) {
		pageContentEl('#errorAlert p').innerHTML = "Please only enter letters for initials.";
		pageContentEl('#errorAlert').classList.remove('invisible', errorAlert());
	} else {
		recordsArray.push({
			"initialRecord": initialsRecord,
			"score": score
		});
		//Stores highscores in local storage
		localStorage.setItem('recordsArray', JSON.stringify(recordsArray));
		pageContentEl('#highScores div').innerHTML = '';
		onlyDisplaySection("#highScores");
		recordsReset();
		pageContentEl("#initials").value = '';
	}
};
//Gives user the ability to clear the high scores
var clearHighScores = function () {
	recordsArray = [];
	pageContentEl('#highScores div').innerHTML = "";
	localStorage.removeItem('recordsArray');
};
//Resets quiz to the beginning
var quizReset = function () {
	time = initialTime;
	score = 0;
	quizCount = 0;
	onlyDisplaySection("#intro");
};
//starts quiz
var startQuiz = function () {
	setQuestion();
	onlyDisplaySection("#quizHolder");
	clock = setInterval(timer, 1000);
};
//Allows user to see highscores list
var viewHighScores = function (highscores) {
	highscores.preventDefault();
	clearInterval(clock);
	pageContentEl('#time').innerHTML = 0;
	time = initialTime;
	score = 0;
	quizCount = 0;
	onlyDisplaySection("#highScores");
	recordsReset();
};
//if a question is answered incorrectly, this function deducts 10 seconds.  If answered correctly, it adds a point.
var scoreTimeAdjust = function () {
	if (this.innerHTML.substring(3, this.length) === questions[quizCount].answer) {
		score = score + 1;
		quizCount = quizCount + 1;
		quizUpdate("Correct");
	} else {
		time = time - 10;
		quizCount = quizCount + 1;
		quizUpdate("Incorrect");
	}
};


var recordsReset = function () {
	pageContentEl('#highScores div').innerHTML = "";
	let i = 1;
	recordsArray.sort((a, b) => b.score - a.score);
	Array.from(recordsArray).forEach(check => {
		var scores = document.createElement("div");
		scores.innerHTML = i + ". " + check.initialRecord + " - " + check.score;
		pageContentEl('#highScores div').appendChild(scores);
		i = i + 1;
	});
	i = 0;
	Array.from(answers).forEach(answer => {
		answer.classList.remove('disable');
	});
};


(localStorage.getItem('recordsArray')) ? recordsArray = JSON.parse(localStorage.getItem('recordsArray')) : recordsArray = [];


Array.from(answers).forEach(check => { check.addEventListener('click', scoreTimeAdjust); });

// Event Listeners 

pageContentEl("#intro button").addEventListener("click", startQuiz);
pageContentEl("#records button").addEventListener("click", enterInitials);
pageContentEl("#clearScores").addEventListener("click", clearHighScores);
pageContentEl("#reset").addEventListener("click", quizReset);
pageContentEl("#scores").addEventListener("click", viewHighScores);
