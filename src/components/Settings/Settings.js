import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Settings.css';

class Settings extends Component {
    state = {
        navLinearDisplay: 'flex',
        navHamburgerDisplay: 'none'
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    listenScrollEvent = e => {
        if (window.scrollY > 400) {
            this.setState({
                navLinearDisplay: 'none',
                navHamburgerDisplay: 'block'
            });
        } else {
            this.setState({
                navLinearDisplay: 'flex',
                navHamburgerDisplay: 'none'
            });
        }
    }

    render() {
        return (
            <div className="settings">
                This is settings.
            </div>
        )
    }
}

export default Settings;