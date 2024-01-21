import React from "react";

const MatchForTen = ({ matchData }) => {
  return (
    <div>
      {Object.keys(matchData).map((playerId) => {
        const playerData = matchData[playerId];

        return (
          <div key={playerId} className='blue'>
            <div className='champ'>
              <img src={playerData.champIcon} alt="" />
            </div>

            <div className='name'>
              {playerData.playerName}
            </div>

            <div className='role'>
              {playerData.playerRole}
            </div>

            <div className='kda'>
              {`${playerData.playerKills}/${playerData.playerDeaths}/${playerData.playerAssists}`}
            </div>

            <div className='dmg'>
              {playerData.playerDmg}
            </div>

            <div className='gold'>
              {playerData.playerGold}
            </div>

            <div className='cs'>
              {playerData.playerCs}
            </div>

            <div className='ward'>
              {playerData.playerWard}
            </div>

            <div className='items'>
              {playerData.items.map((item, index) => (
                <div className='item' key={index}>
                  <img src={item} alt={`Item ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MatchForTen;
