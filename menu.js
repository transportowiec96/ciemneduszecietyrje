﻿
function classrogue(){
maxzdrowie = rogue.maxzdrowie;
zdrowie = rogue.maxzdrowie;
zbroja = rogue.zbroja;
nextlvl = rogue.nextlvl;
maxglod = rogue.maxglod;
sila = rogue.sila;
nextarmorbreak = zbroja * 20;
postac = 2;
document.getElementById("wybierzpostac").style.display = "none";
document.getElementById("nazwadef").innerHTML = "Lekkie ubranie";
document.getElementById("zdrowie").innerHTML = rogue.maxzdrowie;
document.getElementById("maxzdrowie").innerHTML = rogue.maxzdrowie;
document.getElementById("maxglod").innerHTML = rogue.maxglod;
document.getElementById("def").innerHTML = rogue.zbroja;
document.getElementById("nextlvl").innerHTML = rogue.nextlvl;
document.getElementById("sila").innerHTML = rogue.sila;
document.getElementById("klasapostaci").src = "zasoby/rogue.png";
hit29 = new Audio('zasoby/descend.mp3');
hit29.play();
theme.pause();
game = new Audio('zasoby/game.ogg');
game.volume = 0.5;
game.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
game.play();
hpcheck();
}
function classfighter(){
maxzdrowie = fighter.maxzdrowie;
zdrowie = fighter.maxzdrowie;
zbroja = fighter.zbroja;
nextlvl = fighter.nextlvl;
maxglod = fighter.maxglod;
sila = fighter.sila;
nextarmorbreak = zbroja * 25;
postac = 1;
document.getElementById("wybierzpostac").style.display = "none";
document.getElementById("zdrowie").innerHTML = fighter.maxzdrowie;
document.getElementById("nazwadef").innerHTML = "Skórzana Zbroja";
document.getElementById("maxzdrowie").innerHTML = fighter.maxzdrowie;
document.getElementById("maxglod").innerHTML = fighter.maxglod;
document.getElementById("def").innerHTML = fighter.zbroja;
document.getElementById("nextlvl").innerHTML = fighter.nextlvl;
document.getElementById("sila").innerHTML = fighter.sila;
document.getElementById("klasapostaci").src = "zasoby/fighter.png";
hit27 = new Audio('zasoby/descend.mp3');
hit27.play();
theme.pause();
game = new Audio('zasoby/game.ogg');
game.volume = 0.5;
game.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
game.play();
hpcheck();
}
function classmage(){
maxzdrowie = mage.maxzdrowie;
zdrowie = mage.maxzdrowie;
zbroja = mage.zbroja;
nextlvl = mage.nextlvl;
maxglod = mage.maxglod;
sila = mage.sila;
nextarmorbreak = zbroja * 20;
postac = 3;
document.getElementById("wybierzpostac").style.display = "none";
document.getElementById("zdrowie").innerHTML = mage.maxzdrowie;
document.getElementById("nazwadef").innerHTML = "Szata Maga";
document.getElementById("maxzdrowie").innerHTML = mage.maxzdrowie;
document.getElementById("maxglod").innerHTML = mage.maxglod;
document.getElementById("def").innerHTML = mage.zbroja;
document.getElementById("nextlvl").innerHTML = mage.nextlvl;
document.getElementById("sila").innerHTML = mage.sila;
document.getElementById("klasapostaci").src = "zasoby/mage.png";
hit23 = new Audio('zasoby/descend.mp3');
hit23.play();
theme.pause();
game = new Audio('zasoby/game.ogg');
game.volume = 0.5;
game.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
game.play();
hpcheck();
}
theme = new Audio('zasoby/theme.ogg');
theme.volume = 0.5;
theme.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
theme.play();
function newgame(){
	document.getElementById("mainmenu").style.display = "none";
}
function exit(){
	close();
}
