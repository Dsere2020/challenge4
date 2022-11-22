import logo from './logo.svg';
import './App.css';
import Page from './components/Page';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props=>props.change?"#F2F2F2":"#141D2F"};
  transition: all 300ms ease;
`
function App() {
  const [link,setLink] = useState("octocat");
  const[change,setChange] = useState(true);
  const[qChange,setQChange] = useState("");
  const[quote,setQuote] = useState();
  const[picUrl,setPicUrl] = useState();
  const[nameParam,setNameParam] = useState("");
  const[followers,setFollowers] = useState(0);
  const[repos,setRepos] = useState(0);
  const[following,setFollowing] = useState(0);
  const[location,setLocation] = useState("");
  const[orgUrl,setOrgUrl] = useState("");
  const[twitter,setTwitter] = useState('');
  const[company,setCompany]=useState('');
  const[nickName,setNickName] =useState('');
  const[joinDate,setJoinDate] = useState('');
  const onQChange =(e)=>{
    setQChange(e.target.value);
  }
  const getQuote = ()=>{
    setLink(qChange);
  }   

  useEffect(()=>{
    axios.get(`https://api.github.com/users/${link}`,{
      headers:{
        // Authorization:"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"
        // Authorization: "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"
        Authorization:"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"
      }
    })
    .then(res=>{
      setQuote(res.data)
      setPicUrl(res.data.avatar_url)
      setNameParam(res.data.name || res.data.login)
      setFollowers(res.data.followers)
      setRepos(res.data.public_repos)
      setFollowing(res.data.following)
      setLocation(res.data.location || "Not Available")
      setOrgUrl(res.data.html_url)
      setTwitter(res.data.twitter_username || "Not Available")
      setCompany(res.data.company || "Not Available")
      setNickName(res.data.login)
      setJoinDate(res.data.created_at[0])

      console.log(res.data)
    }).catch(err=>{
      console.log(err)
    });
  },[link]);
  
  const handleClick=()=>{
      setChange(!change)
  }
  console.log(joinDate)
 
  return (
    <Container change={change} className="App">
      <Page 
      nickName={nickName}
      followers={followers}
      repos={repos}
      following={following}
      location={location}
      orgUrl={orgUrl}
      twitter={twitter}
      company={company}
      qChange={qChange}
      getQuote={getQuote}
      quote={quote}
      onQChange={onQChange} 
      picUrl ={picUrl}
      change={change}
      handleClick={handleClick}
      nameParam={nameParam}
      joinDate={joinDate}
      />
    </Container>
  );
}
export default App;
