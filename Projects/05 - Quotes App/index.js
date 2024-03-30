// Variables
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteButton = document.getElementById("new-quote");
const tweetButton = document.getElementById("tweet-quote");
const facebookButton = document.getElementById("facebook-quote");

let quotes = [];
let currentQuote = {};

// Functions
const fetchData = async () => {
  const response = await fetch("https://type.fit/api/quotes");
  const data = await response.json();
  quotes = data;
  getRandomQoute();
};

const getRandomQoute = () => {
  const index = Math.floor(Math.random() * quotes.length);
  currentQuote = quotes[index];
  renderQuote();
};

const renderQuote = () => {
  quoteText.textContent = `"${currentQuote.text}"`;
  let author = currentQuote.author.split(",")[0];
  quoteAuthor.textContent = `~ ${author}`;
};

const tweetQuote = () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    '"' + currentQuote.text + '" ' + (currentQuote.author || "Anonymous")
  )}`;

  window.open(twitterUrl, "_blank");
};

const facebookQuote = () => {
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    window.location.href
  )}`;

  window.open(facebookUrl, "_blank");
};

// Event Listeners
newQuoteButton.addEventListener("click", getRandomQoute);
tweetButton.addEventListener("click", tweetQuote);
facebookButton.addEventListener("click", facebookQuote);

fetchData();
