var game = {
"money":0,
"time":0,
"maxTime":60,
"clocks":0,
"clockPower":1,
"clockProgress":0
}


function countdown(){
if(game.time > 0){
game.time--;
}else{
clearInterval(repeat);
endGame();
}
}
var repeat = setInterval(countdown,1000);


function startGame(){
game.time = game.maxTime;
game.money = 0;
game.clocks = 0;
repeat = setInterval(countdown,1000);
}

function endGame(){

}
