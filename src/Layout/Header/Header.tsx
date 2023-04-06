import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>CustomOnes</h1>
            <h2>UI elements and snippets</h2>
            <div>
                <NavLink to={'/buttons'}/>
            </div>

        </div>
    );
};

export default Header;