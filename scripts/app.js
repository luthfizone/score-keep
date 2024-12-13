
const p1Display = document.querySelector("#p1-display");
const p2Display = document.querySelector("#p2-display");
const p1Button = document.querySelector("#p1-button");
const p2Button = document.querySelector("#p2-button");


let p1Score = 0;
let p2Score = 0;
let winPoint = 5;
let isGameOver = false;


p1Button.addEventListener("click", () => {
    if (!isGameOver) {
        p1Score++;

        if (p1Score === winPoint) {
            isGameOver = true;
        }

        p1Display.textContent = p1Score;
    }
})


p2Button.addEventListener("click", () => {
    if (!isGameOver) {
        p2Score++;

        if (p2Score === winPoint) {
            isGameOver = true;
        }

        p2Display.textContent = p2Score;
    }
})