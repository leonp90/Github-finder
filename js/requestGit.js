function requestGit(method, url, onSuccess, onError) {
	
		const xhr = new XMLHttpRequest();
		xhr.open(method, url, true); //The third value sets the request as asynchronous. 
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