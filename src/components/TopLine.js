import React, { useState } from 'react'
import styled from 'styled-components'
import Dark from "./icon-moon.png"
import Light from "./icon-sun.png"
const Container = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 526px;
`
const Left=styled.div`
    font-size: 26px;
    font-weight: 700;
    color: ${props=>props.change?"#222731":"white"};
`
const Right=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px ;
    cursor: pointer;
`
const RightL= styled.div`
    background-color: transparent;
    border: none;
    font-size: 13px;
    font-weight: 19px;
    color: #697C9A;
    cursor: pointer;

`
const RightR = styled.div`
    height: 15px;
    width: 15px;
    background-image:${props=>props.change? `url(${Dark})` : `url(${Light})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`

const TopLine = ({change,handleClick}) => {
    
  return (
    <Container>
        <Left change={change}>devfinder</Left>
       
        <Right onClick={handleClick}>
            <RightL >{change?"Dark":"Light"}</RightL>
            <RightR change={change} />
        </Right>
        
    </Container>
  )
}

export default TopLine