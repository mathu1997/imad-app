console.log('Loaded!');
alert("HI IAM MATHU. LET'S COME WITH ME");
//move the image 
var img = document.getElementById('lion');

var marginRight =0;
function moveLeft (){
    marginRight = marginRight + 5;
    img.style.marginRight = marginRight + 'px';
    
}
img.onclick = function(){
    var interval = setInterval(moveRight , 50);
    
};
