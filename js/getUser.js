function getUser(username, onSuccess, onError) {
		
		const url = "https://api.github.com/users/" + username;
		const xhr = new XMLHttpRequest();
		xhr.open('GET', url, true); //The third value sets the request as asynchronous. 
		xhr.responseType = 'json'
		xhr.onreadystatechange = function() {
			var response = xhr.response;

			if (xhr.readyState === 4){
				if (xhr.status === 200){

					if (typeof onSuccess === 'function') {
						onSuccess(response);
					}
				} else {
					if (typeof onError === 'function') {
						onError(response);
					}
				}
			}
			
		}

		xhr.send(null);

};





// function getRepos(username){

// 		var url = "https://api.github.com/ sers/" + username + "/repos";
// 		var xhr = new XMLHttpRequest();

// 		xhr.open('GET', url, true); //The third value sets the request as asynchronous. 
// 		xhr.onreadystatechange = function(){
// 		// 	console.log(xhr.status+"<---xhr status")
// 		// 	console.log(xhr.readyState+"<---readystate");
// 			console.log(xhr.responseText);
// 		};

// 		xhr.send();
		
// };