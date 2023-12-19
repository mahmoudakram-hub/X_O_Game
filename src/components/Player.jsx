/** @format */
import { useState } from "react";
export default function Player({ initialName, symbol, isActive, onChaneName }) {
    const [isEdite, setEdite] = useState(false);
    const [playerN, setplayerN] = useState(initialName);

    function handleEditeClick() {
        setEdite((Editing) => !Editing);
        if (isEdite) {
            onChaneName(symbol, playerN);
        }
    }
    function handelChange(event) {
        setplayerN((playername) => (playername = event.target.value));
    }
    let playerName = isEdite ? (
        <input type="text" required value={playerN} onChange={handelChange} />
    ) : (
        <span className="player-name">{playerN}</span>
    );
    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditeClick}>
                {isEdite ? "save" : "Edite"}
            </button>
        </li>
    );
}
