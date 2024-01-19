import mensTop from "./Components/Assets/mens_top";
import "./App.css";

function App() {
  return (
    <div className="App">
      {mensTop.map((top) => {
        const { id, name, image, price, category } = top;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <img src={image[1]} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
