
var loc=[];
var Connected=true;
var risk_zones=[{'lat1':46,'lat2':49,"long1":27,"long2":28,'allergy':'bees'},
    {'lat1':48,'lat2':48.6,"long1":13.5,"long2":36.6,'allergy':'air'},
    {'lat1':40.2,'lat2':40.3,"long1":22,"long2":23,'allergy':'chemical'}];

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



function CheckIfUserIsInRiskZone(latitude,longitude){
    var i=0;
    while (i<risk_zones.length){
        if(latitude>=risk_zones[i]['lat1']&& latitude<=risk_zones[i]['lat2']&&
        longitude>=risk_zones[i]['long1'] &&longitude<=risk_zones[i]['long2']
        &&(localStorage.getItem('notifications')=='on'))
        {
            if ('bees'==risk_zones[i]['allergy'] &&localStorage.getItem('bees')=='on')
                {console.log('in the risk zone');
                return [true , risk_zones[i]['allergy']];}
            if ('skin'==risk_zones[i]['allergy'] &&localStorage.getItem('skin')=='on')
            {console.log('in the risk zone');
                return [true , risk_zones[i]['allergy']];}
            if ('air'==risk_zones[i]['allergy'] &&localStorage.getItem('air')=='on')
            {console.log('in the risk zone');
                return [true , risk_zones[i]['allergy']];}
            if ('chemical'==risk_zones[i]['allergy'] &&localStorage.getItem('chemical')=='on')
            {console.log('in the risk zone');
                return [true , risk_zones[i]['allergy']];}
        }
        else{console.log("safe");}
        i=i+1;
    }
    return [false,0];
}
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function onGranted() {
   console.log("granted");
}

function onDenied() {
    console.log("denied");
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

    } else {
        console.log("geolocation is not supported");
    }
}
function showPosition(position) {
    console.log("latitude "+position.coords.latitude+"longitude " +position.coords.longitude);
    loc.push(position.coords.latitude);
    loc.push(position.coords.longitude);
}
function statusChangeCallback(response){
    if(response.status === 'connected') {
        testAPI();
        console.log('logged in and authenticated');
        setElements(true);
        Connected=true;
        // window.connected=true;

    }else{

        console.log('not authenticated');
        setElements(false);
        Connected=false;
        // window.connected=false;
    }
}


function testAPI(){
    FB.api('/me?fields= name,location,hometown,email',function(response){
        var location=response.location.name;
        var UserName=response.name;
        var mail=response.email;
        document.getElementById('nume').innerHTML=UserName;
        document.getElementById('email').innerHTML=mail;
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
        document.getElementById('heading').style.display='none';

    }else{
        document.getElementById('profile').style.display='none';
        document.getElementById('heading').style.display='block';
        document.getElementById('myImage').style.display='none';

    }
}

function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("account.png")) {
        image.src = "./images/account2.png";
    }
}
function changeImage2() {
    var image = document.getElementById('myImage');
    if (image.src.match("account2.png")) {
        image.src = "./images/account.png";
    }
}

getLocation();

function sendAll(){

    getLocation();
    var allergy=CheckIfUserIsInRiskZone(loc[0],loc[1]);
    var message;
    if (allergy[1]=='bees'){
        message='You are in the risk zone, there are bees in the area.';
    }else if(allergy[1]=='air'){
        message='You are in the risk zone, the air is polluted here, chemicals have been used in this area.';
    }else if(allergy[1]=='chemical'){
        message='You are in the risk zone, the air is polluted with allergens which may trigger asthma.';
    }
    if(allergy[0]==true)
    {
        Push.Permission.request(onGranted, onDenied);
        Push.create("Hello!", {
            body: message,
            timeout: 5000,
            onClick: function() {
                console.log(this);
            }
        });

    }else{
        console.log("not in risk zone");
    }
}
// function ignoreFavicon(req, res, next) {
//     if (req.originalUrl === '/favicon.ico') {
//         res.status(204).json({nope: true});
//     } else {
//         next();
//     }
// }
// app.use(ignoreFavicon);

