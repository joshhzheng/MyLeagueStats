/*
  Input: matchId
  Output: playerHashMap [puuid]: 
        {teamId, lane, playerName, playerTagline, championName,
        kills, deaths, assists, totalDamageDealt, magicDamageDealt,
        physicalDamageDealt, creepscore, visionScore, goldEarned, items[6]}

  note: 
    - lane position is "" when aram game 
    - items[6] are in item id 
*/
const axios = require("axios");
require("dotenv/config");

const riotAPIKey = process.env.riotAPIKey;

async function fetchData(matchId) {
  const apiUrl = `https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}`;

  // request header
  const headers = {
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:121.0) Gecko/20100101 Firefox/121.0",
    "Accept-Language": "en-CA,en-US;q=0.7,en;q=0.3",
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    Origin: "https://developer.riotgames.com",
    "X-Riot-Token": riotAPIKey,
  };

  let matchData;
  let playerHashMap = {}; // HashMap to store player data

  try {
    const response = await axios.get(apiUrl, { headers: headers });
    matchData = response.data;

    // get player data and populate the hashmap
    for (let i = 0; i < matchData.info.participants.length; i++) {
      const playerData = matchData.info.participants[i];
      const teamId = playerData.teamId;
      const lane = playerData.teamPosition; 
      const puuid = playerData.puuid;
      const playerName = playerData.riotIdGameName;
      const playerTagline = playerData.riotIdTagline;
      const championName = playerData.championName;
      const kills = playerData.kills;
      const deaths = playerData.deaths;
      const assists = playerData.assists;
      const creepscore = playerData.totalMinionsKilled;
      const totalDamageDealt = playerData.totalDamageDealtToChampions;
      const magicDamageDealt = playerData.magicDamageDealt;
      const physicalDamageDealt = playerData.physicalDamageDealt;
      const visionScore = playerData.visionScore; // note: zero vision score if aram map
      const goldEarned = playerData.goldEarned;
      const items = [];
      for (let j = 0; j < 6; j++) {
        items.push(playerData[`item${j}`]);
      }

      // Add player data to the hashmap
      playerHashMap[puuid] = {
        teamId: teamId,
        lane: lane,
        playerName: playerName,
        playerTagline: playerTagline,
        championName: championName,
        kills: kills,
        deaths: deaths,
        assists: assists,
        totalDamageDealt : totalDamageDealt, 
        magicDamageDealt : magicDamageDealt,
        physicalDamageDealt: physicalDamageDealt,
        creepscore : creepscore,
        visionScore: visionScore,
        goldEarned: goldEarned,
        items: items,
      };
    }

    // Return the entire playerHashMap
    return playerHashMap;
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
    return {};
  }
}

// Export the fetchData function
module.exports = { fetchData };