import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Settings from './components/Settings/Settings';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Switch>
                <Route exact path="/" component={() => <Settings />} />
            </Switch>
        </div>
    );
}

export default withRouter(App);
