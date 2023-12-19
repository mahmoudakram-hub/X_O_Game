/** @format */

export default function GameOver({ winner, onRematch }) {
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            {winner && (
                <p>
                    <span style={{ textTransform: "uppercase" }}>{winner}</span>{" "}
                    won!
                </p>
            )}
            {!winner && <p>it's drow!</p>}
            <p>
                <button onClick={onRematch}>Remach</button>
            </p>
        </div>
    );
}
