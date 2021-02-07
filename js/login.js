var idck = 1;
function readURL(input) {
	 if (input.files && input.files[0]) {
	  var reader = new FileReader();
	  
	  reader.onload = function (e) {
	   $('#file_img').attr('src', e.target.result);  
	  }
	  
	  reader.readAsDataURL(input.files[0]);
	  }
}
$("#face_img").change(function(){
	   readURL(this);
});
function form_sm(){
	if(idck==0){
		alert("중복체크를 해주세요");
	}
	else{
		if(document.getElementById("reg_pw").value == ""){
			alert("비밀번호를 입력해주세요");
		}
		else if(document.getElementById("reg_name").value == ""){
			alert("이름를 입력해주세요");
		}
		else{
		document.form1.submit();
		
		}
	}
}
//아이디 유효성 검사(1 = 중복 / 0 != 중복)
$("#idck").click(function() {
    
    //userid 를 param.
    var userid =  $("#reg_id").val(); 
    
    $.ajax({
        async: true,
        type : 'POST',
        data : userid,
        url : "/idck",
        dataType : "json",
        contentType: "application/json; charset=UTF-8",
        success : function(data) {
            if (data.cnt > 0) {
                
                alert("아이디가 존재합니다. 다른 아이디를 입력해주세요.");
                //아이디가 존제할 경우 빨깡으로 , 아니면 파랑으로 처리하는 디자인
                alert("중복입니다. 다시입력해주세요");
                
            
            } else {
                alert("사용가능한 아이디입니다.");
                //아이디가 존제할 경우 빨깡으로 , 아니면 파랑으로 처리하는 디자인
                
                //아이디가 중복하지 않으면  idck = 1 
                idck = 1;
                
            }
        },
        error : function(error) {
            
            alert("error : " + error);
        }
    });
});