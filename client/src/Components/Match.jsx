import React from "react";
import "./Match.css";

const Match = ({ match }) => {
  return (
    <div className="container">
      <div className='blue-info'>
        <div className='blue-result'>
          {match.result}
        </div>

        <div className='roles'>
          {match.role}
        </div>

        <div className='kda'>
          {match.kda}
        </div>

        <div className='dmg'>
          {match.damage}
        </div>

        <div className='gold'>
          {match.gold}
        </div>

        <div className='cs'>
          {match.cs}
        </div>

        <div className='wards'>
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
