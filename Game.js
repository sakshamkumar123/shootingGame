class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState') 
        gameStateRef.on("value",function(data){
            gameState = data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
        if (gameState===0){
            player=new Player();
            var playerCountRef = await database.ref('playerCount').once("value") 
            if (playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount()
            }
            form = new Form()
            form.display()
            
            var player1 = createSprite(20,100)
            player1.addImage(player1Img)
            player1.scale = 0.8
    
            var player2 = createSprite(100,100)
            player2.addImage(player2Img)
            player2.scale = 0.8
    
             players = [player1,player2]

             gun = createSprite(players[0].x,players[0].y)
             gun.addImage(gunImg)
             gun.scale  = 0.09

             gun2 = createSprite(players[0].x,players[0].y)
             gun2.addImage(gun2Img)
             gun2.scale = 0.2
        }
        
    }
    play(){
        form.hide()
        Player.getPlayerInfo()
        if (allPlayers!==undefined){
            background("green")
            image(backgroundImg,0,0,displayWidth,displayHeight)

            var index = 0 
        var x = -700; 
        var y ;
            for (var plr in allPlayers){

               index = index+1;

               fill("black")
               textSize(30)
               text("score 100 points to win",width/3,height/2-height/4)
               text("press space  to  shoot ",width/3,height/2-height/5)

              
               x = x +  900

               if (index===1){
                   gun2.x = players[index-1].x
                   gun2.y = players[index-1].y+20
               }
               if (index===2){
                gun.x = players[index-1].x
                gun.y = players[index-1].y+20
            }
               
            if (players.length===2){
                if(bullet!==undefined && bullet.isTouching(players[index-1])){
                    player.points = player.points+20
                    bullet.destroy()
                    
                     player.update()
                 }
                 if(bullet2!== undefined &&bullet2.isTouching(players[index-1])){
                    player.points = player.points+20
                     player.update()
                     bullet2.destroy()
                 }
                }
               
              
               y = displayHeight - allPlayers[plr].distance;     
               
               players[index-1].x = x;
               players[index-1].y = y;

     

               if (index === player.index ){
                fill("black")
                textSize(30)
                text("points: "+player.points,10,30)
              
            console.log(player.points)

            
                if (keyWentDown("space")){
                    
                    

                    if(index===1){
                    bullet  = createSprite(players[index-1].x+20,players[index-1].y,10,10)
                    bullet.shapeColor = "red"
                    bullet.lifeTime = 10
                    bullet.depth = 1
                    bullet.velocityX = 50
                    }
                    if(index===2){
                    bullet2  = createSprite(players[index-1].x-20,players[index-1].y,10,10)
                    bullet2.shapeColor = "blue"
                    bullet2.lifeTime = 10
                    bullet2.depth = 1
                    bullet2.velocityX = -50
                        }
                
                   
                }

                

               }
               
             

        }

        

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=10
            player.update();
          }
          if(keyIsDown(DOWN_ARROW) && player.index !== null){
            player.distance -=10
            player.update();
          }
          if(keyIsDown(RIGHT_ARROW) && player.index !== null){
            player.distancex -=10
            player.update();
          }
          if(keyIsDown(LEFT_ARROW) && player.index !== null){
            player.distancex +=10
            player.update();
          }
          if(player.points===100){
              text("YOU WIN!!",width/2,height/2)
              gameState = 2
          }

        
        drawSprites()
    }

    
}

end(){
    console.log("game Ended")
    
}

}