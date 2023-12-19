/** @format */

export default function gameBaord({ onSelectPlayer, board }) {
    // const [gameboard, setGameBoard] = useState(GameIntialBaord);
    // function HandelPlayerClick(rowIndex, colIndex) {
    //     setGameBoard((prevGameboard) => {
    //         const cobyedBoard = [...prevGameboard.map((col) => [...col])];
    //         cobyedBoard[rowIndex][colIndex] = playerSymole;

    //         // prevGameboard[rowIndex][colIndex] = "x";
    //         // console.log(gameboard);
    //         onSelectPlayer();
    //         return cobyedBoard;
    //     });
    //     // console.log(gameboard);
    // }
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((col, colindex) => (
                            <li key={colindex}>
                                <button
                                    onClick={() =>
                                        onSelectPlayer(rowIndex, colindex)
                                    }
                                    disabled={col != null}
                                >
                                    {col}
                                    {/* {console.log(gameboard)} */}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
