class Game{
    constructor(){
        this.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        this.currentPlayer = 'X';
        this.isGameOver = false;
    }
}

export { Game };