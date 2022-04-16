const PinBox = (props) => {
  return (
    <div className="pinPadContainer__pinBox">
      {props.numbers.length < 4 && (
        <p className={props.attemp === 3 ? "collapsed" : ""}>
          {props.handlePin()}
        </p>
      )}
      {props.numbers.length === 4 && (
        <>
          <p className={props.attemp === 3 ? "collapsed" : ""}>
            {props.checkPin() ? "OK!" : "ERROR"}
          </p>
          {props.resetPinBox(props.checkPin())}
        </>
      )}
      {props.attemp === 3 && props.setErrorCount(0, 30000) && (
        <p className="pinPadContainer__pinBox--locked">LOCKED</p>
      )}
    </div>
  );
};

export default PinBox;
