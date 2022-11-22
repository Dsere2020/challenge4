import React from 'react'
import styled from 'styled-components'
import ContactDiv from './ContactDiv'
import MiddleDiv from './MiddleDiv'


const Container = styled.div`
    height: 444px;
    width: 100%;
    margin-top: 17px;
    background-color: ${props=>props.change?"#FEFEFE":"#1E2A47"};
    display: flex;
    justify-content: center;
    border-radius: 15px;
    padding-left: 48px;
    padding-right: 48px;
    box-sizing: border-box;
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
`
const IconDiv = styled.div`
    height: 100%;
    width: 202px;
`
const MainDiv = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 44px;
`
const Icon = styled.div`
    height: 117px;
    width: 117px;
    border-radius: 50%;
    background-color: blueviolet;
    margin-top: 48px;
    margin-right:26px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
       
        
    }
`
const TopText = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const TopLeft = styled.div`
    font-size: 26px;
    font-weight: 700;
    color: #2B3442;
`
const TopRight = styled.div`
    font-size: 15px;
    font-weight: 400;
    color:#697C9A ;
`
const SecondText = styled.div`
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    color: #0079FF;
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
`
const Description = styled.div`
    width: 100%;
    margin-top: 20px;
    text-align: left;
    font-size: 16px;
    font-weight: 400;
    color: #4B6A9B;
`
const ContactDetails = styled.div``

const BigDiv = ({change,quote,picUrl,nameParam,nickName,followers,following,repos,location,orgUrl,twitter,company,joinDate}) => {
  return (
    <Container change={change}>
        <IconDiv quote ={quote}>
            <Icon quote={quote}>
            <img src={picUrl} />
            </Icon>
        </IconDiv>
        <MainDiv>
            <TopText>
                <TopLeft>
                    {nameParam}
                </TopLeft>
                <TopRight joinDate={joinDate} >
                    {joinDate}
                </TopRight>
            </TopText>


            <SecondText>
                @{nickName}
            </SecondText>


            <Description>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.

            </Description>


            <MiddleDiv 
            change={change}
            followers={followers}
            repos={repos}
            following={following}
            location={location}
            orgUrl={orgUrl}
            twitter={twitter}
            company={company}
            nickName={nickName}
            />
            <ContactDiv
            location={location}
            orgUrl={orgUrl}
            twitter={twitter}
            company={company}
            />
        </MainDiv>
    </Container>
  )
}

export default BigDiv