
//staty bohatera
var glod = 0;
var exp = 0;
var level = 1;
var nextlvl = 10;
var poziom = 1;
var zbroja = 1;
var maxzdrowie = 1;
var zdrowie = 1;
var nextlvl = 1;
var maxglod = 1;
var sila = 1;
//var postacie
var postac = 0;
//1 - fighter
var fighter = {maxzdrowie:10,zbroja:2,nextlvl:12,maxglod:10,sila:2}
//2 - rogue
var rogue = {maxzdrowie:15,zbroja:0,nextlvl:8,maxglod: 7,sila:1}
//3 - mag
var mage = {maxzdrowie:5,zbroja:0,nextlvl:10,maxglod: 12,sila:4}
//4 - nieznana
var nieznana = {maxzdrowie:10,zbroja:1,nextlvl:10,maxglod:10,sila:1}
//staty wrogow
var wrogowie = 0;
var bosszone1 = 1;
var bosszone2 = 1;
var bosszone3 = 1;
var bosszone4 = 1;
var bosszone5 = 1;
//ekwipunek
var prowiant = 1;
var klatwa = 0;
var potkahp = 1;
var zestaw = 0;
var brokenarmor = 0;
var nextarmorbreak = 0;
var bomb = 0;
var scroll = 0;
//lochy
var akcje = 0;
var zone = 1;
var typpierscienia = 0;
var iwan1 = 1;
var iwan2 = 1;
var iwan3 = 1;
var handlarz = 1;
//zmienne
var randomgenerator = 0;
var zalozonazbroja = false;
var zamiennazbroja = 0;
var story = 1;
var errorlevel = 0;
var lastpray = 0;
var armorimg = 1;
scrolling = setInterval(function(){ window.scrollBy(0, 1000);	if (zdrowie == 0 || zdrowie < 0){if (errorlevel == 0){errorlevel = errorlevel + 1;document.getElementById("zdrowaska").src = "zasoby/smierc.png";var audio = new Audio('zasoby/death.mp3');audio.play();alert("YOU DIED...");setTimeout(function(){ location.reload(); }, 2500);}}}, 50);
