# JavaScript objects

- [JavaScript objects](#javascript-objects)
  - [1. Object Literals](#1-object-literals)
  - [2. Spread Operator](#2-spread-operator)
  - [3. Object.assign()](#3-objectassign)
  - [4. Destructuring Objects](#4-destructuring-objects)
  - [5. Iterating over objects](#5-iterating-over-objects)
    - [The `for...in` Loop](#the-forin-loop)
    - [The `for...of` Loop](#the-forof-loop)
  - [6 Object-Oriented Programming](#6-object-oriented-programming)
    - [Class keyword](#class-keyword)
    - [a. **Inheritance**](#a-inheritance)
      - [Explanation](#explanation)
    - [b. **Method Overriding**:](#b-method-overriding)

## 1. Object Literals

- Object literals allow you to create key-value pairs within curly braces `{}`.
- ES6 introduced shorthand syntax for defining object properties.
- Example:

  ```javascript
  const person = {
    firstName: "Alice",
    lastName: "Smith",
    age: 30,
    // Shorthand property names
    greet() {
      console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    },
  };
  ```

## 2. Spread Operator

- The spread operator (`...`) allows you to merge properties from one object into another.
- Useful for creating new objects based on existing ones.
- Example:

  ```javascript
  const defaults = { theme: "light", fontSize: 16 };
  const userSettings = { fontSize: 18, showNotifications: true };

  const mergedSettings = { ...defaults, ...userSettings };
  ```

## 3. Object.assign()

- Allows combining of multiple sources into one target to create a single new object
- Also helps in duplicating existing objects
- **Syntax**

  ```js
  let Person = {
    name: "fullName",
    age: 0,
    sex: "gender",
  };
  let User = Object.assign({}, Person);

  Person.name; //Output: fullName
  User.name; //Output: fullName
  ```

## 4. Destructuring Objects

- Destructuring allows you to extract specific properties from an object into individual variables.
- It simplifies the process of accessing object properties. Here's how it works:

- **Syntax**:

  - Use curly braces `{}` to specify the properties you want to extract.
  - Assign those properties to new variables.
  - Example:

    ```javascript
    const person = {
      firstName: "Alice",
      lastName: "Smith",
      age: 30,
    };

    // Destructuring
    const { firstName, lastName } = person;

    console.log(`Full name: ${firstName} ${lastName}`);
    // Output: "Full name: Alice Smith"
    ```

- **Benefits**:
  - Cleaner code: Instead of accessing properties like `person.firstName`, you can directly use `firstName`.
  - Useful for function parameters: You can pass an object and destructure its properties within the function.

## 5. Iterating over objects

### The `for...in` Loop

**Purpose:**

- Iterates over enumerable property keys of an object.
- **Example:**

  ```javascript
  const person = { name: "Georges", age: 10 };
  for (const key in person) {
    console.log(key); // Outputs "name", "age"
  }
  ```

### The `for...of` Loop

**Purpose:**

- Iterates over values of iterable objects (e.g., arrays, strings).
- **Example:**

  ```javascript
  const numbers = [1, 2, 3];
  for (const num of numbers) {
    console.log(num); // Outputs 1, 2, 3
  }
  ```

## 6 Object-Oriented Programming

### Class keyword

ES6 introduced class syntax, which provides a more structured way to **create constructor functions** and define blueprints for creating objects. Let's dive into classes:

- **Class Definition**:

  - A class is like a **blueprint** for creating objects with shared properties and methods.
  - Use the `class` keyword to define a class.
  - Example:

    ```javascript
    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }

      bornYear() {
        console.log(`Born in ${2024 - this.age}`);
      }
    }
    ```

- **Creating Objects from Classes**:

  - Instantiate objects based on the class using the `new` keyword.
  - Example:

    ```javascript
    const Georges = new Animal("Buddy", 10);
    Georges.bornYear(); // Output: "Born in 2014."
    ```

### a. **Inheritance**

- Inheritance is a fundamental concept in object-oriented programming (OOP).
- It allows you to create a new class (subclass or child) based on an existing class (parent or superclass).
- The subclass inherits properties and methods from the superclass.
- Example:

  ```javascript
  // Remember our class Person
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    bornYear() {
      console.log(`Born in ${2024 - this.age}`);
    }
  }

  class User extends Person {
    constructor(name, age) {
      super(name); // Call the superclass constructor
      this.age = age;
    }

    yearOfBirth() {
      console.log(`${this.name} was born in ${2024 - this.age}`);
    }
  }

  const Georges = new User("Georges", 10);
  Georges.bornYear(); // Output: "Born in 2014."
  Georges.yearOfBirth(); // Output: "Georges was born in 2014"
  ```

#### Explanation

1. **Inheritance**:

   - Inheritance allows you to create a new class (subclass) based on an existing class (parent or superclass).
   - In this example, `Georges` is a subclass of `Person`.
   - The `extends` keyword establishes this relationship, indicating that `Georges` inherits from `Person`.
   - By inheriting, `Georges` gains access to the properties and methods defined in `Person`.

2. **The `super` Keyword**:

   - Inside the `Georges` constructor, we call `super(name)`.
   - This invokes the constructor of the superclass (`Person`) and passes the `name` argument.
   - It ensures that the `name` property is correctly initialized in both `Person` and `Georges`.
   - Without `super`, `Georges` would not have access to the `name` property from `Person`.

3. **The Prototype Chain ( hasOwnProperty("property") )**

   - JavaScript uses a prototype-based inheritance model.
   - Each object has an internal link to its prototype (parent object).
   - When accessing a property or method, JavaScript looks up the prototype chain.
   - Example:

   - ```javascript
     console.log(Georges.hasOwnProperty("name")); // true
     console.log(Georges.hasOwnProperty("bark")); // false (inherited from prototype)
     ```

   **Benefits of Prototypes**

   - Memory efficiency: Methods are shared among instances via prototypes.
   - Dynamic behavior: You can add or modify methods at runtime.
   - Flexibility: Easily create complex inheritance hierarchies.

### b. **Method Overriding**:

- Imagine we have a base class called `Person` with a method `greet()`. We want to create a subclass called `User` that overrides the `greet()` method to provide a customized greeting.
- Example:

  ```javascript
  class Person {
    greet() {
      console.log("Hello, I am a person!");
    }
  }

  class User extends Person {
    greet() {
      console.log("Hello, I am a user!");
    }
  }

  const user = new User();
  user.greet(); // Output: "Hello, I am a user!"
  ```

---

---

Happy coding Week!
