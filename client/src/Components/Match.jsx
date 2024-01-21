// Match.jsx
import React from 'react';

const Match = ({ championIcon, championName, gamemode, result, kda, items }) => {
  return (
    <div className='match-container'>
      <div className='champion-icon'>
        <img src={championIcon} alt="" />
      </div>

      <div className='champion-name'>
        {championName}
      </div>

      <div className='gamemode'>
        {gamemode}
      </div>

      <div className='result'>
        {result}
      </div>

      <div className='kda'>
        {kda}
      </div>

      <div className='items'>
        {items.map((item, index) => (
          <img key={index} src={item} alt={`Item ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Match;
