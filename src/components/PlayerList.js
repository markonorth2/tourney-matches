// PlayerList.js

import React from "react"; //optional
import Player from "./Player";
import playerData from '../data/playerData';
import matchData from '../data/matchData';
import { preparePlayerData, addWinsToPlayers} from '../helpers/playerHelpers.js';

function PlayerList(props) {
  
  const playerArray = [];
  for (const player in playerData){
    playerArray.push(playerData[player])
  }
  const parsedPlayers = playerArray.map(player => <Player key={player.gamerTag} {...player} />);
  const playerDataArray = preparePlayerData(playerData);
  // const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {parsedPlayers};
    </section>
  );
}

export default PlayerList;