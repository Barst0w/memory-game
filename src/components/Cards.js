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

const mixedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
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
