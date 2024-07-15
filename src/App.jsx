import { useState } from "react";

import "./App.css";

import PlayerNamingCard from "./player-naming-card.jsx";
import Backdrop from "./backdrop.jsx";

function App() {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <Backdrop />
      <section className="player-naming-section">
        <PlayerNamingCard />
        <PlayerNamingCard />
      </section>
    </>
  );
}

export default App;
