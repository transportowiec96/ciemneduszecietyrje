﻿
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
//zmienne
var randomgenerator = 0;
var zalozonazbroja = false;
var zamiennazbroja = 0;
var story = 1;
var errorlevel = 0;
var lastpray = 0;
var armorimg = 1;

scrolling = setInterval(function(){ window.scrollBy(0, 1000);	if (zdrowie == 0 || zdrowie < 0){if (errorlevel == 0){errorlevel = errorlevel + 1;document.getElementById("zdrowaska").src = "zasoby/smierc.png";var audio = new Audio('zasoby/death.mp3');audio.play();alert("YOU DIED...");setTimeout(function(){ location.reload(); }, 2500);}}}, 50);
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
function zonecheck()
{
	if (akcje > 100 && story == 1)
	{
		zone = 2;
		document.body.style.backgroundImage = "url('zasoby/zone2.png')";
		var element = document.createElement("p");
		document.body.appendChild(element);
		var element = document.createElement("p");
		document.body.appendChild(element);
		var element = document.createElement("p");
		document.body.appendChild(element);
		var element = document.createElement("p");
		var t = document.createTextNode("Kiedyś pod miastem, było więzienie dla najgorszych kryminalistów. Od czasów, gdy zaczęła działać tu czarna magia, strażnicy uciekli albo oszaleli, razem z więźniami. Jest to możliwe, że tutaj znajduje się centrum nienawistnej energii.");
		element.appendChild(t);
		document.body.appendChild(element);
		story = 2;
		hit12 = new Audio('zasoby/descend.mp3');
		hit12.play();
	}
	else if (akcje > 200 && story == 2)
	{
		zone = 3;
		document.body.style.backgroundImage = "url('zasoby/zone3.png')";
		var element = document.createElement("p");
		document.body.appendChild(element);
		var element = document.createElement("p");
		document.body.appendChild(element);
		var element = document.createElement("p");
		document.body.appendChild(element);
		var element = document.createElement("p");
		var t = document.createTextNode("Te jaskinie były kiedyś centrum handlowym między krasnoludami a ludźmi z Miasta. Od kiedy na to miejsce zaczęła wpływać zła energia, ludzie często ginęli z towarami, a krasnoludy nie mogły przez to handlować z ludźmi, więc to miejsce jest teraz zamieszkałe tylko przez dzikie zwierzęta. Jest to całkowicie możliwe, że to tutaj znajduje się centrum złej energii");
		element.appendChild(t);
		document.body.appendChild(element);
		story = 3;
		hit14 = new Audio('zasoby/descend.mp3');
		hit14.play();
	}
	else if (akcje > 300 && story == 3)
	{
		zone = 4;
		document.body.style.backgroundImage = "url('zasoby/zone4.png')";
		var element = document.createElement("p");
		document.body.appendChild(element);
		var element = document.createElement("p");
		document.body.appendChild(element);
		var element = document.createElement("p");
		document.body.appendChild(element);
		var element = document.createElement("p");
		var t = document.createTextNode("Ta metropolia krasnoludzka była kiedyś w czasach swojej świetności, ale kiedy czarna energia wpełzła do tego miejsca, skończyły się dobre czasy, a krasnoludy osłabły. Mimo to, nadal są dość potężne.");
		element.appendChild(t);
		document.body.appendChild(element);
		story = 4;
		hit15 = new Audio('zasoby/descend.mp3');
		hit15.play();
	}
	else if (akcje > 400 && story == 4)
	{
		zone = 5;
		var element = document.createElement("p");
		document.body.appendChild(element);
		var element = document.createElement("p");
		document.body.appendChild(element);
		var element = document.createElement("p");
		document.body.appendChild(element);
		document.body.style.backgroundImage = "url('zasoby/zone5.png')";
		var element = document.createElement("p");
		var t = document.createTextNode("");
		element.appendChild(t);
		document.body.appendChild(element);
		story = 5;
		hit16 = new Audio('zasoby/descend.mp3');
		hit16.play();
	}
	else if (akcje > 500 && story == 5) {
		zone = 6;
		var element = document.createElement("p");
		document.body.appendChild(element);
		var element = document.createElement("p");
		document.body.appendChild(element);
		var element = document.createElement("p");
		document.body.appendChild(element);
		document.body.style.backgroundImage = "url('zasoby/zone5.png')";
		var element = document.createElement("p");
		var t = document.createTextNode("");
		element.appendChild(t);
		document.body.appendChild(element);
		story = 6;
		hit17 = new Audio('zasoby/descend.mp3');
		hit17.play();
	}

}
function hpcheck()
{
	if (zdrowie == 0 || zdrowie < 0)
	{
		if (errorlevel == 0)
		{
			errorlevel = errorlevel + 1;
			document.getElementById("zdrowaska").src = "zasoby/smierc.png";
			var audio = new Audio('zasoby/death.mp3');
			audio.play();
      var img = document.createElement("img");
      img.src = "zasoby/gameover.png";
      document.body.appendChild(img);
			alert("YOU DIED...");
			setTimeout(function(){ location.reload(); }, 2500);
		}
	}
	else if (zdrowie < (maxzdrowie / 3))
	{
		document.getElementById("zdrowaska").src = "zasoby/zdrowie2.png";
	}
	else if (zdrowie < (maxzdrowie / 2))
	{
		document.getElementById("zdrowaska").src = "zasoby/zdrowie1.png";
	}
	else
	{
		document.getElementById("zdrowaska").src = "zasoby/zdrowie0.png";
	}
 	if (glod < (maxglod / 2))
	{
		document.getElementById("glodaska").src = "zasoby/glod0.png";
	}
	else if (glod < (maxglod / (1 + (1/2))))
	{
		document.getElementById("glodaska").src = "zasoby/glod1.png";
	}
	else
	{
		document.getElementById("glodaska").src = "zasoby/glod2.png";
	}
	if (glod >= maxglod)
	{
		zdrowie = zdrowie - 1;
	}
	if (zdrowie > maxzdrowie)
	{
		zdrowie = maxzdrowie;
	}
	if (exp >= nextlvl)
	{
		exp = exp - nextlvl;
		nextlvl = nextlvl + 7;
		maxzdrowie = maxzdrowie + 5;
		zdrowie = zdrowie + 5;
		poziom = poziom + 1;
		hit5 = new Audio('zasoby/lvlup.mp3');
		hit5.play();
		var element = document.createElement("p");
		var t = document.createTextNode("Witaj na poziomie " + poziom + "! Masz teraz więcej zdrowia!");
		element.appendChild(t);
		document.body.appendChild(element);
	}
	document.getElementById("akcje").innerHTML = akcje;
	document.getElementById("wrogowie").innerHTML = wrogowie;
	document.getElementById("zdrowie").innerHTML = zdrowie;
	document.getElementById("maxzdrowie").innerHTML = maxzdrowie;
	document.getElementById("glod").innerHTML = glod;
	document.getElementById("maxglod").innerHTML = maxglod;
  document.getElementById("zwoje").innerHTML = scroll;
  document.getElementById("bomby").innerHTML = bomb;
	document.getElementById("exp").innerHTML = exp;
	document.getElementById("sila").innerHTML = sila;
	document.getElementById("nextlvl").innerHTML = nextlvl;
  document.getElementById("poziom").innerHTML = poziom;
	document.getElementById("zestaw").innerHTML = zestaw;
	document.getElementById("prowiant").innerHTML = prowiant;
	document.getElementById("potkahp").innerHTML = potkahp;
	document.getElementById("zestaw").innerHTML = zestaw;
	document.getElementById("def").innerHTML = zbroja;
}
function bombthrow()
{
  if (bomb != 0)
  {
    bomb = bomb -1;
    document.getElementById("bomby").innerHTML = bomby;
    wrogowie = wrogowie - Math.floor((wrogowie / 100)*25)
    var element = document.createElement("p");
    var t = document.createTextNode("Rzuciłeś bombę we wrogów.");
    element.appendChild(t);
    document.body.appendChild(element);
  }
  else {
    var element = document.createElement("p");
    var t = document.createTextNode("Machnąłeś ręką.");
    element.appendChild(t);
    document.body.appendChild(element);
  }
}
function readscroll(){
  if (scroll != 0)
  {
    scroll = scroll -1;
    document.getElementById("zwoje").innerHTML = scroll;
    wrogowie = wrogowie - Math.floor((wrogowie / 100)*25)
    var element = document.createElement("p");
    var t = document.createTextNode("Przeczytałeś zwój.");
    element.appendChild(t);
    document.body.appendChild(element);
    //TODO EFEKTY
  }
  else {
    var element = document.createElement("p");
    var t = document.createTextNode("Czytasz ze swojej ręki.");
    element.appendChild(t);
    document.body.appendChild(element);
  }
  hpcheck();
}
function repair()
{
	if (zestaw != 0){
		if (postac == 1)
		{
			var element = document.createElement("p");
			var t = document.createTextNode("Poprawnie naprawiasz swoją zbroję.");
			element.appendChild(t);
			document.body.appendChild(element);
			zestaw = zestaw - 1;
			zbroja = zbroja + Math.floor((zbroja / 5) + 2);
			zbroja = zbroja + brokenarmor;
			brokenarmor = 0;
			hit9 = new Audio('zasoby/fixarmor.mp3');
			hit9.play();
		}
		else
		{
			var element = document.createElement("p");
			var t = document.createTextNode("Naprawiasz swoją zbroję.");
			element.appendChild(t);
			document.body.appendChild(element);
			zestaw = zestaw - 1;
			zbroja = zbroja + Math.floor(zbroja / 10 + 1)
			zbroja = zbroja + Math.floor((brokenarmor / 4)  * 3);
			brokenarmor = 0;
			hit9 = new Audio('zasoby/fixarmor.mp3');
			hit9.play();
		}
	}
	else {
		var element = document.createElement("p");
		var t = document.createTextNode("Próbujesz powietrzem naprawić zbroję.");
		element.appendChild(t);
		document.body.appendChild(element);
	}
	if (wrogowie != 0)
	{
			damagetake();
	}
	hpcheck();
}
function pray()
{
	if (lastpray < (akcje - 500))
	{
		maxzdrowie = maxzdrowie + 50;
		zdrowie = maxzdrowie;
		sila = sila + 15;
		zbroja = zbroja + 5;
		maxglod = maxglod + 5;
		glod = 0;
		var element = document.createElement("p");
		var t = document.createTextNode("Czujesz jak spora witalność przepływa przez twe ciało!");
		element.appendChild(t);
		document.body.appendChild(element);
		lastpray = akcje;
	}
	else if (lastpray < (akcje - 375))
	{
		maxzdrowie = maxzdrowie + 35;
		zdrowie = maxzdrowie;
		sila = sila + 11;
		zbroja = zbroja + 4;
		maxglod = maxglod + 4;
		glod = 0;
		var element = document.createElement("p");
		var t = document.createTextNode("Czujesz jak witalność przepływa przez twe ciało!");
		element.appendChild(t);
		document.body.appendChild(element);
		lastpray = akcje;
	}
	else if (lastpray < (akcje - 250))
	{
		maxzdrowie = maxzdrowie + 25;
		zdrowie = maxzdrowie;
		sila = sila + 7;
		zbroja = zbroja +2;
		maxglod = maxglod + 2;
		glod = 0;
		var element = document.createElement("p");
		var t = document.createTextNode("Czujesz jak witalność delikatnie przepływa przez twe ciało!");
		element.appendChild(t);
		document.body.appendChild(element);
		lastpray = akcje;
	}
	else if (lastpray < (akcje - 125))
	{
		maxzdrowie = maxzdrowie + 15;
		zdrowie = maxzdrowie;
		sila = sila + 3;
		zbroja = zbroja + 1;
		maxglod = maxglod + 1;
		glod = 0;
		var element = document.createElement("p");
		var t = document.createTextNode("Czujesz jak nowa moc przepływającą przez twe ciało!");
		element.appendChild(t);
		document.body.appendChild(element);
		lastpray = akcje;
	}
	else if (lastpray < (akcje - 50))
	{
		maxzdrowie = maxzdrowie + 5;
		zdrowie = maxzdrowie;
		sila = sila + 1;
		glod = 0;
		var element = document.createElement("p");
		var t = document.createTextNode("Zauważasz delikatny wzrost twojej witalności!");
		element.appendChild(t);
		document.body.appendChild(element);
		lastpray = akcje;
	}
	else
	{
		maxzdrowie = maxzdrowie - 4;
		zdrowie = maxzdrowie;
		if (sila != 1)
		{
		sila = sila - 1;
		}
		glod = maxglod - 1;
		var element = document.createElement("p");
		var t = document.createTextNode("Zauważasz spadek twojej witalności!");
		element.appendChild(t);
		document.body.appendChild(element);
		lastpray = akcje;
	}
	hpcheck();
}
function quaff()
{
	if (zdrowie < 0 || zdrowie == 0){
		hpcheck();
	}
	if (potkahp != 0){
		if (postac == 3)
		{
			var element = document.createElement("p");
			var t = document.createTextNode("Poprawnie napiłeś się mikstury zdrowia.");
			element.appendChild(t);
			document.body.appendChild(element);
			potkahp = potkahp - 1
			zdrowie = zdrowie + Math.floor(((maxzdrowie / 100) * 80));
			hit8 = new Audio('zasoby/quaff.mp3');
			hit8.play();
		}
		else {
			var element = document.createElement("p");
			var t = document.createTextNode("Napiłeś się mikstury zdrowia.");
			element.appendChild(t);
			document.body.appendChild(element);
			potkahp = potkahp - 1
			zdrowie = zdrowie + Math.floor(((maxzdrowie / 100) * 60));
			hit8 = new Audio('zasoby/quaff.mp3');
			hit8.play();
		}

	}
	else {
		var element = document.createElement("p");
		var t = document.createTextNode("Próbujesz wypić powietrze.");
		element.appendChild(t);
		document.body.appendChild(element);
	}
if (wrogowie != 0)
{
		damagetake();
}

	hpcheck();
}
function damagedeal()
{
	if (wrogowie < sila)
	{
			exp = exp + wrogowie;
			wrogowie = 0;
	}
	if (wrogowie >= sila)
	{
			exp = exp + sila;
			wrogowie = wrogowie - sila;
	}
	var element = document.createElement("p");
	var t = document.createTextNode("Zadales " + sila + " obrażeń!");
	element.appendChild(t);
	document.body.appendChild(element);
	hit2 = new Audio('zasoby/hit.mp3');
	hit2.play();
}
function damagetake(){
	dmg = wrogowie - zbroja;
	if (wrogowie > zbroja){
			nextarmorbreak = nextarmorbreak - zbroja;
	}
	else {
		nextarmorbreak = nextarmorbreak - wrogowie;
	}
	if (dmg < 0)
	{
		dmg = 0;
		hit24 = new Audio('zasoby/miss.mp3');
		hit24.play();
	}
	else {
		hit25 = new Audio('zasoby/hit.mp3');
		hit25.play();
	}
	if (nextarmorbreak < 0 && zbroja != 0)
	{
		zbroja = zbroja - 1;
		brokenarmor = brokenarmor + 1;
		nextarmorbreak = zbroja * 10;
	}
	zdrowie = zdrowie - dmg;
	var element = document.createElement("p");
	var t = document.createTextNode("Otrzymałeś " + dmg + " obrażeń!");
	element.appendChild(t);
	document.body.appendChild(element);
	hpcheck();

}
function walcz()
{
	if (wrogowie > 0){
	 damagedeal();
	 damagetake();
	 akcje = akcje + 1;
	 hpcheck();
 }
 else
 {
	 var element = document.createElement("p");
	 var t = document.createTextNode("Atakujesz powietrze.");
	 element.appendChild(t);
	 document.body.appendChild(element);
 }
}
function eat()
{
	if (prowiant != 0){
	var randomgenerator = Math.floor(Math.random()*10+1);
	if (postac == 2 && randomgenerator != 1)
	{
	 randomgenerator = randomgenerator - 1;
	}
	switch (randomgenerator)
	{
		case 1:
		glod = 0
		var element = document.createElement("p");
		var t = document.createTextNode("To jedzenie smakowało wyśmienicie!");
		element.appendChild(t);
		document.body.appendChild(element);
		prowiant = prowiant - 1;
		document.getElementById("prowiant").innerHTML = prowiant;
			break;
		case 2:
		glod = 0
		var element = document.createElement("p");
		var t = document.createTextNode("To jedzenie smakowało wyśmienicie!");
		element.appendChild(t);
		document.body.appendChild(element);
		prowiant = prowiant - 1;
		document.getElementById("prowiant").innerHTML = prowiant;
			break;
		case 3:
		glod = 0
		var element = document.createElement("p");
		var t = document.createTextNode("To jedzenie smakowało wyśmienicie!");
		element.appendChild(t);
		document.body.appendChild(element);
		prowiant = prowiant - 1;
		document.getElementById("prowiant").innerHTML = prowiant;
			break;
		case 4:
		glod = 0
		var element = document.createElement("p");
		var t = document.createTextNode("To jedzenie smakowało wyśmienicie!");
		element.appendChild(t);
		document.body.appendChild(element);
		prowiant = prowiant - 1;
		document.getElementById("prowiant").innerHTML = prowiant;
			break;
		case 5:
		glod = 0
		var element = document.createElement("p");
		var t = document.createTextNode("To jedzenie smakowało wyśmienicie!");
		element.appendChild(t);
		document.body.appendChild(element);
		prowiant = prowiant - 1;
		document.getElementById("prowiant").innerHTML = prowiant;
			break;
		case 6:
		glod = glod - 5
		if (glod < 0)
		{
			glod = 0;
		}
		var element = document.createElement("p");
		var t = document.createTextNode("To jedzenie smakowało normalnie.");
		element.appendChild(t);
		document.body.appendChild(element);
		prowiant = prowiant - 1;
		document.getElementById("prowiant").innerHTML = prowiant;
			break;
		case 7:
		glod = glod - 5
		if (glod < 0)
		{
			glod = 0;
		}
		var element = document.createElement("p");
		var t = document.createTextNode("To jedzenie smakowało normalnie.");
		element.appendChild(t);
		document.body.appendChild(element);
		prowiant = prowiant - 1;
		document.getElementById("prowiant").innerHTML = prowiant;
			break;
		case 8:
		glod = glod - 5
		if (glod < 0)
		{
			glod = 0;
		}
		var element = document.createElement("p");
		var t = document.createTextNode("To jedzenie smakowało normalnie.");
		element.appendChild(t);
		document.body.appendChild(element);
		prowiant = prowiant - 1;
		document.getElementById("prowiant").innerHTML = prowiant;
			break;
		case 9:
		glod = glod - 3
		if (glod < 0)
		{
			glod = 0;
		}
		var element = document.createElement("p");
		var t = document.createTextNode("To jedzenie smakowało niezbyt smacznie.");
		element.appendChild(t);
		document.body.appendChild(element);
		prowiant = prowiant - 1;
		document.getElementById("prowiant").innerHTML = prowiant;
			break;
		case 10:
		glod = glod - 1
		if (glod < 0)
		{
			glod = 0;
		}
		zdrowie = zdrowie - 2;
		var element = document.createElement("p");
		var t = document.createTextNode("To jedzenie smakowało obrzydliwie! Zwymiotowałeś.");
		element.appendChild(t);
		document.body.appendChild(element);
		prowiant = prowiant - 1;
		document.getElementById("prowiant").innerHTML = prowiant;
			break;

	}
	hit4 = new Audio('zasoby/eat.mp3');
	hit4.play();
	if (wrogowie != 0)
	{
		damagetake();
	}
		hpcheck();
}
else {
	var element = document.createElement("p");
	var t = document.createTextNode("Próbujesz jeść powietrze, ale ci nie wychodzi.");
	element.appendChild(t);
	document.body.appendChild(element);
}
}
function rest(){
	if (wrogowie > 0 || zone == 6)
	{
		var element = document.createElement("p");
		var t = document.createTextNode("W pobliżu są potwory, nie możesz odpocząć.");
		element.appendChild(t);
		document.body.appendChild(element);
	}
	else
	{
		akcje = akcje + 1;
		if (glod == maxglod)
		{
			zdrowie = zdrowie - 1;
		}
		else {
			glod = glod + 1;
			zdrowie = zdrowie + 2;
		}
		document.getElementById("akcje").innerHTML =  akcje;
		document.getElementById("wrogowie").innerHTML =  wrogowie;
		document.getElementById("zdrowie").innerHTML =  zdrowie;
		document.getElementById("glod").innerHTML =  glod;
		document.getElementById("sila").innerHTML =  sila;
		hpcheck();
	}
}
function zbrojanaitemy(){
		zbroja = 1;
		nazwaeq = "Płócienna zbroja"
		zestaw = zestaw + 3;
		potkahp = potkahp + 3;
		document.getElementById("nazwadef").innerHTML = nazwaeq;
		var element = document.createElement("p");
		var t = document.createTextNode("Dzięki za deala!");
		element.appendChild(t);
		document.body.appendChild(element);
		hit35 = new Audio('zasoby/talk.mp3');
		hit35.play();
	hpcheck();
}
function hpnajedzenie(){
	if (potkahp >= 2){
		prowiant = prowiant + 3;
		potkahp = potkahp - 2;
		var element = document.createElement("p");
		var t = document.createTextNode("Dzięki za deala!");
		element.appendChild(t);
		document.body.appendChild(element);
		hit35 = new Audio('zasoby/talk.mp3');
		hit35.play();
	}
	else {
		var element = document.createElement("p");
		var t = document.createTextNode("Hej! Nie masz tych przedmiotów na wymianę!");
		element.appendChild(t);
		document.body.appendChild(element);
		hit35 = new Audio('zasoby/talk.mp3');
		hit35.play();
	}
	hpcheck();
}
function prowiantnahp(){
	if (prowiant >= 2){
		prowiant = prowiant - 2;
		potkahp = potkahp + 1;
		var element = document.createElement("p");
		var t = document.createTextNode("Dzięki za deala!");
		element.appendChild(t);
		document.body.appendChild(element);
		hit35 = new Audio('zasoby/talk.mp3');
		hit35.play();
	}
	else {
		var element = document.createElement("p");
		var t = document.createTextNode("Hej! Nie masz tych przedmiotów na wymianę!");
		element.appendChild(t);
		document.body.appendChild(element);
		hit35 = new Audio('zasoby/talk.mp3');
		hit35.play();
	}
	hpcheck();
}
function hpnazestaw(){
	if (potkahp >= 5){
		potkahp = potkahp - 5;
		zestaw = zestaw + 2;
		var element = document.createElement("p");
		var t = document.createTextNode("Dzięki za deala!");
		element.appendChild(t);
		document.body.appendChild(element);
		hit35 = new Audio('zasoby/talk.mp3');
		hit35.play();
	}
	else {
		var element = document.createElement("p");
		var t = document.createTextNode("Hej! Nie masz tych przedmiotów na wymianę!");
		element.appendChild(t);
		document.body.appendChild(element);
		hit35 = new Audio('zasoby/talk.mp3');
		hit35.play();
	}
	hpcheck();
}
function zaloz()
{
	brokenarmor = 0;
	sila = sila + klatwa;
	klatwa = 0;
	switch (zone){
		case 1:
		var randomgenerator = Math.floor(Math.random()*10+1);
		if (randomgenerator < 2)
		{
			zbroja = (zamiennazbroja / 2);
			klatwa = Math.ceil(zamiennazbroja / 8);
			zamiennazbroja = 0;
			sila = sila - klatwa;
			if (sila < 1){
				sila = (1 / 2);
			}
			var element = document.createElement("p");
			var t = document.createTextNode("Założyłeś przeklętą " + nazwaeq + "!");
			element.appendChild(t);
			document.body.appendChild(element);
			hit30 = new Audio('zasoby/cursed.mp3');
			hit30.play();
			switch (armorimg){
				case 1:
				document.getElementById("armorimg").src = "zasoby/ccloth.png";
				break;
				case 2:
				document.getElementById("armorimg").src = "zasoby/cleather.png";
				break;
				case 3:
				document.getElementById("armorimg").src = "zasoby/cchainmail.png";
				break;
				case 4:
				document.getElementById("armorimg").src = "zasoby/cscale.png";
				break;
				case 5:
				document.getElementById("armorimg").src = "zasoby/cplate.png";
				break;

						}
		}
		else if (randomgenerator > 8)
		{
			zbroja = zamiennazbroja + 3;
			zamiennazbroja = 0;
			var element = document.createElement("p");
			var t = document.createTextNode("Założyłeś poświęconą " + nazwaeq + "!");
			element.appendChild(t);
			document.body.appendChild(element);
      switch (armorimg){
			case 1:
			document.getElementById("armorimg").src = "zasoby/bcloth.png";
			break;
			case 2:
			document.getElementById("armorimg").src = "zasoby/bleather.png";
			break;
			case 3:
			document.getElementById("armorimg").src = "zasoby/bchainmail.png";
			break;
			case 4:
			document.getElementById("armorimg").src = "zasoby/bscale.png";
			break;
			case 5:
			document.getElementById("armorimg").src = "zasoby/bplate.png";
			break;
    }
		}
		else
		{
			zbroja = zamiennazbroja;
			zamiennazbroja = 0;
			var element = document.createElement("p");
			var t = document.createTextNode("Założyłeś " + nazwaeq + ".");
			element.appendChild(t);
			document.body.appendChild(element);
      switch (armorimg){
			case 1:
			document.getElementById("armorimg").src = "zasoby/cloth.png";
			break;
			case 2:
			document.getElementById("armorimg").src = "zasoby/leather.png";
			break;
			case 3:
			document.getElementById("armorimg").src = "zasoby/chainmail.png";
			break;
			case 4:
			document.getElementById("armorimg").src = "zasoby/scale.png";
			break;
			case 5:
			document.getElementById("armorimg").src = "zasoby/plate.png";
			break;
    }
		}
		break;
		case 2:
		var randomgenerator = Math.floor(Math.random()*10+1);
		if (randomgenerator < 3)
		{
			zbroja = (zamiennazbroja / 2);
			klatwa = (zamiennazbroja / 2);
			zamiennazbroja = 0;
			sila = sila - klatwa;
			if (sila < 1){
				sila = (1 / 2);
			}
			var element = document.createElement("p");
			var t = document.createTextNode("Założyłeś przeklętą " + nazwaeq + "!");
			element.appendChild(t);
			document.body.appendChild(element);
			hit30 = new Audio('zasoby/cursed.mp3');
			hit30.play();
			switch (armorimg){
				case 1:
				document.getElementById("armorimg").src = "zasoby/ccloth.png";
				break;
				case 2:
				document.getElementById("armorimg").src = "zasoby/cleather.png";
				break;
				case 3:
				document.getElementById("armorimg").src = "zasoby/cchainmail.png";
				break;
				case 4:
				document.getElementById("armorimg").src = "zasoby/cscale.png";
				break;
				case 5:
				document.getElementById("armorimg").src = "zasoby/cplate.png";
				break;

						}
		}
		else if (randomgenerator > 8)
		{
			zbroja = zamiennazbroja + 7;
			zamiennazbroja = 0;
			var element = document.createElement("p");
			var t = document.createTextNode("Założyłeś poświęconą " + nazwaeq + "!");
			element.appendChild(t);
			document.body.appendChild(element);
      switch (armorimg){
			case 1:
			document.getElementById("armorimg").src = "zasoby/bcloth.png";
			break;
			case 2:
			document.getElementById("armorimg").src = "zasoby/bleather.png";
			break;
			case 3:
			document.getElementById("armorimg").src = "zasoby/bchainmail.png";
			break;
			case 4:
			document.getElementById("armorimg").src = "zasoby/bscale.png";
			break;
			case 5:
			document.getElementById("armorimg").src = "zasoby/bplate.png";
			break;
    }
		}
		else
		{
			zbroja = zamiennazbroja;
			zamiennazbroja = 0;
			var element = document.createElement("p");
			var t = document.createTextNode("Założyłeś " + nazwaeq + ".");
			element.appendChild(t);
			document.body.appendChild(element);
      switch (armorimg){
			case 1:
			document.getElementById("armorimg").src = "zasoby/cloth.png";
			break;
			case 2:
			document.getElementById("armorimg").src = "zasoby/leather.png";
			break;
			case 3:
			document.getElementById("armorimg").src = "zasoby/chainmail.png";
			break;
			case 4:
			document.getElementById("armorimg").src = "zasoby/scale.png";
			break;
			case 5:
			document.getElementById("armorimg").src = "zasoby/plate.png";
			break;
    }
		}
		break;
		case 3:
		var randomgenerator = Math.floor(Math.random()*10+1);
		if (randomgenerator < 3)
		{
			zbroja = (zamiennazbroja / 2);
			klatwa = (zamiennazbroja / 2);
			zamiennazbroja = 0;
			sila = sila - klatwa;
			if (sila < 1){
				sila = (1 / 2);
			}
			var element = document.createElement("p");
			var t = document.createTextNode("Założyłeś przeklętą " + nazwaeq + "!");
			element.appendChild(t);
			document.body.appendChild(element);
			hit30 = new Audio('zasoby/cursed.mp3');
			hit30.play();
			switch (armorimg){
				case 1:
				document.getElementById("armorimg").src = "zasoby/ccloth.png";
				break;
				case 2:
				document.getElementById("armorimg").src = "zasoby/cleather.png";
				break;
				case 3:
				document.getElementById("armorimg").src = "zasoby/cchainmail.png";
				break;
				case 4:
				document.getElementById("armorimg").src = "zasoby/cscale.png";
				break;
				case 5:
				document.getElementById("armorimg").src = "zasoby/cplate.png";
				break;

						}
		}
		else if (randomgenerator > 9)
		{
			zbroja = zamiennazbroja + 12;
			zamiennazbroja = 0;
			var element = document.createElement("p");
			var t = document.createTextNode("Założyłeś poświęconą " + nazwaeq + "!");
			element.appendChild(t);
			document.body.appendChild(element);
      switch (armorimg){
			case 1:
			document.getElementById("armorimg").src = "zasoby/bcloth.png";
			break;
			case 2:
			document.getElementById("armorimg").src = "zasoby/bleather.png";
			break;
			case 3:
			document.getElementById("armorimg").src = "zasoby/bchainmail.png";
			break;
			case 4:
			document.getElementById("armorimg").src = "zasoby/bscale.png";
			break;
			case 5:
			document.getElementById("armorimg").src = "zasoby/bplate.png";
			break;
    }
		}
		else
		{
			zbroja = zamiennazbroja;
			zamiennazbroja = 0;
			var element = document.createElement("p");
			var t = document.createTextNode("Założyłeś " + nazwaeq + ".");
			element.appendChild(t);
			document.body.appendChild(element);
      switch (armorimg){
			case 1:
			document.getElementById("armorimg").src = "zasoby/cloth.png";
			break;
			case 2:
			document.getElementById("armorimg").src = "zasoby/leather.png";
			break;
			case 3:
			document.getElementById("armorimg").src = "zasoby/chainmail.png";
			break;
			case 4:
			document.getElementById("armorimg").src = "zasoby/scale.png";
			break;
			case 5:
			document.getElementById("armorimg").src = "zasoby/plate.png";
			break;
    }
		}
		break;
		case 4:
		var randomgenerator = Math.floor(Math.random()*10+1);
		if (randomgenerator < 4)
		{
			zbroja = (zamiennazbroja / 2);
			klatwa = (zamiennazbroja / 2);
			zamiennazbroja = 0;
			sila = sila - klatwa;
			if (sila < 1){
				sila = (1 / 2);
			}
			var element = document.createElement("p");
			var t = document.createTextNode("Założyłeś przeklętą " + nazwaeq + "!");
			element.appendChild(t);
			document.body.appendChild(element);
			hit30 = new Audio('zasoby/cursed.mp3');
			hit30.play();
			switch (armorimg){
				case 1:
				document.getElementById("armorimg").src = "zasoby/ccloth.png";
				break;
				case 2:
				document.getElementById("armorimg").src = "zasoby/cleather.png";
				break;
				case 3:
				document.getElementById("armorimg").src = "zasoby/cchainmail.png";
				break;
				case 4:
				document.getElementById("armorimg").src = "zasoby/cscale.png";
				break;
				case 5:
				document.getElementById("armorimg").src = "zasoby/cplate.png";
				break;

						}
		}
		else if (randomgenerator > 9)
		{
			zbroja = zamiennazbroja + 18;
			zamiennazbroja = 0;
			var element = document.createElement("p");
			var t = document.createTextNode("Założyłeś poświęconą " + nazwaeq + "!");
			element.appendChild(t);
			document.body.appendChild(element);
      switch (armorimg){
			case 1:
			document.getElementById("armorimg").src = "zasoby/bcloth.png";
			break;
			case 2:
			document.getElementById("armorimg").src = "zasoby/bleather.png";
			break;
			case 3:
			document.getElementById("armorimg").src = "zasoby/bchainmail.png";
			break;
			case 4:
			document.getElementById("armorimg").src = "zasoby/bscale.png";
			break;
			case 5:
			document.getElementById("armorimg").src = "zasoby/bplate.png";
			break;
    }
		}
		else
		{
			zbroja = zamiennazbroja;
			zamiennazbroja = 0;
			var element = document.createElement("p");
			var t = document.createTextNode("Założyłeś " + nazwaeq + ".");
			element.appendChild(t);
			document.body.appendChild(element);
      switch (armorimg){
			case 1:
			document.getElementById("armorimg").src = "zasoby/cloth.png";
			break;
			case 2:
			document.getElementById("armorimg").src = "zasoby/leather.png";
			break;
			case 3:
			document.getElementById("armorimg").src = "zasoby/chainmail.png";
			break;
			case 4:
			document.getElementById("armorimg").src = "zasoby/scale.png";
			break;
			case 5:
			document.getElementById("armorimg").src = "zasoby/plate.png";
			break;
    }
		}
		break;
		case 5:
		var randomgenerator = Math.floor(Math.random()*10+1);
		if (randomgenerator < 5)
		{
			zbroja = (zamiennazbroja / 2);
			klatwa = (zamiennazbroja / 2);
			zamiennazbroja = 0;
			sila = sila - klatwa;
			if (sila < 1){
				sila = (1 / 2);
			}
			var element = document.createElement("p");
			var t = document.createTextNode("Założyłeś przeklętą " + nazwaeq + "!");
			element.appendChild(t);
			document.body.appendChild(element);
			hit30 = new Audio('zasoby/cursed.mp3');
			hit30.play();
			switch (armorimg){
				case 1:
				document.getElementById("armorimg").src = "zasoby/ccloth.png";
				break;
				case 2:
				document.getElementById("armorimg").src = "zasoby/cleather.png";
				break;
				case 3:
				document.getElementById("armorimg").src = "zasoby/cchainmail.png";
				break;
				case 4:
				document.getElementById("armorimg").src = "zasoby/cscale.png";
				break;
				case 5:
				document.getElementById("armorimg").src = "zasoby/cplate.png";
				break;

						}
		}
		else if (randomgenerator > 9)
		{
			zbroja = zamiennazbroja + 25;
			zamiennazbroja = 0;
			var element = document.createElement("p");
			var t = document.createTextNode("Założyłeś poświęconą " + nazwaeq + "!");
			element.appendChild(t);
			document.body.appendChild(element);
      switch (armorimg){
			case 1:
			document.getElementById("armorimg").src = "zasoby/bcloth.png";
			break;
			case 2:
			document.getElementById("armorimg").src = "zasoby/bleather.png";
			break;
			case 3:
			document.getElementById("armorimg").src = "zasoby/bchainmail.png";
			break;
			case 4:
			document.getElementById("armorimg").src = "zasoby/bscale.png";
			break;
			case 5:
			document.getElementById("armorimg").src = "zasoby/bplate.png";
			break;
    }
		}
		else
		{
			zbroja = zamiennazbroja;
			zamiennazbroja = 0;
			var element = document.createElement("p");
			var t = document.createTextNode("Założyłeś " + nazwaeq + ".");
			element.appendChild(t);
			document.body.appendChild(element);
      switch (armorimg){
			case 1:
			document.getElementById("armorimg").src = "zasoby/cloth.png";
			break;
			case 2:
			document.getElementById("armorimg").src = "zasoby/leather.png";
			break;
			case 3:
			document.getElementById("armorimg").src = "zasoby/chainmail.png";
			break;
			case 4:
			document.getElementById("armorimg").src = "zasoby/scale.png";
			break;
			case 5:
			document.getElementById("armorimg").src = "zasoby/plate.png";
			break;
    }
		}
		break;

	}
	nextarmorbreak = zbroja * 20;
	document.getElementById("def").innerHTML = zbroja;
	document.getElementById("nazwadef").innerHTML = nazwaeq;
	document.getElementById("sila").innerHTML = sila;
}

//typy pierscieni:
//1 - zywotnosci
//2 - doswiadczenia
//3 - mocy
//4 - glodu
function zalozpierscien(){
	switch (zone){
		case 1:
		var randomgenerator = Math.floor(Math.random()*10+1);
		if (randomgenerator < 3)
		{
			switch (typpierscienia)
			{
				case 1:
				maxzdrowie = maxzdrowie - 6;
				break;
				case 2:
				nextlvl = nextlvl + 3;
				break;
				case 3:
				sila = sila - 3;
				break;
				case 4:
				maxglod = maxglod - 1;
				break;
			}
			var element = document.createElement("p");
			var t = document.createTextNode("Założyłeś przeklęty " + nazwaeq + "!");
			element.appendChild(t);
			document.body.appendChild(element);
			hit30 = new Audio('zasoby/cursed.mp3');
			hit30.play();
		}
		else if (randomgenerator > 8)
		{
			switch (typpierscienia)
			{
				case 1:
				maxzdrowie = maxzdrowie + 6;
				break;
				case 2:
				nextlvl = nextlvl - 3;
				break;
				case 3:
				sila = sila + 3;
				break;
				case 4:
				maxglod = maxglod + 2;
				break;
			}
			var element = document.createElement("p");
			var t = document.createTextNode("Założyłeś poświęcony " + nazwaeq + "!");
			element.appendChild(t);
			document.body.appendChild(element);
		}
		else
		{
			switch (typpierscienia)
			{
				case 1:
				maxzdrowie = maxzdrowie + 3;
				break;
				case 2:
				nextlvl = nextlvl -2;
				break;
				case 3:
				sila = sila + 2;
				break;
				case 4:
				maxglod = maxglod + 1;
				break;
			}
			var element = document.createElement("p");
			var t = document.createTextNode("Założyłeś " + nazwaeq + ".");
			element.appendChild(t);
			document.body.appendChild(element);
		}
		break;
		case 2:
		var randomgenerator = Math.floor(Math.random()*10+1);
		if (randomgenerator < 4)
		{
			switch (typpierscienia)
			{
				case 1:
				maxzdrowie = maxzdrowie - 9;
				break;
				case 2:
				nextlvl = nextlvl + 5;
				break;
				case 3:
				sila = sila - 5;
				break;
				case 4:
				maxglod = maxglod - 2;
				break;
			}
			var element = document.createElement("p");
			var t = document.createTextNode("Założony " + nazwaeq + " zaciska się boleśnie wokół twego palca!");
			element.appendChild(t);
			document.body.appendChild(element);
			hit30 = new Audio('zasoby/cursed.mp3');
			hit30.play();
		}
		else if (randomgenerator > 8)
		{
			switch (typpierscienia)
			{
				case 1:
				maxzdrowie = maxzdrowie + 9;
				break;
				case 2:
				nextlvl = nextlvl - 4;
				break;
				case 3:
				sila = sila + 4;
				break;
				case 4:
				maxglod = maxglod + 3;
				break;
			}
			var element = document.createElement("p");
			var t = document.createTextNode("Założyłeś poświęcony " + nazwaeq + "!");
			element.appendChild(t);
			document.body.appendChild(element);
		}
		else
		{
			switch (typpierscienia)
			{
				case 1:
				maxzdrowie = maxzdrowie + 6;
				break;
				case 2:
				nextlvl = nextlvl - 3;
				break;
				case 3:
				sila = sila + 3;
				break;
				case 4:
				maxglod = maxglod + 2;
				break;
			}
			var element = document.createElement("p");
			var t = document.createTextNode("Założyłeś " + nazwaeq + ".");
			element.appendChild(t);
			document.body.appendChild(element);
		}
		break;
		case 3:
		var randomgenerator = Math.floor(Math.random()*10+1);
		if (randomgenerator < 4)
		{
			switch (typpierscienia)
			{
				case 1:
				maxzdrowie = maxzdrowie - 12;
				break;
				case 2:
				nextlvl = nextlvl + 6;
				break;
				case 3:
				sila = sila - 6;
				break;
				case 4:
				maxglod = maxglod - 3;
				break;
			}
			var element = document.createElement("p");
						var t = document.createTextNode("Założony " + nazwaeq + " zaciska się boleśnie wokół twego palca!");
			element.appendChild(t);
			document.body.appendChild(element);
			hit30 = new Audio('zasoby/cursed.mp3');
			hit30.play();
		}
		else if (randomgenerator > 9)
		{
			switch (typpierscienia)
			{
				case 1:
				maxzdrowie = maxzdrowie + 12;
				break;
				case 2:
				nextlvl = nextlvl - 5;
				break;
				case 3:
				sila = sila + 5;
				break;
				case 4:
				maxglod = maxglod + 4;
				break;
			}
			var element = document.createElement("p");
			var t = document.createTextNode("Założyłeś poświęcony " + nazwaeq + "!");
			element.appendChild(t);
			document.body.appendChild(element);
		}
		else
		{
			switch (typpierscienia)
			{
				case 1:
				maxzdrowie = maxzdrowie + 9;
				break;
				case 2:
				nextlvl = nextlvl - 4;
				break;
				case 3:
				sila = sila + 4;
				break;
				case 4:
				maxglod = maxglod + 3;
				break;
			}
			var element = document.createElement("p");
			var t = document.createTextNode("Założyłeś " + nazwaeq + ".");
			element.appendChild(t);
			document.body.appendChild(element);
		}
		break;
		case 4:
		var randomgenerator = Math.floor(Math.random()*10+1);
		if (randomgenerator < 5)
		{
			switch (typpierscienia)
			{
				case 1:
				maxzdrowie = maxzdrowie - 15;
				break;
				case 2:
				nextlvl = nextlvl + 7;
				break;
				case 3:
				sila = sila - 7;
				break;
				case 4:
				maxglod = maxglod - 4;
				break;
			}
			var element = document.createElement("p");
			var t = document.createTextNode("Założony " + nazwaeq + " zaciska się boleśnie wokół twego palca!");
			element.appendChild(t);
			document.body.appendChild(element);
			hit30 = new Audio('zasoby/cursed.mp3');
			hit30.play();
		}
		else if (randomgenerator > 9)
		{
			switch (typpierscienia)
			{
				case 1:
				maxzdrowie = maxzdrowie + 15;
				break;
				case 2:
				nextlvl = nextlvl - 7;
				break;
				case 3:
				sila = sila + 7;
				break;
				case 4:
				maxglod = maxglod + 5;
				break;
			}
			var element = document.createElement("p");
			var t = document.createTextNode("Założyłeś poświęcony " + nazwaeq + "!");
			element.appendChild(t);
			document.body.appendChild(element);
		}
		else
		{
			switch (typpierscienia)
			{
				case 1:
				maxzdrowie = maxzdrowie + 12;
				break;
				case 2:
				nextlvl = nextlvl - 5;
				break;
				case 3:
				sila = sila + 5;
				break;
				case 4:
				maxglod = maxglod + 4;
				break;
			}
			var element = document.createElement("p");
			var t = document.createTextNode("Założyłeś " + nazwaeq + ".");
			element.appendChild(t);
			document.body.appendChild(element);
		}
		break;
		case 5:
		var randomgenerator = Math.floor(Math.random()*10+1);
		if (randomgenerator < 6)
		{
			switch (typpierscienia)
			{
				case 1:
				maxzdrowie = maxzdrowie - 18;
				break;
				case 2:
				nextlvl = nextlvl + 8;
				break;
				case 3:
				sila = sila - 8;
				break;
				case 4:
				maxglod = maxglod - 5;
				break;
			}
			var element = document.createElement("p");
			var t = document.createTextNode("Założony " + nazwaeq + " zaciska się boleśnie wokół twego palca!");
			element.appendChild(t);
			document.body.appendChild(element);
			hit30 = new Audio('zasoby/cursed.mp3');
			hit30.play();
		}
		else if (randomgenerator > 9)
		{
			switch (typpierscienia)
			{
				case 1:
				maxzdrowie = maxzdrowie + 25;
				break;
				case 2:
				nextlvl = nextlvl - 10;
				break;
				case 3:
				sila = sila + 10;
				break;
				case 4:
				maxglod = maxglod + 7;
				break;
			}
			var element = document.createElement("p");
			var t = document.createTextNode("Założyłeś poświęcony " + nazwaeq + "!");
			element.appendChild(t);
			document.body.appendChild(element);
		}
		else
		{
			switch (typpierscienia)
			{
				case 1:
				maxzdrowie = maxzdrowie + 18;
				break;
				case 2:
				nextlvl = nextlvl - 7;
				break;
				case 3:
				sila = sila + 7;
				break;
				case 4:
				maxglod = maxglod + 6;
				break;
			}
			var element = document.createElement("p");
			var t = document.createTextNode("Założyłeś " + nazwaeq + ".");
			element.appendChild(t);
			document.body.appendChild(element);
		}
		break;

	}
	hpcheck();
}
function explore()
{
	if (zdrowie > 0){
	if (akcje == 0)
	{
		var element = document.createElement("p");
		var t = document.createTextNode("Spod Miasta zaczęła wypływać zła energia.");
		element.appendChild(t);
		document.body.appendChild(element);
		var element = document.createElement("p");
		var t = document.createTextNode("Na ulicach zaczynają pojawiać się coraz to silniejsze potwory, ");
		element.appendChild(t);
		document.body.appendChild(element);
		var element = document.createElement("p");
		var t = document.createTextNode("a strażnicy miejscy nie mogą sobie z nimi poradzić.");
		element.appendChild(t);
		document.body.appendChild(element);
		var element = document.createElement("p");
		var t = document.createTextNode("Zlecono ci, jako najlepszemu z nich aby znaleźć zródło złośliwej energii ");
		element.appendChild(t);
		document.body.appendChild(element);
		var element = document.createElement("p");
		var t = document.createTextNode("i je zniszczyć. Nie boisz się wchodząc do kanałów pod Miastem,");
		element.appendChild(t);
		document.body.appendChild(element);
		var element = document.createElement("p");
		var t = document.createTextNode("bo wiesz że nie ma tu złej magii.");
		element.appendChild(t);
		document.body.appendChild(element);
	}
	else if (akcje > 90 && bosszone1 == 1 )
	{
		var element = document.createElement("p");
		var t = document.createTextNode("Pojawia się Boss, Wielki Szlam!");
		element.appendChild(t);
		document.body.appendChild(element);
		var img = document.createElement("img");
		img.src = "zasoby/goo.png";
		element.appendChild(img);
		document.body.appendChild(element);
		wrogowie = wrogowie + 15;
		bosszone1 = 0;
	}
	else if (zone == 2 && bosszone1 == 0 && iwan1 == 1)
	{
		var element = document.createElement("p");
		var t = document.createTextNode("Cześć! Nazywam się Iwan i mam dla ciebie małe oferty...");
		element.appendChild(t);
		document.body.appendChild(element);
		var img = document.createElement("img");
		img.src = "zasoby/shopkeeper.png";
		element.appendChild(img);
		document.body.appendChild(element);
		var element = document.createElement("button");
		var t = document.createTextNode("Wymień zbroję na 3 zestawy naprawcze i 3 mikstury zdrowia");
		element.appendChild(t);
		element.setAttribute("onclick", 'zbrojanaitemy()');
		document.body.appendChild(element);
		var element = document.createElement("br");
		document.body.appendChild(element);
		var element = document.createElement("button");
		var t = document.createTextNode("Wymień 2 mikstury zdrowia na 3 sztuki prowiantu");
		element.appendChild(t);
		element.setAttribute("onclick", 'hpnajedzenie()');
		document.body.appendChild(element);
		var element = document.createElement("br");
		document.body.appendChild(element);
		var element = document.createElement("button");
		var t = document.createTextNode("Wymień 2 sztuki prowiantu na miksturę zdrowia");
		element.appendChild(t);
		element.setAttribute("onclick", 'prowiantnahp()');
		document.body.appendChild(element);
		var element = document.createElement("br");
		document.body.appendChild(element);
		var element = document.createElement("button");
		var t = document.createTextNode("Wymień 5 mikstur zdrowia na 2 zestawy naprawcze");
		element.appendChild(t);
		element.setAttribute("onclick", 'hpnazestaw()');
		document.body.appendChild(element);
		iwan1 = 0;
		olaf7 = new Audio('zasoby/talk.mp3');
		olaf7.play();

	}
	else if (akcje > 190 && bosszone2 == 1 )
	{
		var element = document.createElement("p");
		var t = document.createTextNode("Pojawia się Boss, Mistrz Złodzie Tengu!");
		element.appendChild(t);
		document.body.appendChild(element);
		var img = document.createElement("img");
		img.src = "zasoby/tengu.png";
		element.appendChild(img);
		document.body.appendChild(element);
		wrogowie = wrogowie + 30;
		bosszone2 = 0;
	}
	else if (zone == 1)
	{
		var randomgenerator = Math.floor(Math.random()*10+1);
		switch (randomgenerator)
		{
    case 1:
		var randomgenerator = Math.floor(Math.random()*2+1);
		if (randomgenerator == 1){
			var element = document.createElement("p");
			var t = document.createTextNode("Znalazłeś miksturę zdrowia, chowasz ją do ekwipunku.");
			element.appendChild(t);
			var img = document.createElement("img");
			img.src = "zasoby/potkahp.png";
			element.appendChild(img);
			document.body.appendChild(element);
			potkahp = potkahp + 1;
		}
		else {
		var element = document.createElement("p");
		var t = document.createTextNode("Znalazłeś zestaw naprawczy zbroi, chowasz go do ekwipunku.");
		element.appendChild(t);
		var img = document.createElement("img");
		img.src = "zasoby/zestaw.png";
		element.appendChild(img);
		document.body.appendChild(element);
		zestaw = zestaw + 1;
	}
	hit22 = new Audio('zasoby/item.mp3');
	hit22.play();

        break;
    case 2:
		var element = document.createElement("p");
		var t = document.createTextNode("Znalazles trochę prowiantu, pakujesz go do swojej torby.");
		element.appendChild(t);
		var img = document.createElement("img");
		img.src = "zasoby/prowiant.png";
		element.appendChild(img);
		document.body.appendChild(element);
		prowiant = prowiant + 1;
		document.getElementById("prowiant").innerHTML = prowiant;
		hit21 = new Audio('zasoby/item.mp3');
		hit21.play();
        break;
    case 3:
		var element = document.createElement("p");
		var t = document.createTextNode("Zaatakował cię szczur!");
		element.appendChild(t);
		var img = document.createElement("img");
		img.src = "zasoby/rat.png";
		element.appendChild(img);
		document.body.appendChild(element);
		wrogowie = wrogowie + 2;
        break;
    case 4:
		var element = document.createElement("p");
		var t = document.createTextNode("Zaatakował cię wielki szczur!");
		element.appendChild(t);
		var img = document.createElement("img");
		img.src = "zasoby/rat.png";
		element.appendChild(img);
		document.body.appendChild(element);
		wrogowie = wrogowie + 3;
        break;
    case 5:
		var element = document.createElement("p");
		var t = document.createTextNode("Znalazles trochę prowiantu, pakujesz go do swojej torby.");
		element.appendChild(t);
		var img = document.createElement("img");
		img.src = "zasoby/prowiant.png";
		element.appendChild(img);
		document.body.appendChild(element);
		prowiant = prowiant + 1;
		document.getElementById("prowiant").innerHTML = prowiant;
		hit20 = new Audio('zasoby/item.mp3');
		hit20.play();

        break;
    case 6:
		var element = document.createElement("p");
		var t = document.createTextNode("Zaatakował cię krab!");
		element.appendChild(t);
		var img = document.createElement("img");
		img.src = "zasoby/crab.png";
		element.appendChild(img);
		document.body.appendChild(element);
		wrogowie = wrogowie + 5;
        break;
    case 7:
		var element = document.createElement("p");
		var t = document.createTextNode("Znalazles miksturę siły, wypijasz ją natychmiast");
		element.appendChild(t);
		var img = document.createElement("img");
		img.src = "zasoby/sila.png";
		element.appendChild(img);
		document.body.appendChild(element);
		sila = sila + 1;
		hit19 = new Audio('zasoby/quaff.mp3');
		hit19.play();
				break;
		case 8:
		var randomeq = Math.floor(Math.random()*3)
    var element = document.createElement("p");
    if (randomeq == 0)
    {
      nazwaeq = "Płócienna zbroja";
      armorimg = 1;
      zamiennazbroja = Math.floor((Math.random()*2)+1)
      var img = document.createElement("img");
      img.src = "zasoby/cloth.png";
      element.appendChild(img)
    }
    else if (randomeq == 1)
    {
      nazwaeq = "Skórzana zbroja";
      armorimg = 2;
      zamiennazbroja = Math.floor((Math.random()*3)+2)
      var img = document.createElement("img");
      img.src = "zasoby/leather.png";
      element.appendChild(img)
    }
    else {
      nazwaeq = "Kolczuga";
      armorimg = 3;
      zamiennazbroja = Math.floor(Math.random()*4+3)
      var img = document.createElement("img");
      img.src = "zasoby/chainmail.png";
      element.appendChild(img)

    }
		var t = document.createTextNode("Znalazłeś ekwipunek, jest to " + nazwaeq + ". Czy chcesz go założyć?");
		element.appendChild(t);
		document.body.appendChild(element);

		var element = document.createElement("button");
		var t = document.createTextNode("Załóż");
		element.appendChild(t);
		element.setAttribute("onclick", 'zaloz()');
		document.body.appendChild(element);
				break;
		case 9:
		var element = document.createElement("p");
		var t = document.createTextNode("Wszedłeś w starą pułapkę strzałkową!");
		element.appendChild(t);
		document.body.appendChild(element);
		var img = document.createElement("img");
		img.src = "zasoby/dart.png";
		element.appendChild(img);
		document.body.appendChild(element);
		zdrowie = zdrowie - 3;
		hit3 = new Audio('zasoby/hit.mp3');
		hit3.play();
				break;
		case 10:
		var element = document.createElement("p");
		var t = document.createTextNode("Idziesz przez pusty korytarz.");
		element.appendChild(t);
		document.body.appendChild(element);
				break;

		}

	}
	else if (zone == 2)
	{
    var randomgenerator = Math.floor(Math.random()*10+1);
		switch (randomgenerator)
		{
    case 1:
		var randomgenerator = Math.floor(Math.random()*2+1);
		if (randomgenerator == 1){
			var element = document.createElement("p");
			var t = document.createTextNode("Znalazłeś miksturę zdrowia, chowasz ją do ekwipunku.");
			element.appendChild(t);
			var img = document.createElement("img");
			img.src = "zasoby/potkahp.png";
			element.appendChild(img);
			document.body.appendChild(element);
			potkahp = potkahp + 1;
		}
		else {
		var element = document.createElement("p");
		var t = document.createTextNode("Znalazłeś zestaw naprawczy zbroi, chowasz go do ekwipunku.");
		element.appendChild(t);
		var img = document.createElement("img");
		img.src = "zasoby/zestaw.png";
		element.appendChild(img);
		document.body.appendChild(element);
		zestaw = zestaw + 1;
	}
	hit22 = new Audio('zasoby/item.mp3');
	hit22.play();

        break;
    case 2:
		var element = document.createElement("p");
		var t = document.createTextNode("Znalazles trochę prowiantu, pakujesz go do swojej torby.");
		element.appendChild(t);
		var img = document.createElement("img");
		img.src = "zasoby/prowiant.png";
		element.appendChild(img);
		document.body.appendChild(element);
		prowiant = prowiant + 1;
		document.getElementById("prowiant").innerHTML = prowiant;
		hit21 = new Audio('zasoby/item.mp3');
		hit21.play();
        break;
    case 3:
		var element = document.createElement("p");
		var t = document.createTextNode("Zaatakował cię Szalony Złodziej!");
		element.appendChild(t);
		var img = document.createElement("img");
		img.src = "zasoby/thief.png";
		element.appendChild(img);
		document.body.appendChild(element);
		wrogowie = wrogowie + 6;
        break;
    case 4:
		var element = document.createElement("p");
		var t = document.createTextNode("Zaatakował cię Ożywiony Szkielet!");
		element.appendChild(t);
		var img = document.createElement("img");
		img.src = "zasoby/skeleton.png";
		element.appendChild(img);
		document.body.appendChild(element);
		wrogowie = wrogowie + 10;
        break;
    case 5:
		var element = document.createElement("p");
		var t = document.createTextNode("Znalazles trochę prowiantu, pakujesz go do swojej torby.");
		element.appendChild(t);
		var img = document.createElement("img");
		img.src = "zasoby/prowiant.png";
		element.appendChild(img);
		document.body.appendChild(element);
		prowiant = prowiant + 1;
		document.getElementById("prowiant").innerHTML = prowiant;
		hit20 = new Audio('zasoby/item.mp3');
		hit20.play();

        break;
    case 6:
		var element = document.createElement("p");
		var t = document.createTextNode("Zaatakował cię Szalony Strażnik!");
		element.appendChild(t);
		var img = document.createElement("img");
		img.src = "zasoby/guard.png";
		element.appendChild(img);
		document.body.appendChild(element);
		wrogowie = wrogowie + 14;
        break;
    case 7:
		var element = document.createElement("p");
		var t = document.createTextNode("Znalazles miksturę siły, wypijasz ją natychmiast");
		element.appendChild(t);
		var img = document.createElement("img");
		img.src = "zasoby/sila.png";
		element.appendChild(img);
		document.body.appendChild(element);
		sila = sila + 1;
		hit19 = new Audio('zasoby/quaff.mp3');
		hit19.play();
				break;
		case 8:
		var randomeq = Math.floor(Math.random()*3)
		if (randomeq == 0)
		{
			nazwaeq = "Kolczuga";
			armorimg = 3;
      var img = document.createElement("img");
      img.src = "zasoby/chainmail.png";
			zamiennazbroja = Math.floor((Math.random()*3)+5)
			var element = document.createElement("p");
			var t = document.createTextNode("Znalazłeś ekwipunek, jest to " + nazwaeq + ". Czy chcesz go założyć?");
			element.appendChild(t);
      element.appendChild(img);
			document.body.appendChild(element);
			var element = document.createElement("button");
			var t = document.createTextNode("Załóż");
			element.appendChild(t);
			element.setAttribute("onclick", 'zaloz()');
			document.body.appendChild(element);
		}
		else if (randomeq == 1)
		{
      nazwaeq = "Zbroja z łusek";
			armorimg = 4;
      var img = document.createElement("img");
      img.src = "zasoby/scale.png";
			zamiennazbroja = Math.floor((Math.random()*4)+8)
			var element = document.createElement("p");
			var t = document.createTextNode("Znalazłeś ekwipunek, jest to " + nazwaeq + ". Czy chcesz go założyć?");
			element.appendChild(t);
      element.appendChild(img);
			document.body.appendChild(element);
			var element = document.createElement("button");
			var t = document.createTextNode("Załóż");
			element.appendChild(t);
			element.setAttribute("onclick", 'zaloz()');
			document.body.appendChild(element);
		}
		else {
			typpierscienia = 1;
			nazwaeq = "Pierścień żywotności";
			var element = document.createElement("p");
			var t = document.createTextNode("Znalazłeś ekwipunek, jest to " + nazwaeq + ". Czy chcesz go założyć?");
			element.appendChild(t);
      var img = document.createElement("img");
      img.src = "zasoby/healthring.png";
      element.appendChild(img);
			document.body.appendChild(element);
			var element = document.createElement("button");
			var t = document.createTextNode("Załóż");
			element.appendChild(t);
			element.setAttribute("onclick", 'zalozpierscien()');
			document.body.appendChild(element);

		}

				break;
		case 9:
		var randomgenerator = Math.floor(Math.random()*2)
		if (randomgenerator == 0)
		{
			var element = document.createElement("p");
			var t = document.createTextNode("Wszedłeś w pułapkę strzałkową!");
			element.appendChild(t);
			document.body.appendChild(element);
			var img = document.createElement("img");
			img.src = "zasoby/dart.png";
			element.appendChild(img);
			document.body.appendChild(element);
			zdrowie = zdrowie - 6;
			hit3 = new Audio('zasoby/hit.mp3');
			hit3.play();
		}
		else {
			var element = document.createElement("p");
			var t = document.createTextNode("Wszedłeś w pułapkę alarmującą! Przyszło 2 strażników!");
			element.appendChild(t);
			document.body.appendChild(element);
			var img = document.createElement("img");
			img.src = "zasoby/guard.png";
			element.appendChild(img);
			document.body.appendChild(element);
			var img = document.createElement("img");
			img.src = "zasoby/guard.png";
			element.appendChild(img);
			document.body.appendChild(element);
			wrogowie = wrogowie + 20;
			hit31 = new Audio('zasoby/alarm.mp3');
			hit31.play();
		}

				break;
		case 10:
		var element = document.createElement("p");
		var t = document.createTextNode("Idziesz przez pusty korytarz.");
		element.appendChild(t);
		document.body.appendChild(element);
				break;

		}}

if (glod < (maxglod /3))
{
	zdrowie = zdrowie + 2;
}
else if (glod < (maxglod /2))
{
	zdrowie = zdrowie + 1;
}
endexplore();
}
}
function endexplore()
{
	akcje = akcje + 1;
	if (glod != maxglod){
		glod = glod + 1;
	}
	zonecheck();
	if (wrogowie != 0){
			 damagetake();
	}
	document.getElementById("akcje").innerHTML =  akcje;
	document.getElementById("wrogowie").innerHTML =  wrogowie;
	document.getElementById("zdrowie").innerHTML =  zdrowie;
	document.getElementById("glod").innerHTML =  glod;
	document.getElementById("sila").innerHTML =  sila;
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
