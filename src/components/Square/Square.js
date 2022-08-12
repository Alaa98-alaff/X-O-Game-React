import "./Square.css";

import { useEffect, useState } from "react";

function Square({ ...props }) {
  const { sqNum, clicked } = props;
  const [currentPlayer, setCurrentPlayer] = useState("");

  const handleClickedSq = (e) => {
    const curPlayer = clicked(sqNum);

    if (curPlayer) setCurrentPlayer(curPlayer);
  };

  return (
    <div className="sqr" onClick={handleClickedSq}>
      {currentPlayer && currentPlayer}
    </div>
  );
}

export default Square;
