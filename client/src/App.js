import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import PageOne from "./components/pages/PageOne";
import PageTwo from "./components/pages/PageTwo";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/page-one' exact component={PageOne} />
          <Route path='/page-two' exact component={PageTwo} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
