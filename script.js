import { Game } from "./game.js";

const xButton = document.querySelector('.menu--turn__mark--x');
const oButton = document.querySelector('.menu--turn__mark--o');
const newGameCPU = document.querySelector('#newGameCPU');
const menu = document.querySelector('.menu');
const board = document.querySelector('.board');
const playerTurnImage = document.querySelector('.board--navigation__turn--image img');
const oMark = './assets/icon-o.svg';
const xMark = './assets/icon-x.svg';
const game = new Game();

const pannels = document.querySelectorAll('.board--panels .panel');
pannels.forEach((panel, index) => {
    panel.addEventListener('click', () => {

        // Prevent further moves if game is over or panel is already marked
        if(game.isGameOver || game.board[Math.floor(index / 3)][index % 3] !== ''){
            return;
        }
        // fill the panel
        const currentPlayer = game.currentPlayer;
        if(currentPlayer === 'O')
            panel.innerHTML = `<img src="${oMark}" alt="O Mark">`;
        if(currentPlayer === 'X')
            panel.innerHTML = `<img src="${xMark}" alt="O Mark">`;

        // Update the game board
        game.board[Math.floor(index / 3)][index % 3] = game.currentPlayer;
        const result = game.checkWin();
        
        if(result){
            if(result === 'Draw'){
                console.log("It's a draw!");
            } else {
                console.log(`Player ${result} wins!`);
            }
        } else {
            const player = game.togglePlayer();
            if(player === 'O' && oButton.dataset.selected === 'true'){
                playerTurnImage.src = './assets/icon-o.svg';
            }else{
                playerTurnImage.src = './assets/icon-x.svg';        
            }
        }
    });
});

xButton.addEventListener('click', () => {
    xButton.dataset.selected ='true';
    oButton.dataset.selected ='false';
    console.log(xButton.dataset.selected);
});

oButton.addEventListener('click', () => {
    xButton.dataset.selected = 'false';
    oButton.dataset.selected = 'true';
}); 

newGameCPU.addEventListener('click', () => {
    menu.style.display = 'none';
    board.style.display = 'flex';
});