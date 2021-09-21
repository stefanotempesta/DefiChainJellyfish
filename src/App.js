import "./App.css";
import CreateToken from "./components/CreateToken";
import TokenListing from "./components/TokenListing";

function App() {
  return (
    <div className="App">
      <div className="container header">
        <div className="row">
          <h2>Demo-JellyFish (Test Container)</h2>
        </div>
      </div>
      <TokenListing />
      <CreateToken />
    </div>
  );
}

export default App;
