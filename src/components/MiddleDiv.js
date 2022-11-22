import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 85px;
    width: 480px;
    display: flex;
    background-color: ${props=>props.change?"#F6F8FF":"#141D2F"};
    margin-top: 32px;
    padding-left: 32px;
    padding-top: 15px;
    border-radius: 10px;
`
const Infos = styled.div`
    display: flex;
    flex:1;
    flex-direction: column;
    align-items: flex-start;
`
const Top = styled.div`
    color: #4B6A9B;
    font-size: 13px;
    font-weight: 400;
    line-height: 19px;
`
const Bottom = styled.div`
    font-size: 22px;
    font-weight: 700;
    color: #2B3442;
`
const MiddleDiv = ({change,nickName,followers,following,repos,location,orgUrl,twitter,company}) => {
  return (
    <Container change={change}>
        <Infos>
            <Top>Repos</Top>
            <Bottom>{repos}</Bottom>
        </Infos>
        <Infos>
            <Top>Followers</Top>
            <Bottom>{followers}</Bottom>
        </Infos>
        <Infos>
            <Top>Following</Top>
            <Bottom>{following}</Bottom>
        </Infos>

    </Container>
    )
}

export default MiddleDiv