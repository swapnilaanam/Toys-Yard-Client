import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActiveLink.css';

const ActiveLink = ({ children, to }) => {
    return (
        <NavLink to={to} className={({ isActive }) => isActive ? "active text-green-600" : "text-2xl font-medium hover:bg-transparent"}>
            {children}
        </NavLink>
    );
};

export default ActiveLink;