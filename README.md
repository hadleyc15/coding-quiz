GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

This assignment was very hard for me.  The html and css came pretty easy.  The javascript was a different story.  I created an html document to mock the example given, with a few changes of my own.  I had thought about putting the highscores and timer in a header, but eventually decided against it mostly because i couldn't get the css to function correctly with it when I had it as a header.  So I created a <div> with its own id to house these elements.  

The most fun in this assignment was in the css.  I really enjoyed playing around with the style and trying to figure out exactly how I wanted it to go.  I created a root css property (after i remembered that was a thing), to house my two main color schemes....not gonna lie, totally forgot about it until I had already copied my primary and secondary colors throughout my entire css....oops...probably the most fun I had was in designing the buttons and having them chenge colors when you hover over them.  

The Javascript was a whole other beast.  Javascript is not something I understand very well so I ended up googling every function and everything i could think of that i needed to make it do and using what I found through my searches.  On top of that, many phone calls with friends and a family member who are already developers I was able to sort out my Javascript.  

Upon deployment, you are met with what I will call the home screen.  It has a button to view previously stored highscores, some information about the test, and a button to start the quiz.

<img src="./assets/images/Screenshot%20(13).png"/>

Once you begin the quiz, you run through a series of questions.  Every time you answer a question, correct or incorrect will appear below the answers to let you know if you got it correct or not.

https://github.com/hadleyc15/coding-quiz/issues/2#issue-623757160
https://github.com/hadleyc15/coding-quiz/issues/3#issue-623757208

After you go through the questions, or the time runs out, the quiz ends.  Upon completion you will be shown your score and be asked high to enter your initials for the highscore list.  After entering, you may view the highscores or restart the entire quiz from the beginning.

https://github.com/hadleyc15/coding-quiz/issues/4#issue-623757264

On the highscores view, you may see all of the logged high scores as well as reset the list.

https://github.com/hadleyc15/coding-quiz/issues/5#issue-623757313
https://github.com/hadleyc15/coding-quiz/issues/6#issue-623757342

Depolyed URL: https://hadleyc15.github.io/coding-quiz/

Github Repo: https://github.com/hadleyc15/coding-quiz
