var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");

var output = document.getElementById("output");

document.body.style.backgroundColor = "rgb("+red.value+","+green.value+","+blue.value+")";
output.style.boxShadow = "0px 0px 15px rgb("+red.value+20+","+green.value+20+","+blue.value+20+")";

output.value = "#"+parseInt(red.value).toString(16)+parseInt(green.value).toString(16)+parseInt(blue.value).toString(16);

function changed(){

let r = red.value;
let g = green.value;
let b = blue.value;

r = parseInt(r);
g = parseInt(g);
b = parseInt(b);

if(r < 16){
     r ="0"+r.toString(16);
 }
else{
    r = r.toString(16);
 }      
if(g < 16){
    g = "0"+g.toString(16);
}
else{
   g = g.toString(16);
} 
if(b < 16){
    b = "0"+b.toString(16);
}
else{
   b = b.toString(16);
} 

document.body.style.backgroundColor = "#"+r+g+b;
// document.body.style.backgroundColor = "rgb("+red.value+","+green.value+","+blue.value+")";
output.style.boxShadow = "0px 0px 15px rgb("+red.value+20+","+green.value+20+","+blue.value+20+")";
output.value = "#"+r+g+b;

}

function copy(){
    output.select();
    document.execCommand("copy");
    output.value = "Copied!"
    setTimeout(() => {
        changed()
    },300 );
}

red.addEventListener('input',changed);
green.addEventListener('input',changed);
blue.addEventListener('input',changed);

output.addEventListener('click',copy);
