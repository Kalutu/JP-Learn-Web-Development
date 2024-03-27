1. **Define the Quiz Data**: Create an array `questions` containing objects, where each object represents a question with its choices and correct answer.

2. **Start Quiz Function (`startQuiz`)**: Resets variables, sets up the next button text, and calls `showQuestion`.
3. **Show Question Function (`showQuestion`)**: Displays the current question and its choices. For each choice, create a button, add it to the answer buttons container, set its text, add event listener for click, and if it's a correct answer, set a dataset attribute.
4. **Reset State Function (`resetState`)**: Hides the next button and removes all answer buttons.
5. **Select Choice Function (`selectChoice`)**: Checks if the selected choice is correct, updates score if correct, highlights correct/incorrect choices, disables all buttons, and shows the next button.
6. **Handle Next Button Function (`handleNextButton`)**: Increments the current question index, checks if there are more questions to show, if yes, calls `showQuestion`, if no, calls `showScore`.
7. **Show Score Function (`showScore`)**: Displays the final score and offers to play again.
