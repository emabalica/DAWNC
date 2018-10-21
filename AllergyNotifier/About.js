
window.fbAsyncInit = function() {
    FB.init({
        appId      : '1894098134231971',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
    });

    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function statusChangeCallback(response){
    if(response.status === 'connected') {
        console.log('logged in and authenticated');
        setElements(true);
        window.connected=true;

    }else{

        console.log('not authenticated');
        setElements(false);
        window.connected=false;
    }
}

function checkLoginState() {
    FB.getLoginStatus(function(response) {

        statusChangeCallback(response);
    });
}
function setElements(isLoggedIn){
    if(isLoggedIn){
        document.getElementById('myImage').style.display='inline-block';

    }else{
        document.getElementById('myImage').style.display='none';

    }
}
function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("account.png")) {
        image.src = "../images/account2.png";
    } else {
        image.src = "../images/account.png";
    }
}
