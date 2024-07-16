import { useState } from "react";

import "./App.css";

import PlayerNamingCard from "./player-naming-card.jsx";
import Backdrop from "./backdrop.jsx";
import PlayerRenamingCard from "./player-renaming-card.jsx";

function App() {
  const [isHidden, setIsHidden] = useState(false);

  let toggleBackdrop = () => setIsHidden((isHidden) => !isHidden);

  return (
    <>
      {isHidden && <Backdrop toggleBackdrop={toggleBackdrop} />}
      {isHidden && <PlayerRenamingCard toggleBackdrop={toggleBackdrop} />}
      <section className="player-naming-section">
        <PlayerNamingCard
          toggleBackdrop={toggleBackdrop}
          playerName={"Player-1"}
          symbol={"X"}
        />
        <PlayerNamingCard
          toggleBackdrop={toggleBackdrop}
          playerName={"Player-2"}
          symbol={"O"}
        />
      </section>
    </>
  );
}

export default App;
