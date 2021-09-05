var canvas=document.getElementById("canvas1");

ctx= canvas.getContext("2d");

color="red";

// ctx.beginPath();
// ctx.strokeStyle= color;
// ctx.lineWidth= 2;
// ctx.arc(350,300,50,0,2*Math.PI);
// ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , 2*Math.PI); 
ctx.stroke();

canvas.addEventListener("mousedown", function_1);

function function_1(e) {
    mouse_X= e.clientX - canvas.offsetLeft;
    mouse_Y= e.clientY - canvas.offsetTop;

    console.log("X="+mouse_X+", Y="+mouse_Y);

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_X, mouse_Y, 40 ,0 , 2*Math.PI); 
    ctx.stroke();
}

function clear() {
     ctx.clearRect(0, 0, canvas.width, canvas.height);
 } 
