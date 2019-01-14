var x = 35;
    y = 375,
    max_y = 390;
    max_x = 390;
    //https://keycode.info/
var gracz = document.getElementById('gracz');
var ognik = document.getElementById('flammenwerfer');
document.addEventListener('keydown',press)
function press(e){
    
  if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){
    x = x + 10;
  }
  if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */){
    x = x - 10;
  }
  if (e.keyCode === 90 /* z */ && unlocked == 1){
      
    document.getElementById('flammenwerfer').style.display = 'block';
    flamenwerfen = 1;
  }
  if (x > max_x-5)
  {
      x = max_x-5;
  }
  else if (x < max_x-375)
  {
      x = max_x-375;
  }
  gracz.style.left = x + 'px';
  gracz.style.top = y + 'px';
  ognik.style.left = x-5 + 'px';
  ognik.style.top = y-50 + 'px';
  var test = gracz;
  if (flamenwerfen == 1 && unlocked == 1)
  {
  for(abc2 = 0;abc2 < enemy;abc2++)
  {
      var prepared = 'e' + abc2;
      var test2 = document.getElementById(prepared);
      if (test != undefined && test2 != undefined)
      {
      if (parseInt(test.style.top) < parseInt(test2.style.top)+75 && parseInt(test.style.top) > parseInt(test2.style.top)-75 && parseInt(test.style.left) < parseInt(test2.style.left)+45 && parseInt(test.style.left) > parseInt(test2.style.left)-45) 
      {
          kills +=1;
          remains -= 1;
          document.getElementById('kille').innerHTML = 'Ilość zabójstw: '+ kills;
          document.getElementById('brakuje').innerHTML = 'Brakuje: '+ remains;
          corpseify(test2)
      }
      }
  }
  }
}
document.addEventListener('keyup',press2)
function press2(e){
    if (e.keyCode === 32 /*space*/){
        appendpocisk(x,y,1)
    }
    if (e.keyCode === 32 /*z*/){
        document.getElementById('flammenwerfer').style.display = 'none';
        flamenwerfen = 0;
    }
}