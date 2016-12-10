document.querySelector("#search-form").addEventListener("submit", function(e){
		

        e.preventDefault();    //stop form submitting
		var username=e.target[0].value;
		getUser(username);
		getRepos(username);
   
	});
	

