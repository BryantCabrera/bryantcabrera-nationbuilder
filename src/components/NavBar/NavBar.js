import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
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
        NavItem.propTypes = {
            // pass in custom element to use
            color: "white"
        }

        return (
            <div className="navbar">
                {/* <div className="navbar__logo">
                    <NavLink exact to="/" title="Landing Page">
                        <img className="navbar__logo__img" src="/imgs/logo.png" alt="NationBuilder Logo" title="NationBuilder Logo"></img>
                    </NavLink>
                </div> */}
                {/* <nav className="navbar__nav--linear">
                    <NavLink exact to="#dashboard" title="Dashboard">Dashboard</NavLink>
                    <NavLink exact to="#people" title="People Page">People</NavLink>
                    <NavLink exact to="#website" title="Website Page">Website</NavLink>
                    <NavLink exact to="#communication" title="Communication Page">Communication</NavLink>
                    <NavLink exact to="#finances" title="Finances Page">Finances</NavLink>
                    <NavLink exact to="#nations" title="Nations Page">Nations</NavLink>
                    <NavLink exact to="#settings" title="Settings">Settings</NavLink>
                </nav> */}
                {/* <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink exact to="#dashboard" title="Dashboard">Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="#people" title="People Page">People</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="#website" title="Website Page">Website</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="#communication" title="Communication Page">Communication</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="#finances" title="Finances Page">Finances</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="#nations" title="Nations Page">Nations</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="#settings" title="Settings">Settings</NavLink>
                    </li>
                </ul> */}
                <Nav vertical className="nav" style={{ height: 1010, width: 253, backgroundColor: "#000" }}>
                    <img src="/imgs/nationbuilder-horizontal-black.png" className="nav__logo img-responsive" alt="NationBuilder Logo" title=" NationBuilder Logo"></img>
                    <NavItem>
                        <NavLink exact to="#dashboard" title="Dashboard" className="text-white">Dashboard</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="#people" title="People Page">People</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="#website" title="Website Page">Website</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="#communication" title="Communication Page">Communication</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="#finances" title="Finances Page">Finances</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="#nations" title="Nations Page">Nations</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="#settings" title="Settings">Settings</NavLink>
                    </NavItem>
                </Nav>
            </div>
        )
    }
}

export default withRouter(NavBar);