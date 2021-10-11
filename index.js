// For Image 1
var rndmNo1 = Math.floor(Math.random()*6)+1;
 var rndmImage = "images/dice" + rndmNo1 + ".png";
 var image1 = document.querySelectorAll("img")[0];
 image1.setAttribute("src",rndmImage);

// For Image 2
var rndmNo2= Math.floor(Math.random()*6)+1;
var rndmImage2 = "images/dice"+ rndmNo2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", rndmImage2);

// For diciding of player

if(rndmNo1>rndmNo2){
    document.querySelector("h1").innerHTML= "🚩Player 1 wins!";
}else if (rndmNo2>rndmNo1){
    document.querySelector("h1").innerHTML= "🚩Player 2 wins!";
}else{
    document.querySelector("h1").innerHTML= "📣Draw!";
}