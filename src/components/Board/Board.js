import "./Board.css";
import React, { useEffect, useState } from "react";
import Square from "../Square/Square";

function Board() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState("null");
  const [xIndexs, setXIndexs] = useState([]);
  const [oIndexs, setOIndexs] = useState([]);

  const handleSq = (sqrIndex) => {
    if (winner === "null") {
      if (currentPlayer === "X") {
        // check if current sqr havent been selected before
        for (let i = 0; i < xIndexs.length; i++) {
          if (xIndexs[i] === sqrIndex) return;
        }
        for (let i = 0; i < oIndexs.length; i++) {
          if (oIndexs[i] === sqrIndex) return;
        }

        setXIndexs([...xIndexs, sqrIndex]);
        setCurrentPlayer("O");
      }

      if (currentPlayer === "O") {
        // check if current sqr havent been selected before
        for (let i = 0; i < xIndexs.length; i++) {
          if (xIndexs[i] === sqrIndex) return;
        }
        for (let i = 0; i < oIndexs.length; i++) {
          if (oIndexs[i] === sqrIndex) return;
        }

        setOIndexs([...oIndexs, sqrIndex]);
        setCurrentPlayer("X");
      }

      return currentPlayer;
    }
  };

  useEffect(() => {
    if (
      (xIndexs.includes(1) && xIndexs.includes(2) && xIndexs.includes(3)) ||
      (xIndexs.includes(4) && xIndexs.includes(5) && xIndexs.includes(6)) ||
      (xIndexs.includes(7) && xIndexs.includes(8) && xIndexs.includes(9)) ||
      (xIndexs.includes(7) && xIndexs.includes(4) && xIndexs.includes(1)) ||
      (xIndexs.includes(8) && xIndexs.includes(5) && xIndexs.includes(2)) ||
      (xIndexs.includes(9) && xIndexs.includes(6) && xIndexs.includes(3)) ||
      (xIndexs.includes(1) && xIndexs.includes(5) && xIndexs.includes(9)) ||
      (xIndexs.includes(3) && xIndexs.includes(5) && xIndexs.includes(7))
    ) {
      setWinner("X");
    }

    if (
      (oIndexs.includes(1) && oIndexs.includes(2) && oIndexs.includes(3)) ||
      (oIndexs.includes(4) && oIndexs.includes(5) && oIndexs.includes(6)) ||
      (oIndexs.includes(7) && oIndexs.includes(8) && oIndexs.includes(9)) ||
      (oIndexs.includes(7) && oIndexs.includes(4) && oIndexs.includes(1)) ||
      (oIndexs.includes(8) && oIndexs.includes(5) && oIndexs.includes(2)) ||
      (oIndexs.includes(9) && oIndexs.includes(6) && oIndexs.includes(3)) ||
      (oIndexs.includes(1) && oIndexs.includes(5) && oIndexs.includes(9)) ||
      (oIndexs.includes(3) && oIndexs.includes(5) && oIndexs.includes(7))
    ) {
      setWinner("O");
    }
  }, [xIndexs, oIndexs]);

  return (
    <div className="board">
      <div style={{ marginBottom: "10px", fontSize: "20px" }}>
        <div style={winner !== "null" ? { opacity: "0" } : { opacity: 1 }}>
          Current Player: <strong>{currentPlayer}</strong>
        </div>
      </div>
      <div style={{ marginBottom: "20px", fontSize: "20px" }}>
        Winner: <strong>{winner}</strong>
      </div>
      <div className="sqrs-row">
        <Square sqNum={1} clicked={handleSq} />
        <Square sqNum={2} clicked={handleSq} />
        <Square sqNum={3} clicked={handleSq} />
      </div>
      <div className="sqrs-row">
        <Square sqNum={4} clicked={handleSq} />
        <Square sqNum={5} clicked={handleSq} />
        <Square sqNum={6} clicked={handleSq} />
      </div>
      <div className="sqrs-row">
        <Square sqNum={7} clicked={handleSq} />
        <Square sqNum={8} clicked={handleSq} />
        <Square sqNum={9} clicked={handleSq} />
      </div>
    </div>
  );
}

export default Board;
