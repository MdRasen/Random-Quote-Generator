// Generate quote
const generateQuote = () => {
  // Data fetch url
  let url = "https://type.fit/api/quotes";
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      // Generate random number
      let randNumber = Math.floor(Math.random() * 16 + 1);
      //   Get random quote
      let randomQuote = data[randNumber];
      // Set quote text
      document.getElementById("quote-text").innerHTML = `${
        randomQuote.text ? randomQuote.text : ""
      } `;
      // Set author name
      document.getElementById("author").innerHTML = `- ${
        randomQuote.author ? randomQuote.author : ""
      } `;
    });
};

// Copy quote
const copyQuote = () => {
  // get quote text
  let quoteText = document.getElementById("quote-text").innerHTML;
  navigator.clipboard.writeText(quoteText);
};
