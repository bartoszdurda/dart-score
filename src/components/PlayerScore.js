function PlayerScore({gameState, playerData}) {
    function isPlayerActive() {
        return gameState.player === playerData.id;
    }

    function isRoundActive(round) {
        return gameState.round === round;
    }

    function isMoveActive(round, move) {
        return gameState.player === playerData.id && gameState.round === round && gameState.move === move;
    }

    return (
        <div className={"player-score " + (isPlayerActive() ? "active" : "")}>
            <div className="d-flex justify-content-around align-items-center">
                <div className="player-score-name text-center">{playerData.name}</div>
            </div>
            <hr />
            <div className={"player-score-round d-flex align-items-center justify-content-between " + (isRoundActive(0) ? "active" : "")}>
                <div className="player-score-round-number">1:</div>
                <div className={"player-score-round-cell " + (isMoveActive(0, 0) ? "active" : "")}>{playerData.rounds[0][0]}</div>
                <div className={"player-score-round-cell " + (isMoveActive(0, 1) ? "active" : "")}>{playerData.rounds[0][1]}</div>
                <div className={"player-score-round-cell " + (isMoveActive(0, 2) ? "active" : "")}>{playerData.rounds[0][2]}</div>
                <div className="player-score-round-result">{playerData.rounds[0][3]}</div>
            </div>
            <div className={"player-score-round d-flex align-items-center justify-content-between " + (isRoundActive(1) ? "active" : "")}>
                <div className="player-score-round-number">2:</div>
                <div className={"player-score-round-cell " + (isMoveActive(1, 0) ? "active" : "")}>{playerData.rounds[1][0]}</div>
                <div className={"player-score-round-cell " + (isMoveActive(1, 1) ? "active" : "")}>{playerData.rounds[1][1]}</div>
                <div className={"player-score-round-cell " + (isMoveActive(1, 2) ? "active" : "")}>{playerData.rounds[1][2]}</div>
                <div className="player-score-round-result">{playerData.rounds[1][3]}</div>
            </div>
            <div className={"player-score-round d-flex align-items-center justify-content-between " + (isRoundActive(2) ? "active" : "")}>
                <div className="player-score-round-number">3:</div>
                <div className={"player-score-round-cell " + (isMoveActive(2, 0) ? "active" : "")}>{playerData.rounds[2][0]}</div>
                <div className={"player-score-round-cell " + (isMoveActive(2, 1) ? "active" : "")}>{playerData.rounds[2][1]}</div>
                <div className={"player-score-round-cell " + (isMoveActive(2, 2) ? "active" : "")}>{playerData.rounds[2][2]}</div>
                <div className="player-score-round-result">{playerData.rounds[2][3]}</div>
            </div>
            <div className={"player-score-round d-flex align-items-center justify-content-between " + (isRoundActive(3) ? "active" : "")}>
                <div className="player-score-round-number">4:</div>
                <div className={"player-score-round-cell " + (isMoveActive(3, 0) ? "active" : "")}>{playerData.rounds[3][0]}</div>
                <div className={"player-score-round-cell " + (isMoveActive(3, 1) ? "active" : "")}>{playerData.rounds[3][1]}</div>
                <div className={"player-score-round-cell " + (isMoveActive(3, 2) ? "active" : "")}>{playerData.rounds[3][2]}</div>
                <div className="player-score-round-result">{playerData.rounds[3][3]}</div>
            </div>
            <div className={"player-score-round d-flex align-items-center justify-content-between " + (isRoundActive(4) ? "active" : "")}>
                <div className="player-score-round-number">5:</div>
                <div className={"player-score-round-cell " + (isMoveActive(4, 0) ? "active" : "")}>{playerData.rounds[4][0]}</div>
                <div className={"player-score-round-cell " + (isMoveActive(4, 1) ? "active" : "")}>{playerData.rounds[4][1]}</div>
                <div className={"player-score-round-cell " + (isMoveActive(4, 2) ? "active" : "")}>{playerData.rounds[4][2]}</div>
                <div className="player-score-round-result">{playerData.rounds[4][3]}</div>
            </div>
            <hr />
            <div class="player-score-overall text-center">
                {playerData.overall}
            </div>
        </div>
    )
}

export default PlayerScore;