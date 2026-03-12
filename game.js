
var rn1=Math.floor(Math.random()*6)+ 1;
var rns="dice"+rn1+".png";
var r1=document.querySelectorAll("img")[0];
r1.setAttribute("src",rns);

var rn2=Math.floor(Math.random()*6)+1;
var rns2="dice"+rn2+".png";
var r2=document.querySelectorAll("img")[1];
r2.setAttribute("src",rns2);  
if(rn1>rn2){
    document.querySelector("h1").textContent="player 1 wins";
}
else if(rn2>rn1){
 document.querySelector("h1").textContent="player 2 wins";
}
else{
     document.querySelector("h1").innerText="drawn";
}




