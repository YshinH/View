$(document).ready(function() {

//변수 할당
 var idCheck;
 var userId = document.getElementById("userId");
 var userPw = document.getElementById("userPw");
 var userPw2 = document.getElementById("userPw2");
 var userName = document.getElementById("userName");
 var userTel = document.getElementById("userTel");
 var userEmail = document.getElementById("userEmail");
	
//유효성검사 변수를 지정
 var regUserId = /^[a-z]\w{4,11}$/;  //영문자로 시작하고 총 5~12자 사이
 var regUserPw = /^[a-z]\w{4,11}$/;
 var regUserPw2 = /^[a-z]\w{4,11}$/;
 var regUserName = /^[가-힣]{2,5}$/;  //한글로 2글자부터 5자 사이
 var regUserTel = /^010\d{8}$/;  		//010으로 시작하고 8글자 
 var regUserEmail = /^[a-z]\w{4,11}@[a-z]{2,10}[\.][a-zA-Z]{2,3}[\.]?[a-z]{0,2}$/;  		//영문자로 시작하고 5글자 부터 12자 사이 @(이메일)
//								    abcdefg     @lg						. co						 .  kr	
//								    abcdefg     @lgchem				. com							-생략가능하고!
 
//중복확인
	$("#idCheckBtn").click(function(){ 
		
		//idCheck = true; //true : 중복 안됨
		
		$.ajax({
			
			url: "loginCheck.json",
//			async: false,
			
			success: function(result){

				$(result).each(function(key, value){
					
					if($("#userId").val() == value.id) {
						alert("중복된 아이디입니다!");
						idCheck = false; //중복
						userId.value="";
						userId.focus();
						return false;
						
					}
			
				if(idCheck = true){
						alert("사용가능한 아이디입니다!");
						userPw.focus();
						return false;
						
					}
				}); //each

			} //success
			
		}); //ajax
		

	});//중복확인클릭	 

 
//전송 전 폼에 제동 걸기
	document.getElementById("joinForm").onsubmit = function () {


		//아이디
			if (!userId.value) {
				alert("아이디를 입력해주세요");
				userId.focus();
				return false;
			}else if(!regUserId.test(userId.value)) {
				alert("아이디는 영문자로 시작하고 5~12글자로 입력하세요!");
				userId.value="";
				userId.focus();
				return false;			
			} 
		
// 			if (idCheck == false) {
// 				alert("중복된 아이디입니다.");
// 				userId.focus();
// 				return false;
// 			}else {
// 				alert("사용가능한 아이디입니다.")
// 				userPw.focus();
// 			}
			
	
		//비밀번호
		 if (!userPw.value) {
			alert("비밀번호를 입력해주세요");
		  userPw.focus(); 
		  return false; 
		} else if(!regUserPw.test(userPw.value)) {		
			alert("비밀번호 형식이 잘못 작성되었습니다."+ 
					"\n비밀번호는 영문자로 시작하고 5~12자입니다.");
			userPw.value = ""; 
			userPw.focus(); 
			return false;
		}// userPw if 
		
		//비밀번호 확인                                            
		 if (!userPw2.value) {
			alert("비밀번호를 확인해주세요");
		  userPw2.focus(); 
		  return false; 
		}else if(userPw2.value != userPw.value){
			alert("비밀번호가 틀립니다.");
			userPw2.focus();
			return false;	
		}else if(!regUserPw2.test(userPw2.value)) {		
			alert("비밀번호 형식이 잘못 작성되었습니다."+ 
					"\n비밀번호는 영문자로 시작하고 5~12자입니다.");
			userPw2.value = ""; 
			userPw2.focus(); 
			return false;
		}
		
	
		//이름
		 if (!userName.value) { 
			alert("이름를 입력해주세요");
		  userName.focus(); 
		  return false; 
		} else if(!regUserName.test(userName.value)) {		
			alert("이름 형식이 잘못 작성되었습니다."+ 
					"\n이름 영문자로 시작하고 5~12자입니다.");
			userName.value = ""; 
			userName.focus(); 
			return false;
		}// userPw if 
			
		//전화번호
		 if (!userTel.value) {
			alert("전화번호를 입력해주세요");
		  userTel.focus(); 
		  return false; 
		} else if(!regUserTel.test(userTel.value)) {		
			alert("전화번호 형식이 잘못 작성되었습니다.");
			userTel.value = ""; 
			userTel.focus(); 
			return false;
		}// userTel if 
		 
		 //이메일
		 if (!userEmail.value) {
			alert("이메일을 입력해주세요");
		  userEmail.focus(); 
		  return false; 
		} else if(!regUserEmail.test(userEmail.value)) {		
			alert("이메일 형식이 잘못 작성되었습니다.");
			userEmail.value = ""; 
			userEmail.focus(); 
			return false;
		}else{
			alert("회원가입이 완료되었습니다.");
			location.replace("index.html");
			return false;
		}	
	}//onsubmit
	

	 //가입취소 
	 document.getElementById("joinForm").onreset = function () {
		var result =confirm("정말 회원가입을 취소하겠습니까?"); 
		if (result) { 
			alert("회원가입이 취소 되었습니다."); 
			userId.value ="";  
			userPw.value ="";
			userPw2.value ="";
			userName.value =""; 
			userTel.value =""; 
			userEmail.value =""; 
			userId.focus();
			location.href="index.html";			
			return false;
		} else {
			userId.focus();
			return false;
		}
		 
	}//onreset

	 
});	//ready