const ButtonNumber = (props) => {
  const handleNumber = (ev) => {
    props.handleShowNumber(ev.currentTarget.value);
  };

  return (
    <>
      <input
        className="pinPadContainer__buttonsContainer--button"
        type="button"
        value={props.value}
        onClick={handleNumber}
      />
    </>
  );
};

export default ButtonNumber;
