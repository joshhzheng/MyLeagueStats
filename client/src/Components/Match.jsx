import React from "react";
import "./Match.css";

const Match = ({ match }) => {
  return (
    <div className="match">
      <div className='blue-info'>
        <div className="championImage">
          <img src={match.championImage} alt='champion img'></img>
        </div>

        <div className='result'>
          {match.result}
        </div>

        <div className="stat"> 
          {match.gameMode}
        </div>

        <div className='stat'>
          {match.kda}
        </div>
      </div>
    </div>
  );
};

export default Match;
