//components
import PinPad from "../components/PinPad";
import SolutionEncripted from "../components/SolutionEncripted";
//styles
import "../styles/layout/Main.scss";

const Main = () => {
  const pinPadNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"];
  return (
    <main className="main">
      <SolutionEncripted />
      <PinPad pinPadNumbers={pinPadNumbers} />
    </main>
  );
};

export default Main;
