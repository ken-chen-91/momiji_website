import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./Component/Navbar/Navbar";
import Home from './Pages/Home/Home.js';


function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
