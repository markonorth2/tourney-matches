// MatchList.js

import React from "react"; //optional
import Match from "./Match";

// function MatchList(props) {
  
//   const parsedMatches = matchData.map(match => <Match key = {match.matchNumber} {...match} />);
//   return (
//     <section className="PlayerList MatchList">
//       <h1>Match list</h1>
//       { parsedMatches}
//     </section>
//   );
// }

function MatchList(props) {
  console.log("match", props);
  const { matches } = props
  const parsedMatches = matches.map((oneMatch, index) => <Match key={index} players={oneMatch.players} winner={oneMatch.winner} scoreDifference={oneMatch.scoreDifference} />)
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {parsedMatches}
    </section>
  );
}

export default MatchList;