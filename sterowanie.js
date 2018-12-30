var x = 35;
    y = 375,
    max_y = 390;
    max_x = 390;
    //https://keycode.info/
var gracz = document.getElementById('gracz')
document.addEventListener('keydown',press)
function press(e){
    
  if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){
    x = x + 10;
  }
  if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */){
    x = x - 10;
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

}
document.addEventListener('keypress',press2)
function press2(e){
    if (e.keyCode === 32 /*space*/){
        appendpocisk(x,y,1)
    }
}