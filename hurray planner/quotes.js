const quotes = [
    "Believe in yourself and all that you are.",
    "The best way to predict the future is to create it.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Don’t watch the clock; do what it does. Keep going."
  ];
  
  function showRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteContainer = document.getElementById('quote-container');
    quoteContainer.innerHTML = `<p>"${randomQuote}"</p>`;
  }
  
  window.onload = showRandomQuote;
  