/** @format */
import Player from "./components/Player.jsx";
import GameBaord from "./components/GameBaord.jsx";
import GameOver from "./components/GameOver.jsx";
import Log from "./components/Log.jsx";
import { useState } from "react";
import {
    derivedGameBoar,
    deriveActivePlayer,
    derivedWinner,
} from "./appFunctions.js";

const PLAYERS = {
    X: "player 1",
    O: "player 2",
};

function App() {
    const [playerName, setPlayerName] = useState(PLAYERS);
    function handelPlayerName(symbol, player) {
        setPlayerName((previousName) => {
            return {
                ...previousName,
                [symbol]: player,
            };
        });
    }
    const [gameTurns, setTurns] = useState([]);
    let playerInTurn = deriveActivePlayer(gameTurns);
    let gameBoard = derivedGameBoar(gameTurns);

    const winner = derivedWinner(gameBoard, playerName);
    const hasDrow = gameTurns.length === 9 && !winner;

    function handelSelectedPlayer(rowIndex, colIndex) {
        setTurns((prevActivePlayer) => {
            let playreTrun = deriveActivePlayer(prevActivePlayer);
            const updatedTurns = [
                { squar: { row: rowIndex, col: colIndex }, player: playreTrun },
                ...prevActivePlayer,
            ];
            return updatedTurns;
        });
    }

    function handelRematch() {
        setTurns([]);
    }
    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    {Object.keys(PLAYERS).map((symbol) => (
                        <Player
                            initialName={PLAYERS.X}
                            symbol={symbol}
                            isActive={playerInTurn === symbol}
                            onChaneName={handelPlayerName}
                            key={symbol}
                        />
                    ))}
                    {/* <Player
                        initialName={PLAYERS.X}
                        symbol="X"
                        isActive={playerInTurn === "X"}
                        onChaneName={handelPlayerName}
                    />
                    <Player
                        initialName={PLAYERS.O}
                        symbol="O"
                        isActive={playerInTurn === "O"}
                        onChaneName={handelPlayerName}
                    /> */}
                </ol>
                {(winner || hasDrow) && (
                    <GameOver winner={winner} onRematch={handelRematch} />
                )}
                <GameBaord
                    onSelectPlayer={handelSelectedPlayer}
                    board={gameBoard}
                />
            </div>
            <Log turns={gameTurns} />
        </main>
    );
}

export default App;

