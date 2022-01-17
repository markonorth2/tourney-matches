import logo from './logo.svg';
import './App.css';
import MatchList from './components/MatchList'
import PlayerList from './components/PlayerList'
import matchData from './data/matchData'
import playerData from './data/playerData'
import { preparePlayerData, addWinsToPlayers} from './helpers/playerHelpers.js';

function App() {
  const preparedPlayerData = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(preparedPlayerData, matchData);
  const players = parsedPlayerData;

  //console.log("parsedPlayerData", parsedPlayerData);
  return (
    <div className="App">
      <h1>
        Tourney Matches{" "} 
        <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      {/* spread snytax */}
      <PlayerList players={players}/> 
      <MatchList matches={matchData}/>
    </div>
  );
}

export default App;
