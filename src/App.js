import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
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
    players: [
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
    ]
  };

  const [scoreboardHistory, setScoreboardHistory] = useState([]);
  const [scoreboard, setScoreboard] = useState(initialState);

  function onScore(score) {
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

    if(nextMove == 0) {
      nextPlayerId = getNextPlayerId(currentPlayerId, scoreboard.players.length);

      if(nextPlayerId == 0) {
        nextRound++;
      }
    }

    let currentPlayersScoreboard = structuredClone(scoreboard.players);

    let currentPlayerScoreboard = structuredClone(scoreboard.players[currentPlayerId]);
    
    currentPlayerScoreboard.rounds[currentRound][currentMove] = score;
    currentPlayerScoreboard.rounds[currentRound][3] += score;
    currentPlayerScoreboard.overall += score;
    currentPlayersScoreboard[currentPlayerId] = currentPlayerScoreboard;

    console.log(currentPlayerScoreboard);

    updatedScoreboard.gameState = {player: nextPlayerId, round: nextRound, move: nextMove};
    updatedScoreboard.players = currentPlayersScoreboard;

    setScoreboard(updatedScoreboard);
  }

  function onReset() {
    setScoreboard(initialState);
  }

  function onUndo() {
    if(scoreboardHistory.length === 0) {
      return;
    }

    let updatedScoreboardHistory = structuredClone(scoreboardHistory);

    const lastScoreboardState = updatedScoreboardHistory.pop();
    setScoreboardHistory(updatedScoreboardHistory);
    setScoreboard(lastScoreboardState);
  }

  function getNextPlayerId(currentPlayerId, playersCount) {
    if(currentPlayerId < playersCount - 1) {
      return currentPlayerId + 1;
    }

    return 0;
  }

  function getNextMove(currentMove) {
    if(currentMove < 2) {
      return currentMove + 1;
    }

    return 0;
  }

  return (
    <div className="App">
      <div className="d-flex justify-content-center align-items-center mb-4">
        <button className="btn btn-sm btn-success me-3" onClick={onUndo}>UNDO</button>
        <h1 className="">DART SCOREBOARD</h1>
        <button className="btn btn-sm btn-danger ms-3" onClick={onReset}>RESET</button>
      </div>
      <div className="row align-items-center">
        <div className="col-12 col-md-3">
          <PlayerScore gameState={scoreboard.gameState} playerData={scoreboard.players[0]}></PlayerScore>
          <PlayerScore gameState={scoreboard.gameState} playerData={scoreboard.players[1]}></PlayerScore>
        </div>
        <div className="col-12 col-md-6">
          <Board onScore={onScore}></Board>
        </div>
        <div className="col-12 col-md-3">
          <PlayerScore gameState={scoreboard.gameState} playerData={scoreboard.players[2]}></PlayerScore>
          <PlayerScore gameState={scoreboard.gameState} playerData={scoreboard.players[3]}></PlayerScore>
        </div>
      </div>
    </div>
  );
}

export default App;
