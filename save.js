 //SAVING SYSTEM
    function parse(a){
      var n;
      if (parseInt(a)+"." !== "NaN."){
          n = parseInt(a);
      }
      else if (parseInt(a)+"." == "NaN."){
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
      for (var i = 0; i < storageobj.length; i++){
          if (storageobj[i]!=="undefined"){
            unlock(null,storageobj[i].split(":"));
          }
        }
     
      if (localStorage.eggs){
        eggs = parseInt(localStorage.eggs);
      }
    }
