	var file_count=0;
	var back_flag=0;
	var file_num=0;
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
	$(document.body).delegate("#refresh","click",function(){
		display(word_arr[file_num],word_index[file_num]);
	});
	$(document.body).delegate("#memo_icon","click",function(){
		var spalling=$(this).parent().prev().prev().prev().prev().prev();
		var memo=$(this).prev();
		insert_memo(spalling.text(),memo.val());
	});
	$(document.body).delegate("#tts","click",function(){
		var spalling=$(this).parent().prev().prev();
		speak(spalling.text());
	});
	$(document.body).delegate("input:checkbox","click",function(){
		var spalling=$(this).parent().prev().prev().prev().prev();
		favorite_set(spalling.text());
	});
	$(document.body).delegate("#all_file img","click",function(){
    	back_flag +=1;
    	file_num=$(this).index();
    	$("#table_name").text("< "+file_name_arr[file_num]+" >");
		$("#menu1-1").toggle();
    	$("#menu1-2").toggle();
    	display(word_arr[file_num],word_index[file_num]);
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
	$(document.body).delegate("#word_delete","click", function(){
    	var spalling=$(this).parent().prev().prev().prev();
    	delete_word(spalling.text());
    });
	$(document.body).delegate("#search_icon","click", function(){
		search_word($("#search_wd").val());
    });
	$(document.body).delegate("#file_delete","click",function(){
		$("#file_delete").attr("src", "image/folder/file_delete_click.png");
		document.getElementById('file_delete').onmouseover = 'null';
		document.getElementById('file_delete').onmouseout = 'null';
	});
