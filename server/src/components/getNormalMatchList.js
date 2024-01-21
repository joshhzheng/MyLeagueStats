/*
  Input: PUUID
  Output: list of 5 most recent normal matches
*/
const axios = require("axios");
require("dotenv/config");

const riotAPIKey = process.env.riotAPIKey;

// Define header parameters
const headers = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0",
  "Accept-Language": "en-CA,en-US;q=0.7,en;q=0.3",
  "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
  "Origin": "https://developer.riotgames.com",
  "X-Riot-Token": "RGAPI-f458e769-0835-4c7b-9cc1-606cbecee5d2",
};

async function fetchNormalMatch(puuid) {
  try {
    const apiUrl = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?type=normal&start=0&count=5`;
    const response = await axios.get(apiUrl, { headers: headers });
    const matchList = response.data;
    return matchList;
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
    return [];
  }
}

module.exports = { fetchNormalMatch };
