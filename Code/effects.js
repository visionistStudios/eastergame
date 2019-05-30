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
  setInterval({()=>{
    var i = setInterval({()=>{
    document.getElementById("location-name").innerHTML=spasmText(t);
  },50);
  setTimeout({()=>{clearInterval(i);},500);
},glitchTime);
}
