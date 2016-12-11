function reposData(data){
    
    let repoInfo= document.getElementById("repos");
    let repoHtml = "<h3>Repositories</h3>";
    
    //Prints all repositories available

    data.forEach((repo)=>{

        let repoName = '<div class="repo-name"><h3>' + repo.name + '</h3></div>';
        let repoStars = '<i class="fa fa-star"></i>:' + repo.stargazers_count;
        let repoForks = ' <i class="fa fa-code-fork"></i>:' + repo.forks;
        let repoCont = '<div class="repo-info">' + repoName + '<p>' + repoStars + repoForks + '</p></div>';

        repoHtml += repoCont;

    });

    repoInfo.innerHTML = repoHtml;
    
};