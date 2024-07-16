import { useState } from "react";

import "./App.css";

import PlayerNamingCard from "./player-naming-card.jsx";
import Backdrop from "./backdrop.jsx";
import PlayerRenamingCard from "./player-renaming-card.jsx";

function App() {
  const [isHidden, setIsHidden] = useState(false);

  let toggleBackdrop = () => {
    setIsHidden(!isHidden);
    console.log(isHidden);
  };

  return (
    <>
      {isHidden && <Backdrop toggleBackdrop={toggleBackdrop} />}
      {isHidden && <PlayerRenamingCard />}
      <section className="player-naming-section">
        <PlayerNamingCard toggleBackdrop={toggleBackdrop} />
        <PlayerNamingCard toggleBackdrop={toggleBackdrop} />
      </section>
    </>
  );
}

export default App;
