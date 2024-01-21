#!/bin/bash
# This script will import all the json files in the current directory into the LeagueData database
for filename in *; do mongoimport --db LeagueData --collection champions --file $filename; done