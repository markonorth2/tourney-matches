// MatchList.js

import React from "react"; //optional
import Match from "./Match";
import matchData from '../data/matchData';

function MatchList(props) {
  
  const parsedMatches = matchData.map(match => <Match key = {match.matchNumber} {...match} />);
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      { parsedMatches}
    </section>
  );
}

export default MatchList;