var randomNumber1 = Math.floor( Math.random()*6)+1;
var randomDiceImage = "dice" +randomNumber1+ ".png" // dice1.png
var randomSourceImage = 'images/'+randomDiceImage;

var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomSourceImage);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomSourceImage2 ="images/dice" +randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomSourceImage2);

//player 1 wins
if (randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="player 2  wins🚩";
}
else
{
    document.querySelector("h1").innerHTML="Draw! cool"
}