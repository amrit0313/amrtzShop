import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import "./App.css";
import Header from "./components/LAYOUT/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
