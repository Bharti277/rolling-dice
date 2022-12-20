import React from 'react';
import "./DiceComp.css";

function DiceComp({diceNum}) {
    console.log("diceNum", diceNum);
  return (
        <i className={`dice fa-solid fa-dice-${diceNum}`}></i>
  )
}

export default DiceComp