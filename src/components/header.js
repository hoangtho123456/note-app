import logo from '../logo.svg';
import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) => {
    return (
        <header className="header shadow-md">
            <div className="container">
                <a className="logo" href="#a">
                    <img src={logo} className="logo_img" alt="logo" />
                    <strong className="logo_title1">{title}</strong>
                </a>
            </div>
        </header>
    );
}

Header.defaultProps = {
    title: 'App Note'
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header;
