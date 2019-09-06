class TicTacToeWinnerChecker {

    constructor(size) {
        this.size = size;
    }

    convertBoard(board) {
        let newBoard = [];
        for(var i = 0; i < board.length; i++) {
            var row = [...board[i]];
            for(var j = 0; j < row.length; j++) {
                if(row[j]) {
                    row[j] = (row[j] === 'x' ? 1 : -1);
                }
            }
            newBoard = [...newBoard, ...row];
        }
        return newBoard;
    }

    checkWinner(board) {
        board = this.convertBoard(board);
        const hasWinner = this.checkRow(board) ||
            this.checkColumn(board) ||
            this.checkPrimaryDiagonal(board) ||
            this.checkSecondaryDiagonal(board);
        if(hasWinner === 0 && this.boardCompleted(board) === false) {
            return false;
        } 
        return hasWinner;
    }

    boardCompleted(board) {
        for(var i = 0; i < board.length; i++) {
            if(board[i] === null) {
                return false;
            }
        }
        return true;
    }

    checkRow(board) {
        // check rows
        for(var i = 0; i < board.length; i+=this.size) {
            var sum = board.slice(i, i + this.size).reduce((x, y) => x + y, 0);
            if(sum / this.size === -1 || sum / this.size === 1) {
                return sum / this.size;
            }
        }
        return 0;
    }

    checkColumn(board) {
        // check column
        for(var i = 0; i < this.size; i++) {
            var sum = 0;
            for(var j = i; j < board.length; j+=this.size) {
                sum += board[j];
            }
            if(sum / this.size === -1 || sum / this.size === 1) {
                return sum / this.size;
            }
        }
        return 0;
    }

    checkPrimaryDiagonal(board) {
        // check diagonal
        return this.checkDiagonals(board, this.size - 1, this.size - 1, board.length - 1);
    }

    checkSecondaryDiagonal(board) {
        // check diagonal
        return this.checkDiagonals(board, 0, this.size + 1);
    }

    checkDiagonals(board, initial, incr, length) {
        var sum = 0;
        length = length || board.length;
        for(var i = initial; i < length; i += incr) {
            sum += board[i];
        }
        if(sum / this.size === -1 || sum / this.size === 1) {
            return sum / this.size;
        }
        return 0;
    }
};

export default TicTacToeWinnerChecker;
