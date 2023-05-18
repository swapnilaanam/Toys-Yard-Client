import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';
import { GiHoodedFigure } from "react-icons/gi";

const NavBar = () => {
    const user = null;

    const navItems = <>
        <li><ActiveLink to="/">Home</ActiveLink></li>
        <li><ActiveLink to="/blogs">Blogs</ActiveLink></li>
        <li><ActiveLink to="/alltoys">All Toys</ActiveLink></li>
        {
            user ? <>
                <li><ActiveLink to="/mytoys">MyToys</ActiveLink></li>
                <li><ActiveLink to="/addatoy">Add A Toy</ActiveLink></li>
                <li>
                    <div className="w-10 rounded-full">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </li>
            </> :
                <li><ActiveLink to="/login">Login</ActiveLink></li>
        }
    </>

    return (
        <div className="navbar items-center bg-base-200 text-zinc-700 py-3 border-b-2 shadow-sm">
            <div className="navbar-start items-center">
                <Link to="/" className="btn btn-ghost normal-case text-xl text-orange-500 hover:bg-transparent">
                    <GiHoodedFigure className="text-3xl" />
                    <span className="ml-2">Toys Yard</span>
                </Link>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content -left-40 mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;