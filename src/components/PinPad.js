//functionals
import { useState } from 'react';
//components
import ButtonNumber from '../components/ButtonNumber';
//styles
import '../styles/layout/PinPad.scss';


const PinPad = (props) => {
  const [pinBox, setPinBox] = useState([])
 

  const handleShowNumber = (value) => {
    setPinBox(value)
  }
  
  return (
    <div className="pinPadContainer">
        <form className="pinPadContainer__form" >
          <input className="pinPadContainer__pinBox"type="tel" id="pinBox" value={pinBox} disabled ></input>
          <div className="pinPadContainer__buttonsContainer">
            {props.pinPadNumbers.map((num) => {
              return <ButtonNumber  key={num} value={num} handleShowNumber={handleShowNumber}/>
            })}
          </div>
        </form>
    </div>
  );
};

export default PinPad; 
