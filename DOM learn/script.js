var photos = ["image1.jpg", "image2.jpg", "image3.jpg"];
var count = 0;
var imgtag = document.querySelector("img");
imgtag.src = photos[0];
function next(){
    count ++;
    if(count >= photos.length)
    count=0;
    imgtag.src = photos[count];
   
}

function prev(){
    count --;
    if(count < 0)
    count = photos.length -1;
    imgtag.src = photos[count];

}