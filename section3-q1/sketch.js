// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(210, 0, 210, 100);
  balloon("I love keyakizaka46");
}

function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  noStroke();
  fill(90,220,0,200);
  rect(180 - w/2, 180 - h/2, w + p * 20, h + p * 20);
  triangle(220,180+h/2+p*20,180,180+h/2+p*20,200,205+h/2+p*20);
  fill(255);
  text(t, 200 - w/2, 205);
}
