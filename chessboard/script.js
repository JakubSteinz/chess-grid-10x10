document.addEventListener('DOMContentLoaded', () => {

    const boardElement = document.getElementById('chessboard');
    const resetButton = document.getElementById('reset-button');
    const boardSize = 10;

    function createBoard() {
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {

                const cell = document.createElement('div');

                cell.classList.add('cell');

                const colorClass = (i + j) % 2 === 0 ? 'light' : 'dark';
                cell.classList.add(colorClass);

                boardElement.appendChild(cell);
            }
        }
    }

    function handleCellClick(event) {
        const clickedCell = event.target;

        if (clickedCell.classList.contains('cell')) {
            clickedCell.classList.toggle('clicked');
        }
    }

    function resetBoard() {
        const allCells = boardElement.querySelectorAll('.cell');
        
        allCells.forEach(cell => {
            cell.classList.remove('clicked');
        });
    }

    boardElement.addEventListener('click', handleCellClick);
    resetButton.addEventListener('click', resetBoard);
    createBoard();
});