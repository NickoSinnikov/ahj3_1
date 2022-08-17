import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
    const newGame = new Game();
    newGame.punchGoblin.bind(newGame)();
});