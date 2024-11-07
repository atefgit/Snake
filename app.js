import { Display } from "./Display.js";
import { Game } from "./Game.js";
const width = 50;
const height = 50;
const scale = 15;
const display = new Display(width, height, scale);
const game = new Game(width, height);
// Gestion des contrôles de direction
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            game.setDirection(0, -1);
            break;
        case "ArrowDown":
            game.setDirection(0, 1);
            break;
        case "ArrowLeft":
            game.setDirection(-1, 0);
            break;
        case "ArrowRight":
            game.setDirection(1, 0);
            break;
    }
});
// Lance le jeu
display.play(game);
