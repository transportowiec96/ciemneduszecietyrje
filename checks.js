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
		var t = document.createTextNode("Ostatni pokój. Tu musi być centrum całej złej magii.");
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
	else if (zdrowie < Math.ceil(maxzdrowie / 3))
	{
		document.getElementById("zdrowaska").src = "zasoby/zdrowie2.png";
	}
	else if (zdrowie < Math.ceil(maxzdrowie / 2))
	{
		document.getElementById("zdrowaska").src = "zasoby/zdrowie1.png";
	}
	else
	{
		document.getElementById("zdrowaska").src = "zasoby/zdrowie0.png";
	}
 	if (glod < Math.ceil(maxglod / 2))
	{
		document.getElementById("glodaska").src = "zasoby/glod0.png";
		document.getElementById("glodaskaa").src = "zasoby/glod0.png";
	}
	else if (glod < Math.ceil(maxglod / (1 + (1/2))))
	{
		document.getElementById("glodaska").src = "zasoby/glod1.png";
		document.getElementById("glodaskaa").src = "zasoby/glod1.png";
	}
	else
	{
		document.getElementById("glodaska").src = "zasoby/glod2.png";
		document.getElementById("glodaskaa").src = "zasoby/glod2.png";
	}
	if (glod >= maxglod)
	{
		zdrowie = zdrowie - Math.ceil(maxzdrowie / 50);
	}
	if (zdrowie > maxzdrowie)
	{
		zdrowie = maxzdrowie;
	}
	if (exp >= nextlvl)
	{
		exp = exp - nextlvl;
		nextlvl = nextlvl + 7;
		maxzdrowie = maxzdrowie + 3;
		zdrowie = zdrowie + 3;
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
	document.getElementById("wrogowiee").innerHTML = wrogowie;
	document.getElementById("zdrowie").innerHTML = zdrowie;
	document.getElementById("maxzdrowie").innerHTML = maxzdrowie;
	document.getElementById("glod").innerHTML = glod;
	document.getElementById("maxglod").innerHTML = maxglod;
	document.getElementById("glod1").innerHTML = glod;
	document.getElementById("maxglod1").innerHTML = maxglod;
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
	document.getElementById("health").value = zdrowie;
	document.getElementById("health").max = maxzdrowie;
}
