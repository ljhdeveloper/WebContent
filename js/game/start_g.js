var this_add;


var start = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:
    function start ()
    {
        Phaser.Scene.call(this, { key: 'start' });
    },

    preload: function ()
    {

    	this_add=this;
    	  
        this.load.spritesheet('sound_bt', 'image/game/start/sound_button.png',
                { frameWidth: 50, frameHeight: 50 });
       // this.load.image('sound_can', 'image/game/start/sound_can.png');
    	this.load.audio('start_bgm','sound/bgm/start_main_bgm.mp3');

        this.load.image('layer0', 'image/game/start/bg.png');
        this.load.image('layer1', 'image/game/start/canvas_tree.png');
        this.load.image('layer2', 'image/game/start/prison.png');
        this.load.image('layer3', 'image/game/start/logo.png');
        this.load.image('start', 'image/game/start/start.png');


    	progressbar_set();
    },

    create: function ()
    {
        start_bgm = this.sound.add('start_bgm');
    	//start_bgm.play({loop:true, mute:true});
        this.add.image(385, 285, 'layer0');
        layer1= this.add.sprite(700, 285, 'layer1');//700
        this.add.image(385, 285, 'layer2');
        this.add.image(385, 285, 'layer3');

        start=this.add.sprite(385, 500, 'start').setInteractive({useHandCursor : true});
        bgm_bt = this.add.sprite(740,540,'sound_bt',1).setInteractive({useHandCursor : true});
       bgm_bt_control(bgm_bt);
       start_bt_control(start);
		console.log(bgm_bt.frame);
        
    },
    update: function ()
    {
    	if(layer1.x <10)layer1.x=800;
    	layer1.x -= 0.2;

    }

});

var bgm_bt_control= function(bgm_bt){
	bgm_bt.on('pointerdown', function (pointer) {
		if(this.frame.name==1){
	        this.setFrame(0);
	        if(start_bgm.mute==true){
	        	console.log("mute");
	        	start_bgm.mute=false;
	        }
	        else{
	        	console.log("플레이");
		    start_bgm.play({loop:true});
	        }
		}
		else{
	        this.setFrame(1);
			start_bgm.mute=true
		}
		//bgm_bt.setTexture('key',프레임)
    });
}
var start_bt_control= function(start){
	 start.on('pointerdown', function (pointer) {
     	this_add.scene.start('main');
     });
     start.on('pointerover', function (pointer) {
     	this.setTint(0xff0000);
     });
     start.on('pointerout', function (pointer) {
     	this.clearTint();
     });
}


function progressbar_set(){

	let progressBar =  this_add.add.graphics();
	let progressBox =  this_add.add.graphics();
	progressBox.fillStyle(0x222222,  0.8);
	progressBox.fillRoundedRect(240,  450,  320,  50,  5);
	this_add.load.on('progress',  function  (value)  {
		  progressBar.clear();
		  progressBar.fillStyle(0xFFFFFF, 1);
		  progressBar.fillRoundedRect(250, 460,  300*value, 30, 5);
		});
	this_add.load.on('complete',  function  ()  {
		  // console.log('complete');
		  progressBar.destroy();
		  progressBox.destroy();
		});
}
