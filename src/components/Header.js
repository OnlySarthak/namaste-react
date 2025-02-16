import logo from '../utils/logo.png';  // Adjust path if needed
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  console.log("header redered");
  
  const [login, setLogin] = useState('Log In');

  const [onlineStatus, setOnlineStatus] = useState("");

  const isOnline = useOnlineStatus(); // Custom hook
  
  useEffect(() => {
      if (!isOnline) {
          setOnlineStatus("You are offline, Please check your internet connection!");
      } else {
          setOnlineStatus("");
      }
  }, [isOnline]); // Runs only when `isOnline` changes

  return (
  <div>
    <div className="header">
      <div className="logo-container">
        <Link to='/'>
          <img src={logo} alt="Logo" className="Logo" />
        </Link>
      </div>
      <div className="nav-items" >
        <ul>
          <li>
            <Link to='/' 
            style={{ textDecoration: "none", color: "inherit" }}>
              Home</Link>
          </li>
          <li>
            <Link to='/about'
            style={{ textDecoration: "none", color: "inherit" }}
            >About us</Link>
          </li>
          <li>
           <Link to='/contact'
           style={{ textDecoration: "none", color: "inherit" }}
           >Contact</Link>
          </li>
          <li>Card</li>
          <li className='login-btn' onClick={()=>{
            login === 'Log In' ? setLogin("Log Out") : setLogin('Log In');
          }}>{login}</li>
        </ul>
      </div>
    </div>
    <div className="isOnline">
        <h6 className="online-status">{onlineStatus}</h6>
    </div>
  </div>
  );
};

export default Header;