# Getting Started with JavaScript

## Topic 1: Introduction to JavaScript and Node.js

### What is JavaScript?

JavaScript is a language that helps make websites interactive. It's designed to be easier for humans to read and write, and it's used to make websites interactive, code mobile apps, or create simple games.

### Installing Node.js

Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that executes JavaScript code outside a web browser. You can install Node.js by going to [Node.js official website](https://nodejs.org/en/download/) and downloading the installer.

### Your First JavaScript Program

Here's how you can write and run your first JavaScript program:

```javascript
// Your first JavaScript code
console.log("Hooray! I can code in Javascript");
```

To run this program, save it with a `.js` extension and run `node filename.js` in your terminal.

### Comments in JavaScript

In JavaScript, you can write notes in your code that the computer ignores. These notes are called comments. There are two types of comments:

- **Single-line comments**: These are created using two forward slashes (`//`). Any text between the slashes and the end of the line will be treated as a comment.

```javascript
// This is a single-line comment
```

- **Multi-line comments**: These are created using a forward slash and an asterisk (`/*`) at the beginning, and an asterisk and a forward slash (`*/`) at the end. Any text between these symbols will be treated as a comment, even if it spans multiple lines.

```javascript
/*
This is a multi-line comment
It can span multiple lines
*/
```

### Input and Output in JavaScript

In JavaScript, you can get information from users and show them things. Here's how:

- **Input**: You can ask users for information using things like forms on a webpage.
- **Output**: You can show information to users in different ways. For example, you can write messages in the console with `console.log()`, show pop-up alerts with `alert()`, or change the content of the webpage itself.

### Console in JavaScript

The console is like a notepad for JavaScript. It's part of the window, which represents the browser window or tab the webpage is displayed in. You can use the console to write notes or messages that help you while you're writing and testing your JavaScript code. These messages are not seen by users, only by developers who open up the console in their browser.

### JavaScript in HTML

JavaScript can be included directly within HTML documents in two ways:

- **Inline scripts**: You can write JavaScript code directly in your HTML document using the `<script>` tag.

```html
<body>
  <script>
    console.log("Hooray! I can code in Javascript.");
  </script>
</body>
```

- **External scripts**: You can write your JavaScript code in a separate file and then link that file in your HTML document. This is a good practice when you have a lot of JavaScript code, as it keeps your HTML document clean and makes your JavaScript code reusable.

```html
<body>
  <script src="script.js"></script>
</body>
```

In the above example, `script.js` is a separate JavaScript file that contains your JavaScript code.

---

## Basic Foundation of Javascript

1. **Data Types**: JavaScript has different data types like `string`, `number`, `boolean`, `object`, `undefined`, and `null`.

2. **Variables**: Variables are used to store data that can be referenced and manipulated in a JavaScript program. They can hold all types of values such as numbers, strings, objects, and more.

3. **Operators**: JavaScript uses arithmetic operators (`+ - * / %`) to compute values and assignment operators (`=`) to assign values to variables.

4. **Control Structures**: Control structures like `if`, `else`, `for`, `while`, etc., control the flow of the program.

5. **Functions**: Functions are blocks of code designed to perform a particular task. They are executed when they are called (invoked).
