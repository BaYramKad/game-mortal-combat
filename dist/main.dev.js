"use strict";

var $Scorpion = {
  name: "Scorpion",
  hp: 98,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["sword", "fire", "machine gun"],
  attack: function attack() {
    console.log("".concat(this.name, " Fight..."));
  }
};
var $Subzero = {
  name: "Subzero",
  hp: 39,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["sword", "fire", "machine gun"],
  attack: function attack() {
    console.log("".concat(this.name, " Fight..."));
  }
};

function createPlayer(clPlayer, gamer) {
  var player1 = document.createElement('div');
  player1.classList.add(clPlayer);
  var progressbar = document.createElement('div');
  progressbar.classList.add('progressbar');
  var life = document.createElement('div'),
      name = document.createElement('div');
  life.classList.add('life');
  life.style.width = '100%';
  name.classList.add('name');
  name.innerText = gamer.name;
  progressbar.appendChild(life);
  progressbar.appendChild(name);
  var character = document.createElement('div');
  character.classList.add('character');
  var img = document.createElement('img');
  img.src = gamer.img;
  character.appendChild(img);
  player1.appendChild(progressbar);
  player1.appendChild(character);
  var arenas = document.createElement('div');
  arenas.classList.add('arenas');
  arenas.appendChild(player1);
}

createPlayer('player1', $Scorpion);
createPlayer('player2', $Subzero);