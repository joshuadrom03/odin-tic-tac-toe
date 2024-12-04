//store the gameboard inside of an object
function Gameboard(){
    const rows = 3;
    const columns = 3;
    const board = [];

    for (i = 0; i < rows; i++){
        board[i] = [];
        for (let j = 0; j < columns; j++){
            board[i].push("")
        }
    }

    console.log(board);
}
Gameboard();

