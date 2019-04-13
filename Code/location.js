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
          y:90,
          style:"transform:translate(-50%,-50%);width:20%;",
          html:"<img width='100%' src='/eastergame/Images/Misc/chest.png'>",
          onclick:function(){
            //needs rug key
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
        {//Fog
          id:"cemeteryfog",
          unlocked:true,
          x:50,
          y:50,
          style:"transform:translate(-50%,-50%);width:100%;",
          html:"<img width='100%' src='/eastergame/Images/Cemetery/fog.png'>",
          onclick:function(){
            cemeteryLighten();
          }
        },
        
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
          y:50,
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
