
function setup() {
  createCanvas(1080, 1080);

frameRate(115);
}

function draw() {

      for(var x = 30; x < 00; x += 105) {
      for(var y = 30; y < 00; y += 105) {

        noStroke();
        fill(floor(22*random()), 0 ,0);
        ellipse(x, y, 10);
      }
    }

    for(var x = 37.5; x < 1025; x += 50) {
    for(var y = 37.5; y < 1025; y += 50) {

      stroke(255);
      fill(255, 22,33);
    noStroke();

         if (mouseX < random()*400){
fill(249,178,72);

    };


         if (mouseX<450 && mouseX>400) {
fill(255,68,128);

    };
      ellipse(x, y, 30);
    }
  }










}
