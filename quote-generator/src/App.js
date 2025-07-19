import React, { useState } from "react";
import "./App.css";

const quotes = [
  "Believe in yourself and all that you are.",
  "You are stronger than you think.",
  "Every day is a second chance.",
  "Start where you are. Use what you have. Do what you can.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The only way to do great work is to love what you do.",
  "Push yourself, because no one else is going to do it for you.",
  "Dream it. Wish it. Do it.",
  "Stay positive, work hard, make it happen.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Your limitation—it’s only your imagination.",
  "Great things never come from comfort zones.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Sometimes later becomes never. Do it now.",
  "Don’t wait for opportunity. Create it.",
  "Be so good they can’t ignore you.",
  "Doubt kills more dreams than failure ever will.",
  "Discipline is the bridge between goals and accomplishment.",
  "The secret of getting ahead is getting started."
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quote Generator</h1>
        <p style={{ fontStyle: "italic", margin: "20px", maxWidth: "600px" }}>{quote}</p>
        <button onClick={getRandomQuote}>New Quote</button>
      </header>
    </div>
  );
}

export default App;
