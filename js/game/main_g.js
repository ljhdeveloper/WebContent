var end = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function end ()
    {
        Phaser.Scene.call(this, { key: 'end' });
    },

    preload: function ()
    {
        this.load.image('end', 'image/game/game_over.jpg');
    },

    create: function ()
    {
        this.add.sprite(400, 340, 'end');
        this.input.once('pointerdown', function (event) {
        }, this);
    }

});

var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: 'game',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 }
            }
        },
        scene: [end]
    };

var game = new Phaser.Game(config);