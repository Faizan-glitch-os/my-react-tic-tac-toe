/* eslint-disable react/prop-types */
export default function PlayerNamingCard({ toggleBackdrop }) {
  return (
    <div className="player-naming-card">
      <h3>Player-1</h3>
      <h2>Player Name</h2>
      <h2>Player Symbol</h2>
      <button onClick={toggleBackdrop}>Rename</button>
    </div>
  );
}
