var animals = [];
var canvas = document.getElementsByClassName("canvas")[0];
var context = canvas.getContext("2d");

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min))
}

function Animal(){
    this.x = getRandomInt(0, canvas.width);
    this.y = getRandomInt(0, canvas.height);
    this.dx = getRandomInt(0, 5);
    this.dy = getRandomInt(0, 5);
    
}

Animal.prototype.move = function(){
    this.x += this.dx;
    this.y += this.dy;
    if((this.x + this.dx) > canvas.width - 10|| this.x < 0){
        this.dx = - this.dx;
    }

    if((this.y + this.dy) > canvas.height || this.y < 15){
        this.dy = - this.dy;
    }
}

Animal.prototype.draw = function(){
    context.font = "20px Arial";
    context.fillStyle = this.color;
    context.fillText(this.body, this.x, this.y);
}

function Tiger() {
    Animal.call(this);
}
Tiger.prototype = Object.create(Animal.prototype)
Tiger.prototype.constructor = Tiger;
Tiger.prototype.body = 'T';
Tiger.prototype.color = 'orange';

function Elephant() {
    Animal.call(this);
}
Elephant.prototype = Object.create(Animal.prototype)
Elephant.prototype.constructor = Elephant;
Elephant.prototype.body = 'E';
Elephant.prototype.color = 'gray';

function Monkey() {
    Animal.call(this);
}
Monkey.prototype = Object.create(Animal.prototype)
Monkey.prototype.constructor = Monkey;
Monkey.prototype.body = 'M';
Monkey.prototype.color = 'yellow';

animals = [new  Tiger(), new  Tiger(), new Elephant(),new Elephant(),new Monkey(),new Monkey(),new  Tiger(), new  Tiger(), new Elephant(),new Elephant(),new Monkey(),new Monkey()]


setInterval(function(){
    context.clearRect(0,0, 500,500);
   for(var i = 0; i < animals.length; i++ ){
       animals[i].draw();
       animals[i].move();
   }
}, 40);
