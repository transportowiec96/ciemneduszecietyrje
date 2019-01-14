var pocisknumer = 0;
var brokenpocisknumer = 0;
var enemypocisknumer = 0;
var brokenenemypocisknumer = 0;
var enemy = 0;
var brokenenemy = 0;
var kills = 0;
var killed = false;
var remains = 1200000000;
var motor = 0;
var motor_health = 4;
var way = 'left';
var secretway = 'left';
var secretweapon = 0;
var secretweapon_health = 15;
var new_sw_health = 15;
var secretweaponspawned = 0;
var bossmusicplaying = 0;
var flamenwerfen = 0;
var unlocked = parseInt(document.cookie);

var motor_movement = window.setInterval(function(){move_motor()}, 300);
clearInterval(motor_movement);
motor_shooting = window.setInterval(function(){shoot_motor()}, 300);
clearInterval(motor_shooting);
var sw_movement = window.setInterval(function(){move_sw()}, 50);
clearInterval(sw_movement);
var sw_shooting = window.setInterval(function(){shoot_swr()}, 400);
clearInterval(sw_shooting);
var game1,game2,game3,game4,game5,game6,game7,game8,endcheck;
audio = new Audio('boss.wav'); 
audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

document.getElementById('flammenwerfer').style.display = 'none';
var telo = Math.floor(Math.random()*8+1);
document.getElementById('obszar_gry').style.backgroundImage = 'url(ground/' + telo + '.png)';

function appendpocisk(x,y,szybkosc){
    var test = document.createElement('span');
    test.innerHTML = '●';
    test.style.position = 'fixed';
    test.id = pocisknumer;
    test.szybkosc = szybkosc;
    pocisknumer +=1;
    test.style.top = (y-30) + 'px';
    test.style.left = (x) + 'px';
    document.body.appendChild(test);
}

function appendenemypocisk(x,y){
    var test = document.createElement('span');
    test.innerHTML = '●';
    test.style.position = 'fixed';
    test.style.color = 'red';
    test.id = 'a'+enemypocisknumer;
    enemypocisknumer +=1;
    test.style.top = (y+30) + 'px';
    test.style.left = (x) + 'px';
    document.body.appendChild(test);
}

function move()
{
    for(abc = 0;abc < pocisknumer;abc++)
    {
    var test = document.getElementById(abc);
    if (test != undefined)
    {
    test.style.top = parseInt(test.style.top) - 10 + 'px';
    if(parseInt(test.style.top) < 20)
        {
            test.parentNode.removeChild(test);
        }
    var moto = document.getElementById('m' + (motor-1));
    if (moto !=undefined)
    {
        if (parseInt(test.style.top) < parseInt(moto.style.top)+20 && parseInt(test.style.top) > parseInt(moto.style.top)-20 && parseInt(test.style.left) < parseInt(moto.style.left)+35 && parseInt(test.style.left) > parseInt(moto.style.left)-35) 
        {
            if (motor_health < 2)
            {
                destroy(moto);
                clearInterval(motor_movement);
                clearInterval(motor_shooting);
                motor_health = 4;
                kills +=7;
                remains -= 7;
                destroy(test);
                document.getElementById('kille').innerHTML = 'Ilość zabójstw: '+ kills;
                document.getElementById('brakuje').innerHTML = 'Brakuje: '+ remains;
            }
            else
            {
                motor_health -=1;
                destroy(test);
            }
        }
    }
    var swe = document.getElementById('sw' + (secretweapon-1));
    if (swe != undefined && (parseInt(test.style.top) < parseInt(swe.style.top)+40 && parseInt(test.style.top) > parseInt(swe.style.top)-40 && parseInt(test.style.left) < parseInt(swe.style.left)+40 && parseInt(test.style.left) > parseInt(swe.style.left)-15))
    {
            if(secretweapon_health < 2)
            {
                destroy(swe);
                clearInterval(sw_movement);
                clearInterval(sw_shooting);
                kills += new_sw_health*(secretweapon+1);
                remains -= new_sw_health*(secretweapon+1);
                destroy(test);
                document.getElementById('kille').innerHTML = 'Ilość zabójstw: '+ kills;
                document.getElementById('brakuje').innerHTML = 'Brakuje: '+ remains;
                bossmusicplaying = 0;
                secretweaponspawned = 0;
                new_sw_health += 5;
                secretweapon_health = new_sw_health;
                audio.pause();
                zmiana();
                zmiana();
                zmiana();
                zmiana();
                zmiana();
            }
            else
            {
                secretweapon_health -=1;
                destroy(test);
            }
    }
    test = document.getElementById(abc);
    for(abc2 = 0;abc2 < enemy;abc2++)
        {
            var prepared = 'e' + abc2;
            var test2 = document.getElementById(prepared);
            if (test != undefined && test2 != undefined)
            {
            if (parseInt(test.style.top) < parseInt(test2.style.top)+15 && parseInt(test.style.top) > parseInt(test2.style.top)-15 && parseInt(test.style.left) < parseInt(test2.style.left)+15 && parseInt(test.style.left) > parseInt(test2.style.left)-15) 
            {
                kills +=1;
                remains -= 1;
				destroy(test);
                document.getElementById('kille').innerHTML = 'Ilość zabójstw: '+ kills;
                document.getElementById('brakuje').innerHTML = 'Brakuje: '+ remains;
				corpseify(test2)
            }
            }
        }
    }
    }



}
function destroy(arg)
{
	document.body.removeChild(arg);
}
function corpseify(test)
{
    test.src = 'corpse.jpg';
    test.className = 'corpse';
    test.id = 'corpse';
}
function destroy_corpses()
{
    var test = document.getElementsByClassName('corpse');
    for(abc = 0; abc < test.length;abc++)
    {
        destroy(test[abc]);
    }
}

function moveenemypocisk()
{
    for(abc = 0;abc < enemypocisknumer;abc++)
    {
    var prepared = 'a' + abc;
    var test = document.getElementById(prepared);
        if (test != undefined)
        {
        test.style.top = parseInt(test.style.top) + 10 + 'px';
        if(parseInt(test.style.top) > 400)
            {
                test.parentNode.removeChild(test);
            }
        else 
            {
            var test2 = document.getElementById('gracz')
                if(parseInt(test.style.top) < parseInt(test2.style.top)+12 && parseInt(test.style.top) > parseInt(test2.style.top)-12 && parseInt(test.style.left) < parseInt(test2.style.left)+10 && parseInt(test.style.left) > parseInt(test2.style.left)-10)
                {
                    document.getElementById('ded').style.display ='block';
                    clearInterval(game1);
                    clearInterval(game2);
                    clearInterval(game3);
                    clearInterval(game4);
                    clearInterval(game5);
                    clearInterval(game6);
                    clearInterval(game7);
                }
            }
        }
    }
}


function appendenemy()
{
    var oponent = Math.floor(Math.random()*2)+1;
    var test = document.createElement('img');
    test.style.position = 'fixed';
    test.style.width = 15 + 'px';
    test.style.heigth = 15 + 'px';
    test.id = 'e' + enemy;
    enemy +=1;
    test.style.top = (30) + 'px';
    test.style.left = (Math.floor(Math.random()*380)+10) + 'px';
    switch (oponent)
    {
        case 1:
        test.src="oponent.png";
        document.body.appendChild(test);
        break;
        case 2:
        test.src="oponent2.png";
        document.body.appendChild(test);
        break;
    }

    
}
function append_motor()
{
    var oponent = Math.floor(Math.random()*2)+1;
    if (oponent == 1)
    {
    var test = document.createElement('span');
    test.innerHTML = '<img src="motor_r.png" width="50px" heigth="25px" />';
    test.style.position = 'fixed';
    test.id = 'm' + motor;
    motor +=1;
    test.style.top = (150) + 'px';
    test.style.left = (370) + 'px';
    document.body.appendChild(test);
    way = 'left' 
    }
    else
    {
        var test = document.createElement('span');
        test.innerHTML = '<img src="motor_l.png" width="50px" heigth="25px" />';
        test.style.position = 'fixed';
        test.id = 'm' + motor;
        motor +=1;
        test.style.top = (150) + 'px';
        test.style.left = (5) + 'px';
        document.body.appendChild(test); 
        way = 'right';
    }
    motor_movement = window.setInterval(function(){move_motor()}, 50);
    motor_shooting = window.setInterval(function(){shoot_motor()}, 400);
    var audio = new Audio('motor_engine.wav');
    audio.play();
}

function move_motor()
{
    var moto = document.getElementById('m' + (motor-1));
    if (moto != undefined)
    {
    if (way == 'left')
    {
        if (parseInt(moto.style.left) < 5)
        {
         clearInterval(motor_movement);
         clearInterval(motor_shooting);
         destroy(moto);
         return 1;   
        }
        moto.style.left = parseInt(moto.style.left) - 5 + 'px'; 
    }
    else 
    {
        if (parseInt(moto.style.left) > 370)
        {
         clearInterval(motor_movement);
         clearInterval(motor_shooting);
         destroy(moto);
        return 1;
        }
        moto.style.left = parseInt(moto.style.left) + 5 + 'px'; 
    }
    }

}
function shoot_motor()
{
    var moto = document.getElementById('m' + (motor-1));
    if(moto != undefined)
    {
        appendenemypocisk(parseInt(moto.style.left),parseInt(moto.style.top));
    }
    
}

function append_secretweapon()
{
    if (secretweaponspawned != 1)
    {
    var oponent = Math.floor(Math.random()*2)+1;
    var test = document.createElement('span');
    test.innerHTML = '<img src="tajna_bron.png" width="50px" heigth="100px" />';
    test.id = 'sw' + secretweapon;
    secretweapon += 1;
    test.style.position = 'fixed';
    test.style.top = (50) + 'px';
    test.style.left = (200) + 'px';
    if (oponent == 1)
    {
        secretway = 'left' 
    }
    else
    {
        secretway = 'right';
    }
    document.body.appendChild(test); 
    sw_movement = window.setInterval(function(){move_sw()}, 100);
    sw_shooting = window.setInterval(function(){shoot_sw()}, 1500);
    muza1.pause();
    muza2.pause();
    muza3.pause();
    muza4.pause();
    muza5.pause();
    audio.play();
    bossmusicplaying = 1;
    secretweaponspawned = 1;
    }
}
function move_sw()
{
    var swe = document.getElementById('sw' + (secretweapon-1));
    if (swe != undefined)
    {
    if (secretway == 'left')
    {
        if (parseInt(swe.style.left) < 15)
        {
         secretway = 'right';
        }
        swe.style.left = parseInt(swe.style.left) - 5 + 'px'; 
    }
    else 
    {
        if (parseInt(swe.style.left) > 350)
        {
        secretway = 'left';
        }
        swe.style.left = parseInt(swe.style.left) + 5 + 'px'; 
    }
    }

}
function shoot_sw()
{
    var swe = document.getElementById('sw' + (secretweapon-1));
    if(swe != undefined)
    {
        appendenemypocisk(parseInt(swe.style.left)-15,parseInt(swe.style.top)+15);
        appendenemypocisk(parseInt(swe.style.left)+15,parseInt(swe.style.top)+15);
    }
    
}
function enemyahoots()
{
    for(abc = 0;abc < enemy;abc++)
    {
        var prepared = 'e' + abc;
        var test = document.getElementById(prepared);
        if (test != undefined)
        {
        appendenemypocisk(parseInt(test.style.left),parseInt(test.style.top)+25);
        test.style.top = parseInt(test.style.top) + 25 + 'px';
        if(parseInt(test.style.top) > 400)
            {
                test.parentNode.removeChild(test);
            }
        }
    }
}
var playing = 1;
muza1 = new Audio('mus1.mp3'); 
muza1.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
muza2 = new Audio('mus2.mp3'); 
muza2.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
muza3 = new Audio('mus3.wav'); 
muza3.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
muza4 = new Audio('mus4.ogg'); 
muza4.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
muza5 = new Audio('mus5.ogg'); 
muza5.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
muza_win = new Audio('win.mp3'); 
muza_win.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
function zmiana()
{
    if (bossmusicplaying != 1)
    {
    switch(playing){
        case 1:
        muza1.pause();
        muza2.play();
        playing = 2;
        break;
        case 2:
        muza2.pause();
        muza3.play();
        playing = 3;
        break;
        case 3:
        muza3.pause();
        muza4.play();
        playing = 4;
        break;
        case 4:
        muza4.pause();
        muza5.play();
        playing = 5;
        break;
        case 5:
        muza5.pause();
        muza1.play();
        playing = 1;
        break;
    }
    }
}
function win_check()
{
    if (unlocked != 1 && kills > 99)
    {
        document.cookie = "unlockedweapons=1;expires=Fri, 3 Aug 2030 20:47:11 UTC;";
        alert("Odblokowałeś nową broń: Flammenwerfer!\nUżyj przycisku 'z' aby jej użyć!");
        unlocked = 1;
    }
    if (remains < 1 && kills > 1199999999)
    {
        clearInterval(game1);
        clearInterval(game2);
        clearInterval(game3);
        clearInterval(game4);
        clearInterval(game5);
        clearInterval(game6);
        clearInterval(game7);
        bossmusicplaying = 1;
        muza1.pause();
        muza2.pause();
        muza3.pause();
        muza4.pause();
        muza5.pause();
        audio.pause();
        muza_win.play();
        alert("Ju łin!!!");
        alert("Ju łin!!!");
        alert("Ju łin!!!");
        alert("Ju łin!!!");
        alert("Ju łin!!!");
    }

}
function update_telo()
{
    if (telo == 8)
    {
        telo = 0;
    }
    telo += 1;
    document.getElementById('obszar_gry').style.backgroundImage = 'url(ground/' + telo + '.png)';
}
function startgry()
{
document.getElementById('widelo').style.display = 'none';
muza1.play();
game1 = window.setInterval(function(){move()}, 100);
game2 = window.setInterval(function(){moveenemypocisk()}, 100);
game3 = window.setInterval(function(){appendenemy()}, 1900);
game6 = window.setInterval(function(){destroy_corpses()}, 1299);
game4 = window.setInterval(function(){enemyahoots()}, 1300);
game5 = window.setInterval(function(){append_motor()}, 13000);
game7 = window.setInterval(function(){append_secretweapon()}, 60000);
game8 = window.setInterval(function(){update_telo()}, 45000);
endcheck = window.setInterval(function(){win_check()}, 1000);
}
