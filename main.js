//https://teachablemachine.withgoogle.com/models/y_Jl9AL5a/

startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundclassifier('https://teachablemachine.withgoogle.com/models/y_Jl9AL5a/model.json', modelReady);

}

modelReady(){
    classifier.classify(gotResults);

}

function gotResults(error, results) {
    console.log('Got Result')
}