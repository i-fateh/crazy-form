// by Fateh 👨🏻‍⚖️
// @creazerty 🐦
// www.creazerty.com
// 2022

let mySubmit = document.getElementById('mySubmit')
let myPass = document.getElementById('myPass')
let myScore = document.getElementById('smiley')
let myUp = 0;
let state=true;

const listen = () => {
    
    state == true ? myScore.innerHTML ="🤣" : myScore.innerHTML = '🤪'
    state == true ? mySubmit.style.transform = "translateX(300px)" : mySubmit.style.transform = "translateX(-260px)";
    state =!state
    

    if(myPass.value.length === 0){
        mySubmit.style.backgroundColor = "black";
        mySubmit.textContent = "I'm  👀  you !"
        myScore.innerHTML ="😴"
        mySubmit.style.transform = "scale(.8)"

        mySubmit.addEventListener("mouseover", function( event ) {
            event.target.style.transform = "translateX(0px)";
            event.target.style.width = "280px";
        });
    } else if(myPass.value.length < 5 && myPass.value.length != 0){
        mySubmit.textContent = "Are you serious ?"
        mySubmit.style.backgroundColor = "black"
        mySubmit.style.transform = "translateX(260px)";
        mySubmit.style.width = "220px";
        mySubmit.style.transitionTimingFunction = "cubic-bezier(.22,.68,0,1.71)"
        mySubmit.style.transform = "scale(.9)"

        if(state == true){
            mySubmit.textContent = "Catch Me If You Can!"
            mySubmit.style.transform = "translateX(260px)";
            mySubmit.addEventListener("mouseover", function( event ) {
            event.target.style.transform = "translateX(260px)";
            event.target.style.width = "220px";
            })
        } else {
            mySubmit.addEventListener("mouseover", function( event ) {
            event.target.style.transform = "translateX(-260px)";
            event.target.style.width = "220px";
            })
        }
    } else if(myPass.value.length >= 5 && myPass.value.length <=8){
        mySubmit.style.backgroundColor = "#1e90ff";
        mySubmit.textContent = 'Need more baby!'
        mySubmit.style.transform = "translateX(210px)";
        mySubmit.style.transform = "scale(.8)"
        if(state== true){
            mySubmit.addEventListener("mouseover", function( event ) {
            event.target.style.transform = "translateX(210px)";
            event.target.style.width = "250px";
            })
        } else {
            mySubmit.addEventListener("mouseover", function( event ) {
            event.target.style.transform = "translateX(-210px)";
            event.target.style.width = "250px";

            })
        } 
    } else if(myPass.value.length > 8){
        mySubmit.style.backgroundColor = "#2ed573";
        mySubmit.textContent = 'Now you can touch me ❤️'
        myScore.innerHTML ="😎"
        mySubmit.addEventListener("mouseover", function( event ) {
            event.target.style.transform = "translateX(0px)";
            event.target.style.transitionTimingFunction = "cubic-bezier(.22,.68,0,1.71)"
            event.target.style.width = "280px";
          });
    }


    return state   
}

document.onkeyup = function (e) {
    e = e || window.event;
    if(e.key == 'Backspace'){
        listen()
    }
};