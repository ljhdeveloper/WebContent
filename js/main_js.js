/**
 
 */
	
		var word_index=0;
        var count_drag=0;
		var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
		 var lastUpdateTime = 0;
        var acDelta = 0;
        var msPerFrame = 1000;
        var bool_bg=false;
        var bool_lg=false;
        var bool_mn=false;
        var bool_detail_mn=false;
        var file_num=1;
        var file_delete_arr=[false,false,false,false,false,false];
        var file_name_delete_index=7;
        var file=$("#file_arr");
        var back_flag=1;
        var bgimage =new Image();
        var login_image = new Image();
        login_image.src = "image/bg/login.png";
        var detail_mn_image =new Image();
        detail_mn_image.src = "image/bg/detail_menu.png";
         
        bgimage.onload = function () {
            bool_bg = true;
        };
        login_image.onload = function () {
            bool_lg = true;
        };
        detail_mn_image.onload = function () {
        	detail_mn = false;
        };
        
        var Background = function () {
            this.x = 0, this.y = 0;
            this.render = function() {
                ctx.drawImage(bgimage, 0, 0);
            };
        };
        
        
        
        
        
        var menuon = function () {
        	for(var i=1;i<4;i++){
            	$("#menu"+i).css("display","block");
            }
        };
        var menuoff = function () {
        	for(var i=1;i<4;i++){
            	$("#menu"+i).css("display","none");
            }
        };
        var detail_allmenu_draw = function () {
            bool_mn=false;
            bool_detail_mn=true;
        	$("#back").css("display","block");
        	
        };
        var detail_menu1_draw = function () {
        	$("#file_add").css("display","block");
        	$("#file_delete").css("display","block");
        	for(var i=0;i<file_num;i++){
    			$("#file"+i).css("display","block");
    			$("#file_name"+i).css("display","block");
        	}
        };
        var detail_menu1_back = function () {
        	$("#file_add").css("display","none");
        	$("#file_delete").css("display","none");
        	for(var i=0;i<6;i++){
    		$("#file_name"+i).css("display","none");
        	$("#file"+i).css("display","none");
        	}
        };
        var back_button =function(){;
        	if(back_flag==1){
            $("#file_name_input").css("display","none");
        	$("#back").css("display","none");
             detail_menu1_back();
           	 bool_mn=true;
             bool_detail_mn=false;
        	}
        	if(back_flag==2){
            	$("#word_table").css("display","none");
            	$("#word_temp").css("display","none");
            	$("#creat_word").css("display","none");
            	$("#creat_mean").css("display","none");
        		detail_menu1_draw();
        		back_flag=1;
        	}
        	for(var i=0;i<6;i++){
        		$("#allfile img").eq(i).attr('src','image/folder/file.png');
            	file_delete_arr[i]=false;
            	}
        }
        
        
        var render = function () {  
            var delta = Date.now() - lastUpdateTime;
            if (acDelta > msPerFrame) {
                acDelta = 0;
                if (bool_bg) {
                    background.render();
                }
                if (bool_lg){
                	ctx.drawImage(login_image,0,0);
                }
                if(bool_mn){
                	menuon();
                }
                else{
                	menuoff();
                }
                if(bool_detail_mn){
                	ctx.drawImage(detail_mn_image,0,0);
                }
            } else {
                acDelta += delta;
            }
        };
        
        $("#t_body").on({
         'dragenter':function(e){
       		 e.preventDefault();
       		count_drag++;
       		$("#wrap").animate({top:100});
     	 	$("#t_body").css("color","red");
     	 },
       	'dragleave':function(e){
       		count_drag--;
       		if(count_drag===0){
       		 $(this).css("color","blue");
       		}
       	},
     	'dragover':function(e){
     	 	$("#t_body").css("color","red");
   		 e.preventDefault();
     	},
       	 'drop':function(e){
       		 count_drag=0;
       		 $(this).css("color","green");
       		 if(word_index>=6){
       			 create_td();
       		 }
      		 word_arr[word_index]=new word();
      		 word_arr[word_index].word=$("#creat_word").val()+word_index;
      		 word_arr[word_index].mean=$("#creat_mean").val()+word_index;
      		 word_index++;
      		 display_table();
       		 e.preventDefault();
       	 }
        });
        var create_td=function(){
        	$("#t_body").append('<tr draggable="true"><td>단어를</td><td>추가해주세요</td></tr>');
        }
        var display_table=function(){
        	var table=$("#t_body td");
        	for(var i=0;i<word_index;i++){
        	console.log(word_arr[i].word);
        	console.log(word_arr[i].mean);
        	table.eq(i*2).text(word_arr[i].word);
        	table.eq(i*2+1).text(word_arr[i].mean);
        	}
        }
        $("#body").click(function(){
        	$("#file_name_input").css("display","none");
        	if(file_name_delete_index<7){
            	$("#file_name"+file_name_delete_index).css("display","block");
        	}
        });
        $("#allfile img").click(function () {
        	var src=($(this).attr('src')==='image/folder/file.png')
        	?'image/folder/file_hover.png'
        	:'image/folder/file.png';
        	$(this).attr('src',src);
        	var bool =(file_delete_arr[$(this).index()])
        	?false:true;
        	file_delete_arr[$(this).index()]=bool;
        });
        $("#back").click(function (e) {
        	e.stopPropagation();
        	back_button();
        });
        $("#file_add").click(function () {
        	var num=0;
        	while($("#file"+num).css("display")==="block"){
        		num++;
        	}
        	$("#file"+num).css("display","block");
			$("#file_name"+num).css("display","block");
        	if(file_num!=6) file_num++;
        });
        $("#allfile img").dblclick(function () {
        	back_flag=2;
        	detail_menu1_back();
        	$("#word_temp").css("display","block");
        	$("#word_table").css("display","block");
        	$("#creat_word").css("display","block");
        	$("#creat_mean").css("display","block");
        });
        $("#allfile_name span").dblclick(function () {
        	if(file_name_delete_index<7){
        	$("#file_name"+file_name_delete_index).css("display","block");
        	}
        	var pos=$(this).position();
        	$("#file_name_input").css({display:"block",left:pos.left,top:pos.top});
        	$(this).css("display","none");
         	file_name_delete_index=$(this).index();
        });
        $("#file_delete").click(function (e) {
        	e.stopPropagation();
        	file_name_delete_index=7;
        	$("#file_name_input").css("display","none");
        	for(var i=0;i<6;i++){
        		if(file_delete_arr[i]){
        			$("#allfile img").eq(i).css("display","none");
        			$("#file_name"+i).css("display","none");
        			$("#allfile img").eq(i).attr('src','image/folder/file.png');
                	file_delete_arr[i]=false;
                	file_num--;
        		}
        	}
        	
        	
        	back_flag=2;
        	detail_menu1_back();
        	$("#word_temp").css("display","block");
        	$("#word_table").css("display","block");
        	$("#creat_word").css("display","block");
        	$("#creat_mean").css("display","block");
        
        });
        $("#file_name_input").keypress(function(){
        	if(event.keyCode==13){
        				var temp=$("#file_name_input").val();
        				$("#file_name_input").val("");
        				$("#file_name"+file_name_delete_index).text(temp);
        				$("#file_name"+file_name_delete_index).css("display","block");
        				$("#file_name_input").css("display","none");
        				file_name_delete_index=7;
        	}
        })
        $("#menu3").click(function () {
        	detail_allmenu_draw();
        	detail_menu1_draw();
        });
        $("#menu2").click(function () {
        	detail_allmenu_draw();
        });
        $("#menu1").click(function () {
        	detail_allmenu_draw();
        });
        $("#start").click(function () {
        	bool_lg=false; 
            bool_mn=true;
        	bgimage.src="image/bg/background2.png";
        	$("#start").css("display","none");
        });
        
        
        
        
        
        
        var reset =function(){
            bgimage.src="image/bg/background.png";
        };
        var main = function () {
          //  update(); 
            
           // if (!isGameOver) {
                render();
            //}
            
            requestAnimationFrame(main);
        };
        var background =new Background();
        reset();
        main();