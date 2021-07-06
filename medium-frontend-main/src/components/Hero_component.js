import React from 'react';
import styled from 'styled-components';

export default function Hero_component({color,title,subTitle,image}) {
  return (
    <StyleWrapper color={color}>
      <div className='hero__title'>
       {title}
       <span>
        {subTitle}
       </span>
       <button className='buttontype3'>Start Writing</button>
      </div>

      <div className='hero__image'>
        <img src={image} alt="herocomponentImage" className="png"/>
      </div>
    </StyleWrapper>
  )
}


const StyleWrapper = styled.div`
  background-color: red;
  border-bottom: solid #000 0.5px;
  padding: 50px 130px 50px 130px;
  background-color: ${(props) => (props.color ? props.color : "#fff")};
  display: flex;
  justify-content: space-between;

  .hero__title{
    font-size: 80px;
    font-family: headFont;
    width:50%;
    line-height: 70px;
    font-weight:500;
    letter-spacing: 0px;
  }

  .hero__title span{
    display: block;
    font-size: 20px;
    font-family:allFont;
    line-height: 25px;
  }

  .buttontype3{
  transition: all 1s ease-in;
  background-color:white;
  padding:12px 22px 12px 22px;
  border-radius: 30px;
  color:black;
  border:solid #000 0.5px;
  font-size: 17px;
  cursor:pointer;
  }

  .hero__image{
    width: 35%;
    position: relative;
  }


`;
