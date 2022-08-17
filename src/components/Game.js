import React, { useEffect, useState } from "react";

const Game = () => {
  const [instructions, setInstructionsPresence] = useState(null);
  const [computerSelection, setComputerSelection] = useState(null);
  const [userSelection, setUserSelection] = useState(null);
  const [finalOutput, setFinalOutput] = useState(null);
  const selection = ["🧱", "📰", "✂️", "🦎", "🖖"];

  const clickHandler = (value) => {
    setUserSelection(value);
    randomChoiceGenerator();
  };

  const randomChoiceGenerator = () => {
    const randomSelection = selection[Math.floor(Math.random() * selection.length)];
    setComputerSelection(randomSelection);
  };

  useEffect(() => {
    console.log('useEffect() ran');
    console.log(userSelection, computerSelection);
    {
      switch (userSelection + computerSelection) {
        case "✂️📰":
        case "🧱✂️":
        case "📰🧱":
        case "🦎📰":
        case "🖖✂️":
        case "🧱🦎":
        case "📰🖖":
        case "🖖🧱":
        case "✂️🦎":
        case "🦎🖖":
          setFinalOutput("YOU WON! 🎉");
          break;
        case "📰✂️":
        case "✂️🧱":
        case "🧱📰":
        case "📰🦎":
        case "✂️🖖":
        case "🦎🧱":
        case "🖖📰":
        case "🧱🖖":
        case "🦎✂️":
        case "🖖🦎":
          setFinalOutput("YOU LOSE! 👎 ");
          break;
        case "🧱🧱":
        case "📰📰":
        case "✂️✂️":
        case "🦎🦎":
        case "🖖🖖":
          setFinalOutput("ITS A DRAW! 💥 ");
          break;
        default:
          setFinalOutput('Choose your selection from the 5 options below.  The computer will make a selection immediately after you make your choice.')
      }
    }
  }, [computerSelection, userSelection]); // computerSelection and userSelection are decencies.  useEffect() only executes the callback if
  // the decencies have changed between renderings.

  return (
    <>
      <h1>Rock Paper Scissors Lizard Spock</h1>
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
        <br />
        <h3 className="output">{finalOutput}</h3>
        <div className="attack-btn">
          {selection.map((select, index) => (
            <button key={index} onClick={() => clickHandler(select)}>
              {select}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Game;
