import React from 'react';
import Logo from './images/mediumlogo.png';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';


function Header({color,setAuth,history,currpage}) {
  return (
    <StyleWrapper color={color}>
      <div className="appLogo">
        <img src={Logo} alt="Medium Clone Logo" className="png" onClick={() => history.push('/')}/>
      </div>

      <div className='header_menus__block'>
        <div className={currpage === "ourStory" ? "header_menus--selected" : "header_menus"}>Our story</div>

        <div className={currpage === "membership" ? "header_menus--selected" : "header_menus"}>Membership</div>

        <div 
        className={currpage === "writeHome" ? "header_menus--selected" : "header_menus"}
        onClick={() => history.push('/creator-tools')}
        >
          Write
        </div>

        <div className="header_menus" onClick={() => (setAuth ? setAuth(true) : history.push('/auth'))}>Sign In</div>

        <button className="header__button" onClick={() => (setAuth ? setAuth(true) : history.push('/auth'))}>Get started</button>
      </div>
    </StyleWrapper>
  )
}

const StyleWrapper = styled.div`
  display: flex;
  transition: all 0.5s ease-in;
  justify-content: space-between;
  align-items: center;
  padding-left:130px;
  padding-right: 130px;
  height: 80px;
  width: 100%;
  position: relative;
  background-color: ${(props) => (props.color ? props.color : "#fff")};
  position: sticky;
  top:0;
  border-bottom: solid #000 0.5px;
  z-index:53;

  .appLogo{
  width: 600px;
  height: 28px;
  position: relative;
}
.appLogo .png{
  cursor: pointer;
}

.header_menus__block{
  display: flex;
  align-items: center;
  height: 30px;
  justify-content: space-between;
}

.header_menus,.header_menus--selected{
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



export default withRouter(Header);


