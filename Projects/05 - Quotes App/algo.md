1. Define a function `fetchData()`:

   - Fetch data from the "https://type.fit/api/quotes" API.
   - Parse the response as JSON.
   - Store the fetched data in the `quotes` array.
   - Call `getRandomQuote()` function.

2. Call `fetchData()` to initiate the fetching of quotes and display an initial random quote when the page loads.

3. Define a function `getRandomQuote()`:

   - Generate a random index within the range of the `quotes` array length.
   - Retrieve the quote object at the generated index and assign it to the `currentQuote` variable.
   - Call `renderQuote()` function.

4. Add event listeners to:

   - The "DOMContentLoaded" event, to trigger `fetchData()` when the DOM content is fully loaded.
   - The "click" event of the "New Quote" button, to trigger `getRandomQuote()` when the button is clicked.
   - The "click" event of the "Tweet" button, to trigger `tweetQuote()` when the button is clicked.
   - The "click" event of the "Facebook" button, to trigger `facebookQuote()` when the button is clicked.

5. Define a function `renderQuote()`:

   - Update the text content of the HTML element with the id "quote-text" to display the current quote's text.
   - Update the text content of the HTML element with the id "quote-author" to display the current quote's author (or "Anonymous" if the author is not specified).

6. Define a function `tweetQuote()`:

   - Construct a Twitter intent URL with the current quote text and author.
   - Open a new browser window with the constructed URL.
     `https://twitter.com/intent/tweet?text=${encodeURIComponent(
  '"' + currentQuote.text + '" ' + (currentQuote.author || "Anonymous")
)}`

7. Define a function `facebookQuote()`:

   - Construct a Facebook share dialog URL with the current webpage URL.
   - Open a new browser window with the constructed URL.
     `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
  window.location.href
)}`
