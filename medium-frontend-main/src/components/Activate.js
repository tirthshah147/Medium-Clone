import React,{useState} from 'react';
import { withRouter } from 'react-router-dom';
import { StyleWrapper } from './Auth';
import { postData } from './helperFunctions/getData';


function Activate(props) {
  const [successState, setSuccessState] = useState(false);
  const token = props.match.params.token;
  const data = JSON.stringify({token});

  const activateAccount = async() =>{
    if (!successState) {
      let response = await postData('api/auth/activate',data);
      // let response = await fetch('http://localhost:8080/api/auth/activate',{
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
        console.log("Account is activated");
        setSuccessState(true);
      }else{
        alert(resp.message);
      }
    }else{
      props.history.push('/auth');
    }
  }

  return (
    <div>
      <StyleWrapper center>
          <div className='signIn__block-card'>
            <div className='welcome_head'>
              {successState ? "Account Activated" : "Activate Account"}
            </div>
            <div className='auth-description'>
            {successState ? "Click the below button to Sign In" : "Click the below button to activate your Medium account"}
            </div>
            <button onClick={activateAccount}
            className="button_format2" 
            style={{background:"#1A8917"}}
            >{successState ? "Sign In" : "Activate my Account"}</button>
          </div>
      </StyleWrapper>
    </div>
  )
}


export default withRouter(Activate);
