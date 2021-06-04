const $Scorpion = {
    name: "Scorpion",
    hp: 98,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ["sword", "fire", "machine gun"], 
    attack: function() {
        console.log(`${this.name} Fight...`);
    }
}

const $Subzero = {
    name: "Subzero",
    hp: 39,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ["sword", "fire", "machine gun"], 
    attack: function() {
        console.log(`${this.name} Fight...`);
    }
}


function createPlayer(clPlayer, gamer) {
    let player1 = document.createElement('div'),
        img = document.createElement('img'),
        character = document.createElement('div'),
        life = document.createElement('div'),
        name = document.createElement('div'),
        progressbar = document.createElement('div'),
        arenas = document.createElement('div');

    player1.classList.add(clPlayer)
    progressbar.classList.add('progressbar')

    life.classList.add('life')
    life.style.width = '100%'

    name.classList.add('name')
    name.innerText = gamer.name
 
    progressbar.appendChild(life)
    progressbar.appendChild(name) 

    character.classList.add('character')
    img.src = gamer.img

    character.appendChild(img)
    player1.appendChild(progressbar)
    player1.appendChild(character)

    arenas.classList.add('arenas')
    arenas.appendChild(player1)
}
createPlayer('player1', $Scorpion)
createPlayer('player2', $Subzero)