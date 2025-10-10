import { Link, NavLink } from 'react-router';
import Logo from '../../assets/logo.png'
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
    const navLinkStyle = ({ isActive }) => {
        return {
            color: isActive ? '#9f62f2' : '#000000',
            borderBottom: isActive ? '2px solid #9f62f2' : 'none',
            fontWeight: isActive ? 'bold' : 'normal',
            paddingBottom: '4px'
        }
    }
    const links = <>
       
        <div className='flex gap-5'>
            <NavLink to='/' style={navLinkStyle}><li>Home</li></NavLink>
            <NavLink to='/all-apps' style={navLinkStyle}><li>Apps</li></NavLink>
            <NavLink to='/installedList' style={navLinkStyle}><li>Installation</li></NavLink>
        </div>
    </>
    return (
        <div className="navbar md:px-[80px] bg-[#ffffff] shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm flex  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/'>
                    <button className='flex justify-center items-center'>
                        <img className='w-10 h-10' src={Logo} alt="" />
                        <p className=" text-xl font-bold text-[#9f62f2]">Hero.IO</p>
                    </button>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">

                <Link target='_blank' to="https://github.com/ashrafulislam65/Hero.io-Software-Store"> <button className="btn bg-linear-65 from-[#632ee3] to-[#9f62f2] text-[#ffffff]"><FaGithub />Contribute</button></Link>
            </div>
        </div>
    );
};

export default Navbar;