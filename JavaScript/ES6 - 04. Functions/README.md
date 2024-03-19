# Functions in JavaScript:

- [Functions in JavaScript:](#functions-in-javascript)
  - [#1 Using Default Parameters](#1-using-default-parameters)
  - [#2 Iterators and Generators](#2-iterators-and-generators)
    - [Iterators](#iterators)
    - [Generators](#generators)
  - [#3 ES6 Modules](#3-es6-modules)
    - [Introduction to Modules](#introduction-to-modules)
    - [Benefits of ES6 Modules](#benefits-of-es6-modules)
  - [#4 Built-in Methods](#4-built-in-methods)
  - [1. Number Methods](#1-number-methods)
    - [The `Number` Object](#the-number-object)
  - [2. String Methods](#2-string-methods)

## #1 Using Default Parameters

- If an argument is not provided, the default value is used.
- **Example:**

  ```javascript
  greetUser(); // Output: "Welcome, Guest!"
  greetUser("Georges"); // Output: "Welcome, Georges"
  ```

## #2 Iterators and Generators

### Iterators

- Iterators allow you to traverse through a sequence of values.
- An iterator is an object that implements the Iterator protocol.
- It has a `next()` method that returns an object with `value` and `done` properties.
- Example:

  ```javascript
  function* countNumbers() {
    let i = 0;
    while (i < 5) {
      yield i;
      i++;
    }
  }

  const numbersIterator = countNumbers();
  console.log(numbersIterator.next().value); // 0
  console.log(numbersIterator.next().value); // 1
  // ...
  ```

### Generators

- Generators are special functions that allow pausing and resuming their execution.
- They use the `function*` syntax.
- Generators yield values one at a time.
- Example:

  ```javascript
  function* fibonacci() {
    let a = 0,
      b = 1;
    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
  }

  const fib = fibonacci();
  console.log(fib.next().value); // 0
  console.log(fib.next().value); // 1
  console.log(fib.next().value); // 1
  // ...
  ```

## #3 ES6 Modules

### Introduction to Modules

- ES6 modules allow you to organize your code into separate files.
- Each file is a module, and you can export and import functionality between them.
- Example:

```javascript
// math.js
export function add(a, b) {
  return a + b;
}

// main.js
import { add } from "./math.js";
console.log(add(3, 4)); // 7
```

### Benefits of ES6 Modules

- Encapsulation: Modules keep code private within their scope.
- Reusability: Exported functions/classes can be reused across files.
- Maintainability: Clear separation of concerns.

## #4 Built-in Methods

## 1. Number Methods

### The `Number` Object

The `Number` object contains several default methods that are part of every object's definition. Let's explore some of them:

- The `Number` object provides several useful methods.
- Examples:

  - `Number.parseInt("42")` converts a string to an integer.
  - `Number.isNaN(NaN)` checks if a value is NaN.
  - `Number.toFixed(2)` formats a number with a specific number of decimal places.
  - Other examples are as follows:

  1. **`constructor()`**:

     - Returns the function that created this object's instance (by default, this is the `Number` object itself).

  2. **`toExponential()`**:

     - Forces a number to display in exponential notation, even if the number is in the range where JavaScript normally uses standard notation.
     - Example:

       ```javascript
       const num = 12345.6789;
       console.log(num.toExponential(2)); // Output: "1.23e+4"
       ```

  3. **`toFixed()`**:

     - Formats a number with a specific number of digits to the right of the decimal point.
     - Example:

       ```javascript
       const price = 19.99;
       console.log(price.toFixed(2)); // Output: "19.99"
       ```

  4. **`toLocaleString()`**:

     - Returns a string value version of the current number in a format that may vary according to a browser's locale settings.
     - Useful for displaying numbers with localized formatting (e.g., thousands separators).
     - Example:

       ```javascript
       const largeNumber = 1234567.89;
       console.log(largeNumber.toLocaleString()); // Output: "1,234,567.89" (based on locale)
       ```

  5. **`toPrecision()`**:

     - Defines how many total digits (including digits to the left and right of the decimal) to display for a number.
     - Example:

       ```javascript
       const pi = Math.PI;
       console.log(pi.toPrecision(4)); // Output: "3.142"
       ```

  6. **`toString()`**:

     - Returns the string representation of the number's value.
     - Example:

       ```javascript
       const num = 42;
       console.log(num.toString()); // Output: "42"
       ```

  7. **`valueOf()`**:

     - Returns the number's primitive value.
     - Example:

       ```javascript
       const numObj = new Number(42);
       console.log(numObj.valueOf()); // Output: 42
       ```

## 2. String Methods

- The `String` object has various methods for manipulating strings.
- Examples:

  1. **`charAt(index)`**:

     - Returns the character at the specified index.
     - Example:

       ```javascript
       const str = "Hello, World!";
       console.log(str.charAt(7)); // Output: "W"
       ```

  2. **`charCodeAt(index)`**:

     - Returns a number indicating the Unicode value of the character at the given index.
     - Example:

       ```javascript
       console.log(str.charCodeAt(0)); // Output: 72 (Unicode value for "H")
       ```

  3. **`concat(...strings)`**:

     - Combines the text of two or more strings and returns a new string.
     - Example:

       ```javascript
       const firstName = "John";
       const lastName = "Doe";
       console.log(firstName.concat(" ", lastName)); // Output: "John Doe"
       ```

  4. **`indexOf(searchValue[, fromIndex])`**:

     - Returns the index within the calling string of the first occurrence of the specified value, or -1 if not found.
     - Example:

       ```javascript
       console.log(str.indexOf("World")); // Output: 7
       ```

  5. **`lastIndexOf(searchValue[, fromIndex])`**:

     - Returns the index within the calling string of the last occurrence of the specified value, or -1 if not found.
     - Example:

       ```javascript
       console.log(str.lastIndexOf("o")); // Output: 8
       ```

  6. **`localeCompare(compareString)`**:

     - Returns a number indicating whether a reference string comes before, after, or is the same as the given string in sort order.
     - Example:

       ```javascript
       const str1 = "apple";
       const str2 = "banana";
       console.log(str1.localeCompare(str2)); // Output: -1 (str1 comes before str2)
       ```

  7. **`length`**:

     - Returns the length of the string.
     - Example:

       ```javascript
       console.log(str.length); // Output: 13
       ```

---

---

Happy Coding Week!
