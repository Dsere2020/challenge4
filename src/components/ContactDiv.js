import React from 'react'
import styled from 'styled-components'
import Location from './icon-location.png'
import Company from './icon-company.png'
import Twitter from './icon-twitter.png'
import Web from './icon-website.png'

const Container = styled.div`
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: center;
    margin-top: 37px;
`
const LeftRight = styled.div`
    flex:1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`
const TopBottom = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex:1;
    
`
const Img1 = styled.div`
    flex:10%;
    display: flex;
    width: 100%;
    height: 100%;
    background-image: url(${Location});
    background-repeat: no-repeat;
    background-position: 0px 1px;
`
const Img2 = styled.div`
    flex:10%;
    display: flex;
    width: 100%;
    height: 100%;
    background-image: url(${Web});
    background-repeat: no-repeat;
    background-position: 0px 1px;
`
const Img3 = styled.div`
    flex:10%;
    display: flex;
    width: 100%;
    height: 100%;
    background-image: url(${Twitter});
    background-repeat: no-repeat;
    background-position: 0px 1px;
`
const Img4 = styled.div`
    flex:10%;
    display: flex;
    width: 100%;
    height: 100%;
    background-image: url(${Company});
    background-repeat: no-repeat;
    background-position: 0px 1px;
`
const Txt= styled.div`
    flex:90%;
    text-align: left;
    width: 100%;
    height: 100%;
`
const ContactDiv = ({location,twitter,orgUrl,company}) => {
  return (
    <Container>
       <LeftRight>
            <TopBottom>
                <Img1></Img1>
                <Txt>{location}</Txt>
            </TopBottom>
            <TopBottom>
                <Img2></Img2>
                <Txt>{orgUrl}</Txt>
            </TopBottom>

       </LeftRight>

       <LeftRight>
            <TopBottom>
                <Img3></Img3>
                <Txt>{twitter}</Txt>
            </TopBottom>
            <TopBottom>
                <Img4></Img4>
                <Txt>{company}</Txt>
            </TopBottom>

       </LeftRight>

    </Container>
    )
}

export default ContactDiv