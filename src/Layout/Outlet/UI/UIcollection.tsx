import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import s from './UIcollection.module.css'

const UIcollection = () => {
    return (
        <div className={s.uiCollection}>
            <div className={s.uiLinks}><NavLink to={'buttons'}>Buttons</NavLink>
                <NavLink to={'inputs'}>Inputs</NavLink>
                <NavLink to={'textareas'}>TextAreas</NavLink></div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default UIcollection;