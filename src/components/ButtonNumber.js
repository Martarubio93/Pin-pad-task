import { useState } from "react";

const ButtonNumber = (props) => {
  const [number, setNumber] = useState('')

  const handleNumber = (ev) => {
    setNumber(ev.currentTarget.value)
    props.handleShowNumber(number)
  }

 
  return (
    <>
      <input className="pinPadContainer__buttonsContainer--button" type="button" value={props.value} onClick={handleNumber}/>
    </>
  );
};

export default ButtonNumber;
