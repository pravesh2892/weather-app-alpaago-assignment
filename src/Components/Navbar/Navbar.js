import React, {useState, useEffect} from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { Link} from "react-router-dom";
import logo from '../../Assets/logo.png'
import { getAuth, signOut } from "firebase/auth";
import { IoIosLogOut } from "react-icons/io";
import { auth } from '../../Firebase';

function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setUser(user);
      });
  
      return () => {
        unsubscribe();
      };
    }, []);

    const handleLogout = async () => {
      const auth = getAuth();
      try {
        await signOut(auth);
      } catch (error) {
        console.error('Error during logout:', error.message);
      }
      setShowDropdown(false);
    };

  return (
    <div className='nav-container'>
      <div className='left-container'>
        <div className='logo'>
        <img src={logo} alt='' />
       <span> Weather</span></div>
      
        <div>
           <Link to='/'>
            <button>Home</button>
            </Link>
            <Link  to='/ActiveUser'>
            <button>Active user</button>
            </Link>
        </div>
       
      </div>  
      <div className='right-conainter'>
        <div className='user-icon' >
        <FaRegUserCircle  
       onClick={() => setShowDropdown(!showDropdown)}
        style={{fontSize:"20px", cursor:"pointer", position:"relative"}}/>
        </div>
        {showDropdown && (
            <div className='dropdown'>
            {user && <p>Hi, {user.displayName}</p>}
            <hr style={{color:"black", width:"97px"}} />
              <button onClick={handleLogout}>
              <IoIosLogOut style={{fontSize:"17px", verticalAlign: 'middle'}} />
              <span style={{marginLeft:"12px", verticalAlign: 'middle'}}>Logout</span></button>
            </div>
          )}
      </div>
    </div>
  )
}

export default Navbar;