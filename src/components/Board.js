import { useState } from "react";

function Board({onScore}) {
    const [isDouble, setIsDouble] = useState(0);
    const [isTriple, setIsTriple] = useState(0);

    function onNumberClick(e) {
        let score = parseInt(e.target.innerHTML);

        if(isDouble) {
            score *= 2;
        } else if(isTriple) {
            score *= 3;
        }

        setIsDouble(false);
        setIsTriple(false);

        onScore(score);
    }

    function onToggleClick(modifier) {
        if(modifier == 2) {

            setIsDouble(true);
            setIsTriple(false);
        } else if(modifier == 3) {
            setIsDouble(false);
            setIsTriple(true);
        }
    }

    return (
        <div className="board">
            <div className="d-flex justify-content-center">
                <button className="btn btn-danger" onClick={onNumberClick}>0</button>
                <button className="btn btn-primary" onClick={onNumberClick}>1</button>
                <button className="btn btn-primary" onClick={onNumberClick}>2</button>
                <button className="btn btn-primary" onClick={onNumberClick}>3</button>
                <button className="btn btn-primary" onClick={onNumberClick}>4</button>
                <button className="btn btn-primary" onClick={onNumberClick}>5</button>
                <button className="btn btn-primary" onClick={onNumberClick}>6</button>
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary" onClick={onNumberClick}>7</button>
                <button className="btn btn-primary" onClick={onNumberClick}>8</button>
                <button className="btn btn-primary" onClick={onNumberClick}>9</button>
                <button className="btn btn-primary" onClick={onNumberClick}>10</button>
                <button className="btn btn-primary" onClick={onNumberClick}>11</button>
                <button className="btn btn-primary" onClick={onNumberClick}>12</button>
                <button className="btn btn-primary" onClick={onNumberClick}>13</button>
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary" onClick={onNumberClick}>14</button>
                <button className="btn btn-primary" onClick={onNumberClick}>15</button>
                <button className="btn btn-primary" onClick={onNumberClick}>16</button>
                <button className="btn btn-primary" onClick={onNumberClick}>17</button>
                <button className="btn btn-primary" onClick={onNumberClick}>18</button>
                <button className="btn btn-primary" onClick={onNumberClick}>19</button>
                <button className="btn btn-primary" onClick={onNumberClick}>20</button>
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-warning" onClick={onNumberClick}>25</button>
                <button className="btn btn-warning" onClick={onNumberClick}>50</button>
                <button className={"btn toggle " + (isDouble ? "btn-secondary" : "btn-success")} onClick={() => onToggleClick(2)}>DOUBLE</button>
                <button className={"btn toggle " + (isTriple ? "btn-secondary" : "btn-success")} onClick={() => onToggleClick(3)}>TRIPLE</button>
            </div>
        </div>
    )
}

export default Board;