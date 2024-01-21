/*
  Inputs: AccountName, AccountTagLine
  Output: PUUID, Level, ProfileIconID
*/

const axios = require("axios");
require("dotenv/config");

const riotAPIKey = process.env.riotAPIKey;

// Define header parameters for account retrieval
const getAccountHeaders = () => {
  return {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:121.0) Gecko/20100101 Firefox/121.0",
    "Accept-Language": "en-CA,en-US;q=0.7,en;q=0.3",
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://developer.riotgames.com",
    "X-Riot-Token": riotAPIKey,
  };
};

// Define the API endpoint for account retrieval
const getAccountUrl = (accountName, accountTagline) => {
  return `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${accountName}/${accountTagline}`;
};

// Define the API endpoint for summoner data retrieval
const getSummonerUrl = (puuid) => {
  return `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`;
};

// Create a function to fetch account data
async function fetchAccountData(accountName, accountTagline) {
  const accountUrl = getAccountUrl(accountName, accountTagline);
  const accountHeaders = getAccountHeaders();

  try {
    const response = await axios.get(accountUrl, { headers: accountHeaders });
    const accountPuuid = response.data.puuid;

    // Second API call to fetch user data
    const summonerUrl = getSummonerUrl(accountPuuid);
    const summonerResponse = await axios.get(summonerUrl, { headers: accountHeaders });
    const summonerData = summonerResponse.data;

    return summonerData;
  } catch (error) {
    console.error("Failed to fetch account data:", error.message);
    return null;
  }
}

// Export the function for reuse
module.exports = { fetchAccountData };
