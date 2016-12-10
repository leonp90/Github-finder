function getUser(username) {
		
		var url = "https://api.github.com/users/" + username;
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true); //The third value sets the request as asynchronous. 
		xhr.onreadystatechange = function(){
		// 	console.log(xhr.status+"<---xhr status")
		// 	console.log(xhr.readyState+"<---readystate");
			console.log(xhr.responseText+"response text");
		};

		xhr.send();


};


function getRepos(username){

		var url = "https://api.github.com/users/" + username + "/repos";
		var xhr = new XMLHttpRequest();

		xhr.open('GET', url, true); //The third value sets the request as asynchronous. 
		xhr.onreadystatechange = function(){
		// 	console.log(xhr.status+"<---xhr status")
		// 	console.log(xhr.readyState+"<---readystate");
			console.log(xhr.responseText+"response text");
		};

		xhr.send();
		
};