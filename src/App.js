import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
