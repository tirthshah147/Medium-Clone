import Header from "./Header";
import Hero_component from "./Hero_component";

import React,{useState,useEffect} from 'react';
import Auth from './Auth';

function Homepage() {
  const [auth, setAuth] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);

  console.log(offset);

  return (
    <>
      {auth ? (
        <Auth setAuth={setAuth}/>
      ) : (
        <>
            <Header color={offset < 200 ? "#C4E2FF" : null} setAuth={setAuth}/>
            {/* <Hero_component/> */}
            <div>
              Homepage Content
            </div>
            <div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div>
            <div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div>
        </>
      )}
      
    </>
  )
}

export default Homepage;
