function spasmText(t){
var l = t.length;
var nt = "";
var char = "`1234567890-=qwertyuiop[]\asdfghjkl;'zxcvbnm,./~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:\"ZXCVBNM<>?☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ûÿÖÜ¢£¥₧ƒáíóúñÑªº";
for (var i = 0; i < l; i++){
  if (t[i]==" "){
    nt+=" ";
  }
  else{
    var r = Math.floor(Math.random()*char.length);
    nt+=char[r];
  }
}
return nt;
}

var glitchTime = 10000;
function glitchTitle(t){
    var i = setInterval(()=>{
    document.getElementById("location-name").innerHTML=spasmText(t);
  },50);
  setTimeout(()=>{
    clearInterval(i);
    document.getElementById("location-name").innerHTML=t;
  },500);
}

function randTransform(id,ins){//ins from 1-10
  var s='';
  
  document.getElementId(id).style = s;
}
