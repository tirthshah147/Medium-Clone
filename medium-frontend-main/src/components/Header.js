import React from 'react';
import Logo from './images/mediumlogo.png';
import styled from 'styled-components';

function Header({color,setAuth}) {
  return (
    <StyleWrapper color={color}>
      <div className="appLogo"><img src={Logo} alt="Medium Clone Logo" className="png"/></div>
      <div className='header_menus__block'>
        <div className="header_menus">Our story</div>
        <div className="header_menus">Membership</div>
        <div className="header_menus">Write</div>
        <div className="header_menus" onClick={() => setAuth(true)}>Sign In</div>
        <button className="header__button" onClick={() => setAuth(true)}>Get started</button>
      </div>
    </StyleWrapper>
  )
}

const StyleWrapper = styled.div`
  display: flex;
  transition: all 1s ease-in;
  justify-content: space-around;
  align-items: center;
  padding-left:10px;
  padding-right: 10px;
  height: 80px;
  width: 100%;
  position: relative;
  background-color: ${(props) => (props.color ? props.color : "#fff")};
  position: sticky;
  top:0;
  border-bottom: solid #000 0.5px;

  .appLogo{
  width: 600px;
  height: 28px;
  position: relative;
}

.header_menus__block{
  display: flex;
  align-items: center;
  height: 30px;
  justify-content: space-between;
}

.header_menus{
  font-size: 14px;
  margin-right: 20px;
  cursor:pointer;
}


.header_menus--selected{
  text-decoration: underline;
}

.header__button{
  transition: all 1s ease-in;
  background-color:${(props) => (props.color ? '#161616 ' : "#1A8917")};
  padding:12px 18px 12px 18px;
  border-radius: 30px;
  color:white;
  border:none;
  font-size: 14px;
  cursor:pointer;
}  
`



export default Header;


