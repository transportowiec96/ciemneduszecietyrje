
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
		var t = document.createTextNode("Pojawia się Boss, Mistrz Złodziei Tengu!");
		element.appendChild(t);
		document.body.appendChild(element);
		var img = document.createElement("img");
		img.src = "zasoby/tengu.png";
		element.appendChild(img);
		document.body.appendChild(element);
		wrogowie = wrogowie + 30;
		bosszone2 = 0;
	}
	else if (zone == 3 && bosszone2 == 0 && iwan2 == 1)
	{
		var element = document.createElement("p");
		var t = document.createTextNode("Cześć! Tu znowu Iwan. Tym razem mam dodatkową średnią ofertę, a nie małą.");
		element.appendChild(t);
		document.body.appendChild(element);
		var img = document.createElement("img");
		img.src = "zasoby/shopkeeper.png";
		element.appendChild(img);
		document.body.appendChild(element);
		var element = document.createElement("button");
		var t = document.createTextNode("Wymień miksturę zdrowia na dwie bomby");
		element.appendChild(t);
		element.setAttribute("onclick", 'hpnabomby()');
		document.body.appendChild(element);
		var element = document.createElement("br");
		document.body.appendChild(element);
		var element = document.createElement("button");
		var t = document.createTextNode("Wymień miksturę zdrowia na dwa zwoje");
		element.appendChild(t);
		element.setAttribute("onclick", 'hpnazwoje()');
		document.body.appendChild(element);
		var element = document.createElement("br");
		document.body.appendChild(element);
		var element = document.createElement("button");
		var t = document.createTextNode("Wymień 1 zestaw naprawczy na 2 mikstury zdrowia");
		element.appendChild(t);
		element.setAttribute("onclick", 'zestawnahp()');
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
		iwan2 = 0;
		olaf7 = new Audio('zasoby/talk.mp3');
		olaf7.play();

	}
	else if (akcje > 290 && bosszone3 == 1 )
	{
		var element = document.createElement("p");
		var t = document.createTextNode("Pojawia się Boss, DeathMatch-9001!");
		element.appendChild(t);
		document.body.appendChild(element);
		var img = document.createElement("img");
		img.src = "zasoby/dm9001.png";
		element.appendChild(img);
		document.body.appendChild(element);
		wrogowie = wrogowie + 45;
		bosszone3 = 0;
	}
	else if (zone == 4 && bosszone3 == 0 && iwan3 == 1)
	{
		var element = document.createElement("p");
		var t = document.createTextNode("Cześć! Z tej strony powtórnie Iwan. To mój ostatni sklep, więc mam mega oferty.");
		element.appendChild(t);
		document.body.appendChild(element);
		var img = document.createElement("img");
		img.src = "zasoby/shopkeeper.png";
		element.appendChild(img);
		document.body.appendChild(element);
		var element = document.createElement("br");
		document.body.appendChild(element);
		var element = document.createElement("button");
		var t = document.createTextNode("Wymień miksturę zdrowia na dwie bomby");
		element.appendChild(t);
		element.setAttribute("onclick", 'hpnabomby()');
		document.body.appendChild(element);
		var element = document.createElement("br");
		document.body.appendChild(element);
		var element = document.createElement("button");
		var t = document.createTextNode("Wymień trzy zwoje na miksturę zdrowia.");
		element.appendChild(t);
		element.setAttribute("onclick", 'zwojenahp()');
		document.body.appendChild(element);
		var element = document.createElement("br");
		document.body.appendChild(element);
		var element = document.createElement("button");
		var t = document.createTextNode("Wymień trzy bomby na miksturę zdrowia");
		element.appendChild(t);
		element.setAttribute("onclick", 'bombynahp()');
		document.body.appendChild(element);
		var element = document.createElement("br");
		document.body.appendChild(element);
		var element = document.createElement("button");
		var t = document.createTextNode("Wymień miksturę zdrowia na dwa zwoje");
		element.appendChild(t);
		element.setAttribute("onclick", 'hpnazwoje()');
		document.body.appendChild(element);
		var element = document.createElement("br");
		document.body.appendChild(element);
		var element = document.createElement("button");
		var t = document.createTextNode("Wymień 1 zestaw naprawczy na 2 mikstury zdrowia");
		element.appendChild(t);
		element.setAttribute("onclick", 'zestawnahp()');
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
		iwan3 = 0;
		olaf7 = new Audio('zasoby/talk.mp3');
		olaf7.play();

	}
	else if (akcje > 390 && bosszone4 == 1 )
	{
		var element = document.createElement("p");
		var t = document.createTextNode("Pojawia się Boss, Władca Krasnoludów!");
		element.appendChild(t);
		document.body.appendChild(element);
		var img = document.createElement("img");
		img.src = "zasoby/king.png";
		element.appendChild(img);
		document.body.appendChild(element);
		wrogowie = wrogowie + 90;
		bosszone4 = 0;
	}
	else if (akcje > 500 && bosszone5 == 1)
	{
		var element = document.createElement("p");
		var t = document.createTextNode("Pojawia się Boss, Yog-Dzewa!");
		element.appendChild(t);
		document.body.appendChild(element);
		var img = document.createElement("img");
		img.src = "zasoby/yog.png";
		element.appendChild(img);
		document.body.appendChild(element);
		wrogowie = wrogowie + 175;
		bosszone5 = 0;
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
      nazwaeq = "Płócienna zbroja (1-3)";
      armorimg = 1;
      zamiennazbroja = Math.floor((Math.random()*2)+1)
      var img = document.createElement("img");
      img.src = "zasoby/cloth.png";
      element.appendChild(img)
    }
    else if (randomeq == 1)
    {
      nazwaeq = "Skórzana zbroja (2-5)";
      armorimg = 2;
      zamiennazbroja = Math.floor((Math.random()*3)+2)
      var img = document.createElement("img");
      img.src = "zasoby/leather.png";
      element.appendChild(img)
    }
    else {
      nazwaeq = "Kolczuga (3-7)";
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
			nazwaeq = "Kolczuga (5-8)";
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
      nazwaeq = "Zbroja z łusek (8-12)";
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

		else if (zone == 3)
		{
	    var randomgenerator = Math.floor(Math.random()*10+1);
			switch (randomgenerator)
			{
	    case 1:
			var randomgenerator = Math.floor(Math.random()*4+1);
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
			else if (randomgenerator ==2) {
			var element = document.createElement("p");
			var t = document.createTextNode("Znalazłeś zestaw naprawczy zbroi, chowasz go do ekwipunku.");
			element.appendChild(t);
			var img = document.createElement("img");
			img.src = "zasoby/zestaw.png";
			element.appendChild(img);
			document.body.appendChild(element);
			zestaw = zestaw + 1;
		}
		else if (randomgenerator == 3) {
		var element = document.createElement("p");
		var t = document.createTextNode("Znalazłeś bombę, chowasz ją do ekwipunku.");
		element.appendChild(t);
		var img = document.createElement("img");
		img.src = "zasoby/zestaw.png";
		element.appendChild(img);
		document.body.appendChild(element);
		bomb = bomb + 1;
	}
	else {
	var element = document.createElement("p");
	var t = document.createTextNode("Znalazłeś dwa zwoje, chowasz je do ekwipunku.");
	element.appendChild(t);
	var img = document.createElement("img");
	img.src = "zasoby/scroll.png";
	element.appendChild(img);
	document.body.appendChild(element);
	scroll = scroll + 2;
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
			var t = document.createTextNode("Zaatakował cię Gnol Brutal!");
			element.appendChild(t);
			var img = document.createElement("img");
			img.src = "zasoby/brutal.png";
			element.appendChild(img);
			document.body.appendChild(element);
			wrogowie = wrogowie + 20;
	        break;
	    case 4:
			var element = document.createElement("p");
			var t = document.createTextNode("Zaatakował cię niedźwiedź, Nie, to perz!");
			element.appendChild(t);
			var img = document.createElement("img");
			img.src = "zasoby/bat.png";
			element.appendChild(img);
			document.body.appendChild(element);
			wrogowie = wrogowie + 26;
	        break;
	    case 5:
			var element = document.createElement("p");
			var t = document.createTextNode("Znalazles trochę prowiantu, pakujesz go do swojej torby.");
			element.appendChild(t);
			var img = document.createElement("img");
			img.src = "zasoby/prowiant.png";
			element.appendChild(img);
			document.body.appendChild(element);
			prowiant = prowiant + 2;
			document.getElementById("prowiant").innerHTML = prowiant;
			hit20 = new Audio('zasoby/item.mp3');
			hit20.play();

	        break;
	    case 6:
			var element = document.createElement("p");
			var t = document.createTextNode("Zaatakował cię Gnol Szaman!");
			element.appendChild(t);
			var img = document.createElement("img");
			img.src = "zasoby/shaman.png";
			element.appendChild(img);
			document.body.appendChild(element);
			wrogowie = wrogowie + 34;
	        break;
	    case 7:
			var element = document.createElement("p");
			var t = document.createTextNode("Znalazles miksturę siły, wypijasz ją natychmiast");
			element.appendChild(t);
			var img = document.createElement("img");
			img.src = "zasoby/sila.png";
			element.appendChild(img);
			document.body.appendChild(element);
			sila = sila + 2;
			hit19 = new Audio('zasoby/quaff.mp3');
			hit19.play();
					break;
			case 8:
			var randomeq = Math.floor(Math.random()*3)
			if (randomeq == 0)
			{
				nazwaeq = "Kolczuga (10-13)";
				armorimg = 3;
	      var img = document.createElement("img");
	      img.src = "zasoby/chainmail.png";
				zamiennazbroja = Math.floor((Math.random()*3)+1)
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
	      nazwaeq = "Zbroja z łusek (12-19)";
				armorimg = 4;
	      var img = document.createElement("img");
	      img.src = "zasoby/scale.png";
				zamiennazbroja = Math.floor((Math.random()*7)+12)
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
			else if (randomeq == 2){
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
			else {
				typpierscienia = 3;
				nazwaeq = "Pierścień mocy";
				var element = document.createElement("p");
				var t = document.createTextNode("Znalazłeś ekwipunek, jest to " + nazwaeq + ". Czy chcesz go założyć?");
				element.appendChild(t);
				var img = document.createElement("img");
				img.src = "zasoby/powerring.png";
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
				zdrowie = zdrowie - 15;
				hit3 = new Audio('zasoby/hit.mp3');
				hit3.play();
			}
			else {
				var element = document.createElement("p");
				var t = document.createTextNode("Wszedłeś w pułapkę osłabiającą!");
				element.appendChild(t);
				document.body.appendChild(element);
				var img = document.createElement("img");
				img.src = "zasoby/dart.png";
				element.appendChild(img);
				document.body.appendChild(element);
				sila = sila - 1;

			}

					break;
			case 10:
			var element = document.createElement("p");
			var t = document.createTextNode("Idziesz przez pusty korytarz.");
			element.appendChild(t);
			document.body.appendChild(element);
					break;

			}}
			else if (zone == 4)
			{
		    var randomgenerator = Math.floor(Math.random()*10+1);
				switch (randomgenerator)
				{
		    case 1:
				var randomgenerator = Math.floor(Math.random()*4+1);
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
				else if (randomgenerator ==2) {
				var element = document.createElement("p");
				var t = document.createTextNode("Znalazłeś zestaw naprawczy zbroi, chowasz go do ekwipunku.");
				element.appendChild(t);
				var img = document.createElement("img");
				img.src = "zasoby/zestaw.png";
				element.appendChild(img);
				document.body.appendChild(element);
				zestaw = zestaw + 1;
			}
			else if (randomgenerator == 3) {
			var element = document.createElement("p");
			var t = document.createTextNode("Znalazłeś bombę, chowasz ją do ekwipunku.");
			element.appendChild(t);
			var img = document.createElement("img");
			img.src = "zasoby/zestaw.png";
			element.appendChild(img);
			document.body.appendChild(element);
			bomb = bomb + 1;
		}
		else {
		var element = document.createElement("p");
		var t = document.createTextNode("Znalazłeś dwa zwoje, chowasz je do ekwipunku.");
		element.appendChild(t);
		var img = document.createElement("img");
		img.src = "zasoby/scroll.png";
		element.appendChild(img);
		document.body.appendChild(element);
		scroll = scroll + 2;
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
				var t = document.createTextNode("Zaatakował cię Krasnoludzki Mnich!");
				element.appendChild(t);
				var img = document.createElement("img");
				img.src = "zasoby/monk.png";
				element.appendChild(img);
				document.body.appendChild(element);
				wrogowie = wrogowie + 50;
		        break;
		    case 4:
				var element = document.createElement("p");
				var t = document.createTextNode("Zaatakował cię Krasnoludzki Czarnoksiężnik!");
				element.appendChild(t);
				var img = document.createElement("img");
				img.src = "zasoby/warlock.png";
				element.appendChild(img);
				document.body.appendChild(element);
				wrogowie = wrogowie + 60;
		        break;
		    case 5:
				var element = document.createElement("p");
				var t = document.createTextNode("Zaatakował cię Żywiołak Ognia!");
				element.appendChild(t);
				var img = document.createElement("img");
				img.src = "zasoby/ember.png";
				element.appendChild(img);
				document.body.appendChild(element);
				wrogowie = wrogowie + 40;

		        break;
		    case 6:
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
		    case 7:
				var element = document.createElement("p");
				var t = document.createTextNode("Znalazles miksturę siły, wypijasz ją natychmiast");
				element.appendChild(t);
				var img = document.createElement("img");
				img.src = "zasoby/sila.png";
				element.appendChild(img);
				document.body.appendChild(element);
				sila = sila + 2;
				hit19 = new Audio('zasoby/quaff.mp3');
				hit19.play();
						break;
				case 8:
				var randomeq = Math.floor(Math.random()*4)
				if (randomeq == 0)
				{
					nazwaeq = "Zbroja z łusek (30-40)";
					armorimg = 4;
		      var img = document.createElement("img");
		      img.src = "zasoby/scale.png";
					zamiennazbroja = Math.floor((Math.random()*10)+30)
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
		      nazwaeq = "Zbroja płytowa (50-70)";
					armorimg = 5;
		      var img = document.createElement("img");
		      img.src = "zasoby/plate.png";
					zamiennazbroja = Math.floor((Math.random()*20)+50)
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
				else if (randomeq == 2){
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
				else if (randomeq == 3) {
					typpierscienia = 3;
					nazwaeq = "Pierścień mocy";
					var element = document.createElement("p");
					var t = document.createTextNode("Znalazłeś ekwipunek, jest to " + nazwaeq + ". Czy chcesz go założyć?");
					element.appendChild(t);
					var img = document.createElement("img");
					img.src = "zasoby/powerring.png";
					element.appendChild(img);
					document.body.appendChild(element);
					var element = document.createElement("button");
					var t = document.createTextNode("Załóż");
					element.appendChild(t);
					element.setAttribute("onclick", 'zalozpierscien()');
					document.body.appendChild(element);
				}
				else {
					typpierscienia = 2;
					nazwaeq = "Pierścień doświadczenia";
					var element = document.createElement("p");
					var t = document.createTextNode("Znalazłeś ekwipunek, jest to " + nazwaeq + ". Czy chcesz go założyć?");
					element.appendChild(t);
					var img = document.createElement("img");
					img.src = "zasoby/expring.png";
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
					var t = document.createTextNode("Wszedłeś w pułapkę dezintegracyjną!");
					element.appendChild(t);
					document.body.appendChild(element);
					var img = document.createElement("img");
					img.src = "zasoby/dart.png";
					element.appendChild(img);
					document.body.appendChild(element);
					zdrowie = zdrowie - 45;
					hit3 = new Audio('zasoby/hit.mp3');
					hit3.play();
				}
				else {
					var element = document.createElement("p");
					var t = document.createTextNode("Wszedłeś w pułapkę przekleństwa!");
					element.appendChild(t);
					document.body.appendChild(element);
					var img = document.createElement("img");
					img.src = "zasoby/dart.png";
					element.appendChild(img);
					document.body.appendChild(element);
					sila = sila - 1;
					zbroja = zbroja - 1;
					maxzdrowie = maxzdrowie - 3;

				}

						break;
				case 10:
				var element = document.createElement("p");
				var t = document.createTextNode("Idziesz przez pusty korytarz.");
				element.appendChild(t);
				document.body.appendChild(element);
						break;

				}}
		else if (zone == 5){
			var randomgenerator = Math.floor(Math.random()*10+1);
			switch (randomgenerator)
			{
			case 1:
			var randomgenerator = Math.floor(Math.random()*4+1);
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
			else if (randomgenerator ==2) {
			var element = document.createElement("p");
			var t = document.createTextNode("Znalazłeś zestaw naprawczy zbroi, chowasz go do ekwipunku.");
			element.appendChild(t);
			var img = document.createElement("img");
			img.src = "zasoby/zestaw.png";
			element.appendChild(img);
			document.body.appendChild(element);
			zestaw = zestaw + 1;
		}
		else if (randomgenerator == 3) {
		var element = document.createElement("p");
		var t = document.createTextNode("Znalazłeś bombę, chowasz ją do ekwipunku.");
		element.appendChild(t);
		var img = document.createElement("img");
		img.src = "zasoby/zestaw.png";
		element.appendChild(img);
		document.body.appendChild(element);
		bomb = bomb + 1;
	}
	else {
	var element = document.createElement("p");
	var t = document.createTextNode("Znalazłeś dwa zwoje, chowasz je do ekwipunku.");
	element.appendChild(t);
	var img = document.createElement("img");
	img.src = "zasoby/scroll.png";
	element.appendChild(img);
	document.body.appendChild(element);
	scroll = scroll + 2;
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
			var t = document.createTextNode("Zaatakował cię Sukubus!");
			element.appendChild(t);
			var img = document.createElement("img");
			img.src = "zasoby/sukubus.png";
			element.appendChild(img);
			document.body.appendChild(element);
			wrogowie = wrogowie + 75;
					break;
			case 4:
			var element = document.createElement("p");
			var t = document.createTextNode("Zaatakował cię Skorpion!");
			element.appendChild(t);
			var img = document.createElement("img");
			img.src = "zasoby/warlock.png";
			element.appendChild(img);
			document.body.appendChild(element);
			wrogowie = wrogowie + 100;
					break;
			case 5:
			var element = document.createElement("p");
			var t = document.createTextNode("Zaatakowało cię Wielkie Oko!");
			element.appendChild(t);
			var img = document.createElement("img");
			img.src = "zasoby/ember.png";
			element.appendChild(img);
			document.body.appendChild(element);
			wrogowie = wrogowie + 125;

					break;
			case 6:
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
			case 7:
			var element = document.createElement("p");
			var t = document.createTextNode("Znalazles miksturę siły, wypijasz ją natychmiast");
			element.appendChild(t);
			var img = document.createElement("img");
			img.src = "zasoby/sila.png";
			element.appendChild(img);
			document.body.appendChild(element);
			sila = sila + 3;
			hit19 = new Audio('zasoby/quaff.mp3');
			hit19.play();
					break;
			case 8:
			var randomeq = Math.floor(Math.random()*5)
			if (randomeq == 0)
			{
				nazwaeq = "Zbroja płytowa (50-80)";
				armorimg = 5;
				var img = document.createElement("img");
				img.src = "zasoby/plate.png";
				zamiennazbroja = Math.floor((Math.random()*30)+50)
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
				nazwaeq = "Zbroja płytowa (80-100)";
				armorimg = 5;
				var img = document.createElement("img");
				img.src = "zasoby/plate.png";
				zamiennazbroja = Math.floor((Math.random()*20)+80)
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
			else if (randomeq == 2){
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
			else if (randomeq == 3) {
				typpierscienia = 3;
				nazwaeq = "Pierścień mocy";
				var element = document.createElement("p");
				var t = document.createTextNode("Znalazłeś ekwipunek, jest to " + nazwaeq + ". Czy chcesz go założyć?");
				element.appendChild(t);
				var img = document.createElement("img");
				img.src = "zasoby/powerring.png";
				element.appendChild(img);
				document.body.appendChild(element);
				var element = document.createElement("button");
				var t = document.createTextNode("Załóż");
				element.appendChild(t);
				element.setAttribute("onclick", 'zalozpierscien()');
				document.body.appendChild(element);
			}
			else if (randomeq == 3) {
				typpierscienia = 2;
				nazwaeq = "Pierścień doświadczenia";
				var element = document.createElement("p");
				var t = document.createTextNode("Znalazłeś ekwipunek, jest to " + nazwaeq + ". Czy chcesz go założyć?");
				element.appendChild(t);
				var img = document.createElement("img");
				img.src = "zasoby/expring.png";
				element.appendChild(img);
				document.body.appendChild(element);
				var element = document.createElement("button");
				var t = document.createTextNode("Załóż");
				element.appendChild(t);
				element.setAttribute("onclick", 'zalozpierscien()');
				document.body.appendChild(element);
			}
			else{
				typpierscienia = 4;
				nazwaeq = "Pierścień Nasycenia Głodu";
				var element = document.createElement("p");
				var t = document.createTextNode("Znalazłeś ekwipunek, jest to " + nazwaeq + ". Czy chcesz go założyć?");
				element.appendChild(t);
				var img = document.createElement("img");
				img.src = "zasoby/satietyring.png";
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
				var t = document.createTextNode("Wszedłeś w pułapkę zniszczenia!");
				element.appendChild(t);
				document.body.appendChild(element);
				var img = document.createElement("img");
				img.src = "zasoby/dart.png";
				element.appendChild(img);
				document.body.appendChild(element);
				zdrowie = zdrowie - 75;
				hit3 = new Audio('zasoby/hit.mp3');
				hit3.play();
			}
			else {
				var element = document.createElement("p");
				var t = document.createTextNode("Wszedłeś w pułapkę zaklęcia!");
				element.appendChild(t);
				document.body.appendChild(element);
				var img = document.createElement("img");
				img.src = "zasoby/dart.png";
				element.appendChild(img);
				document.body.appendChild(element);
				sila = sila - 2;
				zbroja = zbroja - 2;
				maxzdrowie = maxzdrowie - 5;

			}

					break;
			case 10:
			var element = document.createElement("p");
			var t = document.createTextNode("Idziesz przez pusty korytarz.");
			element.appendChild(t);
			document.body.appendChild(element);
					break;

			}
		}

if (glod < Math.ceil(maxglod / 3))
{
	zdrowie = zdrowie + Math.ceil(maxzdrowie / 10);
}
else if (glod < Math.floor(maxglod / 2))
{
	zdrowie = zdrowie + Math.ceil(maxzdrowie / 20);
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
