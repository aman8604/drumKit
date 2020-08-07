var buttons=document.querySelectorAll(".drum");
for(i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        animateButton(this.textContent);
        playAudio(this.textContent);
    });
}

document.addEventListener("keydown",function(event){
    animateButton(event.key)
    playAudio(event.key);
});

//Playing Audio

function playAudio(key){
    switch (key) {
        case "w":
            var tom1Audio=new Audio("sounds/tom-1.mp3");
            tom1Audio.play();
            break;

        case "a":
            var tom2Audio=new Audio("sounds/tom-2.mp3");
            tom2Audio.play();
            break;

        case "s":
            var tom3Audio=new Audio("sounds/tom-3.mp3");
            tom3Audio.play();
            break;
            
        case "d":
            var tom4Audio=new Audio("sounds/tom-4.mp3");
            tom4Audio.play();
            break;

        case "j":
            var crashAudio=new Audio("sounds/crash.mp3");
            crashAudio.play();
            break;

        case "k":
            var kickBassAudio=new Audio("sounds/kick-bass.mp3");
            kickBassAudio.play();
            break;

        case "l":
            var snareAudio=new Audio("sounds/snare.mp3");
            snareAudio.play();
            break;

        default:
            console.log(key);
            break;
    }
}

//Animation for click Button

function animateButton(pressedKey){
    console.log(pressedKey)
    var keyToHighlight=document.querySelector("."+pressedKey);
    console.log(keyToHighlight)
    keyToHighlight.classList.add("pressed")

    setTimeout(function(){
        keyToHighlight.classList.remove("pressed");
    },100);
}