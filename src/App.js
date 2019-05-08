import React from 'react';
import logo from './logo.svg';
import './App.css';
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

export default App;
