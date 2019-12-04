//egg counter and list of all easter eggs
    var eggs = 0;
    var egglist = [//a is alerts, u is unlocks, s is special
      {a:function(){//0
        alert("You found an easter egg!");
      },
      u:function(){
        unlock("counter");
        unlock("egg1");
      }},
      {a:function(){//1
        alert("Didn't expect you to find an egg there, did you?");
      },
      u:function(){
        hide("egg1");
        unlock("egg2");
      }},
      {a:function(){//2
      alert("It looks like you found the rule of the game:")
      alert("Click the easter eggs!")
      alert("Well, you might want to keep in mind some of these helpful tips!")
      alert("They always may come into play later... Loool")
      alert("Ima add some new features now... brb");
      setTimeout(function(){
        alert("Ok, finished uploading the code...")
        alert("I'm Visionist btw")
        alert("(You know... one of the all-powerful devs?)")
      },4000);
      },
      u:function(){
      setTimeout(function(){
        unlock("title");
        unlock("request");
        unlock("guide");
        unlock("clickybtn");
        unlock("key0");
      },4000);
      }},
      {a:function(){//3
        alert("Haha!  I told you that you should click on eggs, not the words \"Easter Egg\"!")
        alert("Well, that was a clever trick! Have an egg!");
      }},
      {a:function(){//4
        alert("Wierd, I wonder who would lock eggs up in chests?");
      },
      s:function(){
        vars.eggstage=1;
      }},
      {a:function(){//5
        alert("WOW What a smartass.  You click on it JUST because it says \"the egg\" rather than \"easter egg\".");
      }},
      {a:function(){//6
        alert("Yes.  I mean EVERYTHING!");
      }},
      {a:function(){//7
        alert("You have good instict!");
        alert("Always come back old easter eggs in case things have changed...");
      }},
      {a:function(){//8
        alert("I didn't put that face there...");
        alert("It must've been a bug.");
        alert("I guess you can have an egg for finding it...");
      },
      s:function(){
        document.getElementById("cbface").innerHTML="";
      }},
      {a:function(){//9
        alert("The classic under-the-carpet trick!");
      },
      u:function(){
        hide("egg9",[1,2]);
      }},
      {a:function(){//10
        alert("Still, who keeps putting chests everywhere?");
        alert("It's not me, I swear!");
      }},
      {a:function(){//11
        alert("You solved the Konami code!");
      },
      s:function(){
        vars.rughousestate=0;
        vars.rughousestage++;
      }},
      {a:function(){//12
        alert("You solved the Konami code again!");
      },
      s:function(){
        vars.rughousestate=0;
        vars.rughousestage++;
      }},
      {a:function(){//13
        alert("You solved the Konami code a third time!");
        alert("Here, take a key!");
      },
      s:function(){
        vars.rughousestate=0;
        vars.rughousestage++;
        vars.hasrughousekey=true;
      },
      u:function(){
        unlock("rughousekey",[4,7]);
      }},
      {a:function(){//14
        alert("Oh, a flower!");
      },
      u:function(){
        hide("cemeteryflower1",[5,1]);
      },
      s:function(){
        vars.hasyellowflower1=true;
      }},
      {a:function(){//15
        alert("A nest with an easter egg in it lol");
      },
      u:function(){
        hide("cemeteryegg",[6,0]);
      }},
      {a:function(){//16
        check("fluffval",0,()=>{
          alert("I think this face is a bug...");
          alert("Thanks for finding it for me!");
          alert("Have an egg :P");
        });
        check("fluffval",1,()=>{
          document.getElementById("cemeteryface").innerHTML="<p class='fluffmsg'>Now, now.  We shouldn't be wasting time on silly faces, should we?</p>";
        });
        check("fluffval",2,()=>{
          document.getElementById("area-container").innerHTML="<h1 class='fluffmsg'><strong>IT'S ALREADY TOO LATE</strong></h1>";
        });
      }},
      {s:function(){//17
        document.getElementById("cbmsg").innerHTML="I will be seeing you soon...";
      }},
      {s:function(){//18
       document.getElementById("happysunthing").innerHTML="<p class='fluffmsg'>AHAHA, now the sun is an egg?</p>";
      }},
      {s:function(){//19
        hide("rivergrassegg",[10,2]);
      }}
];
    
    //fill in "found" state
    for (var i = 0; i<egglist.length; i++){
      egglist[i].found=false;
    }
    var eggnum = document.getElementById("eggs");
    
    //find egg
    function findegg(id,load){
      if (!egglist[id].found){
        if (!load){
          if (egglist[id].a){egglist[id].a();}
          if (egglist[id].u){egglist[id].u();}
        }

      if (egglist[id].s){egglist[id].s();}
      eggs++;
      eggnum.innerHTML=eggs;
      egglist[id].found=true;
      }
    }
