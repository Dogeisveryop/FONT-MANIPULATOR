
right_wrist_x = 0 ;
left_wrist_x = 0 ;
lose_yourself = 0 ; 
function setup() {
    video = createCapture(VIDEO);
    video.size( 650 , 720 );
    canvas = createCanvas(550 , 480 );
    canvas.position(870 , 220);
    ipose = ml5.poseNet(video , modelloaded );
    ipose.on("pose",gotposes );
   }
   
   function modelloaded() {
    console.log("Model is loaded ");
   }

function draw() {
    background('white');
    fill('black');
    text('Aditya',50,350);
    textSize(lose_yourself);
    document.getElementById("pxspan").innerHTML= "The width and height of Text will be " + lose_yourself + " px" ; 
}   

function gotposes(results) {
    if (results.length > 0 ){
       left_wrist_x = results[0].pose.leftWrist.x ;
       right_wrist_x = results[0].pose.rightWrist.x ; 
       lose_yourself = floor(left_wrist_x-right_wrist_x) ;
    }
}