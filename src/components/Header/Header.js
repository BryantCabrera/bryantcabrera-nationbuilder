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

                    <div className="header__info__container">
                        <InputGroup className="header__info__input">
                            <InputGroupAddon
                                addonType="prepend"
                                className="header__info__input__icon"
                            >
                                <InputGroupText>
                                    <div className="s-circle"></div>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input className="header__info__input__input" placeholder="Search people" />
                        </InputGroup>

                        <img
                            className="header__info__avatar"
                            src="/imgs/header/avatar.png"
                            alt="Avatar"
                            title="Avatar">
                        </img>
                    </div>
                </div>
                <div className="header__nav">
                    {this.props.content.map((link, index) => (
                        <RouterLink
                            exact to={link.path}
                            title={link.title}
                            isActive={() => link.status ? true : false}
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#1498BE"
                            }}
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