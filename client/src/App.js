import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Match from './Components/Match';
import './App.css';
import cors from 'cors';

import searchIcon from '../src/Assets/search.png';
import seeMoreIcon from '../src/Assets/binoculars.png';

// placeholder images:
import summonerIcon from '../src/Assets/summoner.png';
import topChampIcon from '../src/Assets/aatrox.png';

import { getUserInfo, getMatchList, getMatchData } from './services/Services';

// these imports do not work for react?? 
// Failed ...
// You attempted to import ../../server/src/controllers/iconController which falls outside of the project src/ directory
// import { getIcon } from '../../server/src/controllers/iconController';
// import { getHero } from '../../server/src/controllers/heroController';
// import { getItem } from '../../server/src/controllers/itemController';

/*
How Front-End Should Work: 
1. Takes Name, Tagline, as inputs

2. Calls Backend function to getAccountPuuid

3. Displays data of Account Puuid on the home page

3. Takes Account PUUID value, and calls getNormalMatchList

4. For every match in normalMatchList, call getMatchData
    - this gets data for every player in the match
    - use current account's puuid key to find current player stats
    - set equal to playerData

5. Use <Match match=playerData/> to display them on home page

6. Then, when the binocular icon is clicked, link to GameReport.js, while keeping the 
    objects that we currently have
*/

const App = () => {
  // calls to backend should return object like this:
  const samplePlayerData = {
    result: 'Victory',
    championImage: topChampIcon,
    result: 'Victory',
    gameMode: "Aram",
    kda: '10/2/5',
  };

  // const sampleMatchData = {        <-- this is a hashmap
  //   playerHashMap [puuid]: 
  //       {teamId, lane, playerName, playerTagline, championName,
  //   kills, deaths, assists, totalDamageDealt, magicDamageDealt,
  //   physicalDamageDealt, creepscore, visionScore, goldEarned, items[6]}
  // }


  const [name, setName] = useState(null);
  const [tag, setTag] = useState(null);
  const [userInfo, setuserInfo] = useState({ name:"", tagLine:"", level:"", profileIconId:"",sampleData:{}});
  const [matchList, setMatchList] = useState([]); // array of match objects
  const [matchInfo, setMatchInfo] = useState([]); // hashmap of match data

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setName(event.target.value); 
  }

  const handleTagChange = (event) => {
    console.log(event.target.value);
    setTag(event.target.value); 
  }

  const handleSearch = async () => {
    // fetch account puuid data here
    console.log('Name:', name); // pass through here
    console.log('Tag:', tag);
    const userInfo = await getUserInfo(name, tag);
    
    setuserInfo({
      name: userInfo.name,
      tagLine: tag, // Assuming you have a tagLine in your data
      level: userInfo.summonerLevel.toString(),
      profileIconId: userInfo.profileIconId,
    });
    
    // Set the matchList state
    const matchList = await getMatchList(userInfo.puuid);
    setMatchList(matchList);

    for(let i = 0; i < matchList.length; i++) {
      let matchhData = await getMatchData(matchList[i]);
      setMatchInfo(matchInfo => [...matchInfo, matchhData]);
    }
  }

  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="nameInput"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          className="tagInput"
          placeholder="Tag"
          value={tag}
          onChange={handleTagChange}
        />
        <div className="search_icon" onClick={handleSearch}>
          <img src={searchIcon} alt="" />
        </div>
      </div>

      <div className='summoner-data'> 
        <div className='summoner-name'>
          {userInfo.name} 
        </div>

        <div className='summoner-tag'>
          {userInfo.tagLine}
        </div>
      </div>  
        
      <div className='summoner-level'>
        Level: {userInfo.level}
      </div>
      
      <div className='summoner-icon'>
        <img src={userInfo.profileIconId} alt="" />
      </div>

      {matchInfo.length > 0 ? (
        <div>
          <Match match={matchInfo[0]} />
          <Match match={matchInfo[1]} />
          <Match match={matchInfo[2]} />
        </div>
      ) : (
        <p>No match info available.</p>
      )}


    {/* the display works when I comment out this code for some reason */}
     {/* <div>
     <Link to={{
        pathname: "/game-report",
        state: { matchData: "hello" } // Replace this with your actual match data
      }}>
      <img src={seeMoreIcon} alt="See More" />
    </Link>
    </div>   */}
    
     
    </div>
  );
};

export default App;
