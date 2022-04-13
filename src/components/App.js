import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

function App() {
  const pinPadNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"];

  return (
    <div className="App">
      <Header />
      <Main pinPadNumbers={pinPadNumbers} />
      <Footer />
    </div>
  );
}

export default App;
