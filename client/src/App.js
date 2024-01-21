const search_icon = require('../src/Assets/search.png');
const summoner_icon = require('../src/Assets/summoner.png');
const top_champ_icon = require('../src/Assets/aatrox.png');
const see_more_icon = require('../src/Assets/binoculars.png');

// ^^ these will be replaced with the actual icons from backend calls

const React = require('react');
const { useState } = require('react');
require('./App.css');

const App = () => {
  const [name, setName] = useState('');     // maybe use React.useState() ? 
  const [tag, setTag] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  const handleSubmit = (e) => {
    // make calls to backend
    console.log(name, tag);
  };
  
  return (
    <div className="container">
      <div className='top-bar'>
        <input type="text" className='nameInput' placeholder='Name'/>
        <input type="text" className='tagInput' placeholder='Tag'/>
        <div className="search_icon">
          <img src={search_icon} alt="" />
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
        <img src={summoner_icon} alt="" />
      </div>

      <div className='match'>
        <div className='champ'>
          <img src={top_champ_icon} alt="" />
        </div>

        <div className='gamemode'>
          ARAM
        </div> 

        <div className='result'>
          WIN
        </div>

        <div className='kda'>
          6/14/31
        </div>

        <div className='more'>
          <img src={see_more_icon} alt="" />
        </div>
      </div>

      <div className='match'>
        <div className='champ'>
          <img src={top_champ_icon} alt="" />
        </div>

        <div className='gamemode'>
          Ranked
        </div> 

        <div className='result'>
          WIN
        </div>

        <div className='kda'>
          6/14/31
        </div>

        <div className='more'>
          <img src={see_more_icon} alt="" />
        </div>
      </div>

      <div className='match'>
        <div className='champ'>
          <img src={top_champ_icon} alt="" /> 
        </div>

        <div className='gamemode'>
          Draft
        </div> 

        <div className='result'>
          WIN
        </div>

        <div className='kda'>
          6/14/31
        </div>

        <div className='more'>
          <img src={see_more_icon} alt="" />
        </div>
      </div>

    </div>
  );
};

export default App;