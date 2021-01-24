<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<html>
<head>
<style>
 table{
  font-size:15px;
  height:60%;
  width:90%;
  border-radius:6px;
  border:1px solid black;
  }
  tr{
  height:10%
  }
</style>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<script type="text/javascript" src="js/jquery-1.10.1.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<body>
    <select id="select-lang">
        <option value="ko-KR">한국어</option>
        <option value="ja-JP" selected>일본어</option>
        <option value="en-US">영어</option>
    </select>
    <textarea id="text" rows="5" cols="20"></textarea>
    <button id="btn-read">읽기</button>

    <script>
        function speak(text, opt_prop) {
            if (typeof SpeechSynthesisUtterance === "undefined" || typeof window.speechSynthesis === "undefined") {
                alert("이 브라우저는 음성 합성을 지원하지 않습니다.")
                return;
            }
            
            window.speechSynthesis.cancel() // 현재 읽고있다면 초기화

            const speechMsg = new SpeechSynthesisUtterance()
            speechMsg.rate = prop.rate || 1 // 속도: 0.1 ~ 10      
            speechMsg.pitch = prop.pitch || 1 // 음높이: 0 ~ 2
           
            speechMsg.lang = prop.lang || "ko-KR"
            speechMsg.text = text
            
            // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
            window.speechSynthesis.speak(speechMsg)
        }


        // 이벤트 영역
        const selectLang = document.getElementById("select-lang")
        const text = document.getElementById("text")
        const btnRead = document.getElementById("btn-read")

        btnRead.addEventListener("click", e => {
            speak(text.value, {
                rate: 1,
                pitch: 2,
                lang: "en-US"
            })
        })
    </script>

<table>

<tbody>
<tr><td>asdasdasd</td><td>asdsadas</td><td>adasd</td></tr>
</tbody>
</table>

</body>
</html>