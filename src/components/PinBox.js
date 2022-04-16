const PinBox = (props) => {
    return(
        <div className="pinPadContainer__pinBox">
          {props.numbers.length < 4 && <p> {props.handlePin()}</p>}
          {props.numbers.length === 4 && (
            <>
              <p>{props.checkPin() ? "OK!" : "ERROR"}</p>
              {props.resetPinBox()}
            </>
          )}
        </div>
    )
}


export default PinBox