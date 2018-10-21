
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
        testAPI();
        console.log('logged in and authenticated');
        setElements(true);
        window.connected=true;

    }else{

        console.log('not authenticated');
        setElements(false);
        window.connected=false;
    }
}
var UserName;
var City;
var Email;
function testAPI(){
    FB.api('/me?fields= name,location,hometown,email',function(response){
        var location=response.location.name;
        var UserName=response.name;
        var mail=response.email;
        window.UserName=response.name;
        document.getElementById('nume').innerHTML=window.UserName;
        window.City=response.location;
        window.Email=response.email;
        if(response &&!response.error){
            console.log(response);
            console.log("this is the location:"+location);
            console.log("this is the name:"+UserName);
            console.log("this is the email:"+mail);
            console.log("te cheama",nume);
        }

    });
}
function checkLoginState() {
    FB.getLoginStatus(function(response) {

        statusChangeCallback(response);
    });
}
function setElements(isLoggedIn){
    if(isLoggedIn){
        document.getElementById('profile').style.display='block';
        document.getElementById('myImage').style.display='inline-block';

    }else{
        document.getElementById('profile').style.display='none';

        document.getElementById('myImage').style.display='none';

    }
}

function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("account.png")) {
        image.src = "./images/account2.png";
    } else {
        image.src = "./images/account.png";
    }
}
