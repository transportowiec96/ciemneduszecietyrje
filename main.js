
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
var potkahp = 1;
var zestaw = 0;
//var postacie
//1 - fighter
var fighter = {maxzdrowie:10,zbroja:2,nextlvl:12,maxglod:10,sila:2}
//2 - rogue
var rogue = {maxzdrowie:15,zbroja:0,nextlvl:8,maxglod: 7,sila:1}
//3 - mag
var mage = {maxzdrowie:5,zbroja:0,nextlvl:10,maxglod: 12,sila:4}
//staty wrogow
var wrogowie = 0;
var bosszone1 = 1;

//ekwipunek
var prowiant = 1;
//lochy
var akcje = 0;
var zone = 1;
//zmienne
var randomgenerator = 0;
var zalozonazbroja = false;
var zamiennazbroja = 0;
var story = 1;
var errorlevel = 0;

scroll = setInterval(function(){ window.scrollBy(0, 1000);}, 25);

function classrogue(){
maxzdrowie = rogue.maxzdrowie;
zdrowie = rogue.maxzdrowie;
zbroja = rogue.zbroja;
nextlvl = rogue.nextlvl;
maxglod = rogue.maxglod;
sila = rogue.sila;
document.getElementById("wybierzpostac").style.display = "none";
document.getElementById("nazwadef").innerHTML = "Lekkie ubranie";
document.getElementById("zdrowie").innerHTML = rogue.maxzdrowie;
document.getElementById("maxzdrowie").innerHTML = rogue.maxzdrowie;
document.getElementById("maxglod").innerHTML = rogue.maxglod;
document.getElementById("def").innerHTML = rogue.zbroja;
document.getElementById("nextlvl").innerHTML = rogue.nextlvl;
document.getElementById("sila").innerHTML = rogue.sila;
document.getElementById("klasapostaci").src = "zasoby/rogue.png";
hpcheck();
}
function classfighter(){
maxzdrowie = fighter.maxzdrowie;
zdrowie = fighter.maxzdrowie;
zbroja = fighter.zbroja;
nextlvl = fighter.nextlvl;
maxglod = fighter.maxglod;
sila = fighter.sila;
document.getElementById("wybierzpostac").style.display = "none";
document.getElementById("zdrowie").innerHTML = fighter.maxzdrowie;
document.getElementById("nazwadef").innerHTML = "Skórzana Zbroja";
document.getElementById("maxzdrowie").innerHTML = fighter.maxzdrowie;
document.getElementById("maxglod").innerHTML = fighter.maxglod;
document.getElementById("def").innerHTML = fighter.zbroja;
document.getElementById("nextlvl").innerHTML = fighter.nextlvl;
document.getElementById("sila").innerHTML = fighter.sila;
document.getElementById("klasapostaci").src = "zasoby/fighter.png";
hpcheck();
}
function classmage(){
maxzdrowie = mage.maxzdrowie;
zdrowie = mage.maxzdrowie;
zbroja = mage.zbroja;
nextlvl = mage.nextlvl;
maxglod = mage.maxglod;
sila = mage.sila;
document.getElementById("wybierzpostac").style.display = "none";
document.getElementById("zdrowie").innerHTML = mage.maxzdrowie;
document.getElementById("nazwadef").innerHTML = "Szata Maga";
document.getElementById("maxzdrowie").innerHTML = mage.maxzdrowie;
document.getElementById("maxglod").innerHTML = mage.maxglod;
document.getElementById("def").innerHTML = mage.zbroja;
document.getElementById("nextlvl").innerHTML = mage.nextlvl;
document.getElementById("sila").innerHTML = mage.sila;
document.getElementById("klasapostaci").src = "zasoby/mage.png";
hpcheck();
}
function zonecheck()
{
	if (akcje > 100 && story == 1)
	{
		zone = 2;
		document.body.style.backgroundImage = "url('zasoby/zone2.png')";
		var element = document.createElement("p");
		var t = document.createTextNode("Kiedyś pod miastem, było więzienie dla najgorszych kryminalistów. Od czasów, gdy zaczęła działać tu czarna magia, strażnicy uciekli albo oszaleli, razem z więźniami. Jest to możliwe, że tutaj znajduje się centrum nienawistnej energii.");
		element.appendChild(t);
		document.body.appendChild(element);
		story = 2;
	}
	else if (akcje > 200 && story == 2)
	{
		zone = 3;
		document.body.style.backgroundImage = "url('zasoby/zone3.png')";
		var element = document.createElement("p");
		var t = document.createTextNode("Te jaskinie były kiedyś centrum handlowym między krasnoludami a ludźmi z Miasta. Od kiedy na to miejsce zaczęła wpływać zła energia, ludzie często ginęli z towarami, a krasnoludy nie mogły przez to handlować z ludźmi, więc to miejsce jest teraz zamieszkałe tylko przez dzikie zwierzęta. Jest to całkowicie możliwe, że to tutaj znajduje się centrum złej energii");
		element.appendChild(t);
		document.body.appendChild(element);
		story = 3;
	}
	else if (akcje > 300 && story == 3)
	{
		zone = 4;
		document.body.style.backgroundImage = "url('zasoby/zone4.png')";
		var element = document.createElement("p");
		var t = document.createTextNode("Ta metropolia krasnoludzka była kiedyś w czasach swojej świetności, ale kiedy czarna energia wpełzła do tego miejsca, skończyły się dobre czasy, a krasnoludy osłabły. Mimo to, nadal są dość potężne.");
		element.appendChild(t);
		document.body.appendChild(element);
		story = 4;
	}
	else if (akcje > 400 && story == 4)
	{
		zone = 5;
		document.body.style.backgroundImage = "url('zasoby/zone5.png')";
		var element = document.createElement("p");
		var t = document.createTextNode("");
		element.appendChild(t);
		document.body.appendChild(element);
		story = 5;
	}
	else if (akcje > 500 && story == 5) {
		zone = 6;
		document.body.style.backgroundImage = "url('zasoby/zone5.png')";
		var element = document.createElement("p");
		var t = document.createTextNode("");
		element.appendChild(t);
		document.body.appendChild(element);
		story = 6;
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
		nextlvl = nextlvl + 10;
		maxzdrowie = maxzdrowie + 5;
		zdrowie = zdrowie + 5;
		poziom = poziom + 1;
		exp = 0;
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
	document.getElementById("exp").innerHTML = exp;
	document.getElementById("nextlvl").innerHTML = nextlvl;
  document.getElementById("poziom").innerHTML = poziom;
	document.getElementById("zestaw").innerHTML = zestaw;
	document.getElementById("potkahp").innerHTML = potkahp;
	document.getElementById("def").innerHTML = zbroja;
}
function repair()
{
	if (zestaw != 0){
		var element = document.createElement("p");
		var t = document.createTextNode("Naprawiasz swoją zbroję.");
		element.appendChild(t);
		document.body.appendChild(element);
		zestaw = zestaw - 1;
		zbroja = zbroja + Math.floor(zbroja / 10 + 1)
		hit9 = new Audio('zasoby/fixarmor.mp3');
		hit9.play();
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
function quaff()
{
	if (potkahp != 0){
		var element = document.createElement("p");
		var t = document.createTextNode("Napiłeś się mikstury zdrowia.");
		element.appendChild(t);
		document.body.appendChild(element);
		potkahp = potkahp - 1
		zdrowie = zdrowie + Math.floor(((maxzdrowie / 100) * 60));
		hit8 = new Audio('zasoby/quaff.mp3');
		hit8.play();
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
	if (dmg < 0)
	{
		dmg = 0;
	}
	zdrowie = zdrowie - dmg;
	var element = document.createElement("p");
	var t = document.createTextNode("Otrzymałeś " + dmg + " obrażeń!");
	element.appendChild(t);
	document.body.appendChild(element);
	hpcheck();
	hit = new Audio('zasoby/hit.mp3');
	hit.play();
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
			zdrowie = zdrowie + 1;
		}
		document.getElementById("akcje").innerHTML =  akcje;
		document.getElementById("wrogowie").innerHTML =  wrogowie;
		document.getElementById("zdrowie").innerHTML =  zdrowie;
		document.getElementById("glod").innerHTML =  glod;
		document.getElementById("sila").innerHTML =  sila;
		hpcheck();
	}
}
function zaloz()
{
	zbroja = zamiennazbroja;
	zamiennazbroja = 0;
	document.getElementById("def").innerHTML = zbroja;
	var element = document.createElement("p");
	var t = document.createTextNode("Założyłeś " + nazwaeq + ".");
	element.appendChild(t);
	document.body.appendChild(element);
	document.getElementById("nazwadef").innerHTML = nazwaeq;
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
	if (akcje < 200 && akcje > 90 && bosszone1 == 1 )
	{
		var element = document.createElement("p");
		var t = document.createTextNode("Pojawia się Boss, Wielki Szlam!");
		element.appendChild(t);
		document.body.appendChild(element);
		var img = document.createElement("img");
		img.src = "zasoby/goo.png";
		element.appendChild(img);
		document.body.appendChild(element);
		wrogowie = wrogowie + 12;
		bosszone1 = 0;
	}
	var randomgenerator = Math.floor(Math.random()*10+1);
	if (zone == 1)
	{
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
				break;
		case 8:
		var randomeq = Math.floor(Math.random()*3)
		if (randomeq == 0)
		{
			nazwaeq = "Płócienna zbroja";
			zamiennazbroja = 2;
			var img = document.createElement("img");
			img.src = "zasoby/cloth.png";
			element.appendChild(img);
			document.body.appendChild(element);
		}
		else if (randomeq == 1)
		{
			nazwaeq = "Skórzana zbroja";
			zamiennazbroja = 2+1;
			var img = document.createElement("img");
			img.src = "zasoby/leather.png";
			document.body.appendChild(img);
		}
		else {
			nazwaeq = "Kolczuga";
			zamiennazbroja = 4 - 2;
			var img = document.createElement("img");
			img.src = "zasoby/chainmail.png";
			element.appendChild(img);
			document.body.appendChild(element);

		}
		var element = document.createElement("p");
		var t = document.createTextNode("Znalazłes ekwipunek, jest to " + nazwaeq + ". Czy chcesz go założyć?");
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

if (glod < (maxglod /3))
{
	zdrowie = zdrowie + 1;
}
else if (glod < (maxglod /2))
{
	zdrowie = zdrowie + (1 / 2);
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

myAudio = new Audio('zasoby/game.ogg');
myAudio.volume = 0.25;
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;

    this.play();
}, false);
myAudio.play();
