let currentScene = 0;

let playerName = "";

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");

const nameScreen = document.getElementById("name-screen");
const gameScreen = document.getElementById("game-screen");

const storyBox = document.getElementById("story-box");

startBtn.addEventListener("click", startGame);

nextBtn.addEventListener("click", nextScene);

function startGame(){

    playerName =
        document.getElementById("player-name").value;

    if(playerName.trim() === ""){
        alert("Ingrese un nombre");
        return;
    }

    nameScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    showScene();
}

function showScene(){

    let text = scenes[currentScene];

    text = text.replace(
        "{nombre}",
        playerName
    );

    storyBox.innerText = text;
}

function nextScene(){

    currentScene++;

    if(currentScene >= scenes.length){

        storyBox.innerHTML =

        `Fin de la demo.<br><br>
        Gracias por jugar, ${playerName}.`;

        nextBtn.style.display = "none";

        return;
    }

    showScene();
}