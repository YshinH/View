$(document).ready(function() {
	
	var id = document.getElementById("id");
	var pw = document.getElementById("pw");

	var idCheck;

	document.getElementById("logForm").onsubmit = function () {	

		if (!id.value) {
			alert("아이디를 입력해주세요");
				id.focus();
			return false;
		}
		
		if (!pw.value) {

			alert("비밀번호를 입력해주세요");
			pw.focus();
			return false;
		}
		
		idCheck = false; //중요
//------------------------------------------------------------------------------- 
		$.ajax({
			
			url: "loginCheck.json",
			type: "post",
			dataType: "json",
			async : false,
			
			success: function(result) {
				
				$(result).each(function(key, value) {
					
				if (id.value == (value.id) && pw.value == (value.pw)) {
						idCheck = true;

					} //if
					
				}); //each
				
			} //success
			
		}); //ajax

//---------------------------------------------------------------------------------
	//로그인완료/실패
		if (idCheck == true) {
			alert(id.value + "님 환영합니다.");
			location.href="index.html";
			return false;
		} else {
			alert("아이디가 존재하지 않거나 비밀번호를 잘못 입력하셨습니다.");
			id.value="";
			pw.value="";
			id.focus();
			return false;
		};  //if
	
	} //document.loginForm.onsubmit
	
	
	
	
	//로그인 취소 
	 document.getElementById("logForm").onreset = function () {
		var result =confirm("로그인을 취소하겠습니까?"); 
		if (result) { 
			alert("로그인이 취소 되었습니다."); 
			location.href="index.html";			
			id.value ="";  
			pw.value ="";
			userId.focus();
			return false;
		} else {
			id.focus();
			return false;
		}
		 
	}//onreset
}); //ready