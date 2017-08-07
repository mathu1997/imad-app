console.log('Loaded!');
alert("HI IAM MATHU. LET'S COME WITH ME");
//move the image 
var img = document.getElementById('lion');
var marginLeft =1000;
function moveRight (){
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
    
}
var marginRight =1000;
function moveLeft (){
    marginRight = marginRight + 5;
    img.style.marginRight = marginRight + 'px';
    
}
img.onclick = function(){
    var interval = setInterval(50,50);
    
};
