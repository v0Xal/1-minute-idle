var game = {
  money: 0,
  time: 0,
  souls: 0,
  soulFluid: 0,
  soulFluidNeeded: 10000,
  maxTime: 60,
  player: {
    atk: 0,
    hp: 5,
    hpMax: 10,
  },
};
function val(id, thing) {
  document.getElementById(id).innerHTML = thing;
}
function show(id) {
  document.getElementById(id).style.display = "block";
}
function hide(id) {
  document.getElementById(id).style.display = "none";
}
function countdown() {
  if (game.time > 0) {
    game.time--;
  } else {
    clearInterval(repeat);
    endGame();
  }
}
var repeat = setInterval(countdown, 1000);
function update() {
  val(
    "soulFluidCounter",
    game.soulFluid + "/" + game.soulFluidNeeded + " Soul Fluid"
  );
  document.getElementById("soulFluid").style.height =
    (game.soulFluid / game.soulFluidNeeded) * 200 + "px";
  val("souls", game.souls);
  val("playerAtk", game.player.atk);
  val("playerHp", game.player.hp);
  val("playerHpMax", game.player.hpMax);
  document.getElementById("playerHpBar").max = game.player.hpMax;
  document.getElementById("playerHpBar").value = game.player.hp;
}
setInterval(update, 50);
function startGame() {
  game.time = game.maxTime;
  game.money = 0;
  repeat = setInterval(countdown, 1000);
}

function endGame() {}
