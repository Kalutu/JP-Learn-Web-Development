# Arrays in JavaScript

Arrays are fundamental data structures in JavaScript that allow you to store multiple items under a single variable name. They are like ordered lists of values. Let's explore various aspects of arrays:

## 1. Creating Arrays

You can create an array using **array literal notation**:

```javascript
let courses = ["HTML", "CSS", "JS"];
```

Arrays are indexed, and their elements can be of different types (strings, numbers, objects, etc.). They are incredibly useful for storing collections of related data. In this example, `courses` is an array containing three elements: "HTML", "CSS", and "JS".

## Properties and Methods

Arrays come with useful properties and methods:

### Properties

- `length`: Returns the number of elements in an array.
- `courses.length`: Output: 3

### Methods

- `push()`: Adds an element to the end of the array.
- `pop()`: Removes the last element from the array.

```javascript
courses.push("REACT"); // Adds "REACT" to the end
courses.pop(); // Removes the last element ("REACT")
```

## Types of Arrays

JavaScript arrays can hold values of mixed types. For example:

```javascript
let info = courses.concat(["Daniel", "Georges"]);
```

In this case, `info` contains both strings and numbers.

## Associative Arrays (Named)

In JavaScript, arrays can also be used as **associative arrays** (key-value pairs). Instead of numeric indices, you use strings as keys:

```javascript
const person = {
  name: "John",
  age: 30,
  profession: "Developer",
};

console.log(person.name); // Output: 'John'
```

Another way of creating associative arrays

```javascript
let car = [];
car["brand"] = "AUDI";
car["model"] = "GMT5";
car["price"] = 400000;
```

## Array Constructor

Apart from using square brackets, you can create arrays using the `Array` constructor:

```javascript
const numbers = new Array(1, 2, 3, 4);
console.log(numbers); // Output: [1, 2, 3, 4]
```

---

---

Happy Coding Week!
