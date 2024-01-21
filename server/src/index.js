const express = require("express");
const cors = require("cors");
require("dotenv/config");

const { fetchData } = require("./components/getMatchData.js");
const { fetchNormalMatch } = require("./components/getNormalMatchList.js");
const { fetchAccountData } = require("./components/getAccountPuuid.js");

const app = express();
const port = 4000;

app.use(cors());

// get the current player data
app.get("/data/player/:accountName/:accountTagline", async (req, res) => {
    try {
        const { accountName, accountTagline } = req.params;
        const playerData = await fetchAccountData(accountName, accountTagline);
        res.json(playerData); 
    } catch (error) {
        console.log(error.message); 
        res.status(500).send("Internal Server Error");
    }
})

// get the five most recent matches for the player
app.get("/data/match-list/:puuid", async (req, res) => {
    try {
        const { puuid } = req.params;
        const matchList = await fetchNormalMatch(puuid);
        res.json(matchList);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// get the details of a match 
app.get("/data/match/:matchId", async (req, res) => {
    try {
        const { matchId } = req.params;
        const matchData = await fetchData(matchId);
        res.json(matchData);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
