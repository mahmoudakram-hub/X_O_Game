/** @format */
import { WINNING_COMBINATIONS } from "./WinningCompenation.js";

const GAME_INTIAL_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export function derivedGameBoar(gameTurns) {
    let gameBoard = [...GAME_INTIAL_BOARD.map((array) => [...array])];
    for (const turn of gameTurns) {
        const { squar, player } = turn;
        const { row, col } = squar;
        gameBoard[row][col] = player;
    }
    return gameBoard;
}

export function deriveActivePlayer(gameturn) {
    let playreTrun = "X";
    if (gameturn.length > 0 && gameturn[0].player === "X") {
        playreTrun = "O";
    }
    return playreTrun;
}
export function derivedWinner(gameBoard, playerName) {
    let winner = null;
    for (const compination of WINNING_COMBINATIONS) {
        const firstSquareSempole =
            gameBoard[compination[0].row][compination[0].column];
        const secondSquareSempole =
            gameBoard[compination[1].row][compination[1].column];
        const thierdSquareSempole =
            gameBoard[compination[2].row][compination[2].column];
        if (
            firstSquareSempole &&
            firstSquareSempole === secondSquareSempole &&
            firstSquareSempole === thierdSquareSempole
        ) {
            winner = playerName[firstSquareSempole];
        }
    }
    return winner;
}
