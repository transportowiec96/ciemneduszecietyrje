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
var secretweapon_health = 50;
var bossmusicplaying = 0;
var motor_movement = window.setInterval(function(){move_motor()}, 300);
clearInterval(motor_movement);
motor_shooting = window.setInterval(function(){shoot_motor()}, 300);
clearInterval(motor_shooting);
var game1,game2,game3,game4,game5,game6;



var telo = Math.floor(Math.random()*2+1);
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
    test.style.top = parseInt(test.style.top) - 12 + 'px';
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
        test.style.top = parseInt(test.style.top) + 12 + 'px';
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
                }
            }
        }
    }
}


function appendenemy()
{
    var oponent = Math.floor(Math.random()*1)+1;
    var test = document.createElement('img');
    switch (oponent)
    {
        case 1:
        test.src="oponent.png";
        test.style.position = 'fixed';
        test.style.width = 15 + 'px';
        test.style.heigth = 15 + 'px';
        test.id = 'e' + enemy;
        enemy +=1;
        test.style.top = (30) + 'px';
        test.style.left = (Math.floor(Math.random()*380)+10) + 'px';
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
    //sw_movement = window.setInterval(function(){move_sw()}, 50);
    //sw_shooting = window.setInterval(function(){shoot_swr()}, 400);
    muza1.pause();
    muza2.pause();
    var audio = new Audio('boss.wav');
    audio.play();
    bossmusicplaying = 1;
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
        muza1.play();
        playing = 1;
        break;
    }
    }
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
}
