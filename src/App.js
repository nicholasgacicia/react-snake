import Header from "./components/universal/Header";
import Game from "./components/game/Game";
import Footer from "./components/universal/Footer";

function App(props) {
  return (
    <div className="App">
      <Header />
      <main>
        <Game />
      </main>
      <Footer />
    </div>
  );
}

export default App;
