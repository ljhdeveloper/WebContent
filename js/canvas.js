var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext('2d');
var lastUpdateTime = 0;
var acDelta = 0;
var msPerFrame = 1000;
var bool_bg=true;
var isGameOver=false;
var raf=null;

var bgimage_tree =new Image();
bgimage_tree.src="image/canvas/bg/canvas_tree.png";
var bgimage_main =new Image();
bgimage_main.src="image/canvas/bg/canvas_main.png";
var gamestart = new Audio("sound/bgm/main_bgm.mp3");

function main_bgm_control(flag){
	if(flag){
	gamestart.volume = 1;
	gamestart.load();
	gamestart.play();
	}
	else{
	gamestart.pause();
	gamestart.currentTime=0;
	}
}

var Background = function () {
    this.x = 0, this.y = 0;
    this.render = function() {
    	ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(bgimage_tree, this.x--, 0);
        ctx.drawImage(bgimage_main, 0, 0);
        if(this.x<= -1300){
        	this.x=0;
        }
    };
};


var reset =function(){
};
var render = function () {  
    var delta = Date.now() - lastUpdateTime;
    if (acDelta > msPerFrame) {
        acDelta = 0;
        if (bool_bg) {
            background.render();
        }
    } else {
        acDelta += delta;
    }
};
var i=0;
var main = function () {
  //  update(); 
    if (!isGameOver) {
        render();
    }
    raf=requestAnimationFrame(main);
};
var background =new Background();