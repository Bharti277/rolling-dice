import React from 'react';

function DiceComp({diceNum}) {
    // console.log("diceNum", diceNum);
  return (
        <i className={`text-8xl p-6 text-blue-600 fa-solid fa-dice-${diceNum}`}></i>
  )
}

export default DiceComp