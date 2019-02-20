function init(){
  //load map locations
  for (var i = 0; i < locations.length; i++){visit(i,true);}
  //starter page
  page(0);
  //map
  resizeMap();
  updateMap();
}
