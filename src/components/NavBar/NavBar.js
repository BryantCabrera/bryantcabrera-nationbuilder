import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
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
            <div className="navbar">
                {/* <div className="navbar__logo">
                    <NavLink exact to="/" title="Landing Page">
                        <img className="navbar__logo__img" src="/imgs/logo.png" alt="NationBuilder Logo" title="NationBuilder Logo"></img>
                    </NavLink>
                </div> */}
                <nav className="navbar__nav--linear">
                    <NavLink exact to="#dashboard" title="Dashboard">Dashboard</NavLink>
                    <NavLink exact to="#people" title="People Page">People</NavLink>
                    <NavLink exact to="#website" title="Website Page">Website</NavLink>
                    <NavLink exact to="#communication" title="Communication Page">Communication</NavLink>
                    <NavLink exact to="#finances" title="Finances Page">Finances</NavLink>
                    <NavLink exact to="#cnations" title="Nations Page">Nations</NavLink>
                    <NavLink exact to="#settings" title="Settings">Settings</NavLink>
                </nav>
            </div>
        )
    }
}

export default NavBar;