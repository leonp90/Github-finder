document.querySelector("#search-form").addEventListener("submit", (event)=>{


            event.preventDefault();    //stop form submitting

            const username = event.target[0].value;
            const userUrl = "https://api.github.com/users/" + username;
            const reposUrl = "https://api.github.com/users/" + username + "/repos";
            const userGit = requestGit('GET', userUrl, userData, onError);
            const reposGit = requestGit('GET', reposUrl, reposData, onError);

            // Error message
            function onError(data) {
              let error = "Does not exist";
              let messageError = document.getElementById("error");

              messageError.innerHTML = error;
              messageError.setAttribute("class", "error");

            };

});
