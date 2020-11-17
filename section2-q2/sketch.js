// チェッカー
function setup() {
  createCanvas(240, 240);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
     if(j % 2 == 1 && i % 2 == 0){fill(100,255)}
     else if(j % 2 == 0 && i % 2 == 1){fill(100,255)}
     else {fill(255,255)}
     rect(size*i, size*j, size, size);
     if(i % 2 == 1 && j % 2 == 0 && j < 3 || i % 2 == 0 && j % 2 == 1 && j < 3){
     fill(255,0,0);
     ellipse(size*i + (size/2), size*j + (size/2), size-5);
     }
     else if (i % 2 == 1 && j % 2 == 0 && j >= 5 || i % 2 == 0 && j % 2 == 1 && j >= 5) {fill(0);
     ellipse(size*i + (size/2), size*j + (size/2), size-5);
     }
     else{}
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
}
