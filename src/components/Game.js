import React, { useEffect, useState } from 'react';
import GameLogicImage from './rockpaperscissorlizardspock.png';

const Game = () => {
    const [computerSelection, setComputerSelection] = useState(null);
    const [userSelection, setUserSelection] = useState(null);
    const [finalOutput, setFinalOutput] = useState(null);
    const selection = ['🧱', '📰', '✂️', '🦎', '🖖'];

    const clickHandler = (value) => {
        setUserSelection(value);
        randomChoiceGenerator();
    };

    const randomChoiceGenerator = () => {
        const randomSelection = selection[Math.floor(Math.random() * selection.length)];
        setComputerSelection(randomSelection);
    };

    console.log(userSelection, computerSelection);

    useEffect(() => {
        switch (userSelection + computerSelection) {
            case '✂️📰':
            case '🧱✂️':
            case '📰🧱':
            case '🦎📰':
            case '🖖✂️':
            case '🧱🦎':
            case '📰🖖':
            case '🖖🧱':
            case '✂️🦎':
            case '🦎🖖':
                setFinalOutput('YOU WON! 🎉');
                break;
            case '📰✂️':
            case '✂️🧱':
            case '🧱📰':
            case '📰🦎':
            case '✂️🖖':
            case '🦎🧱':
            case '🖖📰':
            case '🧱🖖':
            case '🦎✂️':
            case '🖖🦎':
                setFinalOutput('YOU LOSE! 👎 ');
                break;
            case '🧱🧱':
            case '📰📰':
            case '✂️✂️':
            case '🦎🦎':
            case '🖖🖖':
                setFinalOutput('ITS A DRAW! 💥 ');
                break;
            default:
                setFinalOutput(
                    'Choose your selection from the 5 options below.  The computer will make a selection immediately after you make your choice.  Game logic is below.'
                );
        }
    }, [computerSelection, userSelection]); // computerSelection and userSelection are dependencies.  useEffect() only executes the callback if
    // the dependencies have changed between renderings.  After the user makes a choice the computer also makes a choice.  Either of these changes prompt the callback.

    return (
        <>
            <h1>Rock Paper Scissors Lizard Spock</h1>
            <div>
                <div className='container'>
                    <div className='section'>
                        <div className='info'>
                            <h3>You</h3>
                        </div>
                        <div className='show'>{userSelection}</div>
                    </div>

                    <div className='section'>
                        <div className='info'>
                            <h3>Computer</h3>
                        </div>
                        <div className='show computer'>{computerSelection}</div>
                    </div>
                </div>
                <br />
                <h2>{finalOutput}</h2>
                <div className='attack-btn'>
                    {selection.map((selection, index) => (
                        <button
                            key={index}
                            onClick={() => clickHandler(selection)}>
                            {selection}
                        </button>
                    ))}
                </div>
            </div>
            <br />
            <div className='container'>
                <img
                    src={GameLogicImage}
                    alt='Game Logic'
                />
            </div>
        </>
    );
};

export default Game;
