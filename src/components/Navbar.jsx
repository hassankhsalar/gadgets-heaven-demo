import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 px-24 absolute z-10 bg-transparent">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <Link to='/'>Home</Link>
        <Link to='/statistics'>Statistics</Link>
        <Link to='/dashBoard'>Dashboard</Link>
        
      <li><a>Statistics</a></li>
      <li><a>Dashboard</a></li>
      </ul>
    </div>
    <h2 className='text-2xl text-slate-200	 font-bold	'>Gadgets Heaven</h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-6 text-slate-200	">
        <Link to='/'>Home</Link>
        <Link to='/statistics'>Statistics</Link>
        <Link to='/dashBoard'>Dashboard</Link>
    </ul>
  </div>
  <div className="navbar-end gap-3">
  <FontAwesomeIcon className='bg-slate-50 rounded-full p-1' icon={faCartShopping} />
  <FontAwesomeIcon className='bg-slate-50 rounded-full p-1' icon={faHeart} />
  </div>
</div>
    );
};

export default Navbar;