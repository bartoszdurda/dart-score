import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Board from './components/Board';
import PlayerScore from './components/PlayerScore';
import { useState } from 'react';

function App() {

  const initialState = {
    gameState: {
      player: 0,
      round: 0,
      move: 0
    },
    players: getPlayers()
  };

  function getPlayers() {
    let players = [
      {
        id: 0,
        name: 'Bartek',
        overall: 0,
        rounds: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ]
      },
      {
        id: 1,
        name: 'Fadi',
        overall: 0,
        rounds: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ]
      },
      {
        id: 2,
        name: 'Piotr',
        overall: 0,
        rounds: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ]
      },
      {
        id: 3,
        name: 'Rafał',
        overall: 0,
        rounds: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ]
      }
    ];

    players = players.sort((a, b) => 0.5 - Math.random());
    for(let i = 0; i < 4; i++) {
      players[i].id = i;
    }

    return players;
  }

  const [scoreboardHistory, setScoreboardHistory] = useState([]);
  const [scoreboard, setScoreboard] = useState(initialState);

  function onScore(score) {
    console.log("innn")
    let updatedScoreboardHistory = structuredClone(scoreboardHistory);
    updatedScoreboardHistory.push(structuredClone(scoreboard));
    setScoreboardHistory(updatedScoreboardHistory);

    let updatedScoreboard = structuredClone(scoreboard);

    const currentRound = scoreboard.gameState.round;
    let nextRound = currentRound;

    const currentMove = scoreboard.gameState.move;
    const nextMove = getNextMove(currentMove);

    const currentPlayerId = scoreboard.gameState.player;
    let nextPlayerId = currentPlayerId;

    if (nextMove === 0) {
      nextPlayerId = getNextPlayerId(currentPlayerId, scoreboard.players.length, scoreboard.players);

      if (nextPlayerId === 0 && !scoreboard.gameState.player.disable) {
        nextRound++;
      }else if(nextPlayerId === 1 && scoreboard.players[0].disable){
        nextRound++;
      }
    }

    console.log([nextPlayerId, nextRound, nextMove]);

    let currentPlayersScoreboard = structuredClone(scoreboard.players);

    let currentPlayerScoreboard = structuredClone(scoreboard.players[currentPlayerId]);

    currentPlayerScoreboard.rounds[currentRound][currentMove] = score;
    currentPlayerScoreboard.rounds[currentRound][3] += score;
    currentPlayerScoreboard.overall += score;
    currentPlayersScoreboard[currentPlayerId] = currentPlayerScoreboard;

    console.log(currentPlayerScoreboard);

    updatedScoreboard.gameState = { player: nextPlayerId, round: nextRound, move: nextMove };
    updatedScoreboard.players = currentPlayersScoreboard;

    setScoreboard(updatedScoreboard);
  }

  function onReset() {
    setScoreboard(initialState);
  }

  function onUndo() {
    if (scoreboardHistory.length === 0) {
      return;
    }

    let updatedScoreboardHistory = structuredClone(scoreboardHistory);

    const lastScoreboardState = updatedScoreboardHistory.pop();
    setScoreboardHistory(updatedScoreboardHistory);
    setScoreboard(lastScoreboardState);
  }

  function getNextPlayerId(currentPlayerId, playersCount, players) {
    for (let i = 1; i <= playersCount; i++) {
      const nextPlayerId = (currentPlayerId + i) % playersCount;
      if (!players[nextPlayerId].disable) {
        return nextPlayerId;
      }
    }
  
    return 0;
  }  

  function getNextMove(currentMove) {
    if (currentMove < 2) {
      return currentMove + 1;
    }

    return 0;
  }

  return (
    <div className="App container-fluid">
      <div className="row align-items-center">
        <div className="col-12 col-md-3 ps-0">
          <PlayerScore gameState={scoreboard.gameState} playerData={scoreboard.players[0]} scoreboard={scoreboard} getNextPlayerId={getNextPlayerId} setScoreboard={setScoreboard}/>
          <PlayerScore gameState={scoreboard.gameState} playerData={scoreboard.players[1]} scoreboard={scoreboard} getNextPlayerId={getNextPlayerId} setScoreboard={setScoreboard}/>
        </div>
        <div className="col-12 col-md-6 p-0">
          <div className="d-flex justify-content-center align-items-center mb-4">
            <button className="btn btn-sm btn-success me-3" onClick={onUndo}>UNDO</button>
            <h1 className="">DART</h1>
            <button className="btn btn-sm btn-danger ms-3" onClick={onReset}>RESET</button>
          </div>
          <Board onScore={onScore}></Board>
        </div>
        <div className="col-12 col-md-3 pe-0">
          <PlayerScore gameState={scoreboard.gameState} playerData={scoreboard.players[2]} scoreboard={scoreboard} getNextPlayerId={getNextPlayerId} setScoreboard={setScoreboard}/>
          <PlayerScore gameState={scoreboard.gameState} playerData={scoreboard.players[3]} scoreboard={scoreboard} getNextPlayerId={getNextPlayerId} setScoreboard={setScoreboard}/>
        </div>
      </div>
    </div>
  );
}

export default App;
