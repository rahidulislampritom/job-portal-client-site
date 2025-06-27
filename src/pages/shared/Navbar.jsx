import { NavLink } from "react-router-dom";
import logo from '../../assets/navbar_logo.png'
import { useContext } from "react";
import AuthContext from "../../context/authContext/AuthContext";

const Navbar = () => {

    const { user, authSignOut } = useContext(AuthContext);

    const links =
        <>
            <li><NavLink className={({ isActive }) => isActive ? 'bg-blue-500 text-white' : ''} to={'/'}>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'bg-blue-500 text-white' : ''} to={'myApplication'}>My Application</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'bg-blue-500 text-white' : ''} to={'addJob'}>Add Job</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'bg-blue-500 text-white' : ''} to={'myPostedJobs'}>My Posted Jobs</NavLink></li>
        </>

    const resLogLink =
        <>
            <NavLink to={'/register'} className={({ isActive }) => isActive ? 'btn btn-ghost bg-blue-400 text-white' : 'btn'}>Register</NavLink>
            <NavLink to={'/signin'} className={({ isActive }) => isActive ? 'btn btn-ghost bg-blue-400 text-white' : 'btn'}>Sign in</NavLink>
        </>

    const signOut =
        <>
            <NavLink className='btn hover:bg-blue-400 hover:text-white' onClick={() => authSignOut()}>Sign Out</NavLink>
        </>


    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                            {links}

                        </ul>
                    </div>
                    <img src={logo} alt="" className="hidden md:flex" />
                    <p className="text-[purple] text-xl md:text-3xl font-black md:shadow-lg">Job Portal</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {links}

                    </ul>
                </div>
                {
                    user
                        ? <div className="navbar-end">
                            {signOut}
                        </div>
                        : <div className="navbar-end gap-4">
                            {resLogLink}
                        </div>
                }


            </div>
        </div>
    );
};

export default Navbar;