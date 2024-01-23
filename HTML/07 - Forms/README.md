# Forms

An HTML form is used to collect user input. The user input is most often sent to a server for processing.

### The form Element

The HTML `<form>` element is used to create an HTML form for user input:

```
<form>
    .
    form elements
    .
</form>
```

The form element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.

### The input Element

The HTML input element is the most used form element.
An input element can be displayed in many ways, depending on the type attribute.

`<input type="text">` - Displays a single-line text input field <br>
`<input type="radio">` - Displays a radio button (for selecting one of many choices)<br>
`<input type="checkbox">` - Displays a checkbox (for selecting zero or more of many choices)<br>
`<input type="submit">` - Displays a submit button (for submitting the form)<br>
`<input type="button">` - Displays a clickable button<br>

### The Name Attribute for input

Notice that each input field must have a name attribute to be submitted.
If the name attribute is omitted, the value of the input field will not be sent at all.

### The Autocomplete Attribute

The autocomplete attribute specifies whether a form should have autocomplete on or off.
When autocomplete is on, the browser automatically complete values based on values that the user has entered before.

## HTML Input Types

Here are the different input types you can use in HTML:

```
<input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text">
<input type="time">
<input type="url">
<input type="week">
```

## HTML Input Attributes

### The value Attribute

The input value attribute specifies an initial value for an input field

### The disabled Attribute

The input disabled attribute specifies that an input field should be disabled.
A disabled input field is unusable and un-clickable.
The value of a disabled input field will not be sent when submitting the form!

### The placeholder Attribute

The input placeholder attribute specifies a short hint that describes the expected value of an input field (a sample value or a short description of the expected format).
The short hint is displayed in the input field before the user enters a value.
The placeholder attribute works with the following input types: text, search, url, tel, email, and password.

### The required Attribute

The input required attribute specifies that an input field must be filled out before submitting the form.
The required attribute works with the following input types: text, search, url, tel, email, password, date pickers, number, checkbox, radio, and file.

### The label Element

The label tag defines a label for many form elements.
The label element is useful for screen-reader users, because the screen-reader will read out loud the label when the user focuses on the input element.
The label element also helps users who have difficulty clicking on very small regions (such as radio buttons or checkboxes) - because when the user clicks the text within the <label> element, it toggles the radio button/checkbox.
The for attribute of the label tag should be equal to the id attribute of the input element to bind them together.
