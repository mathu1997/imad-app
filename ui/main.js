console.log('Loaded!');
alert("HI IAM MATHU. LET'S COME WITH ME");
//move the image 
var img = document.getElementById('lion');
var marginLeft =0;
function moveRight (){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
    
}
img.onclick = function(){
    var interval = setInterval(moveleft,100);
    
};
