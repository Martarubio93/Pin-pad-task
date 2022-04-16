//functionals
import { useState } from "react";
//components
import ButtonNumber from "./ButtonNumber";
import PinBox  from "./PinBox";
//styles
import "../styles/layout/PinPad.scss";

const PinPad = (props) => {
  const [numbers, setNumbers] = useState([]);
  const correctPin = ["4", "1", "3", "1"];


  const handleShowNumber = (value) => {
    setNumbers([...numbers, value]);
  };

  const handlePin = () => {
    const newNumbers = numbers.join("");
    const hideNumbers = newNumbers.substring(0, newNumbers.length - 1);
    const lastNum = newNumbers.substr(newNumbers.length - 1);
    const hiddenNumbers = hideNumbers.replace(/./g, "*");
    return hiddenNumbers.concat(lastNum);
  };


  const resetPinBox = () => {
    setTimeout(() => setNumbers([]), 1000);
  };

 
  const checkPin = () => {
    return JSON.stringify(correctPin) === JSON.stringify(numbers);
  };


  return (
    <div className="pinPadContainer">
      <div className="pinPadContainer__structure">
        <PinBox checkPin={checkPin} resetPinBox={resetPinBox} handlePin={handlePin}  numbers={numbers}/>
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
