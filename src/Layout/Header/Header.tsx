import React from 'react';

import {NavLink} from "react-router-dom";

import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.header}>
            <h1>CustomOnes</h1>
            <h2>UI elements, snippets and Cribs</h2>
            <div className={s.header__links}>
                <NavLink to={'/ui'}>UI collection</NavLink>
                <NavLink to={'/snippets'}>Snippets</NavLink>
                <NavLink to={'/cribs'}>Cribs</NavLink>
            </div>

        </div>
    );
};

export default Header;