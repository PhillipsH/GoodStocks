import React, { useContext } from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import UserContext from '../../context/userContext';

const style = {
  Buttons: {
    marginRight: '50px'
  },
  Title:{
    fontSize: '1em',
    fontWeight:'600',
    marginLeft:'40px'
  },
}

const Header = () => {
  const {userInfo, setUserInfo} = useContext(UserContext);
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    setUserInfo({user: undefined, loggedIn: false});
    history.push('/');
  }
  
  return (
    <Navbar fixed="top" bg="light" className="row topbar" style={style.Topbar}>
      <Navbar.Brand className="col" href="/" style={style.Title}>GoodStocks</Navbar.Brand>
      {
        userInfo.loggedIn 
        ?(
          <Nav className="ml-auto">
            <a className="btn btn-success mr-2" href="/profile">Profile</a>
            <Button className="btn btn-warning mr-2" onClick={()=>handleLogout()}>Logout</Button>
          </Nav>
        )
        :(
          <Nav className="ml-auto" style={style.Buttons}>
            <a className="btn btn-primary mr-2" href="/login">Login</a>
            <a className="btn btn-primary mr-2" href="/register">Register</a>
          </Nav>
        )
      }
      
    </Navbar>
  );
}
 
export default Header;