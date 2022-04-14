//functionals
import { useState } from "react";
//components
import ButtonNumber from "../components/ButtonNumber";
//styles
import "../styles/layout/PinPad.scss";

const PinPad = (props) => {
  const [numbers, setNumbers] = useState([]);
  const correctPin = [4, 1, 3, 1];

  const handleShowNumber = (value) => {
    setNumbers([...numbers, value]);
  };

  const managePin = (pin) => {
    const removeCommas = pin.join("");
    const hideNumbers = removeCommas.substring(0, removeCommas.length - 1);
    const lastNum = removeCommas.substr(removeCommas.length - 1);
    const hiddenNumbers = hideNumbers.replace(/./g, "*");
    return hiddenNumbers.concat(lastNum);
  };

  const showCorrectMessage = (pinChecked) => (pinChecked === correctPin ? "OK!" : "ERROR");

  /*const checkPin = (pin, digits) =>
    JSON.stringify(pin) === JSON.stringify(digits);
  */


console.log(JSON.stringify(numbers) === JSON.stringify(correctPin))
  return (
    <div className="pinPadContainer">
      <div className="pinPadContainer__structure">
        <p className="pinPadContainer__pinBox">
      {numbers && numbers.length < 4 && (
        <>
          {managePin(numbers)}
          </>
        )}
        {numbers && numbers.length === 4 && (
          <>
           {showCorrectMessage(numbers)}
          </>
        )} </p>
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
