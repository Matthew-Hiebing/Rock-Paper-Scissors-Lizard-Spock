import React, { useState, useEffect} from 'react'

const Game = () => {
  const [computerSelection, setComputerSelection] = useState(null);
  const [userSelection, setUserSelection] = useState(null);
  const [finalOutput, setFinalOutput] = useState(null);
  const selection = ["🧱", "📰", "✂️", "🦎", "🖖"];

  const clickHandler = (value) => {
    setUserSelection(value);
    randomChoiceGenerator();
  }

  const randomChoiceGenerator = () => {
    const randomSelection = selection[Math.floor(Math.random() * selection.length)];
    setComputerSelection(randomSelection);
  }

  return (
    <>
      <h1>Rock Paper Scissors lizard Spock</h1>
      <div>
        <div className="container">
          <div className="section">
            <div className="info">
              <h3>You</h3>
            </div>
            <div className="show">{userSelection}</div>
          </div>

          <div className="section">
            <div className="info">
              <h3>Computer</h3>
            </div>
            <div className="show computer">{computerSelection}</div>
          </div>
        </div>
        <h2>Final Output</h2>

        <div className="attack-btn">
          {selection.map((select, index) => (
            <button key={index} onClick={() => clickHandler(select)}>{select}</button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Game
