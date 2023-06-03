import { useState } from "react";

function PlayerScore({ gameState, playerData, scoreboard, getNextPlayerId, setScoreboard }) {
    const [playerExclude, setPlayerExclude] = useState(false)

    function isPlayerActive() {
        return !playerExclude && gameState.player === playerData.id;
    }

    function isRoundActive(round) {
        return !playerExclude && gameState.round === round;
    }

    function isMoveActive(round, move) {
        return !playerExclude && gameState.player === playerData.id && gameState.round === round && gameState.move === move;
    }

    function excludePlayer() {
        const currentPlayerId = playerData.id;
        const nextPlayerId = getNextPlayerId(currentPlayerId, scoreboard.players.length, scoreboard.players);
        
        setPlayerExclude(true)

        // If first player is excluded then move to next one
        if (currentPlayerId === 0) {
            const nextRound = scoreboard.gameState.round;
            const nextMove = 0;
            setScoreboard(prevScoreboard => {
                const updatedPlayers = [...prevScoreboard.players];
                updatedPlayers[currentPlayerId].disable = true;
                return {
                    ...prevScoreboard,
                    gameState: { player: nextPlayerId, round: nextRound, move: nextMove },
                    players: updatedPlayers
                };
            });
        } else {
            // other way just disable excleded player
            setScoreboard(prevScoreboard => {
                const updatedPlayers = [...prevScoreboard.players];
                updatedPlayers[currentPlayerId].disable = true;
                return {
                    ...prevScoreboard,
                    players: updatedPlayers
                };
            });
        }
    }


    return (
        <div className={"player-score " + (isPlayerActive() ? "active " : "") + (playerExclude ? "disabled" : "")}>
            <div className="d-flex justify-content-around align-items-center">
                <div className="player-score-name w-100 px-3">
                    {playerData.name}
                    <button className="btn btn-dark btn-sm float-end" onClick={excludePlayer}>Exclude</button>
                </div>

            </div>
            <hr />
            <div className={"player-score-round d-flex align-items-center justify-content-between " + (isRoundActive(0) ? "active" : "")}>
                <div className="player-score-round-number ps-2">1:</div>
                <div className={"player-score-round-cell " + (isMoveActive(0, 0) ? "active" : "")}>{playerData.rounds[0][0]}</div>
                <div className={"player-score-round-cell " + (isMoveActive(0, 1) ? "active" : "")}>{playerData.rounds[0][1]}</div>
                <div className={"player-score-round-cell " + (isMoveActive(0, 2) ? "active" : "")}>{playerData.rounds[0][2]}</div>
                <div className="player-score-round-result pe-2">{playerData.rounds[0][3]}</div>
            </div>
            <div className={"player-score-round d-flex align-items-center justify-content-between " + (isRoundActive(1) ? "active" : "")}>
                <div className="player-score-round-number ps-2">2:</div>
                <div className={"player-score-round-cell " + (isMoveActive(1, 0) ? "active" : "")}>{playerData.rounds[1][0]}</div>
                <div className={"player-score-round-cell " + (isMoveActive(1, 1) ? "active" : "")}>{playerData.rounds[1][1]}</div>
                <div className={"player-score-round-cell " + (isMoveActive(1, 2) ? "active" : "")}>{playerData.rounds[1][2]}</div>
                <div className="player-score-round-result pe-2">{playerData.rounds[1][3]}</div>
            </div>
            <div className={"player-score-round d-flex align-items-center justify-content-between " + (isRoundActive(2) ? "active" : "")}>
                <div className="player-score-round-number ps-2">3:</div>
                <div className={"player-score-round-cell " + (isMoveActive(2, 0) ? "active" : "")}>{playerData.rounds[2][0]}</div>
                <div className={"player-score-round-cell " + (isMoveActive(2, 1) ? "active" : "")}>{playerData.rounds[2][1]}</div>
                <div className={"player-score-round-cell " + (isMoveActive(2, 2) ? "active" : "")}>{playerData.rounds[2][2]}</div>
                <div className="player-score-round-result pe-2">{playerData.rounds[2][3]}</div>
            </div>
            <div className={"player-score-round d-flex align-items-center justify-content-between " + (isRoundActive(3) ? "active" : "")}>
                <div className="player-score-round-number ps-2">4:</div>
                <div className={"player-score-round-cell " + (isMoveActive(3, 0) ? "active" : "")}>{playerData.rounds[3][0]}</div>
                <div className={"player-score-round-cell " + (isMoveActive(3, 1) ? "active" : "")}>{playerData.rounds[3][1]}</div>
                <div className={"player-score-round-cell " + (isMoveActive(3, 2) ? "active" : "")}>{playerData.rounds[3][2]}</div>
                <div className="player-score-round-result pe-2">{playerData.rounds[3][3]}</div>
            </div>
            <div className={"player-score-round d-flex align-items-center justify-content-between " + (isRoundActive(4) ? "active" : "")}>
                <div className="player-score-round-number ps-2">5:</div>
                <div className={"player-score-round-cell " + (isMoveActive(4, 0) ? "active" : "")}>{playerData.rounds[4][0]}</div>
                <div className={"player-score-round-cell " + (isMoveActive(4, 1) ? "active" : "")}>{playerData.rounds[4][1]}</div>
                <div className={"player-score-round-cell " + (isMoveActive(4, 2) ? "active" : "")}>{playerData.rounds[4][2]}</div>
                <div className="player-score-round-result pe-2">{playerData.rounds[4][3]}</div>
            </div>
            <hr />
            <div className="player-score-overall text-center">
                {playerData.overall}
            </div>
        </div>
    )
}

export default PlayerScore;