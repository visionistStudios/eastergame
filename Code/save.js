 //SAVING SYSTEM
    function parse(a){
      var n;
      if (parseFloat(a)+"." !== "NaN."){
          n = parseFloat(a);
      }
      else if (parseFloat(a)+"." == "NaN."){
        if (a == "true"){
        n = true; 
        }
        if (a=="false"){
        n = false;
        }
      }else{
        n=a;
      }
      return n;
    }
    
    function save(){
      var vkeys = Object.keys(vars);
      alert("You are about to save your game.  load your game with load() in the console or press the load button.");
      if (typeof(Storage) !== "undefined") {
        for (var i = 0; i<vkeys.length; i++){
        localStorage["vars"+i]=vars[vkeys[i]];
        }
        
        for (var i = 0; i < egglist.length; i++){
          localStorage["egglist"+i]=egglist[i].found;
        }
        localStorage.unlocked=unlocked;
        localStorage.unlockedobj=unlockedobj;
        localStorage.eggs=eggs;
      } else {
        alert("Save failed.  You are probably using a browser that does not use local storage.");
      }
    }
    function load(){
      unlocked=[];
      unlockedobj=[];      
      
      var vkeys = Object.keys(vars);
      for (var i = 0; i < vkeys.length; i++){
        if (localStorage["vars"+i]){
          vars[vkeys[i]] = parse(localStorage["vars"+i]);
          if (varonload[i]){
            varonload[i]();
          }
        }
      }
      
      for (var i = 0; i < egglist.length; i++){
        if (localStorage["egglist"+i]=="true"){
          findegg(i,true);
        }
      }
     
      var storageunlocked = localStorage.unlocked.split(",");
      for (var i = 0; i < storageunlocked.length; i++){
        if (storageunlocked[i]!=="undefined"){
          unlock(storageunlocked[i]);
        }
      }
     
      var storageobj = localStorage.unlockedobj.split(",");
      for (var l = 0; l < locations.length; l++){
          for (var i = 0; i < locations[l].obj.length; i++){
            if (storageobj.indexOf(l+":"+i)!==-1){
              unlock(null,[l,i]);
            }else{
              hide(null,[l,i]);
            }
          }
        }
     
      if (localStorage.eggs){
        eggs = parseInt(localStorage.eggs);
      }
    }
function clear(){
      var vkeys = Object.keys(vars);
      if (typeof(Storage) !== "undefined" && confirm("You are about to clear your game. Your progress will be cleared. Proceed?");) {
        for (var i = 0; i<vkeys.length; i++){
        localStorage["vars"+i]=null;//I don't even know if this will cause errors or not
        }
        
        for (var i = 0; i < egglist.length; i++){
          localStorage["egglist"+i]=null;
        }
        localStorage.unlocked=null;
        localStorage.unlockedobj=null;
        localStorage.eggs=0;
      }
}
