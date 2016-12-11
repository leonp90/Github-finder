document.querySelector("#search-form").addEventListener("submit", function(e){


	        e.preventDefault();    //stop form submitting
	        var username=e.target[0].value;
	        var user = getUser(username,
		        function onSuccess(data) {
		        	console.log('success');
		        },
		        function onError(data) {
		        	messageError = data.message
		        	console.log(messageError);
		        });
	});


// userinfo.innerHTML += '<div>'+userData.login+'</div>';

					// username
					// full name
					// bio..
					// repositories
					// 	repo1			stars & forks
					// 	repo2			stars & forks
					// 	repo3			stars & forks
					// 	etc

// var userHtml = function (userInfo, userDetails, errorhandler){
	
// 	var login=userInfo.login;
// 	var avatar=userInfo.avatar_url;
// 	var name= userInfo.name
// 	var bio= userInfo.bio;

// 	console.log(login + avatar + name + bio)	
// }

