var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext('2d');
var lastUpdateTime = 0;
var acDelta = 0;
var msPerFrame = 1000;
var bool_bg=true;
var isGameOver=false;
var raf=null;
var bool_start_game=false;
var keysDown = {};
var u1=new unit();

var bgimage_tree =new Image();
bgimage_tree.src="image/canvas/bg/canvas_tree.png";
var bgimage_main =new Image();
bgimage_main.src="image/canvas/bg/canvas_main.png";
var gamestart = new Audio("sound/bgm/main_bgm.mp3");


function unit(){
	var unit =new Image();
	unit.src="image/canvas/game/unit/unit1.png";
    this.x = canvas.height/2 , this.y = canvas.width/2 , this.speed=5;
	
	this.render=function(){
    	ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(unit,  this.x , this.y);
	};
	this.update = function () {
	    // up w
	    if (87 in keysDown) {
	        this.y -= this.speed;
	    }
	    // down s
	    if (83 in keysDown) {
	    	this.y += this.speed;
	    }
	    //left a
	    if (65 in keysDown) {
	    	this.x -= this.speed;
	    }
	    // right d
	    if (68 in keysDown) {
	    	this.x += this.speed;
	    }
	    
	    // boundery limit
	    if (this.x <= 0) {
	    	this.x = 0;
	    }
	    if (this.x >= canvas.width - unit.width) {
	    	this.x = canvas.width - unit.width;
	    }
	    if (this.y <= 0) {
	    	this.y = 0;
	    }
	    if (this.y >= canvas.height - unit.height) {
	    	this.y = canvas.height - unit.height;
	    }    
	};
}

function main_bgm_control(flag){
	if(flag){
	gamestart.volume = 0.5;
	gamestart.load();
	gamestart.play();
	gamestart.loop=true;
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

$(document.body).delegate("#canvas_start","click",function(){
	$(this).toggle();
	//main_bgm_control(false);
	bool_start_game=true;
	bool_bg=false;
});
addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
},false);
addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

var reset =function(){
};
var render = function () {  
    var delta = Date.now() - lastUpdateTime;
    if (acDelta > msPerFrame) {
        acDelta = 0;
        if (bool_bg) {
            background.render();
        }
        if(bool_start_game){
        	u1.render();
        }
    } else {
        acDelta += delta;
    }
};
var main = function () {
	u1.update();
  //  update(); 
    if (!isGameOver) {
        render();
    }
    raf=requestAnimationFrame(main);
};
var background =new Background();