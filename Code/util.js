//unlock new things and hide things
    var unlocked = [];
    var unlockedobj = [];
    function unlock(id,o){
      if (document.getElementById(id)){
        document.getElementById(id).style.display="inline";
      }
      if (unlocked.indexOf(id)==-1&&!o){
        unlocked.push(id);
      }
      if (o){
        locations[o[0]].obj[o[1]].unlocked=true;
        unlockedobj.push(o[0]+":"+o[1]);
      }
    }
    
    function hide(id,o){
      if (document.getElementById(id)){
        document.getElementById(id).style.display="none";
      }
      if (unlocked.indexOf(id)!==-1&&!o){
        unlocked[unlocked.indexOf(id)]="undefined";
      }
      if (o){
        locations[o[0]].obj[o[1]].unlocked=false;
        unlockedobj[unlockedobj.indexOf(o[0]+":"+o[1])]="undefined";
      }
    }
    
    //checkvar
    function check(v,val,f,p){
      if (vars[v]==val){
        if (f){
        if (p){f(p);}
        else{f();}
        }
        return true;
      }else{
        return false;
      }
    }
    
    //check key pressed
    function checkKey(event,k,f,p){
      var x = event.keyCode;
      var y = String.fromCharCode(x);
      if (y==k){
        f(p);
        return true;
      }else{return false;}
    }
    
    //area switch
    var maxpages = 0;
    while (document.getElementById("page"+maxpages)){
        maxpages++;
    }
    
    function page(a){
      for (i = 0; i < maxpages; i++){
        document.getElementById("page"+i).style.display="none";
      }
      document.getElementById("page"+a).style.display="inline";
    }
      
    //Map Buttons
    /*(by pixels h=392.35, w=539.481)var mapbtn = [{x:75,y:100},//The Village
                  {x:87,y:175},//The Cemetery
                  {x:100,y:275},//The River's End
                  {x:200,y:200},//The Mountains
                  {x:275,y:125},//The Jungle Temple
                  {x:275,y:250},//The Hole
                  {x:287,y:325},//The Fog
                  {x:387,y:175},//The Volcano
                  {x:375,y:275}];//The Storm*/
    var mapbtn = [
      {x:13.9,y:25.48},//The Village
      {x:16.12,y:44.6},//The Cemetery
      {x:18.53,y:70.09},//The River's End
      {x:37.07,y:50.97},//The Mountains
      {x:50.97,y:31.85},//The Jungle Temple
      {x:50.97,y:63.71},//The Hole
      {x:53.19,y:82.83},//The Fog
      {x:71.73,y:44.6},//The Volcano
      {x:69.51,y:70.09}//The Storm*/
      ];
    function updateMap(){
    for (var i = 0; i < mapbtn.length; i++){
      var s = document.getElementsByClassName("map-btn")[i];
      s.style.left=mapbtn[i].x+"%";
      s.style.top=mapbtn[i].y+"%";
    }
    }
    
    //Map size adjust (also changes play area)
    var whrate = 550 / 400;
    var hper = 0.95;
    function resizeMap(){
      var h = hper*(window.innerHeight-244);
      var w = whrate*h;
      document.getElementById("map-container").style.height=h;
      document.getElementById("map-container").style.width=w;
      document.getElementById("map-compass").style.height=h*87/400;
      document.getElementById("map-compass").style.width=h*87/400;
      //also update play area
      document.getElementById("area-container").style.height=h;
      document.getElementById("area-container").style.width=w;
    }
    
    //autoupdate
    setInterval(function(){
      //update egg counter
      document.getElementById("eggs").innerHTML=eggs;
      //update map
      resizeMap();
    },1000);
    
    //map locations
    //They aren't here anymore...
    
    function visit(l,init){
      page(5);
      if (!locations[l]){l=locations.length-1;}
      document.getElementById("location-name").innerHTML=locations[l].name;
      document.getElementById("area-container").innerHTML="<img id='location' src='"+locations[l].src+"'>";
      
      for (var i = 0; i < locations[l].obj.length; i++){
        var obj = locations[l].obj[i];
        if (!init){
          var divid = "";
          if (obj.id){divid="id='"+obj.id+"'";}

          var divunlocked = "";
          if (obj.unlocked==false){
            divunlocked="display:none;";
          }
          else {
            divunlocked="display:inline;";
          }

          var objstyle = "position:absolute;";
          objstyle+="left:"+obj.x+"%;top:"+obj.y+"%;"+obj.style;

          document.getElementById("area-container").innerHTML+="<div "+divid+" onClick='locations["+l+"].obj["+i+"].onclick();' style='"+objstyle+divunlocked+"'>"+obj.html+"</div>";
        }
        if (init){
          if (obj.unlocked==false){hide(null,[l,i]);}
          else {unlock(null,[l,i]);}
        }
      }
    }
    
