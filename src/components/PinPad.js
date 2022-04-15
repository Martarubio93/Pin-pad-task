//functionals
import { useState } from "react";
//components
import ButtonNumber from "../components/ButtonNumber";
//styles

import "../styles/layout/PinPad.scss";

const PinPad = (props) => {
  const [numbers, setNumbers] = useState([]);
  const correctPin = ["4", "1", "3", "1"];

  const handleShowNumber = (value) => {
    setNumbers([...numbers, value]);
  };

  const managePin = (pin) => {
    const newNumbers = pin.join("");
    const hideNumbers = newNumbers.substring(0, newNumbers.length - 1);
    const lastNum = newNumbers.substr(newNumbers.length - 1);
    const hiddenNumbers = hideNumbers.replace(/./g, "*");
    return hiddenNumbers.concat(lastNum);
  };

  const checkPin = () => {
    return JSON.stringify(correctPin) === JSON.stringify(numbers);
  };

  const showMessage = () => (checkPin() ? "OK!" : "ERROR");

  return (
    <div className="pinPadContainer">
      <div className="pinPadContainer__structure">
        <p className="pinPadContainer__pinBox">
          {numbers.length < 4 ? managePin(numbers) : ""}
          {numbers.length === 4 ? showMessage() : ""}
        </p>
        <div className="pinPadContainer__buttonsContainer">
          {props.pinPadNumbers.map((num) => {
            return (
              <ButtonNumber
                key={num}
                value={num}
                handleShowNumber={handleShowNumber}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PinPad;
