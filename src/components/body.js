import React, { useState } from "react";

const Body = (props) => {
  const [text, setText] = useState("");
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  let countChar = 0,
    countCons = 0;

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const toLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const toUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  // Function to count Vowels:

  const handleVoClick = () => {
    for (count = 0; count <= text.length; count++) {
      if (text.charAt(count).match(/[aeiouAEIOU]/)) {
        countChar++;
        setCount(countChar);
      }
    }
    for (count1 = 0; count1 <= text.length; count1++) {
      if (
        text
          .charAt(count1)
          .match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)
      ) {
        countCons++;
        setCount1(countCons);
      }
    }
  };
  const handleExtraSpaces = () => {
    let words = text.split(" ");
    let joinedWords = "";
    // console.log(words);
    words.forEach((elem) => {
      if (elem[0] != undefined) {
        joinedWords += elem + " ";
        console.log(joinedWords);
      }
    });
    setText(joinedWords);
  };

  return (
    <>
      <div
        className="container my-5 text-center"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <div className="mb-4">
          <h2>Enter the Text to Analyse</h2>
          <textarea
            className="form-control"
            value={text}
            id="box"
            rows="8"
            onChange={handleOnchange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={toLower}>
          LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={toUpper}>
          UpperCase
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
        >
          Speak
        </button>
        <button className="btn btn-primary mx-1" onClick={handleVoClick}>
          Vowel & Consonants
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          remove extraSpaces
        </button>
      </div>
      <div
        className="container text-center"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your Text has : </h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>It will Take {0.008 * text.split(" ").length} time to read</p>
        <p>
          your text has {count} vowels and {count1} consonants
        </p>
      </div>
    </>
  );
};

export default Body;
