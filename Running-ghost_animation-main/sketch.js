var ghost, ghostImage
function preload() {
    ghostImage = loadAnimation("ghost1.png","ghost2.png","ghost3.png")



}

function setup(){
createCanvas(600,600)
ghost = createSprite(300,300,20,20)
ghost.addAnimation("ghost",ghostImage)
}
function draw(){
background("orange")
drawSprites()  
}