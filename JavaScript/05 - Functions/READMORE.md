# JavaScript Functions Exploration

In this document, we explore various types of functions in JavaScript. Functions are one of the fundamental building blocks in JavaScript, allowing us to encapsulate code for reuse and modularity.

## Arrow Functions

Arrow functions provide a concise syntax for writing function expressions. They are especially useful for short, single-line functions.

```javascript
const chopMeat = (meat) => `Chopped ${meat} ready for cooking`;
console.log(chopMeat("steak"));
```

## Function Expressions

Function expressions allow us to create anonymous functions or named functions and assign them to variables.

```javascript
let prepareTea = function (water, milk) {
  return `My tea is full of ${milk} and ${water}`;
};
console.log(prepareTea("water", "milk"));
```

## Immediately Invoked Function Expressions (IIFE)

IIFEs are functions that run as soon as they are defined. They are useful for creating private scopes and module patterns.

```javascript
(function () {
  console.log("My Immediately Invoked Function");
})();
```

## Closures

Closures are functions that have access to the parent scope, even after the parent function has closed. They are powerful for creating private variables and functions.

```javascript
function chopPepper(pepper) {
  return function () {
    return `${pepper} is chopped`;
  };
}
const addChillies = chopPepper("Green pepper");
console.log(addChillies());
```

## Higher Order Functions (HOF)

Higher-order functions are functions that can take other functions as arguments or return them as results. They are a key part of functional programming in JavaScript.

```javascript
const withSauce = (sauce) => (dish) => `Serving ${dish} with ${sauce}`;
console.log(withSauce("tomato sauce")("french fries"));
```

## Callback Functions

Callback functions are passed into another function as an argument and are invoked inside the outer function to complete some action.

```javascript
function bakeCake(flavor, callback) {
  console.log(`Baking a ${flavor} cake`);
  callback();
}
bakeCake("black forest", () => {
  console.log("The cake is ready");
});
```

This document serves as an introduction to the different types of functions in JavaScript. We will delve deeper into each type in our advanced JavaScript sessions.
