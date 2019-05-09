import React, { Component } from 'react';
import { NavLink as RouterLink, withRouter } from 'react-router-dom';
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import './Header.css';

class Header extends Component {
    state = {
        navLinearDisplay: 'flex',
        navHamburgerDisplay: 'none'
    }

    render() {
        return (
            <div className="header">
                <div className="header__info">
                    <h1 className="header__info__title">{this.props.title}</h1>

                    <InputGroup className="header__info__input">
                        <InputGroupAddon addonType="prepend" style={{backgroundColor: "transparent"}}>
                            <InputGroupText>To the Left!</InputGroupText>
                        </InputGroupAddon>
                        <Input  />
                    </InputGroup>
                </div>
                <div className="header__nav">
                    {this.props.content.map((link, index) => (
                        <RouterLink
                            exact to={link.path}
                            title={link.title}
                            className="header__nav__link"
                            key={index}
                        >
                            {link.title}
                        </RouterLink>
                    ))}
                </div>
            </div>
        )
    }
}

export default withRouter(Header);