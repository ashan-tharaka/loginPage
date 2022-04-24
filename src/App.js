import React from "react";
import './App.css';
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import {Routes} from "react-router";
import {BrowserRouter, Route} from 'react-router-dom';
import Signup from "./components/Signup";
function App() {
  return (
    <div className="App">
        <Navbar/>

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Login/>} exact/>
                <Route path="/login" element={<Login/>} exact/>
                <Route path="/SignUp" element={<Signup/>} exact/>

            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
