//query selector // getelementbyid. document has its own key value pairs. a key value pair is like name: daniel. an object contains the key 
//value pairs within the curly brackets. Script tag at the bottom of the body tag always to connect to the JS document.

//I need one image displaying the die.
//We need a player score.
//Score needs to update whenever the dice is rolled.
//I need to be able to replace the images in a random pattern.
//if the player rolls a 1 it is game over.
//when the player gets the score of 20 they win.
//we need a button to reset the game.


let player = document.getElementById('player');
let score = document.getElementById('score');
let dice = document.getElementById('dice');
let btn = document.getElementById('btn');
let reset = document.getElementById('reset');

// console.log(player);

let randomNumber = 0;
let sco = 0;
console.log(dice);

let dice1
let finalScore = (randomNumber.final);

btn.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);
    dice.src = (`./img/dice${randomNumber}.png`)
    sco.textContent = 0
    dice.style.visibility = "visible";
    //reset score to zero when the 1 shows 
    if (randomNumber !== 1) {
        sco += randomNumber
        score.textContent = sco
               } else {
        score.textContent = 0  
        alert(`You have lost with a final score of ${sco}. Please click the reset button to reset the game.`);     
        sco = 0      
             btn.style.visibility = "hidden";
    }

    if (sco >= 20) {
        score.textContent = (`You have won with a final score of ${sco}`)
        btn.style.visibility = "hidden";
    }
    }
)

reset.addEventListener("click", () => {
    sco = 0;
    score.textContent = 0;
    dice.style.visibility = "hidden";
    btn.style.visibility = "visible";             
    }
)


// if (randomNumber == 1);
// document.write(`You lost with a final score of ${finalScore}, please try again.`)
// change text content for when you have won