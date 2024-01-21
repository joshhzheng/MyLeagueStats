import React, { useEffect, useState } from 'react';
import './App.css';
import Match from './Components/Match';
import { Link } from 'react-router-dom';

import searchIcon from '../src/Assets/search.png';
import seeMoreIcon from '../src/Assets/binoculars.png';

// placeholder images:
import summonerIcon from '../src/Assets/summoner.png';
import topChampIcon from '../src/Assets/aatrox.png';

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
    role: 'Top',
    gameMode: "Aram",
    kda: '10/2/5',
    damage: '15000',
    gold: '10000',
    cs: '200',
    wards: '10',
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
  };


  const [name, setName] = useState(null);
  const [tag, setTag] = useState(null);

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setName(event.target.value); 
  }

  const handleTagChange = (event) => {
    console.log(event.target.value);
    setTag(event.target.value); 
  }

  const handleSearch = () => {
    // fetch account puuid data here
    console.log('Name:', name);
    console.log('Tag:', tag);
  }

  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="nameInput"
          placeholder="Name"
          input value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          className="tagInput"
          placeholder="Tag"
          input value={tag}
          onChange={handleTagChange}
        />
        <div className="search_icon" onClick={handleSearch}>
          <img src={searchIcon} alt="" />
        </div>
      </div>

      <div className='summoner-data'> 
        <div className='summoner-name'>
          Bread 
        </div>

        <div className='summoner-tag'>
          #8166
        </div>
      </div>  
        
      <div className='summoner-level'>
        Level: 335
      </div>
      
      <div className='summoner-icon'>
        <img src={summonerIcon} alt="" />
      </div>

     <Match match={samplePlayerData} />    {/* samplePlayerData object input into match component*/}
     <Match match={samplePlayerData} />
     <Match match={samplePlayerData} />

    
     {/* <div>
      <Link to="/game-report">
        <img src={seeMoreIcon} alt="See More" />      // TODO: PASS ENTIRE MATCH DATA THROUGH EACH OF THESE ICONS
      </Link>
    </div> */}
    
     
    </div>
  );
};

export default App;
