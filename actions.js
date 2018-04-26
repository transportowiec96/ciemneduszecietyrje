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
    var randomgenerator = Math.floor((Math.random()*10)+1)
    switch (randomgenerator)
    {
      case 1:
      var element = document.createElement("p");
      var t = document.createTextNode("Zostałeś uleczony.");
      element.appendChild(t);
      document.body.appendChild(element);
      zdrowie = zdrowie + Math.floor(maxzdrowie / 2);
      break;
      case 2:
      var element = document.createElement("p");
      var t = document.createTextNode("Lepiej obchodzisz się z głodem.");
      element.appendChild(t);
      document.body.appendChild(element);
      maxglod = maxglod + 1;
      break;
      case 3:
      var element = document.createElement("p");
      var t = document.createTextNode("Jesteś teraz bardziej witalny.");
      element.appendChild(t);
      document.body.appendChild(element);
      maxzdrowie = maxzdrowie + 5;
      break;
      case 4:
      var element = document.createElement("p");
      var t = document.createTextNode("Nie jesteś już głodny.");
      element.appendChild(t);
      document.body.appendChild(element);
      glod = 0;
      break;
      case 5:
      var element = document.createElement("p");
      var t = document.createTextNode("Zabiłeś wrogów dookoła.");
      element.appendChild(t);
      document.body.appendChild(element);
      exp = exp + wrogowie;
      wrogowie = 0;
      break;
      case 6:
      var element = document.createElement("p");
      var t = document.createTextNode("Masz teraz więcej siły.");
      element.appendChild(t);
      document.body.appendChild(element);
      sila = sila + 1;
      break;
      case 7:
      var element = document.createElement("p");
      var t = document.createTextNode("Twoja zbroja jest teraz wytrzymalsza.");
      element.appendChild(t);
      document.body.appendChild(element);
      zbroja = zbroja + 1;
      break;
      case 8:
      var element = document.createElement("p");
      var t = document.createTextNode("Nagle w twoim ekwipunku są dwie sztuki prowiantu.");
      element.appendChild(t);
      document.body.appendChild(element);
      prowiant = prowiant + 2;
      break;
      case 9:
      var element = document.createElement("p");
      var t = document.createTextNode("Nic się nie stało.");
      element.appendChild(t);
      document.body.appendChild(element);
      break;
      case 10:
      var element = document.createElement("p");
      var t = document.createTextNode("Przywołałeś szczura!");
      element.appendChild(t);
      document.body.appendChild(element);
      wrogowie = wrogowie + 2;
      break;
    }
    hpcheck();
    hit65 = new Audio('zasoby/talk.mp3');
    hit65.play();
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
			zbroja = zbroja + Math.floor((zbroja / 10) + 1);
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
			zbroja = zbroja + Math.floor(zbroja / 20 + 1)
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
  if (postac == 4)
  {
    schowek = akcje;
    akcje = akcje * 2;
  }

	if (lastpray < (akcje - 500))
	{
		maxzdrowie = maxzdrowie + 25;
		zdrowie = maxzdrowie;
		sila = sila + 10;
		zbroja = zbroja + 3;
		maxglod = maxglod + 3;
		glod = 0;
		var element = document.createElement("p");
		var t = document.createTextNode("Czujesz jak spora witalność przepływa przez twe ciało!");
		element.appendChild(t);
		document.body.appendChild(element);
		lastpray = akcje;
	}
	else if (lastpray < (akcje - 375))
	{
		maxzdrowie = maxzdrowie + 15;
		zdrowie = maxzdrowie;
		sila = sila + 5;
		zbroja = zbroja + 2;
		maxglod = maxglod + 2;
		glod = 0;
		var element = document.createElement("p");
		var t = document.createTextNode("Czujesz jak witalność przepływa przez twe ciało!");
		element.appendChild(t);
		document.body.appendChild(element);
		lastpray = akcje;
	}
	else if (lastpray < (akcje - 250))
	{
		maxzdrowie = maxzdrowie + 15;
		zdrowie = maxzdrowie;
		sila = sila + 3;
		zbroja = zbroja + 1;
		maxglod = maxglod + 1;
		glod = 0;
		var element = document.createElement("p");
		var t = document.createTextNode("Czujesz jak witalność delikatnie przepływa przez twe ciało!");
		element.appendChild(t);
		document.body.appendChild(element);
		lastpray = akcje;
	}
	else if (lastpray < (akcje - 125))
	{
		maxzdrowie = maxzdrowie + 5;
		zdrowie = maxzdrowie;
		sila = sila + 1;
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
		maxzdrowie = maxzdrowie + 3;
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
		if (sila != 1 )
		{
		sila = sila - 1;
		}
		glod = maxglod - 1;
		var element = document.createElement("p");
		var t = document.createTextNode("Zauważasz spadek twojej witalności!");
		element.appendChild(t);
		document.body.appendChild(element);
	}
  if (postac == 4)
  {
    akcje = schowek;
    lastpray = akcje;
  }
  else {
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
  var randomgenerator = Math.floor(Math.random()*10+1);
  sila2 = sila;
  if (randomgenerator == 1)
  {
    sila2 = sila2* 2;
  }
	if (wrogowie < sila2)
	{
			exp = exp + wrogowie;
			wrogowie = 0;
	}
	if (wrogowie >= sila2)
	{
			exp = exp + sila2;
			wrogowie = wrogowie - sila2;
	}
  if (randomgenerator == 1)
  {
    var element = document.createElement("p");
    var t = document.createTextNode("Krytyczny cios! Zadałeś " + sila + " obrażeń!");
    element.appendChild(t);
    document.body.appendChild(element);
  }
  else {
    var element = document.createElement("p");
    var t = document.createTextNode("Zadałeś " + sila + " obrażeń!");
    element.appendChild(t);
    document.body.appendChild(element);
  }

	hit2 = new Audio('zasoby/hit.mp3');
	hit2.play();
}
function damagetake(){
  var randomgenerator = Math.floor(Math.random()*10+1);
  wrogowie2 = wrogowie;
  if (randomgenerator == 1)
  {
    wrogowie2 = wrogowie2 * 2;
  }
	dmg = wrogowie2 - zbroja;
	if (wrogowie2 > zbroja){
			nextarmorbreak = nextarmorbreak - zbroja;
	}
	else {
		nextarmorbreak = nextarmorbreak - wrogowie2;
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
  if (randomgenerator == 1)
  {
    var element = document.createElement("p");
    var t = document.createTextNode("Krytyczny cios! Otrzymałeś " + dmg + " obrażeń!");
    element.appendChild(t);
    document.body.appendChild(element);
  }
  else {
    var element = document.createElement("p");
    var t = document.createTextNode("Otrzymałeś " + dmg + " obrażeń!");
    element.appendChild(t);
    document.body.appendChild(element);
  }
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
function zestawnahp(){
	if (zestaw >= 1){
		zestaw = zestaw - 1;
		potkahp = potkahp + 2;;
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
function hpnazwoje(){
	if (potkahp >= 1){
		scroll = scroll + 2;
		potkahp = potkahp - 1;
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
function hpnabomby(){
	if (potkahp >= 1){
		bomb = bomb + 2;
		potkahp = potkahp - 1;
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
function zwojenahp(){
	if (scroll >= 3){
		scroll = scroll - 3;
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
function bombynahp(){
	if (prowiant >= 3){
		bomb = bomb - 3;
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
  if (zamiennazbroja != 0){
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
else {
  var element = document.createElement("p");
  var t = document.createTextNode("Próbujesz założyć powietrze.");
  element.appendChild(t);
  document.body.appendChild(element);
}
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
