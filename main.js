img="";
status = "";

function preload(){
    img = loadImage('dog_cat.jpg')
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("Red");
    text("Dog", 45, 75)
    noFill();
    stroke("Blue")
    rect(30, 60, 450, 350)
    fill("Blue");
    text("Cat", 300, 75,)
    noFill();
    stroke("Red")
    rect(285, 60, 300, 350)
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.log(error, results);
    }
    else{
        console.log(results);
    }
}
