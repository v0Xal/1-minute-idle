var game = {
"money":0,
"time":0,
  "souls":0,
  "soulFluid":0,
  "soulFluidNeeded":10000,
"maxTime":60,
"clocks":0,
"clockPower":1,
"clockProgress":0
}
function val(id,thing){
  document.getElementById(id).innerHTML = thing
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
function update(){
  val("soulFluidCounter",game.soulFluid + "/" + game.soulFluidNeeded + " Soul Fluid")
  document.getElementById("soulFluid").style.height = game.soulFluid/game.soulFluidNeeded +"%";
  val("souls",game.souls + " Souls");
}
setInterval(update,50);
function startGame(){
game.time = game.maxTime;
game.money = 0;
game.clocks = 0;
repeat = setInterval(countdown,1000);
}

function endGame(){

}
