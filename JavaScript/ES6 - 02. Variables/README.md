# Variables and Advanced Data Structures

## 1. Variables

### Basic Variables

In JavaScript, variables allow you to store and manage data. Here are some key points about basic variables:

- **`let` and `const`**:

  - Use `let` for variable declarations when you need to reassign the value.
  - Use `const` for read-only variables whose value remains constant.
  - Example:

    ```javascript
    let count = 10;
    const PI = 3.14;
    ```

### Scopes

Understanding variable scopes is crucial for writing maintainable code. Let's explore different scopes:

- **Global Scope**:

  - Variables declared outside any function or block have global scope.
  - They are accessible throughout the entire program.
  - Example:

    ```javascript
    const globalVar = "I am global!";

    function printGlobal() {
      console.log(globalVar);
    }
    ```

- **Local (Function) Scope**:

  - Variables declared inside a function have local scope.
  - They are accessible only within that function.
  - Example:

    ```javascript
    function printLocal() {
      const localVar = "I am local!";
      console.log(localVar);
    }
    ```

- **Block Scope (ES6)**:

  - Introduced by ES6 using `let` and `const`.
  - Variables declared within a block (e.g., inside an `if` statement) have block scope.
  - They are accessible only within that block.
  - Example:

    ```javascript
    if (true) {
      let blockVar = "I am in a block!";
      console.log(blockVar);
    }
    ```

## 2. Advanced Data Structures

### Symbols

Symbols are unique and immutable values used as object property keys. They are useful for creating private properties or avoiding naming collisions:

- Example:

  ```javascript
  const uniqueKey = Symbol("description");
  const obj = { [uniqueKey]: "Secret data" };
  ```

### Maps and Sets

Maps and sets provide more sophisticated ways to organize and manage data:

- **Maps**:

  - Maps are key-value pairs where keys can be any data type.
  - They are useful for efficient data retrieval.
  - Example:

    ```javascript
    const userMap = new Map();
    userMap.set("Georges", 10);
    ```

- **Sets**:

  - Sets store collections of unique values.
  - They are ideal for storing distinct elements.
  - Example:

    ```javascript
    const uniqueSet = new Set([1, 2, 3, 2]);
    ```
