
var checkbox1=document.getElementById('notifications');
var checkbox2=document.getElementById('bees');
var checkbox3=document.getElementById('skin');
var checkbox4=document.getElementById('chemical');
var checkbox5=document.getElementById('air');

// var notifications=getCookieValue('notifications');

// console.log('notif ',notifications);




if (localStorage.getItem('notifications')=='on')
    {checkbox1.checked=true;}
else {checkbox1.checked=false;}

if (localStorage.getItem('bees')=='on'){
    checkbox2.cecked=true;
}
else{
    checkbox2.checked=false;
}
if (localStorage.getItem('skin')=='on'){
    checkbox3.cecked=true;
}
else{
    checkbox3.checked=false;
}
if (localStorage.getItem('air')=='on'){
    checkbox4.cecked=true;
}
else{
    checkbox4.checked=false;
}
if (localStorage.getItem('chemical')=='on'){
    checkbox5.cecked=true;
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

function getCookieValue(key){
    d = cookies.split(';');
    for (i = 0; i < d.length; i++) {
        c = d[i].split('=');
        if (c[0] == key) {
            return c[1];
        }
    }
    return 0;
}
function updateCookie(key, value) {
    console.log('d= '+cookies);
    d = cookies.split(';');

    var final_cookie='';
    for (i = 0; i < d.length; i++) {
        c = d[i].split('=');
        if (c[0] == key) {
            c[1] = value;
            d[i] = c[0] + '=' + c[1];
            console.log("found ",c[0]);
        }
        if (i > 0) {
            final_cookie = final_cookie + d[i] + ';';
        } else {
            final_cookie = d[i] + ';';
        }
        final_cookie=final_cookie+expires + ";path=/";
    }
    return final_cookie;
}
// var delete_cookie = function(name) {
//     document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
// };
function changeState(key,value1,value2,id){

    var checkbox=document.getElementById(id);
    if (checkbox.checked == true){
        final_cookie1=updateCookie(key,value1);
        console.log("f "+final_cookie1);
        // var c=document.cookie.split(';');
        // console.log("c="+c);
        // delete_cookie(key);
        // console.log("c="+c);
        // for(i=0;i<c.length;i++){
        //     console.log("co "+c[i].split('=')[0]);
        //     if(c[i].split('=')[0]==key){
        //         console.log(c[i]);
        //         c[i]=c[i].split(key+'='+value2).join(key+'='+value1+";"+expires + ";");
        //         console.log(c[i]);
        //         document.cookie=c[i];
        //     }
        // }

    } else {
        final_cookie1=updateCookie(key,value2);
        console.log("f "+final_cookie1);
        // var c=document.cookie.split(';');
        // console.log("c="+c);
        // delete_cookie(key);
        // console.log("c="+c);
        // for(i=0;i<c.length;i++){
        //     console.log("co "+c[i].split('=')[0]);
        //     if(c[i].split('=')[0]==key){
        //         console.log(c[i]);
        //         c[i]=c[i].split(key+'='+value1).join(key+'='+value2+";"+expires + ";");
        //         console.log(c[i]);
        //         document.cookie=c[i];
        //     }
        // }
    }

    // document.cookie=document.cookie.split(key+'='+value1).join(key+'='+value2)
    // console.log('cookie ',document.cookie+' !!!');
    // document.cookie=final_cookie1;
    console.log('updated '+document.cookie);

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


