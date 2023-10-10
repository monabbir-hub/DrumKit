//Detecting Button Press

var numDrumB = document.querySelectorAll(".drum").length;

for ( var i=0; i<numDrumB; i++){
document.querySelectorAll("button")[i].addEventListener("click", handleClick);


function handleClick() {
    
    var buttonImg = this.innerHTML;

    makeSound(buttonImg);

    buttonFlash(buttonImg);
            
    }
   
}

//Detecting Keyboard Press
addEventListener("keypress", function(event){
    makeSound(event.key);

    buttonFlash(event.key);
});


//Sound function
function makeSound(key){

    switch (key) {
        case "w":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();            
            break;
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();            
            break;

        case "s":
            var tom2 = new Audio("sounds/tom-1.mp3");
            tom2.play();            
            break;
        case "d":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();            
            break;
        case "j":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();            
            break; 
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();            
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();            
            break;    
    
        default:
            
    }

}


function buttonFlash(currentKey) {

    var activeBtn = document.querySelector("." + currentKey);

    activeBtn.classList.add("pressed"); 
    
    setTimeout(function () {
        activeBtn.classList.remove("pressed");
    }, 100);

}