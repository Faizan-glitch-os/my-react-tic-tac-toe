import { useState } from "react";

import "./App.css";

import PlayerNamingCard from "./player-naming-card.jsx";
import Backdrop from "./backdrop.jsx";

function App() {
  const [isHidden, setIsHidden] = useState(false);

  function toggleBackdrop() {
    setIsHidden(!isHidden);
    print(isHidden);
  }

  return (
    <>
      {isHidden && <Backdrop />}
      <section className="player-naming-section">
        <PlayerNamingCard toggleBackdrop={toggleBackdrop} />
        <PlayerNamingCard toggleBackdrop={toggleBackdrop} />
      </section>
    </>
  );
}

export default App;
