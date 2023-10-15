import React, { useContext } from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';
import { GiHoodedFigure } from "react-icons/gi";
import { AuthContext } from '../../../providers/AuthProvider';
import useIsOwner from '../../../hooks/useIsOwner';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [isOwner, isOwnerLoading] = useIsOwner();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            });
    }

    const navItems = <>
        <li><ActiveLink to="/">Home</ActiveLink></li>
        <li><ActiveLink to="/aboutus">About Us</ActiveLink></li>
        <li><ActiveLink to="/alltoys">All Toys</ActiveLink></li>
        {
            user ? <>
                {(!isOwnerLoading && isOwner) ? <li><ActiveLink to="/mytoys">MyToys</ActiveLink></li> :
                    <li><ActiveLink to="/mycollections">MyCollections</ActiveLink></li>
                }
                {(!isOwnerLoading && isOwner) && <li><ActiveLink to="/addatoy">Add A Toy</ActiveLink></li>}
                <li>
                    <div className="dropdown dropdown-end dropdown-hover hover:bg-transparent">
                        <label tabIndex={1} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mr-48 lg:mr-0 lg:mt-32 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <h4 className="justify-between">
                                    {user?.displayName}
                                </h4>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <button onClick={handleLogOut} className="btn btn-warning ms-2 px-6 capitalize text-base">
                        Logout
                    </button>
                </li>
            </> :
                <li>
                    <ActiveLink to="/login">
                        <button className="btn bg-black px-8 capitalize text-xl">
                            Login
                        </button>
                    </ActiveLink>
                </li>
        }
    </>

    return (
        <div className="navbar justify-between items-center bg-[#f7ea68] text-black py-2 px-5">
            <div className="navbar-start items-center">
                <Link to="/" className="btn btn-ghost normal-case text-3xl text-black hover:bg-transparent">
                    <GiHoodedFigure className="text-4xl" />
                    <span className="ml-3">Toys Yard</span>
                </Link>
            </div>
            <div className="justify-end">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content -left-40 mt-3 p-2 shadow bg-[#f7ea68] rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <ul className="menu menu-horizontal px-1 hidden lg:flex lg:items-center text-3xl">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;