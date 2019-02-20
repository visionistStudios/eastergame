function init(){
//load map locations
for (var i = 0; i < locations.length; i++){visit(i,true);}

setTimeout(function(){page(0);},1000);//set starter page
}
