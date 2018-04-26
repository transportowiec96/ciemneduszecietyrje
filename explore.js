
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
		element.style.color = "#ff0000"
		document.body.appendChild(element);
		var img = document.createElement("img");
		img.src = "zasoby/goo.png";
		element.appendChild(img);
		document.body.appendChild(element);
		wrogowie = wrogowie + 15;
		bosszone1 = 0;
		olaf8 = new Audio('zasoby/challenge.mp3');
		olaf8.play();
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
		element.style.color = "#ff0000"
		var img = document.createElement("img");
		img.src = "zasoby/tengu.png";
		element.appendChild(img);
		document.body.appendChild(element);
		wrogowie = wrogowie + 30;
		bosszone2 = 0;
		olaf9 = new Audio('zasoby/challenge.mp3');
		olaf9.play();
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
		element.style.color = "#ff0000"
		var img = document.createElement("img");
		img.src = "zasoby/dm9001.png";
		element.appendChild(img);
		document.body.appendChild(element);
		wrogowie = wrogowie + 45;
		bosszone3 = 0;
		olaf10 = new Audio('zasoby/challenge.mp3');
		olaf10.play();
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
		element.style.color = "#ff0000"
		var img = document.createElement("img");
		img.src = "zasoby/king.png";
		element.appendChild(img);
		document.body.appendChild(element);
		wrogowie = wrogowie + 90;
		bosszone4 = 0;
		olaf11 = new Audio('zasoby/challenge.mp3');
		olaf11.play();
	}
	else if (akcje > 500 && bosszone5 == 1)
	{
		var element = document.createElement("p");
		var t = document.createTextNode("Pojawia się Boss, Yog-Dzewa!");
		element.appendChild(t);
		document.body.appendChild(element);
		var img = document.createElement("img");
		element.style.color = "#ff0000"
		img.src = "zasoby/yog.png";
		element.appendChild(img);
		document.body.appendChild(element);
		wrogowie = wrogowie + 175;
		bosszone5 = 0;
		olaf12 = new Audio('zasoby/challenge.mp3');
		olaf12.play();
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
		element.style.color = "#ff0000"
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
		element.style.color = "#ff0000"
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
		element.style.color = "#ff0000"
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
		muz1 = new Audio('zasoby/armor.mp3');
		muz1.play();
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
		var randomgenerator = Math.floor((Math.random()*10)+1)
		if (randomgenerator == 1)
		{
			var randomgenerator = Math.floor((Math.random()*5)+1)
			switch (randomgenerator)
			{
				case 1:
				var element = document.createElement("p");
				var t = document.createTextNode("Znalazłeś tajną fontannę młodości, która zwiększyła twoje statystyki!");
				element.appendChild(t);
				element.style.color = "#00ff00"
				document.body.appendChild(element);
				sila = sila + 1;
				maxzdrowie = maxzdrowie + 3;
				zdrowie = zdrowie + 5;
				nextlvl = nextlvl - 2;
				maxglod = maxglod + 1;
				muz7 = new Audio('zasoby/secret.mp3');
				muz7.play();
				break;
				case 2:
				var element = document.createElement("p");
				var t = document.createTextNode("Znalazłeś tajną fontannę zdrowia, która zwiększyła twoje zdrowie!");
				element.appendChild(t);
				element.style.color = "#00ff00"
				document.body.appendChild(element);
				maxzdrowie = maxzdrowie + 5;
				zdrowie = zdrowie + 10;
				muz6 = new Audio('zasoby/secret.mp3');
				muz6.play();
				break;
				case 3:
				var element = document.createElement("p");
				var t = document.createTextNode("Znalazłeś tajną fontannę siły, która zwiększyła twoją siłę!");
				element.appendChild(t);
				element.style.color = "#00ff00"
				document.body.appendChild(element);
				sila = sila + 2;
				zbroja = zbroja + 2;
				muz5 = new Audio('zasoby/secret.mp3');
				muz5.play();
				break;
				case 4:
				var element = document.createElement("p");
				var t = document.createTextNode("Znalazłeś tajną fontannę mądrości, która zwiększyła twoją mądrość!");
				element.appendChild(t);
				element.style.color = "#00ff00"
				document.body.appendChild(element);
				nextlvl = nextlvl - 2;
				muz4 = new Audio('zasoby/secret.mp3');
				muz4.play();
				break;
				case 5:
				var element = document.createElement("p");
				var t = document.createTextNode("Znalazłeś tajną fontannę nasycenia, która zwiększyła twoje nasycenie!");
				element.appendChild(t);
				element.style.color = "#00ff00"
				document.body.appendChild(element);
				maxglod = maxglod + 2;
				muz3 = new Audio('zasoby/secret.mp3');
				muz3.play();
				break;
			}
		}
		else {
			var element = document.createElement("p");
			var t = document.createTextNode("Idziesz przez pusty korytarz.");
			element.appendChild(t);
			document.body.appendChild(element);
			muz2 = new Audio('zasoby/step.mp3');
			muz2.play();
		}
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
		element.style.color = "#ff0000"
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
		element.style.color = "#ff0000"
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
		element.style.color = "#ff0000"
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
		muz9 = new Audio('zasoby/armor.mp3');
		muz9.play();

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
			hit3 = new Audio('zasoby/trapray.mp3');
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
		var randomgenerator = Math.floor((Math.random()*10)+1)
		if (randomgenerator == 1)
		{
			var randomgenerator = Math.floor((Math.random()*5)+1)
			switch (randomgenerator)
			{
				case 1:
				var element = document.createElement("p");
				var t = document.createTextNode("Znalazłeś tajną fontannę młodości, która zwiększyła twoje statystyki!");
				element.appendChild(t);
				element.style.color = "#00ff00"
				document.body.appendChild(element);
				sila = sila + 2;
				maxzdrowie = maxzdrowie + 6;
				zdrowie = zdrowie + 10;
				nextlvl = nextlvl - 4;
				maxglod = maxglod + 2;
				muz10 = new Audio('zasoby/secret.mp3');
				muz10.play();
				break;
				case 2:
				var element = document.createElement("p");
				var t = document.createTextNode("Znalazłeś tajną fontannę zdrowia, która zwiększyła twoje zdrowie!");
				element.appendChild(t);
				element.style.color = "#00ff00"
				document.body.appendChild(element);
				maxzdrowie = maxzdrowie + 10;
				zdrowie = zdrowie + 20;
				muz11 = new Audio('zasoby/secret.mp3');
				muz11.play();
				break;
				case 3:
				var element = document.createElement("p");
				var t = document.createTextNode("Znalazłeś tajną fontannę siły, która zwiększyła twoją siłę!");
				element.appendChild(t);
				element.style.color = "#00ff00"
				document.body.appendChild(element);
				sila = sila + 4;
				zbroja = zbroja + 4;
				muz12 = new Audio('zasoby/secret.mp3');
				muz12.play();
				break;
				case 4:
				var element = document.createElement("p");
				var t = document.createTextNode("Znalazłeś tajną fontannę mądrości, która zwiększyła twoją mądrość!");
				element.appendChild(t);
				element.style.color = "#00ff00"
				document.body.appendChild(element);
				nextlvl = nextlvl - 4;
				muz13 = new Audio('zasoby/secret.mp3');
				muz13.play();
				break;
				case 5:
				var element = document.createElement("p");
				var t = document.createTextNode("Znalazłeś tajną fontannę nasycenia, która zwiększyła twoje nasycenie!");
				element.appendChild(t);
				element.style.color = "#00ff00"
				document.body.appendChild(element);
				maxglod = maxglod + 4;
				muz14 = new Audio('zasoby/secret.mp3');
				muz14.play();
				break;
			}
		}
		else {
			var element = document.createElement("p");
			var t = document.createTextNode("Idziesz przez pusty korytarz.");
			element.appendChild(t);
			document.body.appendChild(element);
			muz14 = new Audio('zasoby/step.mp3');
			muz14.play();
		}
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
			element.style.color = "#ff0000"
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
			element.style.color = "#ff0000"
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
			element.style.color = "#ff0000"
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
			muz15 = new Audio('zasoby/armor.mp3');
			muz15.play();

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
				hit3 = new Audio('zasoby/trapray.mp3');
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
				muz16 = new Audio('zasoby/trapray.mp3');
				muz16.play();
			}

					break;
			case 10:
			var randomgenerator = Math.floor((Math.random()*10)+1)
			if (randomgenerator == 1)
			{
				var randomgenerator = Math.floor((Math.random()*5)+1)
				switch (randomgenerator)
				{
					case 1:
					var element = document.createElement("p");
					var t = document.createTextNode("Znalazłeś tajną fontannę młodości, która zwiększyła twoje statystyki!");
					element.appendChild(t);
					element.style.color = "#00ff00"
					document.body.appendChild(element);
					sila = sila + 3;
					maxzdrowie = maxzdrowie + 9;
					zdrowie = zdrowie + 15;
					nextlvl = nextlvl - 6;
					maxglod = maxglod + 3;
					muz17 = new Audio('zasoby/secret.mp3');
					muz17.play();
					break;
					case 2:
					var element = document.createElement("p");
					var t = document.createTextNode("Znalazłeś tajną fontannę zdrowia, która zwiększyła twoje zdrowie!");
					element.appendChild(t);
					element.style.color = "#00ff00"
					document.body.appendChild(element);
					maxzdrowie = maxzdrowie + 15;
					zdrowie = zdrowie + 30;
					muz18 = new Audio('zasoby/secret.mp3');
					muz18.play();
					break;
					case 3:
					var element = document.createElement("p");
					var t = document.createTextNode("Znalazłeś tajną fontannę siły, która zwiększyła twoją siłę!");
					element.appendChild(t);
					element.style.color = "#00ff00"
					document.body.appendChild(element);
					sila = sila + 6;
					zbroja = zbroja + 6;
					muz19 = new Audio('zasoby/secret.mp3');
					muz19.play();
					break;
					case 4:
					var element = document.createElement("p");
					var t = document.createTextNode("Znalazłeś tajną fontannę mądrości, która zwiększyła twoją mądrość!");
					element.appendChild(t);
					element.style.color = "#00ff00"
					document.body.appendChild(element);
					nextlvl = nextlvl - 6;
					muz20 = new Audio('zasoby/secret.mp3');
					muz20.play();
					break;
					case 5:
					var element = document.createElement("p");
					var t = document.createTextNode("Znalazłeś tajną fontannę nasycenia, która zwiększyła twoje nasycenie!");
					element.appendChild(t);
					element.style.color = "#00ff00"
					document.body.appendChild(element);
					maxglod = maxglod + 6;
					muz21 = new Audio('zasoby/secret.mp3');
					muz21.play();
					break;
				}
			}
			else {
				var element = document.createElement("p");
				var t = document.createTextNode("Idziesz przez pusty korytarz.");
				element.appendChild(t);
				document.body.appendChild(element);
				muz22 = new Audio('zasoby/step.mp3');
				muz22.play();
			}
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
				element.style.color = "#ff0000"
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
				element.style.color = "#ff0000"
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
				element.style.color = "#ff0000"
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
				muz23 = new Audio('zasoby/armor.mp3');
				muz23.play();
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
					hit3 = new Audio('zasoby/trapray.mp3');
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
					muz24 = new Audio('zasoby/trapray.mp3');
					muz24.play();
				}

						break;
				case 10:
				var randomgenerator = Math.floor((Math.random()*10)+1)
				if (randomgenerator == 1)
				{
					var randomgenerator = Math.floor((Math.random()*5)+1)
					switch (randomgenerator)
					{
						case 1:
						var element = document.createElement("p");
						var t = document.createTextNode("Znalazłeś tajną fontannę młodości, która zwiększyła twoje statystyki!");
						element.appendChild(t);
						element.style.color = "#00ff00"
						document.body.appendChild(element);
						sila = sila + 4;
						maxzdrowie = maxzdrowie + 12;
						zdrowie = zdrowie + 20;
						nextlvl = nextlvl - 8;
						maxglod = maxglod + 4;
						muz25 = new Audio('zasoby/secret.mp3');
						muz25.play();
						break;
						case 2:
						var element = document.createElement("p");
						var t = document.createTextNode("Znalazłeś tajną fontannę zdrowia, która zwiększyła twoje zdrowie!");
						element.appendChild(t);
						element.style.color = "#00ff00"
						document.body.appendChild(element);
						maxzdrowie = maxzdrowie + 20;
						zdrowie = zdrowie + 40;
						muz26 = new Audio('zasoby/secret.mp3');
						muz26.play();
						break;
						case 3:
						var element = document.createElement("p");
						var t = document.createTextNode("Znalazłeś tajną fontannę siły, która zwiększyła twoją siłę!");
						element.appendChild(t);
						element.style.color = "#00ff00"
						document.body.appendChild(element);
						sila = sila + 8;
						zbroja = zbroja + 8;
						muz27 = new Audio('zasoby/secret.mp3');
						muz27.play();
						break;
						case 4:
						var element = document.createElement("p");
						var t = document.createTextNode("Znalazłeś tajną fontannę mądrości, która zwiększyła twoją mądrość!");
						element.appendChild(t);
						element.style.color = "#00ff00"
						document.body.appendChild(element);
						nextlvl = nextlvl - 8;
						muz28 = new Audio('zasoby/secret.mp3');
						muz28.play();
						break;
						case 5:
						var element = document.createElement("p");
						var t = document.createTextNode("Znalazłeś tajną fontannę nasycenia, która zwiększyła twoje nasycenie!");
						element.appendChild(t);
						element.style.color = "#00ff00"
						document.body.appendChild(element);
						maxglod = maxglod + 8;
						muz29 = new Audio('zasoby/secret.mp3');
						muz29.play();
						break;
					}
				}
				else {
					var element = document.createElement("p");
					var t = document.createTextNode("Idziesz przez pusty korytarz.");
					element.appendChild(t);
					document.body.appendChild(element);
					muz30 = new Audio('zasoby/step.mp3');
					muz30.play();
				}
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
			element.style.color = "#ff0000"
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
			element.style.color = "#ff0000"
			var img = document.createElement("img");
			img.src = "zasoby/scorpio.png";
			element.appendChild(img);
			document.body.appendChild(element);
			wrogowie = wrogowie + 100;
					break;
			case 5:
			var element = document.createElement("p");
			var t = document.createTextNode("Zaatakowało cię Wielkie Oko!");
			element.appendChild(t);
			element.style.color = "#ff0000"
			var img = document.createElement("img");
			img.src = "zasoby/eye.png";
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
			muz31 = new Audio('zasoby/armor.mp3');
			muz31.play();

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
				hit3 = new Audio('zasoby/trapray.mp3');
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
				muz32 = new Audio('zasoby/trapray.mp3');
				muz32.play();

			}

					break;
			case 10:
			var randomgenerator = Math.floor((Math.random()*10)+1)
			if (randomgenerator == 1)
			{
				var randomgenerator = Math.floor((Math.random()*5)+1)
				switch (randomgenerator)
				{
					case 1:
					var element = document.createElement("p");
					var t = document.createTextNode("Znalazłeś tajną fontannę młodości, która zwiększyła twoje statystyki!");
					element.appendChild(t);
					element.style.color = "#00ff00"
					document.body.appendChild(element);
					sila = sila + 5;
					maxzdrowie = maxzdrowie + 15;
					zdrowie = zdrowie + 25;
					nextlvl = nextlvl - 10;
					maxglod = maxglod + 5;
					muz33 = new Audio('zasoby/secret.mp3');
					muz33.play();
					break;
					case 2:
					var element = document.createElement("p");
					var t = document.createTextNode("Znalazłeś tajną fontannę zdrowia, która zwiększyła twoje zdrowie!");
					element.appendChild(t);
					element.style.color = "#00ff00"
					document.body.appendChild(element);
					maxzdrowie = maxzdrowie + 25;
					zdrowie = zdrowie + 50;
					muz34 = new Audio('zasoby/secret.mp3');
					muz34.play();
					break;
					case 3:
					var element = document.createElement("p");
					var t = document.createTextNode("Znalazłeś tajną fontannę siły, która zwiększyła twoją siłę!");
					element.appendChild(t);
					element.style.color = "#00ff00"
					document.body.appendChild(element);
					sila = sila + 10;
					zbroja = zbroja + 10;
					muz35 = new Audio('zasoby/secret.mp3');
					muz35.play();
					break;
					case 4:
					var element = document.createElement("p");
					var t = document.createTextNode("Znalazłeś tajną fontannę mądrości, która zwiększyła twoją mądrość!");
					element.appendChild(t);
					element.style.color = "#00ff00"
					document.body.appendChild(element);
					nextlvl = nextlvl - 10;
					muz36 = new Audio('zasoby/secret.mp3');
					muz36.play();
					break;
					case 5:
					var element = document.createElement("p");
					var t = document.createTextNode("Znalazłeś tajną fontannę nasycenia, która zwiększyła twoje nasycenie!");
					element.appendChild(t);
					element.style.color = "#00ff00"
					document.body.appendChild(element);
					maxglod = maxglod + 10;
					muz37 = new Audio('zasoby/secret.mp3');
					muz37.play();
					break;
				}
			}
			else {
				var element = document.createElement("p");
				var t = document.createTextNode("Idziesz przez pusty korytarz.");
				element.appendChild(t);
				document.body.appendChild(element);
				muz38 = new Audio('zasoby/step.mp3');
				muz38.play();
			}
					break;

			}
		}

if (glod < Math.ceil(maxglod / 3))
{
	zdrowie = zdrowie + Math.floor(maxzdrowie / 10)+1;
}
else if (glod < Math.floor(maxglod / (1 + (1/2)))+1)
{
	zdrowie = zdrowie + Math.floor(maxzdrowie / 20)+1;
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
