import React, { Component } from 'react';
import { NavLink as RouterLink, withRouter } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    state = {
        navLinearDisplay: 'flex',
        navHamburgerDisplay: 'none'
    }

    render() {
        return (
            <div className="header">
                {this.props.title}

                <ul>
                    {this.props.content.map(link => (
                        <li>
                            <RouterLink exact to={link.path} title={link.title} className="navbar__list__item__link">
                                {link.title}
                            </RouterLink>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Header;