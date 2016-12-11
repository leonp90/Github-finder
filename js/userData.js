function userData(data){

    //In case there's no Name or Bio available

    let name = data.name || "No name available!";
    let login = data.login;
    let bio = data.bio || "No bio to show...";
    let avatar = data.avatar_url;

    let userInfo= document.getElementById("user-info");
    let dataLogin = '<p><i>@'+ login +'</i></p></div>';
    let fullName = '<h1>'+ name +'</h1>';
    let userBio = '<p>'+ bio +'</p>';

    //Set attributes with vanilla.js

    document.getElementById("user-avatar").setAttribute("src", avatar);


    userInfo.innerHTML = dataLogin + fullName + userBio;
    

};