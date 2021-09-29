import React, { useState } from "react";
import "./styles.css";

var ZodiacemojiDictionary = {
  "♈": "Aries",
  "♉": "Taurus",
  "♊": "Gemini",
  "♋": "Cancer",
  "♌": "Leo",
  "♍": "Virgo",
  "♎": "Libra",
  "♏": "Scorpio",
  "♑": "Capricorn",
  "♒": "Aquarius",
  "♓": "Pisces",
  "⛎": "Ophiuchus"
};

var ZodiacemojiisWeKnow = Object.keys(ZodiacemojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function ZodiacemojiInputHandler(event) {
    // processing
    var userInput = event.target.value;

    var meaning = ZodiacemojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning); // react call to show output
  }

  function ZodiacemojiClickHandler(emoji) {
    // processing
    var meaning = ZodiacemojiDictionary[emoji];
    setMeaning(meaning); // react call to show output
  }
  return (
    <div className="App">
      <h1>Zodiac Emoji!</h1>

      <input onChange={ZodiacemojiInputHandler} />

      <h2> {meaning} </h2>
      {/* Actual output set by React using useState */}

      <h3> Zodiac we know </h3>
      {ZodiacemojiisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => ZodiacemojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
