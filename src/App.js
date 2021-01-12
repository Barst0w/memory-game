/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/*
Your application should include a scoreboard, which counts the current score, and a “Best Score”,
which shows the best score you achieved thus far. You also need a couple of cards that display images
and possibly informational text. There should be a function that displays the cards in a random order
anytime a user clicks one. Be sure to invoke that function when the component mounts.
*/

// DONT FORGET ABOUT HOOKS, YOU'LL NEED THEM.

import React, { useEffect, useState } from 'react';

import Scoreboard from './components/Scoreboard';
import Cards from './components/Cards';

function App() {
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const handleClick = () => {
        setCurrentScore((score) => score + 1);
    };

    const setHighScoreFunction = () => {
        setHighScore(currentScore);
    };

    const resetScore = () => {
        setCurrentScore(0);
    };

    return (
    <div>
        <Scoreboard currentScore={currentScore} highScore={highScore} setHighScoreFunction={setHighScoreFunction} />
        <Cards handleClick={handleClick} resetScore={resetScore} />
    </div>
    );
}

export default App;
