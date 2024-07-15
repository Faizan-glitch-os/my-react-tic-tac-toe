import "./App.css";
import PlayerNamingCard from "./player-naming-card.jsx";

function App() {
  return (
    <>
      {/* <aside className="backdrop"></aside> */}
      <section className="player-naming-section">
        <PlayerNamingCard />
        <PlayerNamingCard />
      </section>
    </>
  );
}

export default App;
