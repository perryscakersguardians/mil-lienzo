canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

var mouseEvent = "empty";
var last_x , last_y ;

color = "pink";
lineWidth =1;

canvas.addEventListener("mousedown" ,  my_mousedown);
function my_mousedown(e){
mouseEvent = "mousedown";
}
canvas.addEventListener("mouseup" ,  my_mouseup);
function my_mouseup(e){
mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave" ,  my_mouseleave);
function my_mouseleave(e){
mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove" ,  my_mousemove);
function my_mousemove(e){
    actual_x=e.clientX - canvas.offsetLeft;
    actual_y=e.clientY - canvas.offsetTop;  
    if(mouseEvent = "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        console.log("posicion x:" +last_x);
        console.log("posicion y" + last_y); 
        ctx.moveTo(last_x , last_y);

        console.log("posicion x:" +actual_x);
        console.log("posicion y" + actual_y); 
        ctx.lineTo(actual_x , actual_y);
        ctx.stroke();
    }
    last_x = actual_x;
    last_y =  actual_y;
}