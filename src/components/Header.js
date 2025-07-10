// import logo from '../utils/logo.png';  // Adjust path if needed
import { useState,useEffect, useContext } from 'react';
import { Link, Links } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
import logo2 from '../../images/logo2.png'

const Header = () => {

  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  
  const {loggedUser,setUserLocation} = useContext(UserContext); 

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
    <div className="header" style={{position:'fixed',width:100+'%'}}>
      <div className="d-flex align-items-center"      >
        <div className="logo-container">
          <Link to='/'>
            <img src={logo2} alt="Logo" className="Logo" />
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
          <li>
            <Link to='/cart'
           style={{ textDecoration: "none", color: "inherit" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg> 
                {cartItems.length || ''}
            </Link> 
          </li>
          <li className='login-btn' onClick={()=>{
            login === 'Log In' ? setLogin(loggedUser) : setLogin('Log In');
          }}>{login}</li>
        </ul>
      </div>
    </div>
    <div style={{height:198+'px'}}></div>
    <div className="isOnline">
        <h6 className="online-status">{onlineStatus}</h6>
    </div>
  </div>
  );
};

export default Header;