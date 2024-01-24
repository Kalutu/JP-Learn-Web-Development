# Forms

### The select Element

The select element defines a drop-down list
The option element defines an option that can be selected.
By default, the first item in the drop-down list is selected.
To define a pre-selected option, add the selected attribute to the option:

### The textarea Element

The textarea element defines a multi-line input field (a text area):
The rows attribute specifies the visible number of lines in a text area.
The cols attribute specifies the visible width of a text area.

### The button Element

The button element defines a clickable button:

### The fieldset and legend Elements

The fieldset element is used to group related data in a form.
The legend element defines a caption for the <fieldset> element.

## The datalist Element

The datalist element specifies a list of pre-defined options for an input element.
Users will see a drop-down list of the pre-defined options as they input data.
The list attribute of the input element, must refer to the id attribute of the datalist element.

## HTML Form Attributes

### The Action Attribute

The action attribute defines the action to be performed when the form is submitted.
Usually, the form data is sent to a file on the server when the user clicks on the submit button.

### The Method Attribute

The method attribute specifies the HTTP method to be used when submitting the form data.

The form-data can be sent as URL variables (with method="get") or as HTTP post transaction (with method="post").

The default HTTP method when submitting form data is GET.

### Notes on GET:

- Appends the form data to the URL, in name/value pairs
- NEVER use GET to send sensitive data! (the submitted form data is visible in the URL!)
- The length of a URL is limited (2048 characters)
- Useful for form submissions where a user wants to bookmark the result
- GET is good for non-secure data, like query strings in Google

### Notes on POST:

- Appends the form data inside the body of the HTTP request (the submitted form data is not shown in the URL)
- POST has no size limitations, and can be used to send large amounts of data.
- Form submissions with POST cannot be bookmarked
