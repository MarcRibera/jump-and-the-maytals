import MainGame from './mainGame.js';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: [MainGame],
};

let game = new Phaser.Game(config);

console.log('game', game);
