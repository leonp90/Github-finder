document.querySelector("#search-form").addEventListener("submit", function(e){


	        e.preventDefault();    //stop form submitting
	        const username = e.target[0].value;
			const userUrl = "https://api.github.com/users/" + username;
	        const reposUrl = "https://api.github.com/users/" + username + "/repos";
	        var userGit = requestGit('GET', userUrl, userData, onError);
	        var reposGit = requestGit('GET', reposUrl, reposData, onError);


			function onError(data) {
		        messageError = data.message
				console.log(messageError);
		    };
	});

