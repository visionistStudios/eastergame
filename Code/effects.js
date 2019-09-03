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

function randTransform(id,ins){//ins from 0-10
  var s='';
  var t = "transform:";
  t+="translate("+(Math.random()*ins*10)+"px,"+(Math.random()*ins*10)+"px) ";
  if (ins>=2){
    t+="scaleX("+(Math.random()*ins/5+1)+")";
    t+="scaleY("+(Math.random()*ins/5+1)+")";
  }
  if (ins>=4){
    t+="rotate("+(Math.random()*360*ins/15)+"deg)";
  }
  s+=t+";";
  
  document.getElementId(id).style = s;
}
