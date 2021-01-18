class Player{
  constructor(){
    this.index = null;
    //this.position.x = null
    //this.position.y = displayHeight/2 
    this.distance = 89
    this.points = 0
    this.name = null
    
  }
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
    
  }
  updateCount(count){
    database.ref('/').update({
      playerCount:count
    })
  }
  
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      points:this.points
      
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

}