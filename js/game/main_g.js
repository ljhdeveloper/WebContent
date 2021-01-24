var main = new Phaser.Class({

	    Extends: Phaser.Scene,

	    initialize:

	    function main ()
	    {
	        Phaser.Scene.call(this, { key: 'main' });
	    },
	    preload: function ()
	    {
	        this.load.image('end', 'image/game/start/bg.png');
	        this.load.audio('start1','sound/bgm/a.mp3');

	    },

	    create: function ()
	    {

	        start_bgm1 = this.sound.add('start1');
	        this.add.sprite(400, 340, 'end');
        	//start_bgm1.play({loop:true});
	    }
});