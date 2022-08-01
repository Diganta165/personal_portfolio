import logo from './logo.svg';
import './App.css';
import Home from './components/HomePage/Home/Home';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Home></Home> */}
      <Routes>
        <Route path='/' element = {<Home />} />
      </Routes>
    </div>
  );
}

export default App;
