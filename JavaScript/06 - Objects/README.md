# Objects in JavaScript

## Introducing Objects

In JavaScript, an **object** is a complex data structure that allows you to group related data and functions together. Think of an object as a container that can hold multiple key-value pairs. Here are some key points about objects:

- Objects consist of properties (also known as keys) and their corresponding values.
- Properties can be of any data type: strings, numbers, booleans, other objects, or even functions.
- Objects are useful for representing real-world entities, such as people, products, or events.

## Creating Your Own Objects

You can create objects using **object literal notation** or by using a **constructor function**. Let's explore both approaches:

### 1. Object Literal Notation

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// Accessing properties
console.log(person.firstName); // Output: 'John'
```

### 2. Constructor Function

```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}

const myCar = new Car("Toyota", "Camry");
console.log(myCar.make); // Output: 'Toyota'
```

## Object Initialization

When creating an object using a constructor function, you can initialize its properties during object creation. For example:

```javascript
function Book(title, author) {
  this.title = title;
  this.author = author;
}

const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald");
console.log(myBook.title); // Output: 'The Great Gatsby'
```

## Adding Methods

Objects can also have methods (functions). You can add methods like this:

```javascript
const calculator = {
  add(a, b) {
    return a + b;
  },
};

console.log(calculator.add(5, 3)); // Output: 8
```

## Built-in Objects

### 1. The Math Object

The `Math` object provides mathematical functions and constants. For example:

```javascript
console.log(Math.PI); // Output: 3.141592653589793
console.log(Math.sqrt(25)); // Output: 5
```

### 2. The Date Object

The `Date` object helps you work with dates and times. You can create a new date, get the current date, and perform various operations:

```javascript
const currentDate = new Date();
console.log(currentDate); // Output: Current date and time
```

---

---

Happy Coding Week!
