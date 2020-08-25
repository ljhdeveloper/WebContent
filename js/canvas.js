var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext('2d');
var lastUpdateTime = 0;
var acDelta = 0;
var msPerFrame = 15;
var bool_bg=true;
var isGameOver=false;
var raf=null;
var bool_start_game=false;
var keysDown = {};
var u1=new unit();
var standard_time=0;


var bgimage_tree =new Image();
bgimage_tree.src="image/canvas/bg/canvas_tree.png";
var bgimage_main =new Image();
bgimage_main.src="image/canvas/bg/canvas_main.png";
var gamestart = new Audio("sound/bgm/main_bgm.mp3");


var acDelta1=0;
var lastUpdateTime1=0;
function unit(){
	var unit =new Image();
	unit.src="image/canvas/game/unit/unit1.png";
	var ex =new Image();
	ex.src="image/canvas/game/unit/ex.png";
	var bgimage_map =new Image();
	bgimage_map.src="image/canvas/bg/canvas_map.png";
    this.canvas_ct_y=canvas.height/2-unit.height;
    this.canvas_ct_x=canvas.width/2-unit.width;
    this.x = this.canvas_ct_x , this.y = this.canvas_ct_y , this.speed=5;
    this.spriteCount=0;
    this.m_x=bgimage_map.width/2-480,this.m_y=bgimage_map.height-577;
	this.render=function(){
        ctx.drawImage(bgimage_map, -this.m_x, -this.m_y);
        ctx.drawImage(unit, this.x,this.y);
	    
	};
	this.timer=function(){
    	var timer=(Date.now()-standard_time)/1000;
    	timer=timer.toFixed();
    	timer_hour=Math.floor(timer/3600);
    	timer_min=Math.floor(timer%3600/60);
    	timer_sec=Math.floor(timer%60);
    	console.log(timer_min);
    	if(timer>3600) {
    		$("#timer").text(timer_hour+" 시"+timer_min+" 분"+timer_sec+" 초");
    	}
    	else if(timer>60){
        	$("#timer").text(timer_min+" 분"+timer_sec+" 초");
    	}
    	else{
        	$("#timer").text(timer_sec+" 초");
    	}
	}
	this.update = function () {
		var map_bd_width=bgimage_map.width-canvas.width;
		var map_bd_height=bgimage_map.height-canvas.height;
		
	    //console.log(this.m_x+this.x,this.m_y+this.y);
	    // up w
	    if (87 in keysDown) {
    	/* var delta1 = Date.now() - lastUpdateTime;
	    if (acDelta1 > 1) {
	        acDelta1 = 0;*/
    	ctx.drawImage(ex,this.spriteCount*32,120,32,50,this.x,this.y,32,50);
	
	    	this.spriteCount++;
			if(this.spriteCount > 9){
				this.spriteCount=0;
			}
	    	if(this.y > this.canvas_ct_y)this.y -= this.speed;
	    	else{
		    	if(this.m_y <= 0 && this.y >=0){
		    		this.y -=this.speed;
		    	}
		    	else this.m_y -= this.speed;
	    	}
	    }
	    	/*else {
	            acDelta1 += delta1;
	        }
	        lastUpdateTime1=Date.now();*/
	    
	    // down s
	    if (83 in keysDown) {
	    	if(this.y < this.canvas_ct_y)this.y += this.speed;
	    	else{
		    	if(this.m_y >= map_bd_height && this.y <=canvas.height-unit.height){
		    		this.y +=this.speed;
		    	}
		    	else this.m_y += this.speed;
	    	}
	    }
	    //left a
	    if (65 in keysDown) {
	    	if(this.x > this.canvas_ct_x)this.x -= this.speed;
	    	else{
		    	if(this.m_x <= 0 && this.x >=0){
		    		this.x -= this.speed;
		    	}
		    	else this.m_x -= this.speed;
	    	}
	    }
	    // right d
	    if (68 in keysDown) {
	    	if(this.x < this.canvas_ct_x)this.x += this.speed;
	    	else{
		    	if(this.m_x >= map_bd_width && this.x <=canvas.width-unit.width){
		    		this.x += this.speed;
		    	}
		    	else{
		    	this.m_x += this.speed;
		    	}
	    	}
	    }
	    
	    // boundery limit
	    if (this.m_x <= 0) {
	    	this.m_x=0;
	    }
	    if (this.m_x >= map_bd_width) {
	    	this.m_x=map_bd_width;
	    }
	    if (this.m_y <= 0) {
	    	this.m_y=0;
	    }
	    if (this.m_y >= map_bd_height) {
	    	this.m_y = map_bd_height;
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
	$("#timer").toggle();
	$(this).toggle();
	//main_bgm_control(false);
	standard_time=Date.now();
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
        	u1.timer();
        	u1.render();
        	u1.update();
        }
    } else {
        acDelta += delta;
    }
    lastUpdateTime=Date.now();
};
var main = function () { 
    if (!isGameOver) {
        render();
    }
    raf=requestAnimationFrame(main);
};
var background =new Background();