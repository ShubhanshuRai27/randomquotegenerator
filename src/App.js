import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState("");

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        var randomNumber = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNumber]);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="App">
      <div className="quote">
        <h1>{quotes.text}</h1>
        <h3>- {quotes.author}</h3>
        <button className="btn" onClick={getQuote}>
          New quote
        </button>
      </div>
      <a
        href={`https://twitter.com/intent/tweet?text=${quotes.text}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn2"
      >
        <i class="fab fa-twitter"></i> Tweet
      </a>
    </div>
  );
}

export default App;
