import axios from 'axios';

const backendUrl = 'http://localhost:8080';

const getUserInfo = async (name, tagLine) => {
  let results = {};
  try {
    results = await axios.get(`${backendUrl}/api/data/player/${name}/${tagLine}`);
    return results.data;
  } catch (err) {
    console.log(err);
    return results;
  }
};

const getMatchList = async (puuid) => {
  let results = {};
  try {
    results = await axios.get(`${backendUrl}/api/data/match-list/${puuid}`);
    return results.data;
  } catch (err) {
    console.log(err);
    return results;
  }
};

const getMatchData = async (matchId) => {
  let results = {};
  try {
    results = await axios.post(`${backendUrl}/api/data/match/${matchId}`);
    return results.data;
  } catch (err) {
    console.log(err);
    return results;
  }
};

export { getUserInfo, getMatchList, getMatchData };
