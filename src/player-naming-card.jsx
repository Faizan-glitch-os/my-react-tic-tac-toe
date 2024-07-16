/* eslint-disable react/prop-types */
export default function PlayerNamingCard({
  toggleBackdrop,
  symbol,
  playerName,
}) {
  return (
    <div className="player-naming-card">
      <h3>Player-1</h3>
      <h2>{playerName}</h2>
      <h2>{symbol}</h2>
      <button onClick={toggleBackdrop}>Rename</button>
    </div>
  );
}
