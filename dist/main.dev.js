"use strict";

var arenas = document.querySelector(".arenas");
var randomButton = document.querySelector(".button");
var $player1 = {
  player: 1,
  name: "Scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["sword", "fire", "machine gun"],
  attack: function attack() {
    console.log("".concat(this.name, " Fight..."));
  }
};
var $player2 = {
  player: 2,
  name: "Subzero",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["sword", "fire", "machine gun"],
  attack: function attack() {
    console.log("".concat(this.name, " Fight..."));
  }
};

function createElement(tag, className) {
  var $tag = document.createElement(tag);
  return className ? $tag.classList.add(className) || $tag : $tag;
}

function createPlayer(clPlayer) {
  var player1 = createElement('div', 'player' + clPlayer.player),
      img = createElement('img'),
      character = createElement('div', 'character'),
      life = createElement('div', 'life'),
      name = createElement('div', 'name'),
      progressbar = createElement('div', 'progressbar'),
      arenas = createElement('div', 'arenas');
  life.style.width = clPlayer.hp + "%";
  name.innerText = clPlayer.name;
  img.src = clPlayer.img;
  progressbar.appendChild(life);
  progressbar.appendChild(name);
  character.appendChild(img);
  player1.appendChild(progressbar);
  player1.appendChild(character);
  return arenas.appendChild(player1);
}

arenas.appendChild(createPlayer($player1));
arenas.appendChild(createPlayer($player2));

function playerLose(name) {
  var $loseTitle = createElement('div', "loseTitle");
  $loseTitle.innerText = name + ' lose';
  return $loseTitle;
}

function changeHP(character) {
  var lifePlayer = document.querySelector('.player' + character.player + ' .life');
  character.hp -= Math.floor(Math.random() * 20);
  lifePlayer.style.width = character.hp + "%";

  if (character.hp <= 0) {
    character.hp = 0;
    lifePlayer.style.width = character.hp + "%";
    arenas.appendChild(playerLose(character.name));
  }
}

randomButton.addEventListener('click', function () {
  changeHP($player1);
  changeHP($player2);
});