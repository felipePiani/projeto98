var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox");

function start() {
    Textbox.innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {

    console.log(event);

    var Content = event.results[0][0].transcript;

    Textbox.innerHTML = Content;
    console.log(Content);
    {
        console.log("tirando selfie --- ");
        speak();
    }
}


function speak() {
    var synth = window.speechSynthesis;

    Webcam.attach(camera);

    setTimeout(function () {
        speak_data = "Tirando sua selfie em 5 segundos";
        var img_id = "i1"
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_selfie(img_id);
        save();
    }, 5000);
    setTimeout(function () {
        var img_id = "i2"
        speak_data = "Tirando sua selfie em 10 segundos";

        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_selfie(img_id);
        save();
    }, 10000);
    setTimeout(function () {
        var img_id = "i3"
        speak_data = "Tirando sua selfie em 15 segundos";

        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_selfie(img_id);
        save();
    }, 15000);
}


camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function take_selfie(img_id) {
    console.log(img_id)
    if (img_id = "i1") {
        Webcam.snap(function (data_uri) {
            document.getElementById("result1").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>';
        });
    }
    if (img_id = "i2") {
        Webcam.snap(function (data_uri) {
            document.getElementById("result2").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>';
        });
    }
    if (img_id = "i3") {
        Webcam.snap(function (data_uri) {
            document.getElementById("result3").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>';
        });
    }

}


function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}