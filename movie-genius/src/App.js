import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter} from "react-router-dom";
import {Router} from "./app/router/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
