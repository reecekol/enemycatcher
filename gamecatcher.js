$(document).ready(function()
  {
  
    var canvas = document.createElement("canvas");
	canvas.width="512";
	canvas.height="448";
	//Imagse
	
	var backgroundImage= new Image();
	var playerImage = new Image();
	var enemyImage = new Image();
	
	var enemies=0;
	backgroundImage.src="background.png";
	playerImage.src="player.png";
	enemyImage.src="enemy.png";
	
	var context=canvas.getContext("2d");
	
	var Player={};
	
	var Enemy={};
	
	$("body").append(canvas);
	
	
	
	var Game={
	  
      player:Player,
	  
	  init:function() {
	  me=this;
	   
	  me.player.x=canvas.width/2;
	  me.player.y=canvas.height/2;
	  
	  
	  me.render();
	  this.movePlayer();
	  
	  },
	  
	 render:function(){
      context.drawImage(backgroundImage,0,0);
      context.drawImage(playerImage,this.player.x,this.player.y);		  
      
	  var randx=32+(Math.random() * (canvas.width-64));
	  var randy=32+(Math.random() * (canvas.height-64));
	  
	  context.drawImage(enemyImage,randx,randy);
	  context.fillStyle = "rgb(250, 250, 250)";
      context.font = "24px Helvetica";
      context.textAlign = "left";
      context.textBaseline = "top";
      context.fillText("Enemies: " + enemies, 32, 32)
	  
     },	 
	 
	 
	 updateX:function(distance,dir)
	{
	
	 this.player.x+=distance;
	
	},
	 
     movePlayer:function() {
      
	  var me=this;
      $(window).keydown(function(ev){
	  
	   
	   if(ev.keyCode==38)
	   {
	   
	      this.updateX(32);
	   }
	   
	   if(ev.keyCode==40)
	   {
	      me.updateX(-32);
		
	   
	   }
	   
	   if(ev.keyCode==37)
	   {
	   
	     me.updateX(32);
		  
	   }
	   
	   if(ev.keyCode==39)
	   {
	      me.updateX(32);
	   
	   }
	   
	   me.checkCapture();
	   me.render();
	  });
     
    },
	
	
	
	updateY:function(distance,dir)
	{
	 this.player.y+=distance;
    },

    checkCapture:function()
    {

      enemies+=1;
	  this.init();
	 
    }
  }
	
	Game.init();
  });