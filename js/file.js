var file_name_arr=["file 0","file 1","file 2","file 3","file 4","file 5"];

var file_add = function(){
		if(file_count<6){
			var top=8 ,font_top=12.5;
			var left=9 ,font_left=10;
			var left_index=file_count;
			if(file_count>2){
				left_index -= 3;
				font_top=23;
				top=21;
			}
			$("#all_file").append('<img id="file'+file_count+'" class ="file'+file_count+'_c" src="image/folder/file.png" onmouseover="this.src=\'image/folder/file_hover.png\'" onmouseout="this.src=\'image/folder/file.png\'"/>');
			$("#all_file_name").append('<span id="file_name'+file_count+'" class="file_name'+file_count+'_c">'+file_name_arr[file_count]+'</span>');
			$(".file"+file_count+"_c").css({
					position:"absolute",
					top:top+"em",
					left:left+14*left_index+"em"
			});
			$(".file_name"+file_count+"_c").css({
				position:"absolute",
				top:font_top+"em",
				left:font_left+11.3*left_index+"em",
				fontSize : "20px",
			});
			file_count++;
		}
	}