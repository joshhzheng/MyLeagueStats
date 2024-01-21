import React, { useState } from 'react';
import './App.css';
import Match from './Components/Match';
import { Link } from 'react-router-dom';

import searchIcon from '../src/Assets/search.png';
import summonerIcon from '../src/Assets/summoner.png';
import topChampIcon from '../src/Assets/aatrox.png';
import seeMoreIcon from '../src/Assets/binoculars.png';

const App = () => {
  // react hook stuff
  const [name, setName] = useState('');
  const [tag, setTag] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  // const handleSubmit = () => {
  //   // make calls to backend
  //   console.log(name, tag);
  // };

  // calls to backend should return object like this:
  const sampleMatchData = {
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

  return (
    <div className="container">
      <div className='top-bar'>
        <input type="text" className='nameInput' placeholder='Name' onChange={handleNameChange} />
        <input type="text" className='tagInput' placeholder='Tag' onChange={handleTagChange} />
        <div className="search_icon">
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

     <Match match={sampleMatchData} />

    
     {/* <div>
      <Link to="/game-report">
        <img src={seeMoreIcon} alt="See More" />
      </Link>
    </div> */}
    
     
    </div>
  );
};

export default App;
