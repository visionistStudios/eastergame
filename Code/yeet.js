function yeetText(t){
var l = t.length;
var nt = "";
var char = "`1234567890-=qwertyuiop[]\asdfghjkl;'zxcvbnm,./~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:\"ZXCVBNM<>?☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ûÿÖÜ¢£¥₧ƒáíóúñÑªº";
for (var i = 0; i < l; i++){
var r = Math.random()*char.length;
nt+=char[r];
}
return nt;
}
