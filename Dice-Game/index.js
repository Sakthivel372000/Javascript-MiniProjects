// gives a random number between 1 and 6
var randomNumber1=Math.floor(Math.random()*6)+1;

// dice1.png to dice6.png 
var randomDiceImage="dice"+randomNumber1+".png";

// here in this variable we get images/dice1.png - images/dice6.png
var randomImageSource="images/"+randomDiceImage;

//to indicate first dice image
var image1=document.querySelectorAll("img")[0];

//to set image accoring to the randomnumber1
image1.setAttribute("src",randomImageSource);

// similary for dice image 1 we get randomnumber for dice image 2
var randomNumber2=Math.floor(Math.random()*6)+1;

// here in this variable we get images/dice1.png - images/dice6.png
var randomImageSource2="images/dice"+randomNumber2+".png";

//to set image accoring to the randomnumber2
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

/*
   now if we refresh the page for every
   refresh the image of the two dices 
   changes randomly
*/


//  to change the title of the page according to the winner of the game

// if the player 1 wins we change and display title
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player1 wins!";
}

// for player 2 
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player2 wins!";
}

//if neither of them win then the condition is draw
else{
    document.querySelector("h1").innerHTML="Draw!";
}