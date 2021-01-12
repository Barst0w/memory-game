/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

function Scoreboard(props) {
    useEffect(() => {
        if (props.currentScore > props.highScore) props.setHighScoreFunction();
    }, [props.currentScore]);
    return (
  <div id="scoreboard">
    <p id="title">Memory Game</p>
    <div id="score">
      <div id="currentScore">Current Score: {props.currentScore}</div>
      <div id="highScore">High Score: {props.highScore}</div>
    </div>
  </div>
    );
}

export default Scoreboard;
