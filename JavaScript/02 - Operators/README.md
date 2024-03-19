# Operators

Operators are symbols or keywords that tell the JavaScript engine to perform some sort of actions. Here are the most common types of operators in JavaScript:

## Assignment Operators

Assignment operators assign a value to a variable. The most basic assignment operator is `=`.

```javascript
let x = 10; // assigns the value 10 to x
```

## Arithmetic Operators

Arithmetic operators are used to perform arithmetic on numbers. Here are some examples:

```javascript
let x = 10 + 5; // addition
let y = 10 - 5; // subtraction
let z = 10 * 2; // multiplication
let a = 10 / 2; // division
let b = 10 % 3; // modulus (remainder of the division)
```

## Comparison Operators

Comparison operators are used to compare two values. Here are some examples:

```javascript
let x = 10;
let y = 5;

console.log(x == y); // equal to
console.log(x != y); // not equal to
console.log(x > y); // greater than
console.log(x < y); // less than
console.log(x >= y); // greater than or equal to
console.log(x <= y); // less than or equal to
```

### Logical Operators

Logical operators are used to determine the logic between variables or values. Here are some examples:

```javascript
let x = 6;
let y = 3;

console.log(x < 10 && y > 1); // and
console.log(x == 5 || y == 5); // or
console.log(!(x == y)); // not
```

### Increment Operator (`++`)

The increment operator increases the value of a variable by 1. There are two types of increment operators:

- **Post-increment (`x++`)**: The value is incremented after processing the current statement.

```javascript
let x = 5;
console.log(x++); // Output: 5
console.log(x); // Output: 6
```

- **Pre-increment (`++x`)**: The value is incremented before processing the current statement.

```javascript
let x = 5;
console.log(++x); // Output: 6
```

### Decrement Operator (`--`)

The decrement operator decreases the value of a variable by 1. There are two types of decrement operators:

- **Post-decrement (`x--`)**: The value is decremented after processing the current statement.

```javascript
let x = 5;
console.log(x--); // Output: 5
console.log(x); // Output: 4
```

- **Pre-decrement (`--x`)**: The value is decremented before processing the current statement.

```javascript
let x = 5;
console.log(--x); // Output: 4
```
