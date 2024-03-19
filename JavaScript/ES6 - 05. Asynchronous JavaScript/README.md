# Asynchronous JavaScript: Promises and Async/Await

Asynchronous programming is essential for handling time-consuming tasks such as fetching data from servers, reading files, or waiting for user input. In JavaScript, we have powerful tools to manage asynchronous operations: **Promises** and the more recent **async/await** syntax. Let's dive into these concepts!

## Contents

- [Asynchronous JavaScript: Promises and Async/Await](#asynchronous-javascript-promises-and-asyncawait)
  - [Contents](#contents)
  - [1. Promises](#1-promises)
    - [What Are Promises?](#what-are-promises)
    - [Creating a Promise](#creating-a-promise)
    - [Consuming Promises](#consuming-promises)
  - [2. Async/Await](#2-asyncawait)
    - [Introduction to async/await](#introduction-to-asyncawait)
    - [Using async/await](#using-asyncawait)
    - [Benefits of async/await](#benefits-of-asyncawait)

## 1. Promises

### What Are Promises?

- A **Promise** represents the eventual completion (or failure) of an asynchronous operation.
- It provides a way to handle the result (or error) of an asynchronous task once it's done.
- Promises are widely used for network requests, database queries, and other non-blocking operations.

### Creating a Promise

- To create a Promise, use the `new Promise()` constructor.
- A Promise takes a function (called the **executor**) with two arguments: `resolve` and `reject`.
- Example:

  ```javascript
  const fetchData = new Promise((resolve, reject) => {
    // Simulate fetching data (e.g., from an API)
    setTimeout(() => {
      const data = { name: "Georges", age: 10 };
      resolve(data); 
    }, 1000);
  });
  ```

### Consuming Promises

- Use `.then()` to handle the resolved value.
- Use `.catch()` to handle errors.
- Example:

  ```javascript
  fetchData
    .then((result) => {
      console.log("Fetched data:", result);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  ```

## 2. Async/Await

### Introduction to async/await

- The `async` and `await` keywords make it easier to work with Promises.
- They provide a more readable and synchronous-like syntax for handling asynchronous code.
- An `async` function always returns a Promise.

### Using async/await

- Declare an `async` function using the `async` keyword.
- Use `await` inside the function to pause execution until a Promise is resolved.
- Example:

  ```javascript
  async function fetchDataAsync() {
    try {
      const result = await fetchData; // Wait for the Promise to resolve
      console.log("Fetched data (async):", result);
    } catch (error) {
      console.error("Error fetching data (async):", error);
    }
  }

  fetchDataAsync();
  ```

### Benefits of async/await

- Readable code: Sequential and easy-to-follow.
- Error handling: Use `try`/`catch` for cleaner error handling.
- Avoid callback hell: No need for nested callbacks.
