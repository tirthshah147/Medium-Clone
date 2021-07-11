import React from 'react'
import styled from 'styled-components';
import img from './images/testimage.jpeg';
import profileImg from './images/profile.jpeg';

export default function BlogFull() {
  return (
    <StyleWrapper>
      <div className='blog__details'>
        <div className="blog__details-header">
          <img src={profileImg} alt="profileImg"/>
          <div>Tirth Shah</div>
        </div>
        <div className='blog__details-header_title'>This Long-Awaited Technology May Finally Change the World</div>
        <div className='blog__details-header_description'>Solid-state batteries are poised to emerge in the coming years</div>
        <div className="blog__details-header_footer">
          <div className="part1">Jun 30 · 5 min read · </div>
          <div className="part2-tags">Productivity</div>
        </div>
      </div>

      <img src={img} alt="" className="blog__image"/>
      


    </StyleWrapper>
  )
}

const marginBottom = 'margin-bottom: 10px;' 

const StyleWrapper = styled.div`
  display: flex;
  transition: all 0.5s ease-in;
  justify-content: space-between;
  align-items: center;
  min-height: 166.5px;
  width: 651px;
  position: relative;

  .blog__details{
    position: relative;
    width: 70%;
    min-height:166.5px;
  }

  .blog__details-header{
    display: flex;
    height: 20px;
    align-items: center;
    ${marginBottom}
  }

  .blog__details-header img{
    width: 20px;
    height: 20px;
    border-radius: 100%;
    margin-right: 10px;
  }

  .blog__details-header_title{
    font-size: 22px;
    font-weight:900;
    ${marginBottom}
  }

  .blog__details-header div{
    font-size: 12px;
    font-weight: bold;
    ${marginBottom}
  }

  .blog__details-header_description{
    color:#757575;
    ${marginBottom}
  }

  .blog__details-header_footer{
    color:#757575;
    font-size:13px;
    display: flex;
  }

  .blog__details-header_footer .part1{
    margin-right: 10px;
  }

  .blog__details-header_footer .part2-tags{
    width: auto;
    padding: 5px 5px 5px 5px;
    background-color: #F2F2F2;
    border-radius:30px;
    position: relative;
    top:-5px;
  }

  .blog__image{
    width: 25%;
    background-color: brown;
  }
`
