import React, { useState, useEffect } from "react";
import { render } from "react-dom";

// Main App component
// renders a list of Messages using data from messages.json
const App = (props) => {
  const images = [
    "https://images.unsplash.com/photo-1653672665907-b4ab7ed87237?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1653647617421-ea5cf6a60a1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1653569746987-8c1c63b2ffe2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
  ];
  const [duration, setDuration] = useState(1);
  const [input, setInput] = useState(1);
  const [imageno, setImageno] = useState(0);
  var timer;
  const changeImage = (imgno) => {
    timer = setTimeout(() => {
      if (imgno < images.length - 1) {
        setImageno((prev) => prev + 1);
        changeImage(imgno + 1);
      } else {
        setImageno(0);
        changeImage(0);
      }
    }, duration * 1000);
  };

  console.log(imageno);

  useEffect(() => {
    changeImage(0);
    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  return (
    <div>
      <img src={images[imageno]} height="300" width="300" alt="images" />
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => setDuration(input)}>Change Time</button>
    </div>
  );
};

render(<App />, document.getElementById("root"));
