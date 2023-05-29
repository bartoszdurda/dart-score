function PlayerScore({gameState, playerData}) {
    function isPlayerActive() {
        return gameState.player === playerData.id;
    }

    function isRoundActive(round) {
        return gameState.round === round;
    }

    return (
        <div className={"player-score " + (isPlayerActive() ? "active" : "")}>
            <div className="d-flex justify-content-around align-items-center">
                <span className="text-center">{playerData.name}</span>
            </div>
            <hr />
            <div className={"d-flex align-items-center " + (isRoundActive(0) ? "active" : "")}>
                <div>1:</div>
                <div className="player-score-round-cell">{playerData.rounds[0][0]}</div>
                <div className="player-score-round-cell">{playerData.rounds[0][1]}</div>
                <div className="player-score-round-cell">{playerData.rounds[0][2]}</div>
                <div className="player-score-round-result">{playerData.rounds[0][3]}</div>
            </div>
            <div className={"d-flex align-items-center " + (isRoundActive(1) ? "active" : "")}>
                <div>2:</div>
                <div className="player-score-round-cell">{playerData.rounds[1][0]}</div>
                <div className="player-score-round-cell">{playerData.rounds[1][1]}</div>
                <div className="player-score-round-cell">{playerData.rounds[1][2]}</div>
                <div className="player-score-round-result">{playerData.rounds[1][3]}</div>
            </div>
            <div className={"d-flex align-items-center " + (isRoundActive(2) ? "active" : "")}>
                <div>3:</div>
                <div className="player-score-round-cell">{playerData.rounds[2][0]}</div>
                <div className="player-score-round-cell">{playerData.rounds[2][1]}</div>
                <div className="player-score-round-cell">{playerData.rounds[2][2]}</div>
                <div className="player-score-round-result">{playerData.rounds[2][3]}</div>
            </div>
            <div className={"d-flex align-items-center " + (isRoundActive(3) ? "active" : "")}>
                <div>4:</div>
                <div className="player-score-round-cell">{playerData.rounds[3][0]}</div>
                <div className="player-score-round-cell">{playerData.rounds[3][1]}</div>
                <div className="player-score-round-cell">{playerData.rounds[3][2]}</div>
                <div className="player-score-round-result">{playerData.rounds[3][3]}</div>
            </div>
            <div className={"d-flex align-items-center " + (isRoundActive(4) ? "active" : "")}>
                <div>5:</div>
                <div className="player-score-round-cell">{playerData.rounds[4][0]}</div>
                <div className="player-score-round-cell">{playerData.rounds[4][1]}</div>
                <div className="player-score-round-cell">{playerData.rounds[4][2]}</div>
                <div className="player-score-round-result">{playerData.rounds[4][3]}</div>
            </div>
            <hr />
            <h3 class="text-center">
                {playerData.overall}
            </h3>
        </div>
    )
}

export default PlayerScore;