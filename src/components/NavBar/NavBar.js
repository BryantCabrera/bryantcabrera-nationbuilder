import React, { Component } from 'react';
import { NavLink as RouterLink, withRouter } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import './NavBar.css';

class NavBar extends Component {
    state = {
        logoContractedDisplay: "",
        logoExpandedDisplay: "none",
        textDisplay: "none"
    }

    expand = () => {
        this.setState({
            logoContractedDisplay: "none",
            logoExpandedDisplay: "",
            textDisplay: ""
        });
    }

    contract = () => {
        this.setState({
            logoContractedDisplay: "",
            logoExpandedDisplay: "none",
            textDisplay: "none"
        });
    }


    render() {
        NavItem.propTypes = {
            // pass in custom element to use
            color: "white"
        }

        return (
            <div className="navbar"
                onMouseEnter={this.expand}
                onMouseLeave={this.contract}
            >
                <div className="navbar__logo">
                    <RouterLink exact to="/" title="Landing Page">
                        <img
                            className="navbar__logo__img"
                            src="/imgs/nav/nationbuilder-logo-contracted.png"
                            alt="NationBuilder Logo"
                            title="NationBuilder Logo"
                            style={{ display: this.state.logoContractedDisplay }}
                        >
                        </img>
                        <img
                            className="navbar__logo__img"
                            src="/imgs/nav/nationbuilder-logo-expanded.png"
                            alt="NationBuilder Logo"
                            title="NationBuilder Logo"
                            style={{ display: this.state.logoExpandedDisplay }}
                        >
                        </img>
                    </RouterLink>
                </div>
                <ul className="navbar__list nav-stacked flex-column">
                    <li className="navbar__list__item">
                        <RouterLink exact to="#dashboard" title="Dashboard" className="navbar__list__item__link">
                            <img
                            className="navbar__list__item__icon"
                            src="/imgs/nav/dashboard-icon.png"
                            alt="Dashboard Icon"
                            title="Dashboard Icon">
                            </img>
                            <span style={{display: this.state.textDisplay}}>Dashboard</span>
                        </RouterLink>
                    </li>
                    <li className="navbar__list__item">
                        
                        <RouterLink exact to="#people" title="People Page" className="navbar__list__item__link">
                            <img
                                className="navbar__list__item__icon"
                                src="/imgs/nav/people-icon.png"
                                alt="People Icon"
                                title="People Icon">
                            </img>
                            <span style={{display: this.state.textDisplay}}>People</span>
                        </RouterLink>
                    </li>
                    <li className="navbar__list__item">
                        <RouterLink exact to="#website" title="Website Page" className="navbar__list__item__link">
                            <img
                                className="navbar__list__item__icon"
                                src="/imgs/nav/website-icon.png"
                                alt="Website Icon"
                                title="Website Icon">
                            </img>
                            <span style={{display: this.state.textDisplay}}>Website</span>
                        </RouterLink>
                    </li>
                    <li className="navbar__list__item">
                        <RouterLink exact to="#communication" title="Communication Page" className="navbar__list__item__link">
                            <img
                                className="navbar__list__item__icon"
                                src="/imgs/nav/communication-icon.png"
                                alt="Communication Icon"
                                title="Communication Icon">
                            </img>
                            <span style={{display: this.state.textDisplay}}>Communication</span>
                        </RouterLink>
                    </li>
                    <li className="navbar__list__item">
                        <RouterLink exact to="#finances" title="Finances Page" className="navbar__list__item__link">
                            <img
                                className="navbar__list__item__icon"
                                src="/imgs/nav/finances-icon.png"
                                alt="Finances Icon"
                                title="Finances Icon">
                            </img>
                            <span style={{display: this.state.textDisplay}}>Finances</span>
                        </RouterLink>
                    </li>
                    <li className="navbar__list__item">
                        <RouterLink exact to="#nations" title="Nations Page" className="navbar__list__item__link">
                            <img
                                className="navbar__list__item__icon"
                                src="/imgs/nav/nations-icon.png"
                                alt="Nations Icon"
                                title="Nations Icon">
                            </img>
                            <span style={{display: this.state.textDisplay}}>Nations</span>
                        </RouterLink>
                    </li>
                    <li className="navbar__list__item">
                        <RouterLink exact to="/" title="Settings" className="navbar__list__item__link">
                            <img
                                className="navbar__list__item__icon"
                                src="/imgs/nav/settings-icon.png"
                                alt="Settings Icon"
                                title="Settings Icon">
                            </img>
                            <span style={{display: this.state.textDisplay}}>Settings</span>
                        </RouterLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default withRouter(NavBar);