var photos = ["image1.jpg", "image2.jpg", "image3.jpg"];
var count = 0;
var imgtag = document.querySelector("img");
imgtag.src = photos[0];
document.querySelector(".next").addEventListener("mouseover",function hov(){
    this.style.background = "black";
})
document.querySelector(".next").addEventListener("mouseout",function hov(){
    this.style.background = "#0a58ca";
})
document.querySelector(".prev").addEventListener("mouseover",function hov(){
    this.style.background = "black";
})
document.querySelector(".prev").addEventListener("mouseout",function hov(){
    this.style.background = "#0a58ca";
})
function next(){
    count ++;
    if(count >= photos.length)
    count=0;
    imgtag.src = photos[count];
    var text  = document.querySelector(".next").innerHTML;
    playAnimation(text);
   
}

function prev(){
    count --;
    if(count < 0)
    count = photos.length -1;
    imgtag.src = photos[count];
    var text = document.querySelector(".prev").innerHTML;
    playAnimation(text);

}

function playAnimation(text)
{
    var selectedButton = document.querySelector("." + text);
    selectedButton.classList.add("anim");

    setTimeout(function(){
        selectedButton.classList.remove("anim");
    },500)
}


var cnv = document.querySelector("#myCanvas");

var ctx = cnv.getContext("2d");

ctx.strokeStyle = "Red";
ctx.strokeRect(30,200,300,410);
ctx.fillStyle = "pink";
ctx.fillRect(30,200,300,400);

 


