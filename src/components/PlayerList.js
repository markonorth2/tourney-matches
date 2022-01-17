// PlayerList.js

import React from "react"; //optional
import Player from "./Player";

// function PlayerList(props) {
  
//   const playerArray = [];
//   for (const player in playerData){
//     playerArray.push(playerData[player])
//   }
//   const parsedPlayers = playerArray.map(player => <Player key={player.gamerTag} {...player} />);
//   const playerDataArray = preparePlayerData(playerData);
//   // const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
//   return (
//     <section className="PlayerList">
//       <h1>Current participating players</h1>
//       {parsedPlayers};
//     </section>
//   );
// }

function PlayerList(props) {
  const { players } = props
  const parsedPlayers = players.map((onePlayer, index) => <Player key={index} gamerTag={onePlayer.gamerTag} firstName={onePlayer.firstName} lastName={onePlayer.lastName} wins={onePlayer.wins} />)
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {parsedPlayers}
    </section>
  );
}

export default PlayerList;