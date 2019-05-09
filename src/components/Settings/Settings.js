import React, { Component } from 'react';
import { Switch, Route, NavLink, withRouter } from 'react-router-dom';
import Header from '../Header/Header';
import Defaults from './Defaults/Defaults';
import './Settings.css';

class Settings extends Component {
    state = {
        navLinearDisplay: 'flex',
        navHamburgerDisplay: 'none'
    }

    render() {
        const headerInfo = [
            {
                title: "Your account",
                path: "/settings/account"
            },
            {
                title: "Contact",
                path: "/settings/contact"
            },
            {
                title: "Defaults",
                path: "/settings/defaults"
            },
            {
                title: "Political",
                path: "/settings/political"
            },
            {
                title: "Domains",
                path: "/settings/domains"
            },
            {
                title: "Payment Processors",
                path: "/settings/payment"
            },
            {
                title: "Apps",
                path: "/settings/apps"
            },
            {
                title: "Developer",
                path: "/settings/developer"
            },
            {
                title: "Database",
                path: "/settings/database"
            },
            {
                title: "Privacy",
                path: "/settings/privacy"
            }
        ];

        return (
            <div className="settings">
                <Header title="Settings" content={headerInfo} />
                This is settings.
                <Switch>
                    <Route exact path="/settings/defaults" component={() => <Defaults />} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(Settings);