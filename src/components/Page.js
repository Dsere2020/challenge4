import React, { useState } from 'react'
import styled from 'styled-components'
import BigDiv from './BigDiv'
import Search from './Search'
import TopLine from './TopLine'

const Container=styled.div`
    height: 586px;
    width: 730px;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    
`

const Page = ({qChange,nameParam, quote, onQChange,picUrl, getQuote,change,handleClick,nickName,followers,following,repos,location,orgUrl,twitter,company,joinDate}) => {
  const[inp,setInp]=useState("");
  const[search,setSearch]=useState("");
  const searchClick=()=>{
    setSearch(inp);
    setInp("");
  }
  const handleChange=(e)=>{
    setInp(e.target.value)
  }
  console.log(search)

  return (
    <Container >
        <TopLine change={change} handleClick={handleClick}/>
        <Search qChange={qChange} onQChange = {onQChange} getQuote ={getQuote} searchClick={searchClick} inp={inp} handleChange={handleChange} change={change} handleClick={handleClick}/>
        <BigDiv 
        nameParam={nameParam}
        picUrl={picUrl}
        quote={quote}
        change={change}
        handleClick={handleClick}
        followers={followers}
        repos={repos}
        following={following}
        location={location}
        orgUrl={orgUrl}
        twitter={twitter}
        company={company}
        nickName={nickName}
        joinDate={joinDate}
        />
        
        </Container>
  )
}

export default Page