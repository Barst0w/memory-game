/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-const-assign */
/* eslint-disable no-self-assign */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */

import React from 'react';
import cheeseImg from './img/cheese.png';
import spamImg from './img/spam.png';
import eggImg from './img/egg.png';
import sushiImg from './img/sushi.png';
import pizzaImg from './img/pizza.png';
import watermelonImg from './img/watermelon.png';
import beefImg from './img/beef.png';
import cakeImg from './img/cake.png';
import carrotImg from './img/carrot.png';
import fishImg from './img/fish.png';
import wineImg from './img/wine.png';
import cherryImg from './img/cherry.png';

const mixedArr = [
<img src={cheeseImg} />, 
<img src={spamImg} />, 
<img src={eggImg} />, 
<img src={sushiImg} />, 
<img src={pizzaImg} />, 
<img src={watermelonImg} />, 
<img src={beefImg} />, 
<img src={cakeImg} />, 
<img src={carrotImg} />, 
<img src={fishImg} />, 
<img src={wineImg} />, 
<img src={cherryImg} />,
];

let clickedItems = [];
function Cards(props) {
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const func1 = (e) => {
        if (clickedItems.includes(e)) { 
            clickedItems = [];
            props.resetScore(); 
        } else {
            clickedItems.push(e);
            props.handleClick(); 
            shuffleArray(mixedArr);
        } 
    };

    return (
    <div id="cardContainerParent">
      <div id="cardContainer">
        <div className="cardClass" onClick={() => func1(mixedArr[0])}>{mixedArr[0]}</div>
        <div className="cardClass" onClick={() => func1(mixedArr[1])}>{mixedArr[1]}</div>
        <div className="cardClass" onClick={() => func1(mixedArr[2])}>{mixedArr[2]}</div>
        <div className="cardClass" onClick={() => func1(mixedArr[3])}>{mixedArr[3]}</div>
        <div className="cardClass" onClick={() => func1(mixedArr[4])}>{mixedArr[4]}</div>
        <div className="cardClass" onClick={() => func1(mixedArr[5])}>{mixedArr[5]}</div>
        <div className="cardClass" onClick={() => func1(mixedArr[6])}>{mixedArr[6]}</div>
        <div className="cardClass" onClick={() => func1(mixedArr[7])}>{mixedArr[7]}</div>
        <div className="cardClass" onClick={() => func1(mixedArr[8])}>{mixedArr[8]}</div>
        <div className="cardClass" onClick={() => func1(mixedArr[9])}>{mixedArr[9]}</div>
        <div className="cardClass" onClick={() => func1(mixedArr[10])}>{mixedArr[10]}</div>
        <div className="cardClass" onClick={() => func1(mixedArr[11])}>{mixedArr[11]}</div>
      </div>
    </div>
    );
}

export default Cards;
