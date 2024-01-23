import mensTop from "./Components/Assets/mens_top";
import mensOuterwear from "./Components/Assets/mens_outerwear";
import mensBottom from "./Components/Assets/mens_bottom";
import "./App.css";

function App() {
  return (
    <div className="App">
      {mensBottom.map((top) => {
        const { id, name, image } = top;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <img src={image[1]} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default App;
