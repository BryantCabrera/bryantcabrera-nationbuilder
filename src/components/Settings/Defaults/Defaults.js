import React, { Component } from 'react';
import { Switch, Route, NavLink, withRouter } from 'react-router-dom';
import './Defaults.css';

class Defaults extends Component {
    state = {

    }

    render() {
        return (
            <div className="defaults">
                This is defaults.
            </div>
        )
    }
}

export default withRouter(Defaults);