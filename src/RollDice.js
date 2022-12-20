import React, { useState } from "react";
import DiceComp from "./DiceComp";

function RollDice() {
  const dice_num = ["one", "two", "three", "four", "five", "six"];

  const [dieTwo, setDieTwo] = useState("one");
  const [dieOne, setDieOne] = useState("two");

  const rollDice = (e) => {
    e.preventDefault();
    let dice1 = Math.floor(Math.random() * dice_num.length);
    let dice2 = Math.floor(Math.random() * dice_num.length);
    setDieOne(dice_num[dice1]);
    setDieTwo(dice_num[dice2]);
  };
  return (
    <div className="rolldice">
      <DiceComp diceNum={dieOne} />
      <DiceComp diceNum={dieTwo} />
      <button onClick={rollDice}>Roll Dice!</button>
    </div>
  );
}

export default RollDice;
