var file_name_arr=["file 0","file 1","file 2","file 3","file 4","file 5"];
var file_delete_arr=[false,false,false,false,false,false];

var file_add = function(file_count){
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
		}
}
var swap_file=function(index1,index2){
	file_name_arr[index1]=file_name_arr[index2];
	file_name_arr[index2]="file"+index1+"변함";
}

var delete_f=function(){
	var file_delete_index=0;
	$("#all_file img").detach();
	$("#all_file_name span").detach();
	for(var i=0;i<file_count_global;i++){
		if(!file_delete_arr[i]){
			file_delete_index++;
		}
	}
	
	for(var i=0;i<file_count_global;i++){
		if(file_delete_arr[i]){
			for(var j=file_count_global;j>i;j--){
				if(!file_delete_arr[j]){
					console.log(j);
					swap_file(i,j);
					file_delete_arr[i]=false;
					file_delete_arr[j]=true;
					break;
				}
			}
		}
	}
	for(var i=0;i<6;i++){
		file_delete_arr[i]=false;
	}
	for(var i=0;i<file_delete_index;i++){
		file_add(i);
	}
	file_count_global=file_delete_index;
	
}
var file_enter=function(){
	back_flag +=1;
	$("#table_name").text("< "+file_name_arr[file_num]+" >");
	$("#menu1-1").toggle();
	$("#menu1-2").toggle();
	display(word_arr[file_num],word_index[file_num]);
}
var file_select=function(){
	var children = document.getElementById('all_file').childNodes;
	for(var i=0; i<children.length; i++){
		children[i].onmouseout = 'null';
		children[i].onmouseover = 'null';
	}
	$("body").undelegate("#file_add","click");
	$("body").undelegate("#all_file img","click");
	$(document.body).delegate("#all_file img","click",function(e){
		var src=($(this).attr('src')==='image/folder/file.png')
		?'image/folder/file_hover.png'
		:'image/folder/file.png';
		$(this).attr('src',src);
		var bool =(file_delete_arr[$(this).index()])
		?false:true;
		file_delete_arr[$(this).index()]=bool;

		console.log(file_delete_arr[$(this).index()]);
	});
}
var file_delete=function(){
	delete_f();
	$("body").undelegate("#all_file img","click");
	$(document.body).delegate("#file_add","click",function(){
		if(file_count_global<6){
		file_add(file_count_global);
		file_count_global++;
		}
	});
	$(document.body).delegate("#all_file img","click",function(){
		file_num=$(this).index();
		file_enter();
	});
}