import logo from '../utils/logo.png';  // Adjust path if needed
import { useState,useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from '../utils/UserContext';

const Header = () => {
  
  const {loggedUser,userLocation, setUserLocation} = useContext(UserContext); 

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
      <div className="d-flex align-items-center"      >
        <div className="logo-container">
          <Link to='/'>
            <img src={logo} alt="Logo" className="Logo" />
          </Link>
        </div>
        <div className='d-flex btn-group'>
          <input type='text' id='getCity' className='search-box form-control'
          placeholder="Enter your city"/>
            <select id='getOptionedCity' className='btn btn-warning' onChange={(e)=>
              setUserLocation(e.target.value)
              // console.log("Dropdown clicked! : "+e.target.value)
            }>
              <option value="nashik">Nashik</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
              <option value="bangalore">Bangalore</option>
              <option value="pune">Pune</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="chennai">Chennai</option>
              <option value="kolkata">Kolkata</option>
              <option value="jaipur">Jaipur</option>
              <option value="ahmedabad">Ahmedabad</option>
            </select>
        </div>
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
          }}>{login} : {loggedUser}</li>
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