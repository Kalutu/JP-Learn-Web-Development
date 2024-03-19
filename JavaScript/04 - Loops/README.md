# JavaScript: Looping and Iteration

In programming, we often need to repeat a block of code multiple times. JavaScript provides several ways to perform this repetition, known as looping. Let's explore them:

## `for` Loop

The `for` loop is one of the most commonly used loops in JavaScript. It's used when you know how many times you want to loop through a block of code.

```javascript
for (initialExpression; condition; updateExpression) {
  // code to be executed for each iteration
}
```

- `initialExpression`: This expression is executed only once, at the beginning of the loop.
- `condition`: This is the condition for running the loop. If the condition is true, the loop will start over again; if it is false, the loop will end.
- `updateExpression`: This expression is executed after every loop iteration.

Here's an example of a `for` loop that prints the numbers 1 through 5:

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

## `while` Loop

The `while` loop creates a loop that executes a block of code as long as the specified condition is true.

```javascript
while (condition) {
  // code to be executed for each iteration
}
```

Here's an example of a `while` loop that prints the numbers 1 through 5:

```javascript
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

## `do...while` Loop

The `do...while` loop is similar to the `while` loop, but with a key difference: the loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested.

```javascript
do {
  // code to be executed for each iteration
} while (condition);
```

Here's an example of a `do...while` loop that prints the numbers 1 through 5:

```javascript
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
```

## `break` and `continue`

In JavaScript, we have two important keywords - `break` and `continue` - that we can use in loops.

- `break`: When JavaScript reaches a `break` keyword, it breaks out of the loop. This means it stops the loop's execution and moves on to the next block of code.

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
// Output: 1 2
```

In the above example, the loop stops when `i` equals `3`.

- `continue`: The `continue` statement "jumps over" one iteration in the loop. This means it skips the rest of the loop's body for the current iteration and immediately starts the next one.

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
// Output: 1 2 4 5
```

In the above example, the number `3` is skipped.

Remember, excessive use of `break` and `continue` can make your code harder to understand and maintain. It's usually a good idea to use them sparingly.
