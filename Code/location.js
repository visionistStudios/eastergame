 var locations = [{//0
      name:"The Village",
      src:"/eastergame/Images/Village/village.png",
      obj:[
        {//chest
          id:"villagechest",
          unlocked:false,
          x:50,
          y:83,
          style:"transform:translate(-50%,-50%);width:7%;",
          html:"<img width='100%' src='/eastergame/Images/Misc/chest.png'>",
          onclick:function(){
            if (check("hasclosetkey",true)){
              findegg(10);
            }else{
              alert("There must be a key for this chest...");
            }
          }
        },
        {//fire
          id:"villagefire",
          unlocked:true,
          x:50,
          y:79.7,
          style:"transform:translate(-50%,-50%);width:13%;",
          html:"<img width='100%' src='/eastergame/Images/Village/fire.png'>",
          onclick:function(){
            alert("Whoosh, you put out the fire.");
            hide("villagefire",[0,1]);
            unlock("villagechest",[0,0]);
          }
        },
        {//door 0
          id:"villagedoor0",
          unlocked:true,
          x:16.25,
          y:77.25,
          style:"transform:translate(-50%,-50%);width:5.7%;",
          html:"<img width='100%' src='/eastergame/Images/Village/door.png'>",
          onclick:function(){
            visit(1);
          }
        },
        {//door 1
          id:"villagedoor1",
          unlocked:true,
          x:40.25,
          y:61.25,
          style:"transform:translate(-50%,-50%);width:5.7%;",
          html:"<img width='100%' src='/eastergame/Images/Village/door.png'>",
          onclick:function(){
            visit(2);
          }
        },
        {//door 2
          id:"villagedoor2",
          unlocked:true,
          x:66.5,
          y:59.5,
          style:"transform:translate(-50%,-50%);width:5.7%;",
          html:"<img width='100%' src='/eastergame/Images/Village/door.png'>",
          onclick:function(){
            alert("A locked house");
          }
        },
        {//door 3
          id:"villagedoor3",
          unlocked:true,
          x:90.25,
          y:78,
          style:"transform:translate(-50%,-50%);width:5.7%;",
          html:"<img width='100%' src='/eastergame/Images/Village/door.png'>",
          onclick:function(){
            visit(4);
          }
        }
        ]
    },
    {//1
      name:"The First Village House",
      src:"/eastergame/Images/Village/house.png",
      obj:[
        {//rug
          unlocked:true,
          x:50,
          y:90,
          style:"transform:translate(-50%,-50%);width:45%;",
          html:"<img width='100%' src='/eastergame/Images/Village/rug.png'>",
          onclick:function(){
            if (!egglist[9].found){
              unlock("egg9",[1,2]);
            }
          }
        },
        {//closet
          unlocked:true,
          x:34,
          y:57,
          style:"transform:translate(-50%,-50%);width:18%;",
          html:"<img width='100%' src='/eastergame/Images/Village/closet.png'>",
          onclick:function(){
            check("hasclosetkey",false,function(){unlock("closetkey",[1,3]);});
          }
        },
        {//egg
          unlocked:false,
          id:"egg9",
          x:64,
          y:93,
          style:"transform:translate(-50%,-50%);width:6%;",
          html:"<img width='100%' src='/eastergame/Images/Misc/egg.png'>",
          onclick:function(){
            findegg(9);
          }
        },
        {//key
          unlocked:false,
          id:"closetkey",
          x:34,
          y:35,
          style:"transform:translate(-50%,-50%) rotate(90deg);width:2%;",
          html:"<img width='100%' src='/eastergame/Images/Misc/key.png'>",
          onclick:function(){
            check("hasclosetkey",false,function(){
            vars.hasclosetkey=true;
            alert("Oooh, a key!");
            alert("If theres a key, there must be a lock!");
            hide("closetkey",[1,3]);
            });
          }
        }
        ]
    },
     {//2
      name:"The Second Village House",
      src:"/eastergame/Images/Village/house.png",
      obj:[
        {//chest
          unlocked:true,
          x:50,
          y:80,
          style:"transform:translate(-50%,-50%);width:20%;",
          html:"<img width='100%' src='/eastergame/Images/Misc/chest.png'>",
          onclick:function(){
            check("hasvillagekey",false,()=>{unlock("rugkey",[2,1]);});
          }
        },
       {//key
          id:"rugkey",
          unlocked:false,
          x:50,
          y:75,
          style:"transform:translate(-50%,-50%);width:8%;",
          html:"<img width='100%' src='/eastergame/Images/Misc/key.png'>",
          onclick:function(){
            unlock("mapbtn1");
            hide("rugkey",[2,1]);
            vars.hasvillagekey=true;
            alert("Nice key you found there!");
            alert("I think it unlocks the cemetery just outside the village.");
            alert("Don't get spooked by any ghosts!");
          }
        }
        ]
    },
     {//3
      name:"The Third Village House",
      src:"/eastergame/Images/Village/house.png",
      obj:[
        ]
    },
    {//4
      name:"The Last Village House",
      src:"/eastergame/Images/Village/house.png",
      obj:[
        {//rug0
          unlocked:true,
          x:10,
          y:50,
          style:"transform:translate(-50%,-50%) rotate(90deg);width:45%;",
          html:"<img width='100%' src='/eastergame/Images/Village/rug.png'>",
          onclick:function(){
            rugClick(0);
          }
        },
        {//rug1
          unlocked:true,
          x:50,
          y:90,
          style:"transform:translate(-50%,-50%);width:45%;",
          html:"<img width='100%' src='/eastergame/Images/Village/rug.png'>",
          onclick:function(){
            rugClick(1);
          }
        },
        {//rug2
          unlocked:true,
          x:90,
          y:50,
          style:"transform:translate(-50%,-50%) rotate(90deg);width:45%;",
          html:"<img width='100%' src='/eastergame/Images/Village/rug.png'>",
          onclick:function(){
            rugClick(2);
          },
        },
        {//rug3
          unlocked:true,
          x:50,
          y:10,
          style:"transform:translate(-50%,-50%);width:45%;",
          html:"<img width='100%' src='/eastergame/Images/Village/rug.png'>",
          onclick:function(){
            rugClick(3);
          }
        },
        {//middle rug
          id:"midrughouse",
          unlocked:true,
          x:50,
          y:50,
          style:"transform:translate(-50%,-50%) rotate(45deg);width:60%;",
          html:"<img width='100%' src='/eastergame/Images/Village/rug.png'>",
          onclick:function(){
            alert("There are two buttons behind the rug.");
            hide("midrughouse",[4,4]);
            unlock("arughouse",[4,5]);
            unlock("brughouse",[4,6]);
          }
        },
        {//a button
          id:"arughouse",
          unlocked:false,
          x:50,
          y:50,
          style:"transform:translate(-50%,-50%);width:5%;",
          html:"<h1>A</h1>",
          onclick:function(){
            rugClick(4);
          }
        },
        {//b button
          id:"brughouse",
          unlocked:false,
          x:45,
          y:45,
          style:"transform:translate(-50%,-50%);width:5%;",
          html:"<h1>B</h1>",
          onclick:function(){
            rugClick(5);
          }
        },
        {//key
          id:"rughousekey",
          unlocked:false,
          x:50,
          y:90,
          style:"transform:translate(-50%,-50%);width:5%;",
          html:"<img src='/eastergame/Images/Misc/key.png'>",
          onclick:function(){
            hide("rughousekey",[4,7]);
          }
        }
        ]
    },
    {//5
      name:"The Cemetery",
      src:"/eastergame/Images/Cemetery/cemetery.png",
      obj:[
        {//Ladder
          id:"cemeteryladder",
          unlocked:true,
          x:70,
          y:0,
          style:"transform:translate(-50%,0%);width:5%;",
          html:"<img width='100%' src='/eastergame/Images/Cemetery/ladder.png'>",
          onclick:function(){
            visit(6);
          }
        },
        {//Flower
          id:"cemeteryflower1",
          unlocked:true,
          x:45,
          y:50,
          style:"transform:translate(-50%,0%);width:3%;",
          html:"<img width='100%' src='/eastergame/Images/Misc/yellowflower.png'>",
          onclick:function(){
            findegg(14);
          }
        },
       {//Shovel
        id:"cemeteryshovel",
        unlocked:true,
        x:35.5,
        y:35,
        style:"transform:translate(-50%,-50%) rotate(15deg);width:6%;",
        html:"<img width='100%' src='/eastergame/Images/Cemetery/shovel.png'>",
        onclick:function(){
         vars.hasshovel=true;
         alert("Uh, I don't know why you would need a shovel");
         alert("I guess you can have it if you want lol");
         hide("cemeteryshovel",[5,2]);
        }
       },
       {//Bush
        id:"cemeterybush",
        unlocked:true,
        x:50,
        y:50,
        style:"transform:translate(-50%,-50%) rotate(15deg);width:8%;",
        html:"<img width='100%' src='/eastergame/Images/Misc/bushy.png'>",
        onclick:function(){
          hide("cemeterybush",[5,3]);
          unlock("cemeteryface",[5,4]);
        }
       },
       {//Face thing
        id:"cemeteryface",
        unlocked:false,
        x:50,
        y:50,
        style:"transform:translate(-50%,-50%); width:6%;",
        html:"<img width='100%' src='/eastergame/Images/Misc/face.png'>",
        onclick:function(){
          findegg(16);
        }
       },
       {//Grave
        id:"cemeterygravebox",
        unlocked:true,
        x:73,
        y:65,
        style:"transform:translate(-50%,-50%);width:10%;height:10%",
        html:"<img width='100%' src='/eastergame/Images/Misc/blank.png'>",
        onclick:function(){
          check("fluffval",0,()=>{
            check("hasshovel",true,()=>{
            alert("Um, I don't think you should be disturbing people's graves...");
            alert("Especially HIS...");
            alert("But I mean, it probably won't do anything bad xD");
            if (!confirm("Proceed unearthing the grave?")){return;}
            unlock("mapbtn2");
            page(6);
            vars.fluffval=1;
            fluffScreen(0);
            });
          });
        }
       },
       {//Fog
          id:"cemeteryfog",
          unlocked:true,//toggle to false for testing
          x:50,
          y:50,
          style:"transform:translate(-50%,-50%);width:100%;",
          html:"<img width='100%' src='/eastergame/Images/Cemetery/fog.png'>",
          onclick:function(){
            cemeteryLighten();
          }
        }
        ]
    },
    {//6
      name:"The Cemetery Tree",
      src:"/eastergame/Images/Cemetery/tree.png",
      obj:[
        {//Bird Nest Egg
          id:"cemeteryegg",
          unlocked:true,
          x:65,
          y:55,
          style:"transform:translate(-50%,-50%);width:5%;",
          html:"<img width='100%' src='/eastergame/Images/Misc/egg.png'>",
          onclick:function(){
            findegg(15);
          }
        },
        {//Ladder
          id:"cemeterytreeladder",
          unlocked:true,
          x:85,
          y:45,
          style:"transform:translate(-50%,0%);width:10%;",
          html:"<img width='100%' src='/eastergame/Images/Cemetery/ladder.png'>",
          onclick:function(){
            visit(5);
          }
        }
        ]
    },
    {//7
      name:"The Rivers End",
      src:"/eastergame/Images/RiversEnd/riversend.png",
      obj:[
        {//lighthouse door
           unlocked:true,
           x:80,
           y:52,
           style:"transform:translate(-50%,-50%);width:2%;",
           html:"<img width='100%' src='/eastergame/Images/RiversEnd/lighthousedoor.png'>",
           onclick:function(){
               visit(8);
           }
        },
        {//yeet island
           unlocked:true,
           x:15,
           y:20,
           style:"transform:translate(-50%,-50%);width:5%;",
           html:"<img width='100%' src='/eastergame/Images/Misc/face.png'>",
           onclick:function(){
               visit(9);
           }
        },
        {//rivers view
           unlocked:true,
           x:70,
           y:17,
           style:"transform:translate(-50%,-50%);width:30%;height:10%;",
           html:"<img width='100%' height='100%' src='/eastergame/Images/Misc/blank.png'>",
           onclick:function(){
               visit(10);
           }
        }
        ]
    },
    {//8
      name:"The Lighthouse",
      src:"/eastergame/Images/RiversEnd/lighthouse.png",
      obj:[
        {//fog
           id:"lighthousefog",
           unlocked:true,
           x:50,
           y:44.5,
           style:"transform:translate(-50%,-50%);width:100%;height:68%;",
           html:"<img width='100%' height='100%' src='/eastergame/Images/RiversEnd/fog.png'>",
           onclick:function(){
               
           }
        },
        {//light
           unlocked:true,
           x:50,
           y:80,
           style:"transform:translate(-50%,-100%);width:25%;",
           html:"<img width='100%' src='/eastergame/Images/RiversEnd/light.png'>",
           onclick:function(){
               check("lighthouseopacity",1,()=>{lighthouseLighten();});
           }
        }
        ]
    },
    {//9
      name:"YEET ISLAND",
      src:"/eastergame/Images/RiversEnd/island.png",
      obj:[
        {//face
           unlocked:true,
           x:25,
           y:75,
           style:"transform:translate(-50%,-50%);width:100%;",
           html:"<img width='100%' src='/eastergame/Images/Misc/face.png'>",
           onclick:function(){
               glitchTitle("YEET ISLAND");
           }
        },
       {//sun
           id:"happysunthing",
           unlocked:true,
           x:25,
           y:25,
           style:"transform:translate(-50%,-50%);width:25%;height:25%",
           html:"<img width='100%' src='/eastergame/Images/Misc/blank.png'>",
           onclick:function(){
               findegg(18);
           }
        }
        ]
    },
    {//10
      name:"The River's View",
      src:"/eastergame/Images/RiversEnd/view.png",
      obj:[
        {//unlock path
           unlocked:true,
           x:90,
           y:43,
           style:"transform:translate(-50%,-50%);width:20%;height:33%;",
           html:"<img width='100%' height='100%' src='/eastergame/Images/Misc/blank.png'>",
           onclick:function(){
               visit(11);
           }
        },
       {//grass
           id:"rivergrass",
           unlocked:true,
           x:50,
           y:50,
           style:"transform:translate(-50%,-50%);width:4%;height:4%;",
           html:"<img width='100%' height='100%' src='/eastergame/Images/Misc/grass.png'>",
           onclick:function(){
               hide("rivergrass",[10,1]);
               unlock("rivergrassegg",[10,2]);
           }
        },
        {//grass egg
           id:"rivergrassegg",
           unlocked:false,
           x:50,
           y:50,
           style:"transform:translate(-50%,-50%);width:3%;",
           html:"<img width='100%' src='/eastergame/Images/Misc/egg.png'>",
           onclick:function(){
               findegg(19);
           }
        },
        {//octopus
           id:"octopus",
           unlocked:true,
           x:10,
           y:65,
           style:"transform:translate(-50%,-50%);width:3%;height:3%;",
           html:"<img width='100%' height='100%' src='/eastergame/Images/RiversEnd/octopus.png'>",
           onclick:function(){
               alert(octopusmsgs[vars.octopusclick]);
               vars.octopusclick++;
               check("octopusclick",octopusmsgs.length,function(){
                  alert("I think you made octopus run away...");
                  hide("octopus",[10,3]);
                  unlock("ink",[10,4]);
               });
           }
        },
        {//ink
           id:"ink",
           unlocked:false,
           x:10,
           y:65,
           style:"transform:translate(-50%,-50%);width:3%;height:3%;",
           html:"<img width='100%' height='100%' src='/eastergame/Images/RiversEnd/octopus.png'>",
           onclick:function(){
               alert("What a nice ink cloud.");
               vars.hasink = true;
               hide([10,4],"ink");
           }
        }
       ]
    },
    {//11
      name:"The River's Path",
      src:"/eastergame/Images/RiversEnd/path.png",
      obj:[
        {//unlock path
           unlocked:true,
           x:50,
           y:50,
           style:"transform:translate(-50%,-50%);width:50%;",
           html:"<h1>Click here for path 2</h1>",
           onclick:function(){
               visit(12);
           }
        }
        ]
    },
    {//12
      name:"The River's Path 2",
      src:"/eastergame/Images/RiversEnd/path2.png",
      obj:[
        {//unlock path
           unlocked:true,
           x:50,
           y:50,
           style:"transform:translate(-50%,-50%);width:50%;",
           html:"<h1>Click here for mountains yey</h1>",
           onclick:function(){
               unlock("mapbtn3");
               visit(14);
           }
        }
        ]
    },
    {//13
      name:"SECRIT",
      src:"/eastergame/Images/RiversEnd/island.png",
      obj:[
        {//unlock path
           unlocked:true,
           x:50,
           y:50,
           style:"transform:translate(-50%,-50%);width:50%;",
           html:"<h1>sECrIt rOUM</h1>",
           onclick:function(){
               //visit(11);
           }
        }
        ]
    },
    {//14
      name:"The Mountains",
      src:"/eastergame/Images/Mountains/mountains.png",
      obj:[
        {//campfire location
          unlocked:true,
          x:28.5,
          y:53.5,
          style:"transform:translate(-50%,-50%);width:3%;height:3%;",
          html:"<img src='/eastergame/Images/Misc/blank.png' width='100%'>",
          onclick:function(){
            visit(15);
          }
        },
        {//cave
          unlocked:true,
          x:84.25,
          y:54.25,
          style:"transform:translate(-50%,-50%);width:3%;height:5%;",
          html:"<img src='/eastergame/Images/Misc/blank.png' width='100%'>",
          onclick:function(){
            visit(16);
          }
        },
       {//campfire object
        unlocked:true,
          x:28.5,
          y:75,
          style:"transform:translate(-50%,-50%);width:3%;height:3%;",
          html:"<img src='/eastergame/Images/Mountains/campfire.png' width='100%'>",
          onclick:function(){
            alert("HI");
          }
        }
        ]
    },
    {//15
      name:"The Campfire",
      src:"/eastergame/Images/Mountains/camp.png",
      obj:[
        {//campfire location
          unlocked:true,
          x:28.5,
          y:53.5,
          style:"transform:translate(-50%,-50%);width:3%;height:3%;",
          html:"<img src='/eastergame/Images/Misc/blank.png' width='100%'>",
          onclick:function(){
            
          }
        },
        {//cave
          unlocked:true,
          x:84.25,
          y:54.25,
          style:"transform:translate(-50%,-50%);width:3%;height:5%;",
          html:"<img src='/eastergame/Images/Misc/blank.png' width='100%'>",
          onclick:function(){
            
          }
        },
       {//campfire object
        unlocked:true,
          x:28.5,
          y:75,
          style:"transform:translate(-50%,-50%);width:3%;height:3%;",
          html:"<img src='/eastergame/Images/Misc/egg.png' width='100%'>",
          onclick:function(){
            
          }
        },
        ]
    },
    {//16
      name:"The Caves",
      src:"/eastergame/Images/Mountains/cave.png",
      obj:[
       {//campfire object
        unlocked:true,
          x:28.5,
          y:75,
          style:"transform:translate(-50%,-50%);width:3%;height:3%;",
          html:"<img src='/eastergame/Images/Moutains/sealrock.png' width='100%'>",
          onclick:function(){
            alert("HI");
          }
        }
        ]
    },
    //not made yet location
    {
      name:"Lol we haven't made this location yet...",
      src:"/eastergame/Images/Misc/chest.png",
      obj:[
        {//chest text
          unlocked:true,
          x:50,
          y:90,
          style:"transform:translate(-50%,-50%);",
          html:"<h1>This is under construction</h1>",
          onclick:function(){
            alert("If only there were more easter eggs...!");
          }
        }
        ]
    }];
