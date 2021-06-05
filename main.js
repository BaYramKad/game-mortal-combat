const arenas = document.querySelector(".arenas")
const randomButton = document.querySelector(".button")



const $player1 = {
    player: 1,
    name: "Scorpion",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ["sword", "fire", "machine gun"], 
    attack: function() {
        console.log(`${this.name} Fight...`);
    }
}

const $player2 = {
    player: 2,
    name: "Subzero",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ["sword", "fire", "machine gun"], 
    attack: function() {
        console.log(`${this.name} Fight...`);
    }
}

function createElement(tag, className) {
    const $tag = document.createElement(tag)
    return className ? $tag.classList.add(className) || $tag : $tag
}

function createPlayer(clPlayer) {
    let player1 = createElement('div', 'player' + clPlayer.player),
        img = createElement('img'),
        character = createElement('div', 'character'),
        life = createElement('div', 'life'),
        name = createElement('div', 'name'),
        progressbar = createElement('div', 'progressbar'),
        arenas = createElement('div', 'arenas');

    life.style.width = clPlayer.hp + "%"
    name.innerText = clPlayer.name
    img.src = clPlayer.img

    progressbar.appendChild(life)
    progressbar.appendChild(name) 

    character.appendChild(img)
    player1.appendChild(progressbar)
    player1.appendChild(character)

    return arenas.appendChild(player1)
}

arenas.appendChild(createPlayer($player1))
arenas.appendChild(createPlayer($player2))

function playerLose(name) {
    const $loseTitle = createElement('div', "loseTitle")
    $loseTitle.innerText = name + ' lose'
    return $loseTitle
}

function changeHP(character) {
    const lifePlayer = document.querySelector('.player' + character.player + ' .life');
    character.hp -= Math.floor(Math.random() * 20)

    lifePlayer.style.width = character.hp + "%"
    if (character.hp <= 0) {
        character.hp = 0
        lifePlayer.style.width = character.hp + "%"
        arenas.appendChild(playerLose(character.name))
    }
}

randomButton.addEventListener('click', function() {
    changeHP($player1)
    changeHP($player2)
})