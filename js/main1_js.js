	var file_count_global=0;
	var back_flag=0;
	var file_num=0;
	$(document.body).delegate("#start_button","click",function(){
    	$("#start").toggle();
    	$("#main_bg").css('background-image','url("image/bg/background2.png")');
    	$("#menu").toggle();
    })
	/*$("body").on("click","#all_file img",function(){
		back_flag +=1;
    	file_num=$(this).index();
    	$("#table_name").text("< "+file_name_arr[file_num]+" >");
		$("#menu1-1").toggle();
    	$("#menu1-2").toggle();
    	display(word_arr[file_num],word_index[file_num]);
	})*/
	$(document.body).delegate("#menu img","click",function(){
		$("#menu").toggle();
    	$("#enter_menu1").toggle();
    });
	$(document.body).delegate("#file_add","click",function(){
		if(file_count_global<6){
		file_add(file_count_global);
		file_count_global++;
		}
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
		file_num=$(this).index();
		file_enter();
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
	$(document.body).delegate("#file_select","click",function(){
		$("#file_delete").toggle();
		$("#file_select").toggle();
		file_select();
	});
	$(document.body).delegate("#file_delete","click",function(){
		$("#file_delete").toggle();
		$("#file_select").toggle();
		file_delete();
	});
