var requestButton = document.querySelector(".request-btn");
var showButton = document.querySelector(".show-btn");
// var express = require('express');
// var app=express()
function onGranted() {
    requestButton.style.background = "#73AD21";
}

function onDenied() {
    requestButton.style.background = "red";
}

requestButton.onclick = function() {
    Push.Permission.request(onGranted, onDenied);
}

showButton.onclick = function() {
    Push.create("Hello!", {
        body: "This is a web notification!",
        timeout: 5000,
        onClick: function() {
            console.log(this);
        }
    });
};
function ignoreFavicon(req, res, next) {
    if (req.originalUrl === '/favicon.ico') {
        res.status(204).json({nope: true});
    } else {
        next();
    }
}
app.use(ignoreFavicon);