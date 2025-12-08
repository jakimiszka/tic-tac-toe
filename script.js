import { Game } from "./game.js";

const xButton = document.querySelector('.menu--turn__mark--x');
const oButton = document.querySelector('.menu--turn__mark--o');
const newGameCPU = document.querySelector('#newGameCPU');
const menu = document.querySelector('.menu');
const board = document.querySelector('.board');

const game = new Game();
const pannels = document.querySelectorAll('.board--panels .panel');
pannels.forEach((panel, index) => {
    panel.addEventListener('click', () => {
        console.log(index);
        if(game.isGameOver || game.board[Math.floor(index / 3)][index % 3] !== ''){
            return;
        }
        panel.textContent = game.currentPlayer;
        game.board[Math.floor(index / 3)][index % 3] = game.currentPlayer;
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