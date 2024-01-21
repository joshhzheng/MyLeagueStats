import React from "react";
import "./Match.css";

const Match = ({ match }) => {
  return (
    <div className="match">
      <div className='blue-info'>
        <div className="championImage">
          <img src="../Assets/aatrox.png" alt='champion img'></img>
        </div>
        <div className="stat"> 
          {match.goldEarned}
        </div>

        <div className='stat'>
          {match.kills}/{match.deaths}/{match.assists}
        </div>
      </div>
    </div>
  );
};

export default Match;
