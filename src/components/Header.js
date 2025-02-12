import logo from '../utils/logo.png';  // Adjust path if needed
import { useState } from 'react';

const Header = () => {

  console.log("header redered");
  
  const [login, setLogin] = useState('Log In');

  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Card</li>
          <li className='login-btn' onClick={()=>{
            login === 'Log In' ? setLogin("Log Out") : setLogin('Log In');
          }}>{login}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;