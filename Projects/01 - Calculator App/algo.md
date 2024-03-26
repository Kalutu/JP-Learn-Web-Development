1. **Event Listeners**:

   - Attach event listeners to all calculator buttons.
   - When a button is clicked:
     - Retrieve the symbol associated with the clicked button.
     - Check which button was clicked:
       - If "=" is clicked, call the `calculate` function.
       - If "AC" is clicked, call the `allClear` function.
       - If "C" is clicked, call the `clear` function.
       - For other buttons, call the `display` function with the clicked symbol.

2. **Initialization**:

   - Create variables `expression` and `answer` and set them to initial values.
   - Get references to the HTML elements for displaying the expression and answer.

3. **Display Function**:

   - Accept a symbol as input.
   - Append the symbol to the `expression` variable.
   - Update the display of the `expression` variable in the input field.

4. **Calculate Function**:

   - Evaluate the expression using the JavaScript `eval` function.
   - Update the answer display with the result.
   - Append "=" to the expression.
   - Clear the expression for further calculations.

5. **AllClear Function**:

   - Reset both `expression` and `answer` variables to initial values.
   - Clear the display of both expression and answer.

6. **Clear Function**:
   - Remove the last character from the `expression`.
   - Update the display of the expression.
   - Reset the answer display.
