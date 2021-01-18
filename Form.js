class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton("enter")
        this.greeting = createElement("h2")
        this.title = createElement("h2")
        this.reset = createButton("reset")
    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
        this.title.hide()
    }
    display(){

        this.title.html("shooting game")
        this.title.position(displayWidth/2-50,0)
        this.input.position(displayWidth/2-40,displayHeight/2-80)
        this.button.position(displayWidth/2+30,displayHeight/2)
        this.reset.position(displayWidth-100,20)
        
        this.button.mousePressed(()=>{
        this.button.hide()
        this.input.hide()
        player.name = this.input.value()
        playerCount+=1
        player.index = playerCount
        player.update()
        player.updateCount(playerCount)
        this.greeting.html("hello"+player.name)
        this.greeting.position(displayWidth/2-70,displayHeight/4)
        })

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
          });
    }
}