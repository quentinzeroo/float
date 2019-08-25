/* eslint-env browser */

function random_bg_color() {
        setTimeout(random_bg_color, 200)   
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";  
    document.body.style.background = "black";
    
    var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);
    var be = "rgb(" + a + "," + b + "," + c + ")";
    var ba = "rgb(" + a + "," + c + "," + b + ")";
    var bi = "rgb(" + c + "," + b + "," + a + ")";
    var circles = document.getElementsByClassName("circle"); 
    var len = circles.length;
    for (var i=0 ; i<len; i++) {
        circles[i].style.backgroundColor=be; 
    }
    
    var canvas = document.getElementById('circle');
if (canvas.getContext)
{
var ctx = canvas.getContext('2d'); 
var X = Math.floor(Math.random() * 1080);
var Y = Math.floor(Math.random() * 1080);
var R = Math.floor(Math.random() * 1080);
var Q = Math.floor(Math.random() * 1080);
var P = Math.floor(Math.random() * 1080);
var L = Math.floor(Math.random() * 1);
var my_gradient = ctx.createLinearGradient(0, 0, Y, 0);
my_gradient.addColorStop(0, be);
my_gradient.addColorStop(1, ba);
ctx.globalAlpha = 1;
ctx.beginPath();
ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
ctx.lineWidth = 10;
ctx.strokeStyle = be;
ctx.fillStyle = my_gradient;
ctx.fillOpacity = 0.5;  
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(Q, P, Y, 0, 2 * Math.PI, false);
ctx.lineWidth = 50;
ctx.strokeStyle = bi;
ctx.stroke();   
    
ctx.beginPath();
ctx.arc(P, Q, R, 0, 2 * Math.PI, false);
ctx.lineWidth = 5;
ctx.strokeStyle = ba;
ctx.stroke();   
}
}

