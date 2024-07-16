import { useState } from "react";

/* eslint-disable react/prop-types */
export default function PlayerRenamingCard({ toggleBackdrop }) {
  let [editPlayerName, seteditPlayerName] = useState("");

  let toEditPlayerName = (event) => {
    seteditPlayerName(event.target.value);
  };

  return (
    <aside className="player-renaming-card">
      <h3>Player-1</h3>
      <label htmlFor="name">Enter your name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={editPlayerName}
        onChange={toEditPlayerName}
      />
      <div className="cancel-okay-buttons">
        <button className="button cancel" onClick={toggleBackdrop}>
          Cancel
        </button>
        <button className="button okay">Okay</button>
      </div>
    </aside>
  );
}
