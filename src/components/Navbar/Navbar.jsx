import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import './Navbar.css'
import { GiBurningTree } from 'react-icons/gi';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/plants'>Plants</NavLink>
        <NavLink to='/profile'>My Profile</NavLink>
    </>

    const { user, logOut } = use(AuthContext)
    console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert('Logged out successfully')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className='lg:w-11/12 mx-auto'>
            <div className="navbar bg-green-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost bg-green-600 text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <nav>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </nav>
                    </div>
                    <span className='flex items-center gap-2 mx-3 text-2xl font-bold text-green-600'><GiBurningTree></GiBurningTree> GreenNest</span>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <nav>
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </nav>
                </div>
                <div className="navbar-end">
                    
                    {
                        user ?
                            <button onClick={handleLogOut} className='btn bg-green-600 text-white'>logout</button>
                            :
                            <Link to='/login' className='btn bg-green-600 text-white'>Login</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;