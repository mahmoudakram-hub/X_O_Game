/** @format */

export default function Log({ turns }) {
    return (
        <ol id="log">
            {turns.map((turn, index) => (
                <li key={`${turn.squar.row}${turn.squar.col}`}>
                    {turn.player} select {turn.squar.row}
                    {turn.squar.col}
                </li>
            ))}
        </ol>
    );
}
