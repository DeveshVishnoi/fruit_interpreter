/** @format */
import { useState } from "react";
import "./index.css";

const fruitdict = {
  "": "",
  "🥝": "Kiwi",
  "🥥": "Coconut",
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Orange",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍒": "Cherries",
  "🍓": "Strawberry",
};

var fruitarr = Object.keys(fruitdict);
console.log(fruitarr);

export function Main() {
  const [meaning, updatemeaning] = useState("");

  function inputhandler(e) {
    var inputvalue = e.target.value;
    var meaning = fruitdict[inputvalue];
    if (meaning === undefined) {
      meaning = "Unknown Fruit";
    }
    updatemeaning(meaning);
  }

  function emojiselect(value) {
    updatemeaning(fruitdict[value]);
  }

  return (
    <>
      <div className="main">
        <h1 className="title">Fruit Emoji Interpreter</h1>
        <div className="input">
          <input
            className="input-text"
            onChange={inputhandler}
            placeholder="Select Fruit Emoji from below"
          />
        </div>
        <div>
          <h2 className="emoji-meaning">{meaning}</h2>
        </div>
        <h2 className="input">Fruit We know</h2>
        <hr />
        <div className="emoji">
          {fruitarr.map((fruit) => {
            return (
              fruit !== "" && (
                <div>
                  <li className="ayiemoji" onClick={() => emojiselect(fruit)}>
                    {fruit}
                  </li>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}
