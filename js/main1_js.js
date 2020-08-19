	var file_count=0;
	var back_flag=0;
	$(document.body).delegate("#start_button","click",function(){
    	$("#start").toggle();
    	$("#main_bg").css('background-image','url("image/bg/background2.png")');
    	$("#menu").toggle();
    });
	$(document.body).delegate("#menu img","click",function(){
    	$("#menu").toggle();
    	$("#enter_menu1").toggle();
    });
	$(document.body).delegate("#file_add","click",function(){
		file_add();
	});
	$(document.body).delegate("#all_file img","click",function(){
    	back_flag +=1;
		$("#menu1-1").toggle();
    	$("#menu1-2").toggle();
    	display(word_arr,word_index);
	});
	$(document.body).delegate("#back","click",function(){
		if(back_flag==0){
			$("#menu").toggle();
	    	$("#enter_menu1").toggle();
		}
		if(back_flag==1){
			$("#menu1-1").toggle();
	    	$("#menu1-2").toggle();
	    	back_flag -=1;
    	}
	});
	