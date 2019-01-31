
var checkbox1=document.getElementById('notifications');
var checkbox2=document.getElementById('bees');
var checkbox3=document.getElementById('skin');
var checkbox4=document.getElementById('chemical');
var checkbox5=document.getElementById('air');


if (localStorage.getItem('notifications')=='on')
    {checkbox1.checked=true;}
else {checkbox1.checked=false;}

if (localStorage.getItem('bees')=='on'){
    checkbox2.checked=true;
}
else{
    checkbox2.checked=false;
}
if (localStorage.getItem('skin')=='on'){
    checkbox3.checked=true;
}
else{
    checkbox3.checked=false;
}
if (localStorage.getItem('chemical')=='on'){
    checkbox4.checked=true;
}
else{
    checkbox4.checked=false;
}
if (localStorage.getItem('air')=='on'){
    checkbox5.checked=true;
}
else{
    checkbox5.checked=false;
}

function changeStorage(item,value1,value2,id){
    var checkbox=document.getElementById(id);
    if(checkbox.checked==true){
        localStorage.setItem(item,value1);
        console.log(localStorage.getItem(item));
    }
    else{
        localStorage.setItem(item,value2);
    }
}



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


    }else{

        console.log('not authenticated');
        setElements(false);

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
    }
}
function changeImage2() {
    var image = document.getElementById('myImage');
    if (image.src.match("account2.png")) {
        image.src = "../images/account.png";
    }
}


