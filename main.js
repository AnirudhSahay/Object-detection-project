img=""
status1=""
function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";   
}
function preload(){
    img=loadImage("dog_cat.jpg");
}
function modelLoaded(){
console.log("Model has been loaded");
status1=true;
objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
if (error){
    console.log(error);
}
else{
console.log(results)}
}
function draw(){
    image(img, 0, 0, 640, 420);
}