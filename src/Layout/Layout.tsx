import React from 'react';
import s from './Layout.module.css'
import {Outlet} from "react-router-dom";
import Header from "./Header/Header";

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;