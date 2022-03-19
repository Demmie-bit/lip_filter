function preload(){
    lip_img = loadImage('https://i.postimg.cc/sg2p0k0S/PNGPIX-COM-Lips-PNG-Transparent-Image-1-500x313.png');
}

function setup(){
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is here UwU.");
}
function gotPoses(results){
    if (results.length > 0) {
       console.log(results);
       lipX = results[0].pose.nose.x - 25;
       lipY = results[0].pose.nose.y + 15;
    }
};

function draw(){
    image(video, 0, 0, 400, 300);
    image(lip_img, lipX, lipY, 50, 20);
    
    
}

function take_snapshot(){
    save('Picture.png');
}
lipX = 0;
lipY = 0;
