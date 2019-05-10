import React, { Component } from 'react';
import { NavLink as RouterLink, withRouter } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Header from '../Header/Header';
import People from './People/People';
import './Settings.css';

class Settings extends Component {
    state = {
        // because the body links are dynamic, I chose to put this array in state
        links: [
            {
                title: "People",
                status: "active"
            },
            {
                title: "Donations",
                status: ""
            }
        ],
        navLinearDisplay: 'flex',
        navHamburgerDisplay: 'none'
    }

    render() {
        // Because headerInfo is static, I chose to keep it as a const in render method
        const headerInfo = [
            {
                title: "Your account",
                path: "/settings/account",
                status: ""
            },
            {
                title: "Contact",
                path: "/settings/contact",
                status: ""
            },
            {
                title: "Defaults",
                path: "/settings/defaults",
                status: "active"
            },
            {
                title: "Political",
                path: "/settings/political",
                status: ""
            },
            {
                title: "Domains",
                path: "/settings/domains",
                status: ""
            },
            {
                title: "Payment processors",
                path: "/settings/payment",
                status: ""
            },
            {
                title: "Apps",
                path: "/settings/apps",
                status: ""
            },
            {
                title: "Developer",
                path: "/settings/developer",
                status: ""
            },
            {
                title: "Database",
                path: "/settings/database",
                status: ""
            },
            {
                title: "Privacy",
                path: "/settings/privacy",
                status: ""
            }
        ];

        return (
            <div className="settings">
                <Header title="Settings" content={headerInfo} />

                <div className="settings__body">
                    <Nav tabs className="settings__nav">
                        {/* This item is throwing a warning in console, but I assume it is because of react-strap and bootstrap as I am not using the "color" property in JSX */}
                        <NavItem>
                            <NavLink href="#" className="settings__nav__item__link">Basics</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="#" className="settings__nav__item__link" active>Custom fields</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="#" className="settings__nav__item__link">Social capital</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="#" className="settings__nav__item__link">Finance types</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="#" className="settings__nav__item__link">Dashboard</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="#" className="settings__nav__item__link">Permission sets</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="#" className="settings__nav__item__link">Unsubscribe</NavLink>
                        </NavItem>
                    </Nav>

                    <div className="settings__body__content">
                        <Nav className="settings__body__content__links">
                                {this.state.links.map((link, index) => (
                                    <RouterLink
                                        to="#"
                                        title={link.title}
                                        className="settings__body__content__links__link"
                                        isActive={() => link.status ? true : false}
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "#1498BE"
                                        }}
                                        key={index}
                                    >{link.title}</RouterLink>
                                ))}
                        </Nav>

                        <People />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Settings);