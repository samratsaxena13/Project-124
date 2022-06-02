Webcam.set({
    width: 350,
    height: 350,
    ima_format: 'png',
    png_quality: 90
});

var displayCamera = document.getElementById("cameraCanvas ");
Webcam.attach( '#cameraCanvas' );

function setup() {
    canvas = createCanvas(349, 349);
    canvas.position(700, 150);
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Model Loaded!");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}