import Header from "./Header";
import HeroComponent from "./Hero_component";
import homeImg from './images/write_page_header_img.png';

import React,{useState,useEffect} from 'react';


function WriteHome() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);

  console.log(offset);

  return (
    <>
            <Header color={offset < 400 ? "#F24D2E" : null} currpage='writeHome'/>
            <HeroComponent 
            color="#F24D2E" 
            title="Set your ideas in motion."
            subTitle="If you have a story to tell, knowledge to share, or a perspective to offer — welcome home. Here, you can publish, grow, and earn, all in a network supported by millions of readers — not ads."
            image={homeImg}
            />
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
      )
}

export default WriteHome;
