import '../styles/layout/SolutionEncripted.scss';

const SolutionEncripted = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const lettersAtoI = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  const lettersJtoK = ["J", "K", "L", "M", "N", "Ñ", "O", "P", "Q"];
  const lettersKtoZ = ["R", "S", "T", "U", 'V', "W", "X", "Y", "Z"];

  return (
    <div className="solutionContainer">
        <h3 className="solutionContainer__hint">
        The pin is encrypted in the DATA word
        </h3>
      <table className="table">
        <thead>
        <tr>
          {numbers.map((num) => {
            return <th key={num}className="table__th">{num}</th>;
          })}
        </tr>
        </thead>
        <tbody>
        <tr>
          {lettersAtoI.map((letter) => {
            return <td key={letter}className="table__td">{letter}</td>;
          })}
        </tr>
        <tr>
          {lettersJtoK.map((letter) => {
            return <td key={letter} className="table__td">{letter}</td>;
          })}
        </tr>
        <tr>
          {lettersKtoZ.map((letter) => {
            return <td key={letter}className="table__td">{letter}</td>;
          })}
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SolutionEncripted;
