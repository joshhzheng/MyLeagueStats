const express = require("express");
const router = express.Router();

const { fetchData } = require("../components/getMatchData.js");
const { fetchNormalMatch } = require("../components/getNormalMatchList.js");
const { fetchAccountData } = require("../components/getAccountPuuid.js");

// get the current player data
router.get("/data/player/:accountName/:accountTagline", async (req, res) => {
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
router.get("/data/match-list/:puuid", async (req, res) => {
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
router.get("/data/match/:matchId", async (req, res) => {
    try {
        const { matchId } = req.params;
        const matchData = await fetchData(matchId);
        res.json(matchData);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;