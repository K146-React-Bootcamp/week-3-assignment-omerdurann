import React from "react";
import "./styles/App.css";
import DarkMode from "./components/DarkMode";

function App() {
  return (
    <div className="App">
      <nav>
        <a href="/">Home</a>
        <a href="/">Projects</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <DarkMode />
      </nav>
      <h1>React Bootcamp</h1>
      <div id="image"></div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget
        scelerisque neque, quis scelerisque erat. Quisque venenatis molestie
        sapien, dapibus viverra nulla hendrerit eget. Pellentesque egestas
        ultrices accumsan. Ut ac magna vel ex maximus ultricies. Nulla facilisi.
        Suspendisse gravida sem eu odio mattis ullamcorper. Curabitur feugiat
        ipsum vel vulputate ultricies.
      </p>
      
    </div>
  );
}

export default App;
