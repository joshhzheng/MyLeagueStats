import React from "react";
import "./Match.css";

const Match = ({ match }) => {
  return (
    <div className="match">
      <div className='blue-info'>
        <div className='result'>
          {match.result}
        </div>

        <div className="championImage">
          <img src={match.championImage} alt='champion img'></img>
        </div>

        <div className='stat'>
          {match.role}
        </div>

        <div className="stat"> 
        {match.gameMode}
        </div>

        <div className='stat'>
          {match.kda}
        </div>

        <div className='stat'>
          {match.damage}
        </div>

        <div className='stat'>
          {match.gold}
        </div>

        <div className='stat'>
          {match.cs}
        </div>

        <div className='stat'>
          {match.wards}
        </div>

        <div className='items'>
          {match.items} 
        </div>
      </div>
    </div>
  );
};

export default Match;
