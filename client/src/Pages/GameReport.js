import React from 'react';
import { useLocation } from 'react-router-dom';
import './GameReport.css';

const GameReport = () => {
  const location = useLocation();
  const matchData = location.state ? location.state.matchData : null; 

  if (!matchData) {
    return <p>No match data available</p>
  }

  return (
    <div className="container">
      <div className='blue-info'>
        <div className='blue-result'>
          Victory
        </div>

        <div className='roles'>
          Role
        </div>

        <div className='kdas'>
          KDA
        </div>

        <div className='dmgs'>
          Damage
        </div>

        <div className='golds'>
          Gold
        </div>

        <div className='css'>
          CS
        </div>

        <div className='wards'>
          Wards
        </div>

        <div className='champItems'>
          Items
        </div>
      </div>
      
      
    </div>
  );
}

export default GameReport;
