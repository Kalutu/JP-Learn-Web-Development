### Initialization:

- Declare constants for HTML elements representing various parts of the UI.
- Initialize variables:
  - `taskData`: An array to store task objects.
  - `currentTask`: An object to hold the currently selected task.

### Event Listeners:

- Listen for clicks on the "Open Task Form" button to toggle the visibility of the task form.
- Listen for clicks on the "Close Task Form" button to handle closing the form with or without unsaved changes.
- Listen for clicks on the "Cancel" button in the confirmation dialog to close the dialog.
- Listen for clicks on the "Discard" button in the confirmation dialog to discard unsaved changes and close the form.
- Listen for form submissions to add or update a task.

### Function Definitions:

- `addOrUpdateTask`:
  - Set the text of the add/update button.
  - Determine the index of the current task in the `taskData` array.
  - Create a task object with values from the form inputs.
  - Add the new task to the beginning of the `taskData` array if it's a new task, otherwise update the existing task.
  - Save the updated `taskData` array to local storage.
  - Update the UI by calling `updateTaskContainer`.
  - Reset the form inputs.
- `updateTaskContainer`:

  - Clear the tasks container.
  - Iterate over the `taskData` array:
    - Create HTML elements for each task and append them to the tasks container.

- `deleteTask`:

  - Find the index of the task to be deleted in the `taskData` array.
  - Remove the task's HTML element from the UI.
  - Remove the task from the `taskData` array.
  - Save the updated `taskData` array to local storage.

- `editTask`:

  - Find the index of the task to be edited in the `taskData` array.
  - Populate the form inputs with the details of the selected task.
  - Change the text of the add/update button to indicate editing mode.
  - Show the task form.

- `reset`:
  - Clear the form inputs.
  - Hide the task form.
  - Reset the `currentTask` object.

### Initial Execution:

- Check if there is existing task data in local storage.
- If data exists, update the UI by calling `updateTaskContainer`.
