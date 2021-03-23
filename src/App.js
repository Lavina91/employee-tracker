import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Navbar from "./components/NavBar/NavBar"
import './App.css';

function App() {
  return (
    <Router>
      <>
      
      <Navbar />
      <Route exact path="/employee-tracker"component={Home} />
      <Route exact path="/home"component={Home} />
      <Route exact path="/search"component={Search} />
      
      
      
      
      
      </>






    </Router>
  )
}

export default App;
