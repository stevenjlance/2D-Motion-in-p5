// Create variables below this line
var x = 50
var y = 50
var speed = 1
var x2 = 50
var y2 = 50
var speed2 = 3
var x3 = 50
var y3 = 50
var speed3 = 5
var x4 = 50
var y4 = 50
var speed4 = 5

function setup() {
  createCanvas(600, 600);
  
}

function draw() {
	background(200);
	// Code motion below this line
	// challenge 1
	x = x + speed
	fill("red")
	ellipse(x, 50, 50, 50)
	x2 = x2 + speed2
	fill("blue")
	ellipse(x2, 100, 50, 50)
	x3 = x3 + speed3
	fill("aqua")
	ellipse(x3, 150, 50, 50)
	// challenge 2
	// Same as above but make your speed a negative value

	// challenge 3
	if(x > width){
		x = 0
	}

	// challenge4
	y4 = y4 + speed4
	ellipse(50, y4, 50, 50)
	// challenge5
	if(y4 > height){
		speed4 *= -1
	}
	if(y4 < 0){
		speed4 *= -1
	}

	// challenge6
	// Same as above but increment both x and y

	
}