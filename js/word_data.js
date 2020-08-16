function word(){
	var word='';
	var mean='';
	var favorite=false;
	var memo='';
}
var word_index=0;
var word_arr =new Array();
var favorite_index=0;
var display=function(){
	var table=$("#t_body tr");
	var tr_count=$("#t_body>tr").size();
	if(tr_count<=word_index){
		for(var i=0;i<word_index-tr_count;i++){
			$("#t_body").append('<tr class="tr_c"> <td></td> <td></td> <td><img id="tts" class ="tts_img" src="image/button/tts.png""/></td><td> <img id="word_delete"  class="word_delete_img" src="image/button/delete_word.png" /></td>  <td><input type="checkbox" id="favorite'+favorite_index+'" class="favorite_box"/><label for="favorite'+favorite_index+'"><span></span>즐겨찾기</label></td> <td>메모: <input type="text" value="">&nbsp&nbsp&nbsp</td> </tr>');
			favorite_index++;
		}
	}
	else{
		for(var i=0;i<tr_count-word_index;i++){
			table.eq(i).detach();
			favorite_index--;
		}
		if(word_index===0){
			$("#empty_table").css("display","block");
		}
		return;
	}
	if(word_index===0){
		$("#empty_table").css("display","block");
		return;
	}
	else{
		$("#empty_table").css("display","none");
		
	}
	table=$("#t_body td");
	for(var i=0;i<word_index;i++){
    table.eq(i*6).text(word_arr[i].word);
    table.eq(i*6+1).text(word_arr[i].mean);
    if(word_arr[i].favorite)table.eq(i*6+4).children('input').checked=true;
    table.eq(i*6+5).children('input').val(word_arr[i].memo);
    }
}
var insert_word=function(nword,nmean){ 
	for(var i=0;i<word_index;i++){
		if(word_arr[i].word===nword){
			return;
		}
	}
	word_arr[word_index]=new word;
	word_arr[word_index].word=nword;
	word_arr[word_index].mean=nmean;
	word_arr[word_index].favorite=true;
	word_arr[word_index].memo='';
	word_index++;
	display();
}
var delete_word =function(dword){
	var i;
	if(dword==undefined){
		return;
	}
	for(i=0;i<word_index;i++){
		if(word_arr[i].word==dword){
			break;
		}
	}
	if(i<word_index-1){
	word_arr[i].word=word_arr[word_index-1].word;
	word_arr[i].mean=word_arr[word_index-1].mean;
	word_arr[i].favorite=word_arr[word_index-1].favorite;
	word_arr[i].memo=word_arr[word_index-1].memo;
	}
	word_index--;
	display();
}