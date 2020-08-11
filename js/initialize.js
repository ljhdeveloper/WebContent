/**
 * 
 */
 		var high=160,fonthigh=280;
        var weight=470,result=0,fontweight=525;
        var file=["파일1","파일2","파일3","파일4","파일5","파일6"];
        
        

       
        
        for(var i=0; i<6;i++){
        	result=fontweight+(i%3)*250;
        	if(i==3){
        		high=370;
        		fonthigh=490;
        	}
            $("#allfile").append('<img id="file'+i+'" class ="file_img'+i+'" src="image/folder/file.png"/>');
            $("#allfile_name").append('<span id="file_name'+i+'" class ="file_name_span'+i+'"">'+file[i]+'</span>');
            $("#file_name"+i).css({
            	position : "absolute", 
        		top:fonthigh+"px",
        		left:result+"px",/*350*/
        		display:"none",
        		fontSize : "20px"
            })
        	result=weight+(i%3)*250;
            $("#file"+i).css({
            	position : "absolute", 
        		top:high+"px",
        		left:result+"px",/*350*/
        		display:"none"
            });
        }
               