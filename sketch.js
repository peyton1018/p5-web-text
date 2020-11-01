var canvas;
var h1;

function setup() {
    canvas = createCanvas(200,200);
    canvas.position(400,500);
    h1 = createElement('h1','稍等一下。');
}

function mousePressed(){
    h1.html("现在我要给你展示我最喜欢的数字");
    createP("我最喜欢的数字是" + random(0,10));
    createP(" ...⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄.... ");
}

function draw() {
    stroke(235,122,119);
    line(0,0,1920,1080);
    fill(232,48,21);
    ellipse(600,400,400,400);

}