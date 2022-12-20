import React from 'react';
import "./DiceComp.css";

function DiceComp({diceNum}) {
    console.log("diceNum", diceNum);
  return (
    <div className='dice'>
        <i className={`fa-solid fa-dice-${diceNum}`}></i>
    </div>
  )
}

export default DiceComp