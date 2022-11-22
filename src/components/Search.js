import React from 'react'
import styled from 'styled-components'
import Ico from './icon-search.png'

const Container = styled.div`
    margin-top: 35px;
    width: 730px;
    height: 60px;
    display: flex;
    justify-content: center;
    position: relative;
`
const Input = styled.input`
    height: 100%;
    width: 100%;
    background-color: ${props=>props.change?"white":"#1E2A47"};
    padding-right: 60px;
    background-image: url(${Ico});
    background-repeat: no-repeat;
    background-position: left 32px center;
    background-size: 25px;
    border:none;
    border-radius: 15px;
    padding-left: 62px ;
    font-size: 18px;
    font-weight: 400;
    color: ${props=>props.change?"black":"white"};
    :focus{
        outline: none;
    }
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
    `
const Button = styled.button`
    position: absolute;
    right: 0;
    top: 3.4px;
    right: 10px;
    height: 50px;
    width: 106px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #0079FF;
    border:none;
    border-radius: 10px;
    transition: all 300ms ease;
    cursor: pointer;
    &:hover{
        background-color:#60ABFF;
    }
`
const Search = ({change,onQChange, qChange, getQuote}) => {
  return (
    <Container>
        <Input onChange={onQChange} value={qChange} change={change}></Input>
        <Button onClick={getQuote}>Search</Button>
    </Container>
  )
}

export default Search