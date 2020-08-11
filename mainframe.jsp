<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<html>
<head>
<link rel="stylesheet" href="css/main.css">
<link rel="stylesheet" href="css/table.css">
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<input type="text" id="file_name_input" size=3 value="" >
<div id="body">
<img id="file_delete" class ="file_delete_img" src="image/folder/file_delete.png" onmouseover="this.src='image/folder/file_add_hover.png'" onmouseout="this.src='image/folder/file_delete.png'"/>	
	
<img id="file_add" class ="file_add_img" src="image/folder/file_add.png" onmouseover="this.src='image/folder/file_add_hover.png'" onmouseout="this.src='image/folder/file_add.png'"/>				
<div id="allfile"></div>
<div id="allfile_name"></div>
<img id="back" class ="back_img" src="image/button/back.png" onmouseover="this.src='image/button/back_hover.png'" onmouseout="this.src='image/button/back.png'"/>	
<img id="menu3" class ="menu3_img" src="image/button/menu3.png" onmouseover="this.src='image/button/menu3_hover.png'" onmouseout="this.src='image/button/menu3.png'"/>
<img id="menu2" class ="menu2_img" src="image/button/menu2.png" onmouseover="this.src='image/button/menu2_hover.png'" onmouseout="this.src='image/button/menu2.png'"/>		
<img id="menu1" class ="menu1_img" src="image/button/menu1.png" onmouseover="this.src='image/button/menu1_hover.png'" onmouseout="this.src='image/button/menu1.png'"/>
<img id="start" class ="start_img" src="image/button/start.png" onmouseover="this.src='image/button/start_hover.png'" onmouseout="this.src='image/button/start.png'"/>
<div class="wrap">
<div class ="over_flow">
<table class="word_table"  id="word_table" cellspacing='0'> <!-- cellspacing='0' is important, must stay -->
	<thead>
		<tr>
			<th>영단어</th>
			<th>영단어 뜻</th>
		</tr>
	</thead><!-- Table Header -->

	<tbody>
		<tr>
			<td>apple</td>
			<td>사과</td>
		</tr><!-- Table Row -->

		<tr>
			<td>banana</td>
			<td>바나나</td>
		</tr><!-- Darker Table Row -->
	</tbody>
</table>
</div>
</div>
<canvas id="myCanvas" width="900" height="720"></canvas> 
<script type="text/javascript" src="js/jquery-1.10.1.min.js"></script>
        
<script src="js/initialize.js"></script>
<script src="js/main_js.js"></script>
</div>
</body>
</html>