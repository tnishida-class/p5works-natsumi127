// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(300, 200);
  background(0,0,180);
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = 150 + cos(theta) * 50;
    let y = 100 + sin(theta) * 50;
    star(x, y, 6.5);
  }
}

function star(a,b,r){
  stroke(255,215,0);
  fill(255,215,0);
  beginShape();    // 点つなぎを始める
  for(let i = 0; i < 5; i++){
    const alfa = TWO_PI * i * 2 / 5 - HALF_PI;
    const cx = a + cos(alfa) * r;
    const cy = b + sin(alfa) * r;
    vertex(cx, cy);  // 次につなぐ点を１つ増やす
  }
  endShape(CLOSE); // 点つなぎを終わる
}
