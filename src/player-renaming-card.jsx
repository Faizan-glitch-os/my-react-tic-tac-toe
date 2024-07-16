export default function PlayerRenamingCard() {
  return (
    <aside className="player-renaming-card">
      <h3>Player-1</h3>
      <label htmlFor="name">Enter your name</label>
      <input type="text" name="name" id="name" />
      <div className="cancel-okay-buttons">
        <button className="button cancel">Cancel</button>
        <button className="button okay">Okay</button>
      </div>
    </aside>
  );
}
