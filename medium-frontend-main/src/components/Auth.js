import React from 'react';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import { postData } from './helperFunctions/getData';
import { withRouter } from 'react-router-dom';

function SignIn({setAuth, location, history}) {
  console.log(location);
  const [ signInState, setSignInState] = useState(true);
  const [ userAuth, setUserAuth] = useState(false);
  const [ activateMail, setActivateMail] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authSubmit = async(event) => {
    event.preventDefault();
    let data;
    if (signInState) {
      data = JSON.stringify({email,password});
      let response = await postData('api/auth/login',data);
      console.log(response);
      // let response = await fetch('http://localhost:8080/api/auth/login',{
      //   method:"POST",
      //   mode:"cors",
      //   credentials:"same-origin",
      //   headers:{
      //     "Content-Type":"application/json"
      //   },
      //   redirect:"follow",
      //   referrerPolicy:"no-referrer",
      //   body:data
      // })
      let resp = await response.json();
      if (response.status === 200) {
        console.log("LogIn Successfull");
        localStorage.setItem('token', resp.data);
        {(location.state && location.state.from) ? 
          history.push(location.state.from.pathname) : history.push('/dashboard')}
      }else{
        alert(resp.message);
      }
    }else{
      data = JSON.stringify({name,email,password});
      let response = await postData('api/auth/signup',data);
      // let response = await fetch('http://localhost:8080/api/auth/signup',{
      //   method:"POST",
      //   mode:"cors",
      //   credentials:"same-origin",
      //   headers:{
      //     "Content-Type":"application/json"
      //   },
      //   redirect:"follow",
      //   referrerPolicy:"no-referrer",
      //   body:data
      // })
      let resp = await response.json();
      if (response.status === 200) {
        console.log("Activation email has sent");
        setActivateMail(true);
      }else{
        alert(resp.message);
      }
    }
  }

  if(activateMail){
    return (
      <StyleWrapper>
         <div className='signIn__block-card'>
          {setAuth ? (
                <>
                  <div className='close-icon'>
                    <i class="fas fa-times" onClick={() => setAuth(false)}></i>
                  </div><br/>
                </>
              ) : ""}
          <div className='welcome_head'>Activation email sent</div>
          <div className='auth-description'>
                  Activation email has been sent to your entered mail id. Kindly check your mail and Activate your Account now!
          </div>
          
         </div>
      </StyleWrapper>
    )
  }

  return (
    <StyleWrapper>
          <div className='signIn__block-card'>
            {setAuth ? (
              <>
                <div className='close-icon'>
                  <i class="fas fa-times" onClick={() => setAuth(false)}></i>
                </div><br/>
              </>
            ) : ""}
            
            {!userAuth ? (
              <>
                <div className='welcome_head'>
                  {signInState ? "Welcome back." : "Join Medium."}
                </div><br/>
                  
                {signInState ? "" : (
                  <div className='auth-description'>
                    Create an account to receive great stories in your <br/>
                    inbox, personalize your homepage, <br/>
                    and follow authors and topics that you love.
                  </div>
                )}

                <span className='button_format1' onClick={() => setUserAuth(true)}>
                  <i class="far fa-envelope">&nbsp; &nbsp;</i>Sign {signInState ? "In" : "up"} with Email
                </span><br/>
                <span className='button_format1'>
                    <img src="https://img.icons8.com/color/13/000000/google-logo.png" alt='img'/>
                    &nbsp; &nbsp;Sign {signInState ? "In" : "up"} with Google
                </span><br/>
                <span className='button_format1'>
                    <img src="https://img.icons8.com/color/13/000000/facebook.png" alt='img'/>
                    &nbsp; &nbsp;Sign {signInState ? "In" : "up"} with Facebook
                </span><br/>


                {signInState ? (
                  <>
                    <span className='button_format1'>
                        <img src="https://img.icons8.com/color/13/000000/twitter--v1.png" alt='img'/>
                            &nbsp; &nbsp;Sign in with Twitter
                    </span><br/>
                    <span className='button_format1'>
                        <img src="https://img.icons8.com/ios-glyphs/13/000000/mac-os.png" alt='img'/>
                            &nbsp; &nbsp;Sign in with Apple
                    </span><br/>

                    <div className="signIn_footer_text">
                      No account? <span onClick={() => setSignInState(false)}>Create one</span> 
                    </div>
                  </>
                ) : (
                  <div className="signIn_footer_text">
                      Already have an account? <span onClick={() => setSignInState(true)}>Sign in</span> 
                  </div>
                )}


                
                
              </>
            ) : (
              <>
                  <div className='welcome_head'>
                      {signInState ? "Sign in with email" : "Sign up with email"}
                    </div><br/>

                    <div className='auth-description'>
                    {signInState ? "Enter the email address & password associated with your account." :
                        "Enter your email address & password to create an account."
                      }
                    </div>
                    
                    <form onSubmit={authSubmit}>
                      {signInState ? "" : (
                        <>
                          <label>Your Name</label><br/>
                          <input type="text" required 
                          value={name} 
                          onChange={(event) => setName(event.target.value)}/><br/>
                        </>
                      )}
                        

                        <label>Your email</label><br/>
                        <input type="email" required 
                        value={email} 
                        onChange={(event) => setEmail(event.target.value)}/><br/>

                        <label>Your password</label><br/>
                        <input type="password" required
                        value={password} 
                        onChange={(event) => setPassword(event.target.value)}
                        /><br/>
                        <button className="button_format2">Continue</button>
                    </form>
                    
                    <div className="signIn_footer_text">
                    <span onClick={() => setUserAuth(false)}>
                        {signInState ? "< All sign in options" : "< All sign up options"}
                    </span>
                      
                      
                  </div>
                    
                </>
            )}
          </div>
    </StyleWrapper>
  )
}

export default withRouter(SignIn);

export const StyleWrapper = styled.div`
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  padding-top:10px;
  align-items:${props => (props.center ? "center" : "flex-start")};

  .signIn__block-card{
  width: 45%;
  height: 60%;
  text-align: center;
}

.welcome_head{
  font-family: headFont;
  font-size: 32px;
}

.close-icon{
  text-align: right;
  color:#767676;
  font-weight:10px;
  opacity: 0.4;
  cursor:pointer;
  font-size: 24px;
}

.auth-description{
  font-size: 14px;
  margin-bottom: 25px;
  color:rgba(41, 41, 41, 1);
  font-weight:500;
  letter-spacing: 0.5px;
  line-height: 15px;
}


.button_format1, .button_format2{
  width: 250px;
  height: 50px;
  border-radius: 30px;
  border-style: solid;
  border-width: 0.5px;
  border-color:#767676;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline-block;
  padding-top:15px;
  font-family: allFont;
  margin-bottom: 10px;
  color:rgba(41, 41, 41, 1);
  cursor:pointer;
}

.button_format1:hover{
  border-color:#000;
}

.button_format2{
  margin:15px 0px 15px 0px;
  background-color: rgba(41, 41, 41, 1);
  color:#fff;
  padding-top:0px;
}

.button_format2:hover{
  background-color: #000;
}

.signIn_footer_text{
  margin-top:15px;
  font-size: 14px;
  color:rgba(41, 41, 41, 1);
  font-weight:500;
  letter-spacing: 0.5px;
}

.signIn_footer_text span{
  color:#258E22;
  font-weight:bold;
  cursor:pointer;
}


label{
  font-size: 12px;
  font-weight:lighter;
  color: rgba(41, 41, 41, 1);
  margin-bottom:15px;
}

input{
  text-align: center;
  border:none;
  outline:none;
  border-bottom:solid 0.5px rgba(41, 41, 41, 0.4);
  margin:18px 0px 18px 0px;
  background-color: transparent;
  font-size: 16px;
  color: rgba(41, 41, 41, 1);
  width:70%;
}

input:active, input:focus{
  background: none;
  border-bottom:solid 1px rgba(41, 41, 41, 1);
}

`
